module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["__test__/**/*.js"],
      extends: "./dist/index.js",
    },
  ],
};
