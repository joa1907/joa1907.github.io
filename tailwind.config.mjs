/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pink-light": "#f3e7eb",
        "purple-dark": "#774473",
        "blue-dark": "#2d3284",
        "blue-muted": "#455078",
        "dark-color": "#3a425c",
        "blue-gray": "#6b74a3",
        "lavender-light": "#ece3f8",
        "gray-light": "#f6f4f7",
        "gray-muted": "#ddd1dd",
      },
    },
  },
  plugins: [],
};
