const fs = require("fs");

const SECTION_TITLE = "## Table of Content";
const EMOJI = {
  CROSS: "&#10060;",
  WARNING: "&#9888;",
  HIGH_VOLTAGE: "&#128498;",
};
const TABLE_HEAD = `
| Rule | Alert |
| ---- | ----- |
`;

// "...":"..." or "...":["...",...]
const RULE_EXTRACTION_REGEX =
  /"[^:{}[\]]+":\s?"\w+"|"[^:{}[\]]+":\s?\["[^:{}[\],]+/g;

const extractRules = (path) => {
  const file = fs.readFileSync(path, "utf-8");
  console.log(file);
  const res = file.match(RULE_EXTRACTION_REGEX);

  console.log(res);

  return res?.reduce((acc, item) => {
    let [rule, code] = item.split(":");

    if (code.includes("[")) {
      code = code.split(",")[0].replace(/\[|\]/g, "");
    }

    return {
      ...acc,
      [rule.replaceAll(/@typescript-eslint\/|\'/g, "")]: parseToIcon(code),
    };
  }, {});
};

const parseToIcon = (alert) => {
  switch (alert) {
    case "'error'":
      return EMOJI.HIGH_VOLTAGE;
    case "'warn'":
      return EMOJI.WARNING;
    case "'off'":
      return EMOJI.CROSS;
    default:
      return alert;
  }
};

const parseTableBody = (rules) => {
  return Object.entries(rules).reduce(
    (acc, [rule, code]) => acc + `| ${rule} | ${code} |\n`,
    ""
  );
};

const createTable = (rules) => {
  const body = parseTableBody(rules);
  return TABLE_HEAD + body;
};

const createRuleTable = (inputFilePath, outputFilePath) => {
  const readme = fs.readFileSync(outputFilePath, "utf-8");

  console.log(inputFilePath);
  const clearedReadme = readme.replace(
    /\n## Table of Content\n\n[\|\s\/\w\-\"\'\,]+/g,
    ""
  );

  console.log("readme::: ", readme);
  const rules = extractRules(inputFilePath);

  console.log("rules::: ", rules);
  const table = createTable(rules);

  const newReadme = clearedReadme + "\n" + SECTION_TITLE + "\n" + table;

  fs.writeFileSync(outputFilePath, newReadme);
};

module.exports = createRuleTable;
