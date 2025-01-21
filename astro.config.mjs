import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  integrations: [compressor()]
});