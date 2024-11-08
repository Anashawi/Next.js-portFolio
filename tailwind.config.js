/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00el87",
        },
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    keyframes: {
      colorChange: {
        "0%, 100%": { color: "#00ff99" },
        "50%": { color: "#66B76A" },
      },
    },
    animation: {
      colorChange: "colorChange 2s infinite",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
