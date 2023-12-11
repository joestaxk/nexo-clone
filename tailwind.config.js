/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
       colors: {
        "accent-1": "#9eb3ee",
        "heroBg": "#122e82",
        "primaryBlue": "#1e4dd8",
        "subText": "#4a5066"
       },
       screens: {
        "bigLg": "1204px"
       }
    },
  },
  plugins: [],
}

