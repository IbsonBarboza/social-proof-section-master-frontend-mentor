/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        VeryDarkMagenta: 'hsl(300, 43%, 22%)',
        SoftPink: 'hsl(333, 80%, 67%)',
        DarkGrayishMagenta: 'hsl(303, 10%, 53%)',
        LightGrayishMagenta: 'hsl(300, 24%, 96%)',
      },
    },
  },
  plugins: [],
}