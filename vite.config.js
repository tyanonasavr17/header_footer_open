import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  preview: {
    host: "0.0.0.0",
    port: 8081,
  },
});