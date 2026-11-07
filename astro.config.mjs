// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites are served from https://<owner>.github.io/<repo>/.
// Default to the repository name; override with BASE_PATH="" for a custom domain
// or for a differently-named repository.
const base = process.env.BASE_PATH ?? '/aisn.edu.lk';

export default defineConfig({
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    assets: '_astro',
  },
  outDir: './dist',
  publicDir: './public',
  compressHTML: false,
});
