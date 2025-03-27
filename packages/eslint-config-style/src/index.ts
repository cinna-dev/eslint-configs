/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
            },
        },
    },
    {
        rules: {
            files: ["**/*.js", "**/*.ts", "**/*.mjs","**/*.cjs","**/*.jsx","**/*.tsx"],
            /* Arrays */

            // https://eslint.org/docs/latest/rules/array-bracket-newline
            // Enforce linebreaks after opening and before closing array brackets
            "array-bracket-newline": ["warn", {multiline: true, minItems: 4}],

            // https://eslint.org/docs/latest/rules/array-bracket-spacing
            // Enforce consistent spacing inside array brackets
            "array-bracket-spacing": [
                "warn",
                "always",
                {singleValue: false, objectsInArrays: false, arraysInArrays: true},
            ],

            // https://eslint.org/docs/latest/rules/array-element-newline
            // Enforce line breaks after each array element
            // This rule enforces line breaks between array elements.
            "array-element-newline": [
                "warn",
                {
                    ArrayExpression: "consistent",
                    ArrayPattern: {minItems: 3},
                },
            ],

            // https://eslint.org/docs/latest/rules/arrow-parens
            // Require parentheses around arrow function arguments
            "arrow-parens": ["warn", "as-needed"],

            // https://eslint.org/docs/latest/rules/arrow-spacing
            // Enforce consistent spacing before and after the arrow in arrow functions
            "arrow-spacing": ["warn", {before: true, after: true}],

            // https://eslint.org/docs/latest/rules/block-spacing
            // Disallow or enforce spaces inside of blocks after opening block and before closing block
            "block-spacing": "warn",

            // https://eslint.org/docs/latest/rules/brace-style
            // Enforce consistent brace style for blocks
            // The one true brace style is one of the most common brace styles in JavaScript,
            // in which the opening brace of a block is placed on the same line as its corresponding statement or declaration.
            "brace-style": "warn",

            // https://eslint.org/docs/latest/rules/comma-dangle
            // Require or disallow trailing commas
            "comma-dangle": [
                "warn",
                {
                    arrays: "always-multiline",
                    objects: "always-multiline",
                    imports: "never",
                    exports: "never",
                    functions: "never",
                },
            ],

            // https://eslint.org/docs/latest/rules/comma-style
            // Enforce consistent comma style
            // The Comma Style rule enforces styles for comma-separated lists. There are two comma styles primarily used in JavaScript:
            // - The standard style, in which commas are placed at the end of the current line
            // - Comma First style, in which commas are placed at the start of the next line
            // One of the justifications for using Comma First style is that it can help track missing and trailing commas.
            // These are problematic because missing commas in variable declarations can lead to the leakage of global variables and trailing commas can lead to errors in older versions of IE.
            "comma-style": ["warn", "last"],

            // https://eslint.org/docs/latest/rules/computed-property-spacing
            // Enforce consistent spacing inside computed property brackets
            // While formatting preferences are very personal, a number of style guides require or disallow spaces between computed properties
            "computed-property-spacing": ["warn", "never"],

            // https://eslint.org/docs/latest/rules/dot-location
            // Enforce consistent newlines before and after dots
            // This rule aims to enforce newline consistency in member expressions.
            // This rule prevents the use of mixed newlines around the dot in a member expression.
            "dot-location": ["warn", "property"],

            // https://eslint.org/docs/latest/rules/eol-last
            // Require or disallow newline at the end of files
            // Trailing newlines in non-empty files are a common UNIX idiom.
            // Benefits of trailing newlines include the ability to concatenate or append to files as well as output files to the terminal without interfering with shell prompts.
            "eol-last": ["warn", "always"],

            // https://eslint.org/docs/latest/rules/func-call-spacing
            // Require or disallow spacing between function identifiers and their invocations
            // When calling a function, developers may insert optional whitespace between the function’s name and the parentheses that invoke it.
            "func-call-spacing": ["warn", "never"],

            // https://eslint.org/docs/latest/rules/function-call-argument-newline
            // Enforce line breaks between arguments of a function call
            // A number of style guides require or disallow line breaks between arguments of a function call.
            "function-call-argument-newline": ["warn", "consistent"],

            // https://eslint.org/docs/latest/rules/function-paren-newline
            // Enforce consistent line breaks inside function parentheses
            // This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
            "function-paren-newline": ["warn", "consistent"],

            // https://eslint.org/docs/latest/rules/generator-star-spacing
            // Enforce consistent spacing around `*` operators in generator functions
            // Generators are a new type of function in ECMAScript 6 that can return multiple values over time.
            // These special functions are indicated by placing an `*` after the `function` keyword.
            "generator-star-spacing": ["warn", {before: false, after: true}],

            // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
            // Enforce the location of arrow function bodies
            // An arrow function body can contain an implicit return as an expression instead of a block body.
            // It can be useful to enforce a consistent location for the implicitly returned expression.
            "implicit-arrow-linebreak": ["error", "beside"],

            // https://eslint.org/docs/latest/rules/indent
            // There are several common guidelines which require specific indentation of nested blocks and statements
            indent: ["warn", 2],

            // https://eslint.org/docs/latest/rules/jsx-quotes
            // Enforce the consistent use of either double or single quotes in JSX attributes
            // This rule enforces the consistent use of either double or single quotes in JSX attributes.
            "jsx-quotes": ["warn", "prefer-double"],

            // https://eslint.org/docs/latest/rules/key-spacing
            // Enforce consistent spacing between keys and values in object literal properties
            // This rule enforces consistent spacing between keys and values in object literal properties.
            // In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.
            "key-spacing": [
                "warn",
                {beforeColon: false, afterColon: true, mode: "strict"},
            ],

            // https://eslint.org/docs/latest/rules/keyword-spacing
            // Enforce consistent spacing before and after keywords
            // This rule enforces consistent spacing around keywords and keyword-like tokens: `as` (in module declarations),
            // `async` (of async functions), `await` (of await expressions), `break`, `case`, `catch`, `class`, `const`, `continue`,
            // `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `from` (in module declarations), `function`,
            // `get` (of getters), `if`, `import`, `in` (in for-in statements), `let`, `new`, `of` (in for-of statements), `return`,
            // `set` (of setters), `static`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, and `yield`.
            // This rule is designed carefully not to conflict with other spacing rules: it does not apply to spacing where other rules report problems.
            "keyword-spacing": ["warn", {before: true, after: true}],

            // https://eslint.org/docs/latest/rules/line-comment-position
            // Enforce position of line comments
            // Line comments can be positioned above or beside code.
            // This rule helps teams maintain a consistent style.
            // This rule enforces consistent position of line comments.
            // Block comments are not affected by this rule. By default,
            // this rule ignores comments starting with the following words: `eslint`, `jshint`, `jslint`, `istanbul`, `global`, `exported`, `jscs`, `falls` `through`.
            "line-comment-position": ["warn", {position: "above"}],

            // https://eslint.org/docs/latest/rules/linebreak-style
            // When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that different line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).
            // The linebreaks (new lines) used in windows operating system are usually carriage returns (CR) followed by a line feed (LF) making it a carriage return line feed (CRLF) whereas Linux and Unix use a simple line feed (LF). The corresponding control sequences are "\n" (for LF) and "\r\n" for (CRLF).
            // Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies, you can activate this rule.
            "linebreak-style": ["warn", "unix"],

            // https://eslint.org/docs/latest/rules/lines-around-comment
            // Require empty lines around comments
            // This rule requires empty lines before and/or after comments.
            // It can be enabled separately for both block (`/*`) and line (`//`) comments.
            // This rule does not apply to comments that appear on the same line as code and does not require empty lines at the beginning or end of a file.
            "lines-around-comment": ["off", {beforeBlockComment: true}],

            // https://eslint.org/docs/latest/rules/lines-between-class-members
            // Require or disallow an empty line between class members
            // This rule improves readability by enforcing lines between class members.
            // It will not check empty lines before the first member and after the last member,
            // since that is already taken care of by padded-blocks.
            "lines-between-class-members": ["warn", "always"],

            // https://eslint.org/docs/latest/rules/max-len
            // Enforce a maximum line length
            // Very long lines of code in any language can be difficult to read.
            // In order to aid in readability and maintainability many coders have developed a convention to limit lines of code to X number of characters (traditionally 80 characters).
            "max-len": [
                "warn",
                {
                    code: 80,
                    ignoreComments: true,
                    ignoreTrailingComments: true,
                    ignoreUrls: true,
                },
            ],

            // https://eslint.org/docs/latest/rules/max-statements-per-line
            // Enforce a maximum number of statements allowed per line
            // A line of code containing too many statements can be difficult to read.
            // Code is generally read from the top down, especially when scanning,
            // so limiting the number of statements allowed on a single line can be very beneficial for readability and maintainability.
            "max-statements-per-line": ["warn", {max: 1}],

            // https://eslint.org/docs/latest/rules/multiline-ternary
            // Enforce newlines between operands of ternary expressions
            // JavaScript allows operands of ternary expressions to be separated by newlines, which can improve the readability of your program.
            // This rule enforces or disallows newlines between operands of a ternary expression.
            // Note: The location of the operators is not enforced by this rule.
            // Please see the `operator-linebreak` rule if you are interested in enforcing the location of the operators themselves.
            "multiline-ternary": ["warn", "always-multiline"],

            // https://eslint.org/docs/latest/rules/new-parens
            // Enforce or disallow parentheses when invoking a constructor with no arguments
            // JavaScript allows the omission of parentheses when invoking a function via the `new` keyword and the constructor has no arguments.
            // However, some coders believe that omitting the parentheses is inconsistent with the rest of the language and thus makes code less clear.
            // This rule can enforce or disallow parentheses when invoking a constructor with no arguments using the `new` keyword.
            // new Person // valid js
            "new-parens": "warn",

            // https://eslint.org/docs/latest/rules/newline-per-chained-call
            // Require a newline after each call in a method chain
            // Chained method calls on a single line without line breaks are harder to read,
            // so some developers place a newline character after each method call in the chain to make it more readable and easy to maintain.
            "newline-per-chained-call": ["warn", {ignoreChainWithDepth: 2}],

            // https://eslint.org/docs/latest/rules/no-extra-parens
            // This rule restricts the use of parentheses to only where they are necessary.
            "no-extra-parens": ["warn", "all",
                {
                    "returnAssign": false,
                    "ignoreJSX": "multi-line",
                    "nestedBinaryExpressions": false,
                    "enforceForArrowConditionals": false
                }
            ],

            // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
            // Disallow mixed spaces and tabs for indentation
            // Most code conventions require either tabs or spaces be used for indentation.
            // As such, it’s usually an error if a single line of code is indented with both tabs and spaces.
            "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],

            // https://eslint.org/docs/latest/rules/no-multi-spaces
            // Disallow multiple spaces
            // This rule aims to disallow multiple whitespace around logical expressions,
            // conditional expressions, declarations, array elements, object properties, sequences and function parameters.
            "no-multi-spaces": "warn",

            // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
            // Disallow multiple empty lines
            // Some developers prefer to have multiple blank lines removed, while others feel that it helps improve readability.
            // Whitespace is useful for separating logical sections of code,
            // but excess whitespace takes up more of the screen.
            "no-multiple-empty-lines": "warn",

            // https://eslint.org/docs/latest/rules/no-tabs
            // Disallow all tabs
            // Some style guides don’t allow the use of tab characters at all, including within comments.
            // This rule looks for tabs anywhere inside a file: code, comments or anything else.
            "no-tabs": "warn",

            // https://eslint.org/docs/latest/rules/no-trailing-spaces
            // no-trailing-spaces
            // Disallow trailing whitespace at the end of lines
            // Sometimes in the course of editing files, you can end up with extra whitespace at the end of lines.
            // These whitespace differences can be picked up by source control systems and flagged as diffs, causing frustration for developers.
            // While this extra whitespace causes no functional issues, many code conventions require that trailing spaces be removed before check-in.
            "no-trailing-spaces": "warn",

            // https://eslint.org/docs/latest/rules/no-whitespace-before-property
            // Disallow whitespace before properties
            // JavaScript allows whitespace between objects and their properties.
            // However, inconsistent spacing can make code harder to read and can lead to errors.
            "no-whitespace-before-property": "warn",

            // https://eslint.org/docs/latest/rules/nonblock-statement-body-position
            // Enforce the location of single-line statements
            // When writing `if`, `else`, `while`, `do-while`, and for statements, the body can be a single statement instead of a block.
            // It can be useful to enforce a consistent location for these single statements.
            "nonblock-statement-body-position": ["warn", "beside"],

            // https://eslint.org/docs/latest/rules/object-curly-newline
            // Enforce consistent line breaks after opening and before closing braces
            // This rule requires or disallows a line break between `{` and its following token, and between `}` and its preceding token of object literals or destructuring assignments.
            "object-curly-newline": [
                "warn",
                {
                    ObjectExpression: {multiline: true, minProperties: 3},
                    ObjectPattern: {multiline: true, minProperties: 3},
                    ImportDeclaration: {multiline: true, minProperties: 3},
                    ExportDeclaration: {multiline: true, minProperties: 1},
                },
            ],

            // https://eslint.org/docs/latest/rules/object-curly-spacing
            // Enforce consistent spacing inside braces
            // This rule enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers.
            "object-curly-spacing": [
                "warn",
                "always",
                {arraysInObjects: false, objectsInObjects: true},
            ],

            // https://eslint.org/docs/latest/rules/object-property-newline
            // Enforce placing object properties on separate lines
            // This rule permits you to restrict the locations of property specifications in object literals.
            // You may prohibit any part of any property specification from appearing on the same line as any part of any other property specification.
            // You may make this prohibition absolute, or, by invoking an object option, you may allow an exception, permitting an object literal to have all parts of all of its property specifications on a single line.
            "object-property-newline": "warn",

            // https://eslint.org/docs/latest/rules/operator-linebreak
            // Enforce consistent linebreak style for operators
            // This rule enforces a consistent linebreak style for operators.
            "operator-linebreak": ["warn", "before"],

            // https://eslint.org/docs/latest/rules/padded-blocks
            // Require or disallow padding within blocks
            // Some style guides require block statements to start and end with blank lines.
            // The goal is to improve readability by visually separating the block content and the surrounding code.
            "padded-blocks": ["warn", "never", {allowSingleLineBlocks: false}],

            // https://eslint.org/docs/latest/rules/padding-line-between-statements
            // Require or disallow padding lines between statements
            // This rule requires or disallows blank lines between the given 2 kinds of statements.
            // Properly blank lines help developers to understand the code.
            // For example, the following configuration requires a blank line between a variable declaration and a `return` statement.
            "padding-line-between-statements": [
                "warn",
                {
                    "blankLine": "always",
                    "prev": "*",
                    "next": "return"
                },
                {
                    "blankLine": "always",
                    "prev": "*",
                    "next": "export"
                },
                {
                    "blankLine": "always",
                    "prev": [
                        "const",
                        "let",
                        "var"
                    ],
                    "next": "*"
                },
                {
                    "blankLine": "any",
                    "prev": [
                        "const",
                        "let",
                        "var"
                    ],
                    "next": [
                        "const",
                        "let",
                        "var"
                    ]
                },
                {
                    "blankLine": "always",
                    "prev": "directive",
                    "next": "*"
                },
                {
                    "blankLine": "any",
                    "prev": "directive",
                    "next": "directive"
                },
                {
                    "blankLine": "always",
                    "prev": [
                        "case",
                        "default"
                    ],
                    "next": "*"
                }
            ],

            // https://eslint.org/docs/latest/rules/quotes
            // Enforce the consistent use of either backticks, double, or single quotes
            // This rule enforces the consistent use of either backticks, double, or single quotes.
            quotes: [
                "warn",
                "single",
                {avoidEscape: true, allowTemplateLiterals: true},
            ],

            // https://eslint.org/docs/latest/rules/rest-spread-spacing
            // Enforce spacing between rest and spread operators and their expressions
            // This rule aims to enforce consistent spacing between rest and spread operators and their expressions.
            // The rule also supports object rest and spread properties in ES2018
            "rest-spread-spacing": ["warn", "never"],

            // https://eslint.org/docs/latest/rules/semi
            // Require or disallow semicolons instead of ASI
            // This rule enforces consistent use of semicolons.
            semi: ["warn", "always"],

            // https://eslint.org/docs/latest/rules/semi-spacing
            // Enforce consistent spacing before and after semicolons
            // JavaScript allows you to place unnecessary spaces before or after a semicolon.
            // Disallowing or enforcing space around a semicolon can improve the readability of your program.
            "semi-spacing": "warn",

            // https://eslint.org/docs/latest/rules/semi-style
            // Enforce location of semicolons
            // Generally, semicolons are at the end of lines.
            // However, in semicolon-less style, semicolons are at the beginning of lines.
            // This rule enforces that semicolons are at the configured location.
            "semi-style": ["warn", "last"],

            // https://eslint.org/docs/latest/rules/space-before-blocks
            // Enforce consistent spacing before blocks
            // Consistency is an important part of any style guide.
            // While it is a personal preference where to put the opening brace of blocks,
            // it should be consistent across a whole project.
            // Having an inconsistent style distracts the reader from seeing the important parts of the code.
            "space-before-blocks": [
                "warn",
                {functions: "always", keywords: "always", classes: "always"},
            ],

            // https://eslint.org/docs/latest/rules/space-before-function-paren
            // Enforce consistent spacing before `function` definition opening parenthesisEnforce consistent spacing before function definition opening parenthesis
            // This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn’t match the preferences specified.
            "space-before-function-paren": [
                "warn",
                {
                    anonymous: "always",
                    named: "never",
                    asyncArrow: "always",
                },
            ],

            // https://eslint.org/docs/latest/rules/space-in-parens
            // Enforce consistent spacing inside parentheses
            // This rule will enforce consistent spacing directly inside of parentheses,
            // by disallowing or requiring one or more spaces to the right of `(` and to the left of `)`.
            // As long as you do not explicitly disallow empty parentheses using the `"empty"` exception , `()` will be allowed.
            "space-in-parens": ["warn", "never", {exceptions: ["{}", "[]", "()"]}],

            // https://eslint.org/docs/latest/rules/space-infix-ops
            // Require spacing around infix operators
            // This rule is aimed at ensuring there are spaces around infix operators.
            "space-infix-ops": ["warn", {int32Hint: false}],

            // https://eslint.org/docs/latest/rules/space-unary-ops
            // Enforce consistent spacing before or after unary operators
            // Some style guides require or disallow spaces before or after unary operators.
            // This is mainly a stylistic issue, however, some JavaScript expressions can be written without spacing which makes it harder to read and maintain.
            "space-unary-ops": [
                2,
                {
                    words: true,
                    nonwords: false,
                    overrides: {
                        new: false,
                        "++": true,
                    },
                },
            ],

            // https://eslint.org/docs/latest/rules/switch-colon-spacing
            // Enforce spacing around colons of switch statements
            // Spacing around colons improves readability of `case`/`default` clauses.
            "switch-colon-spacing": "warn",

            // https://eslint.org/docs/latest/rules/template-curly-spacing
            // Require or disallow spacing around embedded expressions of template strings
            // We can embed expressions in template strings with using a pair of `${` and `}`.
            // This rule can force usage of spacing within the curly brace pair according to style guides.
            "template-curly-spacing": "warn",

            // https://eslint.org/docs/latest/rules/template-tag-spacing
            // Require or disallow spacing between template tags and their literals
            // This rule aims to maintain consistency around the spacing between template tag functions and their template literals.
            "template-tag-spacing": ["warn", "never"],

            // https://eslint.org/docs/latest/rules/unicode-bom
            // Require or disallow Unicode byte order mark (BOM)
            // The Unicode Byte Order Mark (BOM) is used to specify whether code units are big endian or little endian.
            // That is, whether the most significant or least significant bytes come first.
            // UTF-8 does not require a BOM because byte ordering does not matter when characters are a single byte.
            // Since UTF-8 is the dominant encoding of the web, we make `"never"` the default option.
            "unicode-bom": "error",

            // https://eslint.org/docs/latest/rules/wrap-iife
            // Require parentheses around immediate `function` invocations
            // You can immediately invoke function expressions, but not function declarations.
            // A common technique to create an immediately-invoked function expression (IIFE) is to wrap a function declaration in parentheses.
            // The opening parentheses causes the contained function to be parsed as an expression,
            // rather than a declaration.
            "wrap-iife": ["warn", "inside", {functionPrototypeMethods: true}],

            // https://eslint.org/docs/latest/rules/wrap-regex
            // Require parenthesis around regex literals
            // This is used to disambiguate the slash operator and facilitates more readable code.
            "wrap-regex": "warn",

            // https://eslint.org/docs/latest/rules/yield-star-spacing
            // Require or disallow spacing around the `*` in `yield*` expressions
            // This rule enforces spacing around the `*` in `yield*` expressions.
            "yield-star-spacing": ["warn", "after"],
        }
    },
    // react Components usually encapsulate more code than standard js functions
    {
        files: ["**/*.tsx", "**/*.jsx", "**/*.ts"],
        rules: {
            // ts is using more boilerplate than js therefore extending the max-len from 80 to 120 seems a requirement
            "max-len": [
                "warn",
                {
                    code: 120,
                    ignoreComments: true,
                    ignoreTrailingComments: true,
                    ignoreUrls: true,
                },
            ],
        },
    },
    {
        files: ["**/*.tsx", "**/*.jsx"],
        rules: {
            "max-lines-per-function": ["warn", 200],
            "arrow-parens": ["warn", "always"],
        }
    },
    {
        files: ["**/*.tsx", "**/*.ts", "**/*.mts", "**/*.cts"],
        rules: {
            "no-undef": "off"
        }
    }
];
