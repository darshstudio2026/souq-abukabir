/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f2ead8",
        "sand-dark": "#e7d9b8",
        ink: "#2b231c",
        "ink-soft": "#6b5f4f",
        teal: {
          DEFAULT: "#14524a",
          dark: "#0d3934",
          light: "#1f6e63",
        },
        amber: {
          DEFAULT: "#c17817",
          light: "#e3a94a",
        },
        clay: "#a23e27",
        success: "#2f7a4d",
        paper: "#faf6ec",
      },
      fontFamily: {
        display: ["Cairo", "Tajawal", "sans-serif"],
        body: ["Tajawal", "Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
}
