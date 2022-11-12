const fs = require("fs");
const { minify } = require("terser");

const minifyFile = async (inputPath, exportPath, options) => {
  try {
    const configErrorFile = fs.readFileSync(inputPath, "utf-8");
    const { code } = await minify(configErrorFile, options);
    fs.writeFileSync(exportPath, code);
  } catch (error) {
    console.error(error);
  }
};

module.exports = minifyFile;
