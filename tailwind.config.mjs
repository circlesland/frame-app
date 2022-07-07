export default {
  plugins: [],
  theme: {
    extend: {},
  },
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
    "./node_modules/@circlesland/frame-app/src/**/*.{svelte,js,ts}",
  ], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: "media", // or 'media' or 'class'
};
