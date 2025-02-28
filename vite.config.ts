import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    plugins: [
      svelte({
        compilerOptions: {
          customElement: true,
          compatibility: {
            componentApi: 4  // Add this line to maintain Svelte 4 component API
          }
        },
      }),
    ],
    build: {
      lib: isProduction ? {
        entry: path.resolve(__dirname, 'src/main.ts'),
        name: 'FloragComponents',
        fileName: 'florag-webflow-animation',
        formats: ['es', 'umd'], // Add ES module format
      } : undefined,
      rollupOptions: {
        // Make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['svelte'],
        output: {
          // Provide globals for external packages
          globals: {
            svelte: 'Svelte',
          },
          // Set correct MIME type for UMD bundle
          format: 'umd',
          entryFileNames: `florag-webflow-animation.js`,
        },
      },
    },
    assetsInclude: ['src/lib/webflow/index.html'],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@public': path.resolve('./public'),
      }
    }
  }
})