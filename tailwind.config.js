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
    extend: {},
    colors: {
      primary: "#1976D2",
      secondary: "#455A64",
      background: "#F5F5F5",
      text: "#212121",
      success: "#4CAF50",
      warning: "#FFC107",
      error: "#F44336",
      info: "#2196F3",
      light: "#E0E0E0",
      dark: "#424242"
    }
  },
  plugins: [],
}

