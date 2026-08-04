// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ahmedabdeljaoued.github.io',
  base: '/',
  // Avoid `_astro`: GitHub Pages/Jekyll ignores underscore folders unless .nojekyll is active.
  build: {
    assets: 'assets',
  },
});

