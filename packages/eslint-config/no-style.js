import globals from "globals";
import eslintConfigError from "@cinna-dev/eslint-config-error";
import eslintConfigSuggestions from "@cinna-dev/eslint-config-suggestions";
import eslintConfigTs from "@cinna-dev/eslint-config-ts";
import eslintConfigReact from "@cinna-dev/eslint-config-react";
import eslintConfigImport from "@cinna-dev/eslint-config-import";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    languageOptions: {
      parserOptions: {
        globals: globals.browser,
        tsconfigRootDir: import.meta.dirname,
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
  ...eslintConfigTs,
  ...eslintConfigReact,
  ...eslintConfigImport,
];
