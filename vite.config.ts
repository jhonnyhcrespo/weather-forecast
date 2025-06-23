import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weather-forecast",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts", // run before each test
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
});
