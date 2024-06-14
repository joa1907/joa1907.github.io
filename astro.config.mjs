import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://joa.1907.github.io",
  /* base: "joa.1907.github.io", */
  integrations: [tailwind()],
});
