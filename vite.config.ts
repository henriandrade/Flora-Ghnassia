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
      } : undefined,
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