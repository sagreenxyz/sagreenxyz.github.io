import { defineConfig } from 'vite';

// User/org GitHub Pages (sagreenxyz.github.io) serves from the repo root,
// so the base path is '/'. Override only if deploying under a sub-path.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
