const globals = require("globals");
const eslintConfigStyle = require('@cinna-dev/eslint-config-style');
const eslintConfigError = require('@cinna-dev/eslint-config-error');
const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
const eslintConfigTs = require("@cinna-dev/eslint-config-ts");
const eslintConfigReact = require("@cinna-dev/eslint-config-react");
const eslintConfigImport = require("@cinna-dev/eslint-config-import");
// const eslintConfig = require("@cinna-dev/eslint-config/nx/no-style");

/** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = [
    // {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
    {languageOptions: {globals: globals.browser}},
    {
        languageOptions: {
            parserOptions: {
                // tsconfigRootDir: import.meta.dirname,
                tsconfigRootDir: __dirname,
            },
        },
    },
    // ...eslintConfig,
    ...eslintConfigStyle,
    ...eslintConfigError,
    ...eslintConfigSuggestions,
    ...eslintConfigTs,
    ...eslintConfigReact,
    ...eslintConfigImport,
];
