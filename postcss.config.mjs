import scrollbarHide from 'tailwind-scrollbar-hide'
const config = {
  plugins: ["@tailwindcss/postcss",scrollbarHide],
};
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
