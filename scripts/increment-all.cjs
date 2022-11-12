const {
  incrementPackageVersion,
} = require("./auto-increment-package-version.cjs");
const path = require("path");

autoIncrementPackageVersion(path.join(__dirname, "../packages/eslint-config"), {
  patch: true,
});

autoIncrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-error"),
  { patch: true }
);

autoIncrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-react"),
  { patch: true }
);

autoIncrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-style"),
  { patch: true }
);

autoIncrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-suggestions"),
  { patch: true }
);

autoIncrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-ts"),
  { patch: true }
);
