import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import compressor from "astro-compressor";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: 'https://baruch-cerna.dev',
  adapter: cloudflare(),
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [compressor(), sitemap(), react()],
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },

    plugins: [tailwindcss()],
  },
});