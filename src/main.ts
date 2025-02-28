import WebflowExport from './WebflowExport.svelte';
import FloraThreeCanvas from './lib/FloraThreeCanvas.svelte';

// This file doesn't need to do anything else - just importing the components
// will register them as custom elements due to the customElement: true option
// and the svelte:options tags in each component

// Instead of exporting, we'll attach to window for non-module contexts
// This makes the components accessible in the global scope for Webflow
const FloragComponents = {
    WebflowExport,
    FloraThreeCanvas
};

// Make components available globally
if (typeof window !== 'undefined') {
    (window as any).FloragComponents = FloragComponents;
}

// Still export for module contexts if needed
export { WebflowExport, FloraThreeCanvas };