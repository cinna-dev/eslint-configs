const fs = require("fs");
const { minify } = require("terser");

const minifyFile = async (inputPath, exportPath, options = {}) => {
  try {
    const file = fs.readFileSync(inputPath, "utf-8");
		console.log(file);
    const { code } = await minify(file, options);
    fs.writeFileSync(exportPath, code);
  } catch (error) {
    console.error(error);
  }
};

module.exports = minifyFile;
