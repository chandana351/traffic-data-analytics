import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/traffic-data-analytics/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});
