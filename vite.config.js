import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
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
    assetsInlineLimit: 20000,
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
