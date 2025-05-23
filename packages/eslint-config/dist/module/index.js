import eslintConfigError from "@cinna-dev/eslint-config-error";
import eslintConfigSuggestions from "@cinna-dev/eslint-config-suggestions";
import { rules } from "@cinna-dev/eslint-config-ts";
import eslintConfigReact from "@cinna-dev/eslint-config-react";
import eslintConfigImport from "@cinna-dev/eslint-config-import/config";
export default [
    // {
    //     languageOptions: {
    //         globals: {
    //             ...globals.browser
    //         }
    //     }
    // },
    ...eslintConfigError,
    ...eslintConfigSuggestions,
    ...rules,
    ...eslintConfigReact,
    ...eslintConfigImport,
];
