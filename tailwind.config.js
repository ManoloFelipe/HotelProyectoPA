/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss,sass,less,styl}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8', // Color principal (Azul)
        secondary: '#F44336', // Color secundario (Rojo)
        background: '#F4F4F9', // Color de fondo claro
        dark: '#1A1A2E', // Color oscuro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
