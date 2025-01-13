export default {
  extends: ["plugin:react/jsx-runtime"],
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    files: ["**/*.js", "**/*.ts", "**/*.mjs","**/*.cjs","**/*.jsx","**/*.tsx"],
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/forbid-elements.md
    // Disallow certain elements
    // You may want to forbid usage of certain elements in favor of others, (e.g. forbid all `<div />` and use `<Box />` instead).
    // This rule allows you to configure a list of forbidden elements and to specify their desired replacements.
    "react/forbid-elements": [
      "warn",
      {
        forbid: [
          { element: "button", message: "use <Button> instead" },
          { element: "input", message: "use <Input> instead" },
          { element: "div", message: "use <Box> instead" },
        ],
      },
    ],
  },
};
