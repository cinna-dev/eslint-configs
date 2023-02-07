const path = require("path");
const minifyFile = require("./minifyFile.cjs");
const minifyFiles = require("./minifyFiles.cjs");

const createPath = (modulePath) => [
  path.join(__dirname, modulePath, "src"),
  path.join(__dirname, modulePath, "dist"),
];

const inputOutputFiles = [
  "../packages/eslint-config-error",
  "../packages/eslint-config-react",
  "../packages/eslint-config-style",
  "../packages/eslint-config-suggestions",
  "../packages/eslint-config-ts",
  "../packages/eslint-config-import",
].map(createPath);

inputOutputFiles.forEach(([input, output]) =>
	minifyFiles(input, output)
 );
