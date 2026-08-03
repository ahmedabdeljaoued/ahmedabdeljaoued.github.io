// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ahmedabdeljaoued.github.io',
  // User site is served from domain root (not a project subpath).
  base: '/',
});
