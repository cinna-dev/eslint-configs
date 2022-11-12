const path = require("path");
const minifyFile = require("./minifyFile.cjs");

const createPath = (modulePath) => [
  path.join(__dirname, modulePath, "src/index.js"),
  path.join(__dirname, modulePath, "dist/index.js"),
];

const inputOutputFiles = [
  "../packages/eslint-config-error",
  "../packages/eslint-config-react",
  "../packages/eslint-config-style",
  "../packages/eslint-config-suggestions",
  "../packages/eslint-config-ts",
].map(createPath);

inputOutputFiles.forEach(([input, output]) => minifyFile(input, output));
