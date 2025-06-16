import eslintConfigStyle from "@cinna-dev/eslint-config-style";
import eslintConfigError from "@cinna-dev/eslint-config-error";
import eslintConfigSuggestions from "@cinna-dev/eslint-config-suggestions";
import {configure, rules as tsRules} from "@cinna-dev/eslint-config-ts";
import eslintConfigReact from "@cinna-dev/eslint-config-react";
import eslintConfigImport from "@cinna-dev/eslint-config-import/config";

import { ESLint, Linter, Rule } from 'eslint';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactRefresh from  'eslint-plugin-react-refresh' ;
import react from 'eslint-plugin-react';


interface Options {
    vite?: true;
    typescript?: true | {
        config?: boolean
    };
    error?: true;
    style?: true;
    suggestions?: true;
    react?: true | {
        config?: boolean;
        jsxA11y?: boolean;
        reactHooks?: boolean
        reactCompiler?: boolean
        refresh?: boolean;
    };
    import?: true;
}

export default function( projectDir = '', options: Options = {} ,  parserOptions={} ) {

    const globalConfig: Linter.Config = {};
    const plugins: NonNullable<Linter.Config['plugins']> = {};

    let config = [
        ...(options.style ? eslintConfigStyle : []),
        ...(options.error ? eslintConfigError : []),
        ...(options.suggestions ?eslintConfigSuggestions : []),
        ...(options.import ? eslintConfigImport : []),
    ]as Linter.Config[];

    if (options.typescript) {
        if (options.typescript === true) {
            config = [
                ...config,
                ...configure(projectDir, parserOptions),
                ...tsRules
            ];
        } else if (options.typescript.config) {
            globalConfig.languageOptions = {
                ...globalConfig.languageOptions,
                parser: tseslint.parser as  Linter.Parser,
                parserOptions: {
                    ...globalConfig.languageOptions?.parserOptions,
                    project: true,
                    ...parserOptions,
                },
            };
        }
    }

    if (options.react) {

        plugins.react = react;

        if (options.react === true) {
        } else {
            if ( options.react.jsxA11y) {
                plugins['jsx-a11y'] = jsxA11y as ESLint.Plugin;
            }
            config.unshift(reactRefresh.configs.vite)
            config = [
                ...eslintConfigReact as Linter.Config[],
                ...config
            ];
        }
    }
    return [
      globalConfig,
      ...config
    ];
}
