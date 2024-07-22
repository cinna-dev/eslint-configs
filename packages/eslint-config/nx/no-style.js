const globals = require("globals");
const eslintConfigError = require("@cinna-dev/eslint-config-error");
const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
const eslintConfigTsRaw = require("@cinna-dev/eslint-config-ts");
const eslintConfigReact = require("@cinna-dev/eslint-config-react");
const eslintConfigImport = require("@cinna-dev/eslint-config-import");

/** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = [
  {
    languageOptions: {
      parserOptions: {
        globals: globals.browser,
        tsconfigRootDir: __dirname,
        sourceType: 'script',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          impliedStrict: true,
          jsx: true
        }
      }
    }
  },
  ...eslintConfigError,
  ...eslintConfigSuggestions,
  ...eslintConfigTsRaw,
  ...eslintConfigReact,
  ...eslintConfigImport,
];
