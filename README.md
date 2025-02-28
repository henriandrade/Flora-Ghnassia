# Flora Ghnassia Webflow Animations

This project contains custom web components built with Svelte for use in Webflow projects.

## Development

To start the development server:

```bash
npm run dev
```

This will start a local development server with a test page that includes your components.

## Building for Production

To build the components for use in Webflow:

```bash
npm run build
```

This will generate a UMD bundle in the `dist` folder named `florag-webflow-animation.umd.js` that can be used directly in Webflow.

## Using in Webflow

1. **Host the JavaScript file**: Upload the generated `florag-webflow-animation.umd.js` file to a hosting service (like AWS S3, Netlify, or Webflow's asset hosting).

2. **Include the script in your Webflow project**:

   - In the Webflow Designer, go to your project settings
   - Navigate to the "Custom Code" section
   - Add the following script tag to the "Head Code" section:

   ```html
   <script src="https://your-hosting-url.com/florag-webflow-animation.umd.js"></script>
   ```

3. **Use the custom elements in your Webflow project**:

   - Add an HTML Embed element to your Webflow page
   - Insert the custom element tag:

   ```html
   <florag-webflow-animations></florag-webflow-animations>
   ```

## Troubleshooting

If you encounter the error "Uncaught SyntaxError: export declarations may only appear at top level of a module", make sure:

1. You're using the UMD build (not the ES module build)
2. You're including the script as a regular script tag (not a module script)
3. You've built the project with the latest configuration

## Available Components

- `<florag-webflow-animations>`: Main component that includes all animations
- `<flora-three-canvas>`: 3D canvas component (if needed separately)

## Customization

To customize the components, edit the corresponding Svelte files in the `src` directory and rebuild the project.
