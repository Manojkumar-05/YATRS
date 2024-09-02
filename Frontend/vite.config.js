import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // plugins: [nextui()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": "/src/components",
    },
  },
  css: {
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      css: {
        additionalData: `@import "@nextui-org/react/dist/nextui.css";`,
      },
    },
  },

  build: {
    sourcemap: true,
  },
});
