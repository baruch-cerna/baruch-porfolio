import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import compressor from "astro-compressor";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: 'https://baruch-cerna.dev',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  },
  adapter: node({
    mode: "standalone"
  }),
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [compressor(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});