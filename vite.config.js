import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: [
          "**/*.{html,js,css,ico,png,jpg,svg,json,webmanifest,txt,woff,woff2}",
        ],
      },
      manifest: {
        name: "MTG Tools",
        short_name: "MTG Tools",
        description: "MTG Tools",
        theme_color: "#150d17",
        background_color: "#150d17",
        start_url: "./index.html",
        display: "standalone",
        icons: [
          {
            src: "/src/assets/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/src/assets/img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/src/assets/img/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/src/assets/img/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/src/assets/img/pwa-maskable-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
