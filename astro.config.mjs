import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

export default defineConfig({
  integrations: [tailwind(), sitemap(), react(), astroI18next()],
  prefetch: {
    defaultStrategy: "viewport",
  },
  redirects: {
    "/": "/de",
  },
});
