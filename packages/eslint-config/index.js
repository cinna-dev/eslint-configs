const eslintConfigError = require("@cinna-dev/eslint-config-error");
const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
const {rules} = require("@cinna-dev/eslint-config-ts");
const eslintConfigReact = require("@cinna-dev/eslint-config-react");
const eslintConfigImport = require("@cinna-dev/eslint-config-import/config");

/** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = [
    ...eslintConfigError,
    ...eslintConfigSuggestions,
    ...rules,
    ...eslintConfigReact,
    ...eslintConfigImport,
];
