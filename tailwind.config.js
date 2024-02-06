/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './react-ui/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './vue-ui/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {},
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {},
      maxWidth: {
        'screen-3xl': '1920px',
      },
    },
  },
  plugins: [],
};
