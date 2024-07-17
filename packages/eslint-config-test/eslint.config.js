const globals = require("globals");
// import eslintConfigStyle from '@cinna-dev/eslint-config-style';
// import eslintConfigError from '@cinna-dev/eslint-config-error';
// import eslintConfigSuggestions from "@cinna-dev/eslint-config-suggestions";
// import eslintConfigTs from "@cinna-dev/eslint-config-ts";
// import eslintConfigReact from "@cinna-dev/eslint-config-react";
// import eslintConfigImport from "@cinna-dev/eslint-config-import";
const eslintConfig = require("@cinna-dev/eslint-config");

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
    ...eslintConfig,
    // ...eslintConfigStyle,
    // ...eslintConfigError,
    // ...eslintConfigSuggestions,
    // ...eslintConfigTs,
    // ...eslintConfigReact,
    // ...eslintConfigImport,
];
