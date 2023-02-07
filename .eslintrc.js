module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["__test__/**/*"],
      extends: [
        "@cinna-dev/eslint-config-error",
        "@cinna-dev/eslint-config-style/basic",
        "@cinna-dev/eslint-config-suggestions",
        "@cinna-dev/eslint-config-ts",
        "@cinna-dev/eslint-config-react",
        "@cinna-dev/eslint-config-import",
      ],
    },
  ],
};
