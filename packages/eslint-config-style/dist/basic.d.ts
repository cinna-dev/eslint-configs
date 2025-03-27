/** @type { import("eslint").Linter.FlatConfig[] } */
declare const _default: ({
    languageOptions: {
        parserOptions: {
            ecmaVersion: string;
        };
    };
    rules?: undefined;
    files?: undefined;
} | {
    rules: {
        files: string[];
        "array-bracket-newline": (string | {
            multiline: boolean;
            minItems: number;
        })[];
        "array-bracket-spacing": (string | {
            singleValue: boolean;
            objectsInArrays: boolean;
            arraysInArrays: boolean;
        })[];
        "array-element-newline": (string | {
            ArrayExpression: string;
            ArrayPattern: {
                minItems: number;
            };
        })[];
        "arrow-parens": string[];
        "arrow-spacing": (string | {
            before: boolean;
            after: boolean;
        })[];
        "block-spacing": string;
        "brace-style": string;
        "comma-dangle": (string | {
            arrays: string;
            objects: string;
            imports: string;
            exports: string;
            functions: string;
        })[];
        "comma-style": string[];
        "computed-property-spacing": string[];
        "dot-location": string[];
        "eol-last": string[];
        "func-call-spacing": string[];
        "function-call-argument-newline": string[];
        "function-paren-newline": string[];
        "generator-star-spacing": (string | {
            before: boolean;
            after: boolean;
        })[];
        "implicit-arrow-linebreak": string[];
        indent: (string | number)[];
        "jsx-quotes": string[];
        "key-spacing": (string | {
            beforeColon: boolean;
            afterColon: boolean;
            mode: string;
        })[];
        "keyword-spacing": (string | {
            before: boolean;
            after: boolean;
        })[];
        "line-comment-position": (string | {
            position: string;
        })[];
        "linebreak-style": string;
        "lines-around-comment": (string | {
            beforeBlockComment: boolean;
        })[];
        "lines-between-class-members": string[];
        "max-len": (string | {
            code: number;
            ignoreComments: boolean;
            ignoreTrailingComments: boolean;
            ignoreUrls: boolean;
        })[];
        "max-statements-per-line": (string | {
            max: number;
        })[];
        "multiline-ternary": string[];
        "new-parens": string;
        "newline-per-chained-call": (string | {
            ignoreChainWithDepth: number;
        })[];
        "no-extra-parens": (string | {
            returnAssign: boolean;
            ignoreJSX: string;
            nestedBinaryExpressions: boolean;
            enforceForArrowConditionals: boolean;
        })[];
        "no-mixed-spaces-and-tabs": string[];
        "no-multi-spaces": string;
        "no-multiple-empty-lines": string;
        "no-tabs": string;
        "no-trailing-spaces": string;
        "no-whitespace-before-property": string;
        "nonblock-statement-body-position": string[];
        "object-curly-newline": (string | {
            ObjectExpression: {
                multiline: boolean;
                minProperties: number;
            };
            ObjectPattern: {
                multiline: boolean;
                minProperties: number;
            };
            ImportDeclaration: {
                multiline: boolean;
                minProperties: number;
            };
            ExportDeclaration: {
                multiline: boolean;
                minProperties: number;
            };
        })[];
        "object-curly-spacing": (string | {
            arraysInObjects: boolean;
            objectsInObjects: boolean;
        })[];
        "object-property-newline": (string | {
            allowAllPropertiesOnSameLine: boolean;
        })[];
        "operator-linebreak": string[];
        "padded-blocks": (string | {
            allowSingleLineBlocks: boolean;
        })[];
        "padding-line-between-statements": (string | {
            blankLine: string;
            prev: string;
            next: string;
        } | {
            blankLine: string;
            prev: string[];
            next: string;
        } | {
            blankLine: string;
            prev: string[];
            next: string[];
        })[];
        quotes: (string | {
            avoidEscape: boolean;
            allowTemplateLiterals: boolean;
        })[];
        "rest-spread-spacing": string[];
        semi: string[];
        "semi-spacing": string;
        "semi-style": string[];
        "space-before-blocks": (string | {
            functions: string;
            keywords: string;
            classes: string;
        })[];
        "space-before-function-paren": (string | {
            anonymous: string;
            named: string;
            asyncArrow: string;
        })[];
        "space-in-parens": (string | {
            exceptions: string[];
        })[];
        "space-infix-ops": (string | {
            int32Hint: boolean;
        })[];
        "space-unary-ops": (string | {
            words: boolean;
            nonwords: boolean;
            overrides: {
                new: boolean;
                "++": boolean;
            };
        })[];
        "switch-colon-spacing": string;
        "template-curly-spacing": string;
        "template-tag-spacing": string[];
        "unicode-bom": string;
        "wrap-iife": (string | {
            functionPrototypeMethods: boolean;
        })[];
        "wrap-regex": string;
        "yield-star-spacing": string[];
        "max-lines-per-function"?: undefined;
    };
    languageOptions?: undefined;
    files?: undefined;
} | {
    files: string[];
    rules: {
        "max-len": (string | {
            code: number;
            ignoreComments: boolean;
            ignoreTrailingComments: boolean;
            ignoreUrls: boolean;
        })[];
        files?: undefined;
        "array-bracket-newline"?: undefined;
        "array-bracket-spacing"?: undefined;
        "array-element-newline"?: undefined;
        "arrow-parens"?: undefined;
        "arrow-spacing"?: undefined;
        "block-spacing"?: undefined;
        "brace-style"?: undefined;
        "comma-dangle"?: undefined;
        "comma-style"?: undefined;
        "computed-property-spacing"?: undefined;
        "dot-location"?: undefined;
        "eol-last"?: undefined;
        "func-call-spacing"?: undefined;
        "function-call-argument-newline"?: undefined;
        "function-paren-newline"?: undefined;
        "generator-star-spacing"?: undefined;
        "implicit-arrow-linebreak"?: undefined;
        indent?: undefined;
        "jsx-quotes"?: undefined;
        "key-spacing"?: undefined;
        "keyword-spacing"?: undefined;
        "line-comment-position"?: undefined;
        "linebreak-style"?: undefined;
        "lines-around-comment"?: undefined;
        "lines-between-class-members"?: undefined;
        "max-statements-per-line"?: undefined;
        "multiline-ternary"?: undefined;
        "new-parens"?: undefined;
        "newline-per-chained-call"?: undefined;
        "no-extra-parens"?: undefined;
        "no-mixed-spaces-and-tabs"?: undefined;
        "no-multi-spaces"?: undefined;
        "no-multiple-empty-lines"?: undefined;
        "no-tabs"?: undefined;
        "no-trailing-spaces"?: undefined;
        "no-whitespace-before-property"?: undefined;
        "nonblock-statement-body-position"?: undefined;
        "object-curly-newline"?: undefined;
        "object-curly-spacing"?: undefined;
        "object-property-newline"?: undefined;
        "operator-linebreak"?: undefined;
        "padded-blocks"?: undefined;
        "padding-line-between-statements"?: undefined;
        quotes?: undefined;
        "rest-spread-spacing"?: undefined;
        semi?: undefined;
        "semi-spacing"?: undefined;
        "semi-style"?: undefined;
        "space-before-blocks"?: undefined;
        "space-before-function-paren"?: undefined;
        "space-in-parens"?: undefined;
        "space-infix-ops"?: undefined;
        "space-unary-ops"?: undefined;
        "switch-colon-spacing"?: undefined;
        "template-curly-spacing"?: undefined;
        "template-tag-spacing"?: undefined;
        "unicode-bom"?: undefined;
        "wrap-iife"?: undefined;
        "wrap-regex"?: undefined;
        "yield-star-spacing"?: undefined;
        "max-lines-per-function"?: undefined;
    };
    languageOptions?: undefined;
} | {
    files: string[];
    rules: {
        "jsx-quotes": string[];
        files?: undefined;
        "array-bracket-newline"?: undefined;
        "array-bracket-spacing"?: undefined;
        "array-element-newline"?: undefined;
        "arrow-parens"?: undefined;
        "arrow-spacing"?: undefined;
        "block-spacing"?: undefined;
        "brace-style"?: undefined;
        "comma-dangle"?: undefined;
        "comma-style"?: undefined;
        "computed-property-spacing"?: undefined;
        "dot-location"?: undefined;
        "eol-last"?: undefined;
        "func-call-spacing"?: undefined;
        "function-call-argument-newline"?: undefined;
        "function-paren-newline"?: undefined;
        "generator-star-spacing"?: undefined;
        "implicit-arrow-linebreak"?: undefined;
        indent?: undefined;
        "key-spacing"?: undefined;
        "keyword-spacing"?: undefined;
        "line-comment-position"?: undefined;
        "linebreak-style"?: undefined;
        "lines-around-comment"?: undefined;
        "lines-between-class-members"?: undefined;
        "max-len"?: undefined;
        "max-statements-per-line"?: undefined;
        "multiline-ternary"?: undefined;
        "new-parens"?: undefined;
        "newline-per-chained-call"?: undefined;
        "no-extra-parens"?: undefined;
        "no-mixed-spaces-and-tabs"?: undefined;
        "no-multi-spaces"?: undefined;
        "no-multiple-empty-lines"?: undefined;
        "no-tabs"?: undefined;
        "no-trailing-spaces"?: undefined;
        "no-whitespace-before-property"?: undefined;
        "nonblock-statement-body-position"?: undefined;
        "object-curly-newline"?: undefined;
        "object-curly-spacing"?: undefined;
        "object-property-newline"?: undefined;
        "operator-linebreak"?: undefined;
        "padded-blocks"?: undefined;
        "padding-line-between-statements"?: undefined;
        quotes?: undefined;
        "rest-spread-spacing"?: undefined;
        semi?: undefined;
        "semi-spacing"?: undefined;
        "semi-style"?: undefined;
        "space-before-blocks"?: undefined;
        "space-before-function-paren"?: undefined;
        "space-in-parens"?: undefined;
        "space-infix-ops"?: undefined;
        "space-unary-ops"?: undefined;
        "switch-colon-spacing"?: undefined;
        "template-curly-spacing"?: undefined;
        "template-tag-spacing"?: undefined;
        "unicode-bom"?: undefined;
        "wrap-iife"?: undefined;
        "wrap-regex"?: undefined;
        "yield-star-spacing"?: undefined;
        "max-lines-per-function"?: undefined;
    };
    languageOptions?: undefined;
} | {
    files: string[];
    rules: {
        "max-lines-per-function": (string | number)[];
        "arrow-parens": string[];
        files?: undefined;
        "array-bracket-newline"?: undefined;
        "array-bracket-spacing"?: undefined;
        "array-element-newline"?: undefined;
        "arrow-spacing"?: undefined;
        "block-spacing"?: undefined;
        "brace-style"?: undefined;
        "comma-dangle"?: undefined;
        "comma-style"?: undefined;
        "computed-property-spacing"?: undefined;
        "dot-location"?: undefined;
        "eol-last"?: undefined;
        "func-call-spacing"?: undefined;
        "function-call-argument-newline"?: undefined;
        "function-paren-newline"?: undefined;
        "generator-star-spacing"?: undefined;
        "implicit-arrow-linebreak"?: undefined;
        indent?: undefined;
        "jsx-quotes"?: undefined;
        "key-spacing"?: undefined;
        "keyword-spacing"?: undefined;
        "line-comment-position"?: undefined;
        "linebreak-style"?: undefined;
        "lines-around-comment"?: undefined;
        "lines-between-class-members"?: undefined;
        "max-len"?: undefined;
        "max-statements-per-line"?: undefined;
        "multiline-ternary"?: undefined;
        "new-parens"?: undefined;
        "newline-per-chained-call"?: undefined;
        "no-extra-parens"?: undefined;
        "no-mixed-spaces-and-tabs"?: undefined;
        "no-multi-spaces"?: undefined;
        "no-multiple-empty-lines"?: undefined;
        "no-tabs"?: undefined;
        "no-trailing-spaces"?: undefined;
        "no-whitespace-before-property"?: undefined;
        "nonblock-statement-body-position"?: undefined;
        "object-curly-newline"?: undefined;
        "object-curly-spacing"?: undefined;
        "object-property-newline"?: undefined;
        "operator-linebreak"?: undefined;
        "padded-blocks"?: undefined;
        "padding-line-between-statements"?: undefined;
        quotes?: undefined;
        "rest-spread-spacing"?: undefined;
        semi?: undefined;
        "semi-spacing"?: undefined;
        "semi-style"?: undefined;
        "space-before-blocks"?: undefined;
        "space-before-function-paren"?: undefined;
        "space-in-parens"?: undefined;
        "space-infix-ops"?: undefined;
        "space-unary-ops"?: undefined;
        "switch-colon-spacing"?: undefined;
        "template-curly-spacing"?: undefined;
        "template-tag-spacing"?: undefined;
        "unicode-bom"?: undefined;
        "wrap-iife"?: undefined;
        "wrap-regex"?: undefined;
        "yield-star-spacing"?: undefined;
    };
    languageOptions?: undefined;
})[];

export { _default as default };
