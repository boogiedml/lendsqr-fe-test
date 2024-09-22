/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        user_theme: "#0E1333",
        admin_theme: "#0A0D24",
      },
    },
  },
  plugins: [],
};
