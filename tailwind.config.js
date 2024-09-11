/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Baskervville: ["Baskervville", "serif"],
        Cinzel: ["Cinzel", "serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        'h1': "12.5%",
        'b1': "87.5%",
        'sn1': "12.5%",
        'b2': "90%",
        'h2': "10%",
        '50vh': "50vh",
      },
      width: {
        'sn1': "16.666667%",
        '80vw': "80vw",
      },
      maxWidth: {
        'mw': "1300px",
      },
      fontSize: {
        'h1': "100%",
      },
      flexBasis: {
        'h1': "10%",
        'b1': "87.5%",
      },
      backgroundImage: {
        'museum': "url('/assets/MuseumImage.png')",
      },
    },
  },
  plugins: [],
};
