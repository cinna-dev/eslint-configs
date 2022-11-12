module.exports = {
  rules: {
    /* Layout & Formatting */
    indent: ["warn", 2],
    "linebreak-style": [0, "unix"],

    // String
    quotes: ["warn", "single"],
    // https://eslint.org/docs/latest/rules/template-tag-spacing
    "template-tag-spacing": "warn",
    // Lines
    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },
      { blankLine: "always", prev: ["case", "default"], next: "*" },
    ],
    // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": "warn",
    // https://eslint.org/docs/latest/rules/max-statements-per-line
    "max-statements-per-line": ["warn", { max: 1 }],
    // https://eslint.org/docs/latest/rules/max-lines-per-function
    "max-lines-per-function": [
      "warn",
      { max: 20, skipBlankLines: true, skipComments: true, IIFEs: true },
    ],
    "max-depth": ["warn", 2],
    // the standard max len for js lies traditionally at 80 characters
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    "max-lines": [
      "warn",
      { max: 300, skipBlankLines: true, skipComments: true },
    ],
    // Spacing
    "spaced-comment": [
      "warn",
      "always",
      { markers: ["/"], exceptions: ["-", "+", "*"] },
    ],
    "computed-property-spacing": ["warn", "never"],
    "max-params": ["warn", 3],
    "max-nested-callbacks": ["warn", 3],
    "no-multi-spaces": ["warn", { ignoreEOLComments: true }],
    "eol-last": ["warn", "always"],
    "space-unary-ops": ["warn", { words: true, nonwords: false }],
    // https://eslint.org/docs/latest/rules/space-infix-ops#js-toc-label
    "space-infix-ops": "warn",
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-before-blocks": "warn",
    // https://eslint.org/docs/latest/rules/func-call-spacing
    "func-call-spacing": ["warn", "never"],
    // space in block scope
    // https://eslint.org/docs/latest/rules/block-spacing
    "block-spacing": "warn",

    "no-trailing-spaces": "warn",
    "no-whitespace-before-property": "warn",
    // Objects
    "object-curly-spacing": [
      "warn",
      "always",
      { arraysInObjects: true, objectsInObjects: true },
    ],
    "object-property-newline": "warn",
    "key-spacing": [
      "warn",
      { beforeColon: false, afterColon: true, mode: "strict" },
    ],
    "object-curly-newline": ["warn", { multiline: true, minProperties: 4 }],
    "dot-location": ["warn", "property"],
    "space-infix-ops": "warn",
    // "keyword-spacings": ["off", { before: true, after: true }],
    // Arrays
    "array-bracket-newline": ["warn", { multiline: true, minItems: 4 }],
    "array-bracket-spacing": [
      "warn",
      "never",
      { singleValue: false, objectsInArrays: false, arraysInArrays: false },
    ],
    // Function
    "function-call-argument-newline": ["warn", "consistent"],
    "function-paren-newline": ["warn", { minItems: 4 }],
    // Arrow Function
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": ["warn", { before: true, after: true }],
    // vars
    "id-length": ["warn", { exceptions: ["_"] }],
    "no-unused-vars": ["warn", { args: "after-used" }],
    // Braces
    "brace-style": "warn",
    // Commas
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

    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    // Disallow duplicate module imports
    // Using a single import statement per module will make the code clearer
    // because you can see everything being imported from that module on one line.
    "no-duplicate-imports": "warn",

    // iife
    "wrap-iife": ["warn", "inside"],
    // misc
    semi: ["warn", "always"],
    "nonblock-statement-body-position": ["warn", "beside"],
    "rest-spread-spacing": ["warn", "never"],

    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md
    // "import/order": [
    //   "warn",
    //   {
    //     "newlines-between": "always",
    //     groups: [
    //       "builtin",
    //       "external",
    //       "internal",
    //       "parent",
    //       "sibling",
    //       "index",
    //       "object",
    //       "type",
    //     ],
    //   },
    // ],

    "jsx-quotes": ["warn", "prefer-double"],
    "padded-blocks": ["warn", "never", { allowSingleLineBlocks: false }],

    "comma-spacing": ["warn", { before: false, after: true }],
    "template-curly-spacing": ["warn", "never"],
    "keyword-spacing": ["warn", { before: true, after: true }],

    //------ Linting Errors ------

    "use-isnan": "error",
    "no-loss-of-precision": "error",

    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/extensions.md
    // "import/extensions": ["warn", "always"],
  },
  overrides: [
    // react Components usually encapsulate more code than standard js functions
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "max-lines-per-function": ["warn", 200],
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
    // import extension exception for ts files as tsc uses implicit imports
    {
      files: ["*.tsx", "*.ts"],
      rules: { "import/extensions": ["warn", "never"] },
    },
    // ts is using more boilerplate than js therefore extending the max-len from 80 to 120 seems a requirement
    {
      files: ["*.ts"],
      rules: {
        "max-len": ["warn", 120],
      },
    },
  ],
};
