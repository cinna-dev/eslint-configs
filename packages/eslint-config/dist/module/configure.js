import eslintConfigStyle from "@cinna-dev/eslint-config-style";
import eslintConfigError from "@cinna-dev/eslint-config-error";
import eslintConfigSuggestions from "@cinna-dev/eslint-config-suggestions";
import { configure } from "@cinna-dev/eslint-config-ts";
import eslintConfigReact from "@cinna-dev/eslint-config-react";
import eslintConfigImport from "@cinna-dev/eslint-config-import/config";
export default function (projectDir = '', parserOptions = {}) {
    return [
        ...configure(projectDir, parserOptions),
        ...eslintConfigStyle,
        ...eslintConfigError,
        ...eslintConfigSuggestions,
        ...eslintConfigReact,
        ...eslintConfigImport,
    ];
}
