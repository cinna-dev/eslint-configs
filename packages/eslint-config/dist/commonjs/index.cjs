"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslintConfigError = require("@cinna-dev/eslint-config-error");
const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
const { rules } = require("@cinna-dev/eslint-config-ts");
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
    ...eslintConfigError,
    ...eslintConfigSuggestions,
    ...rules,
    ...eslintConfigReact,
    ...eslintConfigImport,
]; //as Linter.Config[];
