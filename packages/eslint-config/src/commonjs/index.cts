const eslintConfigError = require("@cinna-dev/eslint-config-error");
const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
const {rules} = require("@cinna-dev/eslint-config-ts");
const eslintConfigReact = require("@cinna-dev/eslint-config-react");
const eslintConfigImport = require("@cinna-dev/eslint-config-import/config");

// import globals from "globals";

// import type {Linter} from "eslint";

module.exports = [
    // {
    //     languageOptions: {
    //         globals: {
    //             ...globals.browser
    //         }
    //     }
    // },
    ...eslintConfigError.default,
    ...eslintConfigSuggestions.default,
    ...rules,
    ...eslintConfigReact.default,
    ...eslintConfigImport.default,
]//as Linter.Config[];
