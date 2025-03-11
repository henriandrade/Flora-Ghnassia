<script lang="ts">
  import { onMount } from "svelte";

  let canvasElement: HTMLElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let points: { x: number; y: number; timestamp: number }[] = [];
  let lastX = -1;
  let lastY = -1;

  // Settings for the line
  const LINE_WIDTH = 10; // Thicker line
  const TAPER_LENGTH = 100; // Taper length in pixels

  // Maximum number of points to keep in history
  const MAX_POINTS = 4000; // Keep more points to preserve the drawing

  // Add smoothing for direction calculation
  let lastDx = 0;
  let lastDy = 0;
  const DIRECTION_SMOOTHING = 0.7; // Higher value = more smoothing

  function getPointerPosition(event: PointerEvent): { x: number; y: number } {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  // Calculate the distance between two points
  function distance(
    p1: { x: number; y: number },
    p2: { x: number; y: number }
  ): number {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  // Calculate the total length of a path
  function pathLength(path: { x: number; y: number }[]): number {
    let length = 0;
    for (let i = 1; i < path.length; i++) {
      length += distance(path[i - 1], path[i]);
    }
    return length;
  }

  function draw(event: PointerEvent) {
    const pos = getPointerPosition(event);

    // Add point to history
    points.push({ x: pos.x, y: pos.y, timestamp: Date.now() });

    // Keep only a reasonable number of points
    if (points.length > MAX_POINTS) {
      points.shift();
    }

    // Redraw the canvas
    redrawCanvas();

    lastX = pos.x;
    lastY = pos.y;
  }

  function redrawCanvas() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (points.length <= 1) return;

    // Find the taper points - we need to identify which points are part of the taper
    // by measuring back from the current position along the actual path
    let taperPoints: { x: number; y: number }[] = [];
    let mainPathPoints: { x: number; y: number }[] = [];

    // Start with the current point
    taperPoints.push(points[points.length - 1]);

    // Work backwards through the points
    let currentLength = 0;
    for (let i = points.length - 2; i >= 0; i--) {
      const segmentLength = distance(points[i], points[i + 1]);
      currentLength += segmentLength;

      if (currentLength <= TAPER_LENGTH) {
        // This point is part of the taper
        taperPoints.unshift(points[i]);
      } else {
        // This point and all earlier points are part of the main path
        // Include the last point before the taper in both arrays to ensure continuity
        mainPathPoints = points.slice(0, i + 1);

        // Add the connection point to the taper points if it's not already there
        if (taperPoints.length > 0 && taperPoints[0] !== points[i]) {
          taperPoints.unshift(points[i]);
        }
        break;
      }
    }

    // If we didn't find enough points for the main path, use what we have
    if (mainPathPoints.length === 0 && points.length > 1) {
      mainPathPoints = [points[0]];
    }

    // Draw the main path
    if (mainPathPoints.length > 0) {
      ctx.beginPath();
      ctx.moveTo(mainPathPoints[0].x, mainPathPoints[0].y);

      for (let i = 1; i < mainPathPoints.length; i++) {
        ctx.lineTo(mainPathPoints[i].x, mainPathPoints[i].y);
      }

      ctx.strokeStyle = "black";
      ctx.lineWidth = LINE_WIDTH;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }

    // Draw the taper
    if (taperPoints.length > 1) {
      // Calculate the total length of the taper path
      const totalTaperLength = pathLength(taperPoints);

      // Draw each segment of the taper with decreasing width
      let currentTaperLength = 0;

      for (let i = 0; i < taperPoints.length - 1; i++) {
        const p1 = taperPoints[i];
        const p2 = taperPoints[i + 1];
        const segmentLength = distance(p1, p2);

        // Calculate the position along the taper (0 at start, 1 at end)
        const startPos = currentTaperLength / totalTaperLength;
        const endPos = (currentTaperLength + segmentLength) / totalTaperLength;

        // Calculate the width at the start and end of this segment
        // Use a non-linear curve for more natural tapering
        // For the first segment, ensure it starts at full width to connect with the main line
        const startWidth =
          i === 0 ? LINE_WIDTH : LINE_WIDTH * (1 - Math.pow(startPos, 1.5));
        const endWidth = LINE_WIDTH * (1 - Math.pow(endPos, 1.5));

        // Draw this segment with variable width
        // For the first segment, use the full width to ensure continuity
        const lineWidth =
          i === 0 && p1 === mainPathPoints[mainPathPoints.length - 1]
            ? LINE_WIDTH
            : (startWidth + endWidth) / 2;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        currentTaperLength += segmentLength;
      }
    }
  }

  function resetCanvas() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points = [];
  }

  function downloadCanvas() {
    // Create a link and trigger download
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "drawing.png";
    link.click();
  }

  function resizeCanvas() {
    // Save the current drawing
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Resize the canvas to match its display size
    canvas.width = canvasElement.clientWidth;
    canvas.height = canvasElement.clientHeight;

    // Restore the drawing
    ctx.putImageData(imageData, 0, 0);

    // Restore context settings
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Redraw the canvas with the current points
    redrawCanvas();
  }

  onMount(() => {
    canvasElement = document.querySelector(".drawing-canvas") as HTMLElement;
    if (!canvasElement) {
      console.error("Drawing canvas element not found");
      return;
    }

    // Create canvas element
    canvas = document.createElement("canvas");
    canvas.width = canvasElement.clientWidth;
    canvas.height = canvasElement.clientHeight;
    canvas.style.display = "block";

    // Get context
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Add canvas to container
    canvasElement.appendChild(canvas);

    // Hide the cursor
    canvasElement.style.cursor = "none";

    // Add event listeners - only need pointermove for continuous drawing
    canvas.addEventListener("pointermove", draw);
    window.addEventListener("resize", resizeCanvas);

    const downloadBtn = document.querySelector("#download-btn");
    const resetBtn = document.querySelector("#reset-btn");

    if (downloadBtn && resetBtn) {
      downloadBtn.addEventListener("click", downloadCanvas);

      // Only reset when the reset button is clicked
      resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        resetCanvas();
      });
    }

    return () => {
      canvas.removeEventListener("pointermove", draw);
      window.removeEventListener("resize", resizeCanvas);

      if (downloadBtn && resetBtn) {
        downloadBtn.removeEventListener("click", downloadCanvas);
        resetBtn.removeEventListener("click", (e) => {
          e.preventDefault();
          resetCanvas();
        });
      }
    };
  });
</script>
