/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-dark": "var(--theme-dark)",
        "theme-light": "var(--theme-light)",
        "theme-yellow": "var(--theme-yellow)",
      },
    },
  },
  plugins: [],
};
