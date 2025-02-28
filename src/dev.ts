// Import the web components to register them
import './WebflowExport.svelte';
import './lib/FloraThreeCanvas.svelte';

// For Svelte 5, we need to use the new approach
import { mount } from 'svelte';
import App from './App.svelte';

// Mount the App component using Svelte 5's mount function
mount(App, {
    target: document.getElementById('app')!
});

console.log('Development mode: Components loaded and registered');