import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

import postcss from './postcss.config.mjs';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2020",
  },
  plugins: [svelte()],
  css: {
    postcss,
  },
});
