"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslintConfigStyle = require("@cinna-dev/eslint-config-style");
const eslintConfigError = require("@cinna-dev/eslint-config-error");
const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
const eslintConfigTs = require("@cinna-dev/eslint-config-ts");
const eslintConfigReact = require("@cinna-dev/eslint-config-react");
const eslintConfigImport = require("@cinna-dev/eslint-config-import/config");
// import type { Linter } from 'eslint';
module.exports = [
    ...eslintConfigStyle.default,
    ...eslintConfigError.default,
    ...eslintConfigSuggestions.default,
    ...eslintConfigTs.rules.default,
    ...eslintConfigReact.default,
    ...eslintConfigImport.default,
]; //as Linter.Config[];
