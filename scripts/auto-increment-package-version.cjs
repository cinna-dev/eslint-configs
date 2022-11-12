#!/usr/bin/env node
const fs = require("fs");
const npmjsApi = require("./npmjs-api.cjs");

// const INPUT_FILE_PATH = path.join(__dirname, "..", "package.json");

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

const incrementPackageVersion = async (
  path,
  { major: incrementMajor, minor: incrementMinor, patch: incrementPatch }
) => {
  try {
    path = path + "/package.json";
    const file = fs.readFileSync(path, "utf-8");
    const packageName = file.match(/"name":\s?"(.+)",/)[1];
    const module = await npmjsApi.fetch(packageName);

    let [_, major, minor, patch] =
      module["dist-tags"].latest.match(/(\d+)\.(\d+)\.(\d+)/);

    if (incrementMajor) major = +major + 1;
    if (incrementMinor) minor = +minor + 1;
    if (incrementPatch) patch = +patch + 1;

    const incrementedMinorVersionFile = file.replace(
      /("version": ")(\d+)\.(\d+)\.(\d+)(")/,
      `$1${major}.${minor}.${patch}$5`
    );

    fs.writeFileSync(path, incrementedMinorVersionFile);

    console.log(
      "version: " +
        module["dist-tags"].latest +
        " => " +
        `${major}.${minor}.${patch}`
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = incrementPackageVersion;
