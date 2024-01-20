import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), sitemap(), react(), sanityIntegration({
    projectId: "fsyq4756",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/admin"
  })],
  prefetch: {
    defaultStrategy: "viewport"
  },
  adapter: node({
    mode: "standalone"
  })
});