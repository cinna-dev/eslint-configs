module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["__test__/**/*.ts"],
      extends: "./dist/index.js",
    },
  ],
};
