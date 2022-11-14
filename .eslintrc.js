module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["__test__/**/*.ts"],
      extends: [
        "./packages/eslint-config-error/dist/index.js",
        "./packages/eslint-config-react/dist/index.js",
        "./packages/eslint-config-style/dist/index.js",
        "./packages/eslint-config-suggestions/dist/index.js",
        "./packages/eslint-config-ts/dist/index.js",
      ],
    },
  ],
};
