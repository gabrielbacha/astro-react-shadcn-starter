import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "static",
  build: {
    format: "file",
    emptyOutDir: true,
  },
  site: process.env.CI ? "https://test.com" : "http://localhost:4321",
  //base: '',
  markdown: {
    syntaxHighlight: "shiki",
  },
  vite: {
    build: {
      commonjsOptions: {
        include: [/node_modules/],
        exclude: [],
      },
      modulePreload: true,
      minify: true,
      sourcemap: false,
    },
    logLevel: "info",
    ssr: {
      noExternal: [],
    },
    optimizeDeps: {
      include: [],
      exclude: [],
    },
    resolve: {
      dedupe: [],
    },
  },
  compressHTML: true,
  integrations: [
    react({
      include: [],
      ssr: true,
    }),
    tailwind({applyBaseStyles: false}),
    sitemap(),
    robotsTxt(),
  ],
  devToolbar: {
    enabled: false,
  },
});
