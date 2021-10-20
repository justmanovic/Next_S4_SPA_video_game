if (mode === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano'),
      // Tous les modules PostCSS que tu souhaites
    ],
  };
}