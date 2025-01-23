import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import compressor from "astro-compressor";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: 'https://baruch-cerna.dev',
  adapter: cloudflare(),
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [compressor(), sitemap()],
});