import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: "gzip" }), // Active Gzip
    viteCompression({ algorithm: "brotliCompress" }), // Active Brotli
  ],
});
