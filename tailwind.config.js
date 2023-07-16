/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.mdx"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss'),
  ],
  corePlugins: {
    preflight: false,
  }
}

