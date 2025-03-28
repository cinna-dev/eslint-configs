const globals = require("globals");
const eslintConfig = require("@cinna-dev/eslint-config");
const eslintPluginImport = require("eslint-plugin-import");
const {fixupPluginRules} = require("@eslint/compat");

// import globals from "globals";
// import eslintConfig from "@cinna-dev/eslint-config";
// import eslintPluginImport from "eslint-plugin-import";
// import {fixupPluginRules} from "@eslint/compat";


/** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = [
// export default  [
    // {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
    {languageOptions: {globals: globals.node}},
    {
        plugins: {

            "import": fixupPluginRules(eslintPluginImport)
        },
        languageOptions: {
            parserOptions: {
                // tsconfigRootDir: import.meta.dirname,
                tsconfigRootDir: __dirname,
            },
        },
        settings: {
            "import/internal-regex": "^packages/",
            "import/parsers": {
                "@typescript-eslint/parser": [
                    ".ts",
                    ".tsx"
                ]
            },
            "import/extensions": [
                ".js",
                ".jsx"
            ],
            "import/resolver": {
                "typescript": {
                    "alwaysTryTypes": true
                },
                "node": {
                    "extensions": [
                        ".js",
                        ".jsx"
                    ]
                }
            }
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
