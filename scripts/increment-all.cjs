const incrementPackageVersion = require("./auto-increment-package-version.cjs");
const path = require("path");

let options = {
  major: false,
  minor: false,
  patch: false,
};

process.argv.forEach((val) => {
  options.patch ||= ["--patch", "-p"].includes(val);
  options.minor ||= ["--minor", "-mi"].includes(val);
  options.major ||= ["--major", "-ma"].includes(val);
});

incrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config"),
  options
);

incrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-error"),
  options
);

incrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-react"),
  options
);

incrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-style"),
  options
);

incrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-suggestions"),
  options
);

incrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-ts"),
  options
);

incrementPackageVersion(
  path.join(__dirname, "../packages/eslint-config-import"),
  options
);
