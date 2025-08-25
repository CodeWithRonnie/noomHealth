import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Removed Cloudflare/Miniflare and custom mocha plugins for standalone app dev

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  base: "",
  build: {
    chunkSizeWarningLimit: 5000,
    cssCodeSplit: false,
    outDir: path.resolve(__dirname, "../assets/react-app"),
    assetsDir: ".",
    manifest: false,
    rollupOptions: {
      input: {
        bundle: path.resolve(__dirname, "./main.tsx"),
        mount: path.resolve(__dirname, "./mount.ts"),
      },
      output: {
        entryFileNames: (chunk) => (chunk.name === "bundle" ? "bundle.js" : "[name].js"),
        chunkFileNames: "chunk-[name].js",
        assetFileNames: ({ name }) => {
          if (name && name.toString().endsWith(".css")) return "style.css";
          return "asset-[name][extname]";
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: "@/react-app", replacement: path.resolve(__dirname, ".") },
      { find: "@components", replacement: path.resolve(__dirname, "../components") },
      { find: "@modules", replacement: path.resolve(__dirname, "../components/modules") },
    ],
  },
});
