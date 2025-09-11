// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/navbar.js",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), 
     plugin(function({ addVariant }) {
      // Tailwind v3.2 dark behavior.
      addVariant('daak', '.dark &');
      // OR
      // Using `:match()`.
      addVariant('daak', [':match(.dark &)', ':is(.dark &)']);
      // OR
      // Using `:-webkit-any()`.
      addVariant('daak', [':-webkit-any(.dark &)', ':is(.dark &)']);
    })
  ],
};