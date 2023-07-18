module.exports = {
  parserOptions: {
    sourceType: "script",
    ecmaVersion: "latest",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "@cinna-dev/eslint-config-style/basic",
    "@cinna-dev/eslint-config-error",
    "@cinna-dev/eslint-config-suggestions",
    "@cinna-dev/eslint-config-ts/raw",
    "@cinna-dev/eslint-config-react",
    "@cinna-dev/eslint-config-import",
  ],
};
