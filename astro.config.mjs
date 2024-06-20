import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://joa.1907.github.io",
  integrations: [tailwind()],
});
