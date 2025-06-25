// postcss.config.cjs
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},  // ← use the separate PostCSS plugin
    autoprefixer: {},
  },
};

