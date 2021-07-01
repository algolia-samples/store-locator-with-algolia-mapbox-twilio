module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{tsx, ts, js, jsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
