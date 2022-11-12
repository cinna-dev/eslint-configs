module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],

    "react/require-default-props": [
      "error",
      {
        classes: "defaultProps",
        functions: "ignore",
      },
    ],

    "react/function-component-definition": [
      "warn",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: ["arrow-function", "function-expression"],
      },
    ],
    "react/prop-types": "error",
    "react/no-array-index-key": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": [
      "warn",
      { custom: "ignore", html: "enforce" },
    ],
    "react/require-default-props": [
      "warn",
      {
        forbidDefaultForRequired: false,
        classes: "defaultProps",
        functions: "defaultArguments",
      },
    ],
  },
};
