const path = require("path");
const createRuleTable = require("./create-rule-table.cjs");

const createPath = (modulePath) => [
  path.join(__dirname, modulePath, "dist/index.js"),
  path.join(__dirname, modulePath, "README.md"),
];

const inputOutputFiles = [
  "../packages/eslint-config-error",
  "../packages/eslint-config-react",
  "../packages/eslint-config-style",
  "../packages/eslint-config-suggestions",
  "../packages/eslint-config-ts",
  "../packages/eslint-config-import",
].map(createPath);

inputOutputFiles.forEach(([input, output]) => createRuleTable(input, output));
