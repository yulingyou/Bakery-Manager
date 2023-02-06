/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        heading: ['Cardo', 'sans-serif'],
      },
      colors: {
        'bone': '#DDD8C4',
        'lightgreen': '#A3C9A8',
        'green': '#84B59F',
        'darkgreen': '#445B4D',
        'green2': '#556b2f',
        'beige': '#9f8e7a',
        'muted': '#657163',
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["light"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "dark",
  },
}
