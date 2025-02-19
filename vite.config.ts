import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/WebflowExport.svelte'),
      },
      output: {
        entryFileNames: 'florag-webflow-animation.js',
      },
      external: ['jquery'], // Exclude jQuery from the build
    },
  },
  assetsInclude: ['src/lib/webflow/index.html'],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@public': path.resolve('./public'),
    }
  }
})