const fabric = require('@hankliu/fabric');

module.exports = {
  ...fabric.prettier,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
};