module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  },
  babel: {
    loaderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
    },
  },
}