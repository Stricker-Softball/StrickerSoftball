/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      'bg-red-500',
      'bg-sky-100',
      { pattern: /^bg-/ },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addUtilities, theme }) {
      const colors = theme('colors') || {};
      const utils = {};
      Object.entries(colors).forEach(([name, value]) => {
        if (typeof value === 'object') {
          if (value['500']) utils[`.bg-${name}-500`] = { 'background-color': value['500'] };
          if (value['100']) utils[`.bg-${name}-100`] = { 'background-color': value['100'] };
        } else {
          utils[`.bg-${name}`] = { 'background-color': value };
        }
      });
      // test utility to verify plugin runs
      utils['.tw-test-bg'] = { 'background-color': '#ff00ff' };
      addUtilities(utils, { variants: ['responsive', 'hover'] });
    }),
  ],
}
