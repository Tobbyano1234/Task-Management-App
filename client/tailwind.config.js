/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#793EF5"
        }
      },
      spacing: {
        77: "77px",
        278:"278px",
        198:"198px"
      }
    },
  },
  plugins: [],
};
