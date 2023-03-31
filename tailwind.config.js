/**
 * default theme configuration - @see https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // @see https://tailwindcss.com/docs/content-configuration
  content: [
    './src/client/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],

  // TODO: dark mode
  // @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  // darkMode: 'class',

  // @see https://tailwindcss.com/docs/theme
  theme: {
    // Customizing breakpoints - @see https://tailwindcss.com/docs/responsive-design#customizing-your-theme
    // screens: { sm, md, lg, xl, ... }

    // Customizing Colors
    // @see https://tailwindcss.com/docs/customizing-colors
    // @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
    // @see https://mui.com/material-ui/customization/color/#color-palette
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      gray: {
        50: 'rgb(var(--color-gray-50) / <alpha-value>)',
        100: 'rgb(var(--color-gray-100) / <alpha-value>)',
        200: 'rgb(var(--color-gray-200) / <alpha-value>)',
        300: 'rgb(var(--color-gray-300) / <alpha-value>)',
        400: 'rgb(var(--color-gray-400) / <alpha-value>)',
        500: 'rgb(var(--color-gray-500) / <alpha-value>)',
        600: 'rgb(var(--color-gray-600) / <alpha-value>)',
        700: 'rgb(var(--color-gray-700) / <alpha-value>)',
        800: 'rgb(var(--color-gray-800) / <alpha-value>)',
        900: 'rgb(var(--color-gray-900) / <alpha-value>)',
      },
    },
    fontFamily: {
      base: 'var(--font-base)',
    },

    /*
    fontSize: {
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      base: 'var(--text-base)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
    },
    fontWeight: {
      normal: 'var(--font-normal)',
      bold: 'var(--font-bold)',
    },
    */

    // Extending the default theme - @see https://tailwindcss.com/docs/theme#extending-the-default-theme
    // Adding additional colors - @see https://tailwindcss.com/docs/customizing-colors#adding-additional-colors
    // extend: {},
  },
  plugins: [],
};
