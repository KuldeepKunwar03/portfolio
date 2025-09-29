/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router files
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router files
    "./components/**/*.{js,ts,jsx,tsx}",// Components
  ],
  theme: {
    extend: {
      colors: {
        darktheme: "#11001F",  // dark mode background
        darkhover: "#2a004a",
        lighthover: "#FF00FF",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "serif"],
      },
    },
  },
  // Tailwind v4 uses CSS variables and prefers-reduced-motion by default.
  // Remove darkMode config; use the `.dark` class on <html> to trigger dark styles.
  darkMode: 'selector',
  plugins: [],
};
