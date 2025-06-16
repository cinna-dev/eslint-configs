import eslintConfigStyle from "@cinna-dev/eslint-config-style";
import eslintConfigError from "@cinna-dev/eslint-config-error";
import eslintConfigSuggestions from "@cinna-dev/eslint-config-suggestions";
import { configure, rules as tsRules } from "@cinna-dev/eslint-config-ts";
import eslintConfigReact from "@cinna-dev/eslint-config-react";
import eslintConfigImport from "@cinna-dev/eslint-config-import/config";
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
export default function (projectDir = '', options = {}, parserOptions = {}) {
    var _a;
    const globalConfig = {};
    const plugins = {};
    let config = [
        ...(options.style ? eslintConfigStyle : []),
        ...(options.error ? eslintConfigError : []),
        ...(options.suggestions ? eslintConfigSuggestions : []),
        ...(options.import ? eslintConfigImport : []),
    ];
    if (options.typescript) {
        if (options.typescript === true) {
            config = [
                ...config,
                ...configure(projectDir, parserOptions),
                ...tsRules
            ];
        }
        else if (options.typescript.config) {
            globalConfig.languageOptions = Object.assign(Object.assign({}, globalConfig.languageOptions), { parser: tseslint.parser, parserOptions: Object.assign(Object.assign(Object.assign({}, (_a = globalConfig.languageOptions) === null || _a === void 0 ? void 0 : _a.parserOptions), { project: true }), parserOptions) });
        }
    }
    if (options.react) {
        plugins.react = react;
        if (options.react === true) {
        }
        else {
            if (options.react.jsxA11y) {
                plugins['jsx-a11y'] = jsxA11y;
            }
            config.unshift(reactRefresh.configs.vite);
            config = [
                ...eslintConfigReact,
                ...config
            ];
        }
    }
    return [
        globalConfig,
        ...config
    ];
}
