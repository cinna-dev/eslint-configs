const eslintConfigStyle = require( "@cinna-dev/eslint-config-style");
const eslintConfigError = require("@cinna-dev/eslint-config-error");
const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
const eslintConfigTs = require("@cinna-dev/eslint-config-ts");
const eslintConfigReact = require("@cinna-dev/eslint-config-react");
const eslintConfigImport = require("@cinna-dev/eslint-config-import/config");

module.exports = function( projectDir = '', parserOptions={} ) {
    /** @type { import("eslint").Linter.FlatConfig[] } */
    return [
        ...eslintConfigTs.configure(projectDir, parserOptions),
        ...eslintConfigStyle,
        ...eslintConfigError,
        ...eslintConfigSuggestions,
        ...eslintConfigReact,
        ...eslintConfigImport,
    ]
}
