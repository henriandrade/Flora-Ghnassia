<script lang="ts">
  const drawingVertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const drawingFragmentShader = `
    uniform sampler2D previousFrame;
    uniform vec2 pointerPosition;
    uniform vec2 lastPosition;
    varying vec2 vUv;

    // FBM noise functions
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 2.0;
      
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(st * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    float distToLine(vec2 p, vec2 a, vec2 b) {
      vec2 pa = p - a;
      vec2 ba = b - a;
      float t = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      return length(pa - ba * t);
    }

    void main() {
      vec4 prevColor = texture2D(previousFrame, vUv);
      float intensity = 0.0;
      
      float dist = distToLine(vUv, lastPosition, pointerPosition);
      float speed = length(pointerPosition - lastPosition);
      
      // Time-based progression factor (0 to 1 over 3 seconds)
      float timeFactor = min(length(pointerPosition) * 0.3, 1.0);
      
      // Increased base thickness for more continuous lines
      float thickness = mix(0.015, 0.025, timeFactor);
      
      float time = length(pointerPosition) * 1.2;
      vec2 fbmCoord = vUv * mix(18.0, 8.0, timeFactor) + time;
      float fbmValue = fbm(fbmCoord);
      
      // Reduced noise influence on thickness for smoother lines
      thickness += fbmValue * mix(0.005, 0.01, timeFactor);
      
      // Reduced edge noise displacement
      float edgeNoise = fbm(vUv * mix(24.0, 32.0, timeFactor) + vec2(time * 1.2));
      dist += edgeNoise * mix(0.002, 0.004, timeFactor);
      
      // Softer smoothstep for smoother transitions
      intensity = smoothstep(thickness, thickness * 0.5, dist);

      // Increased bloom size for better connection between strokes
      float bloomDist = length(vUv - pointerPosition);
      float bloomSize = mix(0.02, 0.03, timeFactor);
      float bloom = smoothstep(bloomSize + fbmValue * mix(0.01, 0.015, timeFactor), 0.001, bloomDist);
      intensity += bloom * mix(0.7, 0.9, timeFactor);

      float colorVar = fbm(vUv * mix(8.0, 12.0, timeFactor) - time * 0.8) * mix(0.25, 0.35, timeFactor);
      
      // Adjusted speed opacity for more continuous lines
      float speedOpacityFactor = mix(1.0, 0.8, clamp(speed * 1.5, 0.0, 1.0));
      
      float stationaryFactor = 1.0 - min(speed * 6.0, 1.0);
      float stationaryDarkening = stationaryFactor * mix(0.3, 0.5, timeFactor);
      
      // Softer radial gradient
      float radialGradient = 1.0 - smoothstep(0.0, thickness * 2.5, dist);
      intensity = intensity * radialGradient;
      
      intensity = clamp(intensity * speedOpacityFactor, 0.0, 1.0);
      
      vec4 brushColor = vec4(
        0.0,
        0.0,
        0.0,
        intensity * mix(0.4, 0.5, timeFactor) * speedOpacityFactor
      );
      
      // Enhanced color blending for smoother transitions
      vec3 finalColor = brushColor.a > 0.0 ? 
        mix(prevColor.rgb * 0.98, brushColor.rgb, brushColor.a * radialGradient) :
        prevColor.rgb;

      gl_FragColor = vec4(
        finalColor,
        max(prevColor.a, brushColor.a)
      );
    }
  `;

  import {
    WebGLRenderer,
    Scene,
    OrthographicCamera,
    WebGLRenderTarget,
    Vector2,
    Raycaster,
    Color,
    PlaneGeometry,
    ShaderMaterial,
    Mesh,
    MeshBasicMaterial,
    LinearFilter,
    RGBAFormat,
    NormalBlending,
  } from "three";
  import { onMount } from "svelte";

  let canvasElement: HTMLCanvasElement;
  let drawingCanvas: HTMLCanvasElement;
  let renderer: WebGLRenderer;
  let scene: Scene;
  let camera: OrthographicCamera;
  let drawingTexture: WebGLRenderTarget;
  let accumulationTexture: WebGLRenderTarget;
  let lastPointerPosition = new Vector2();
  let currentPointerPosition = new Vector2();
  let raycaster = new Raycaster();
  let pointer = new Vector2();

  function getPointerPosition(event: PointerEvent): Vector2 {
    const rect = drawingCanvas.getBoundingClientRect();

    // Calculate normalized coordinates (0 to 1)
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // Update the picking ray with the camera and pointer position
    pointer.x = x * 2 - 1;
    pointer.y = -(y * 2) + 1;
    raycaster.setFromCamera(pointer, camera);

    // Get the intersection point with the drawing plane
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const uv = intersects[0].uv;
      if (uv) {
        // Return UV coordinates directly
        return new Vector2(uv.x, uv.y);
      }
    }

    return new Vector2(-100, -100); // Return off-screen if no intersection
  }

  function updateShaderUniforms() {
    const material = (scene.children[0] as Mesh).material as ShaderMaterial;

    material.uniforms.lastPosition.value.copy(lastPointerPosition);
    material.uniforms.pointerPosition.value.copy(currentPointerPosition);
  }

  function draw(event: PointerEvent) {
    currentPointerPosition = getPointerPosition(event);

    if (!lastPointerPosition.equals(currentPointerPosition)) {
      updateShaderUniforms();

      // Render brush stroke to accumulation texture
      renderer.setRenderTarget(accumulationTexture);
      renderer.render(scene, camera);

      // Copy accumulation back to drawing texture
      renderer.setRenderTarget(drawingTexture);
      renderer.clear();
      const tempScene = new Scene();
      const tempCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const tempGeometry = new PlaneGeometry(2, 2);
      const tempMaterial = new MeshBasicMaterial({
        map: accumulationTexture.texture,
        transparent: true,
      });
      const tempMesh = new Mesh(tempGeometry, tempMaterial);
      tempScene.add(tempMesh);
      renderer.render(tempScene, tempCamera);

      lastPointerPosition.copy(currentPointerPosition);
    }
  }

  function downloadCanvas() {
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = drawingCanvas.width;
    tempCanvas.height = drawingCanvas.height;
    const ctx = tempCanvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(drawingCanvas, 0, 0);
      const link = document.createElement("a");
      link.download = "drawing.png";
      link.href = tempCanvas.toDataURL();
      link.click();
    }
  }

  function resetCanvas() {
    const material = (scene.children[0] as Mesh).material as ShaderMaterial;

    if (drawingTexture) {
      drawingTexture.dispose();
    }
    if (accumulationTexture) {
      accumulationTexture.dispose();
    }

    drawingTexture = new WebGLRenderTarget(
      drawingCanvas.width,
      drawingCanvas.height,
      {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        stencilBuffer: false,
      }
    );

    accumulationTexture = new WebGLRenderTarget(
      drawingCanvas.width,
      drawingCanvas.height,
      {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        stencilBuffer: false,
      }
    );

    material.uniforms.previousFrame.value = drawingTexture.texture;

    renderer.setRenderTarget(drawingTexture);
    renderer.clear();
    renderer.setRenderTarget(accumulationTexture);
    renderer.clear();
    renderer.setRenderTarget(null);
    renderer.clear();

    lastPointerPosition.set(-100, -100);
    currentPointerPosition.set(-100, -100);
  }

  onMount(() => {
    canvasElement = document.querySelector(
      ".drawing-canvas"
    ) as HTMLCanvasElement;

    canvasElement.style.cursor = "none";

    // Set actual pixel dimensions
    drawingCanvas = document.createElement("canvas");
    const dpr = window.devicePixelRatio || 1;
    drawingCanvas.width = canvasElement.clientWidth * dpr;
    drawingCanvas.height = canvasElement.clientHeight * dpr;

    // Set display size
    drawingCanvas.style.width = `${canvasElement.clientWidth}px`;
    drawingCanvas.style.height = `${canvasElement.clientHeight}px`;

    canvasElement.appendChild(drawingCanvas);

    const downloadBtn = document.querySelector("#download-btn");
    const resetBtn = document.querySelector("#reset-btn");

    if (!canvasElement || !downloadBtn || !resetBtn) {
      console.error("Required elements not found");
      return;
    }

    // Get the background color of canvasElement
    const computedStyle = window.getComputedStyle(canvasElement);
    const backgroundColor = computedStyle.backgroundColor;

    renderer = new WebGLRenderer({
      canvas: drawingCanvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(
      canvasElement.clientWidth,
      canvasElement.clientHeight,
      false
    );

    // Convert backgroundColor to RGB values
    const rgb = backgroundColor.match(/\d+/g);
    if (rgb) {
      const [r, g, b] = rgb.map(Number);
      renderer.setClearColor(new Color(r / 255, g / 255, b / 255), 1);
    } else {
      renderer.setClearColor(0xffffff, 1); // Fallback to white
    }

    scene = new Scene();

    // Simple orthographic camera setup
    camera = new OrthographicCamera(
      -1, // left
      1, // right
      1, // top
      -1, // bottom
      0.1, // near
      10 // far
    );
    camera.position.z = 1;

    drawingTexture = new WebGLRenderTarget(
      drawingCanvas.width,
      drawingCanvas.height,
      {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        stencilBuffer: false,
      }
    );

    accumulationTexture = new WebGLRenderTarget(
      drawingCanvas.width,
      drawingCanvas.height,
      {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        stencilBuffer: false,
      }
    );

    const geometry = new PlaneGeometry(2, 2);
    const material = new ShaderMaterial({
      vertexShader: drawingVertexShader,
      fragmentShader: drawingFragmentShader,
      uniforms: {
        previousFrame: { value: drawingTexture.texture },
        pointerPosition: { value: new Vector2() },
        lastPosition: { value: new Vector2() },
      },
      transparent: true,
      blending: NormalBlending,
    });
    const plane = new Mesh(geometry, material);
    scene.add(plane);

    drawingCanvas.addEventListener("pointermove", draw);
    downloadBtn.addEventListener("click", downloadCanvas);
    resetBtn.addEventListener("click", resetCanvas);

    function animate() {
      if (!renderer || !scene || !camera) return;
      requestAnimationFrame(animate);

      renderer.setRenderTarget(null);
      renderer.clear();
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      const dpr = window.devicePixelRatio || 1;
      const width = canvasElement.clientWidth;
      const height = canvasElement.clientHeight;

      drawingCanvas.width = width * dpr;
      drawingCanvas.height = height * dpr;
      drawingCanvas.style.width = `${width}px`;
      drawingCanvas.style.height = `${height}px`;

      camera.left = -1;
      camera.right = 1;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false);
      renderer.setPixelRatio(dpr);
      drawingTexture.setSize(width * dpr, height * dpr);
      accumulationTexture.setSize(width * dpr, height * dpr);
    }

    window.addEventListener("resize", handleResize);

    // Add to cleanup
    return () => {
      drawingCanvas.removeEventListener("pointermove", draw);
      downloadBtn.removeEventListener("click", downloadCanvas);
      resetBtn.removeEventListener("click", resetCanvas);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  });
</script>
