import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

//https://tools.crawlink.com/tools/pwa-icon-generator/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Advice Gener8or",
        short_name: "AdvcGnr8",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
      },
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
