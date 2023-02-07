const fs = require("fs/promises");
const { minify } = require("terser");

const minifyFile = async (
	inputDirPath = [],
	exportDirPath,
	options = {}
		) => {
  try {
    const fileNames = await fs.readdir(inputDirPath);
			for (const fileName of fileNames) {
				const file = await fs.readFile(inputDirPath + '/' + fileName, "utf-8");
			  const { code } = await minify(file, options);
				await fs.writeFile(exportDirPath + '/' + fileName, code);
			}
  } catch (error) {
    console.error(error);
  }
};

module.exports = minifyFile;
