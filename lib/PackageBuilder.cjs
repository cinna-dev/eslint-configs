const fs = require("fs/promises");
const fss = require("fs");
const path = require("path");
// const { minify } = require("terser");
const minify = require("babel-minify");

class PackageBuilder {
	constructor(minifier = minify, options = {}) {
		this._minifier = minifier;
		this._options = options;
	}

	async build(inputPath, exportPath)  {
	  try {
			const fileNames = await fs.readdir(inputPath);
			const distExists = await fss.existsSync(exportPath);
			if (!distExists) {
				fs.mkdir(exportPath);
			}
				for (const fileName of fileNames) {
					const file = await fs.readFile(inputPath + '/' + fileName, "utf-8");
					const { code } = await this._minifier(file, this._options);
					await fs.writeFile(exportPath + '/' + fileName, code);
				}
		} catch (error) {
			console.error(error);
		}
	};
}

module.exports = PackageBuilder;
