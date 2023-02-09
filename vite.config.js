import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'hgroup',
        }
      }
    }),
    svgLoader(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: null,
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsDir: "header_footer/src/assets",
    assetsInlineLimit: 300000,
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
  },
});
svgLoader({
  defaultImport: "raw",
});
