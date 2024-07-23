import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  integrations: [compressor()]
});