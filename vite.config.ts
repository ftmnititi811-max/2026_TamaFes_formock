import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/2026_TamaFes_formock",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
