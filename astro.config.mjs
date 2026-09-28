import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://baruch-cerna.dev",
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [compressor(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});