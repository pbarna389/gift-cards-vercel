module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
       whitelistPatterns: [/^swiper-/]
      // Other options and configurations
    },
  },
}