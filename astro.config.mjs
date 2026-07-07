// @ts-check
import { defineConfig } from 'astro/config';

// Static single-page site, deployed as the user page at the repo root
// (angelobaleno.github.io) — no `base`, so root-absolute asset paths work as-is.
// When angelobaleno.com is pointed here, switch `site` to that domain.
export default defineConfig({
  site: 'https://angelobaleno.com',
});
