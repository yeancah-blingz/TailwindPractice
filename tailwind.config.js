/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customRed: '#ff0000',
        customBlue: {light: '#00AEEF',
                    dark: '#0055A0',}
      },
      margin: {
        '10': '3.75rem',
        '20': '5rem',
      }
    },
  },
  plugins: [],
}

