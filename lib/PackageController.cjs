const path = require("path");
const fs = require("fs");
const PackageBuilder = require("./PackageBuilder.cjs");

const DEFAULT_CONFIG = {
	cacheDir: '.cache',
	distPath: 'dist',
	srcPath: 'src',
};

const PACKAGE_NAME = 'package.json';

const comparFiles =
 (file1, file2) => file1 === file2;
	

const builder = new PackageBuilder();

class PackageController {
	constructor(path, config = {}) {
		if (!path) {
			throw new Error('needs a valid path to a npm package folder');
		}
		this._path = path;
		this._config = { ...DEFAULT_CONFIG, ...config }; 

		this._fileCache = {
			main: null,	
			package: null,
			mainCache: null,
		};
		this._builder = builder;
	}

	get name() {
		return this.packageFile.name;
	}

	get version() {
		const [major, minor, patch] = this.packageFile.version.split('.');
		return {major, minor, patch};
	}

	get srcFileName() {
		return this.packageFile.main.split('/')?.at(-1);
	}

	get files() {
		return this.packageFile.files;
	}

	get exports() {
		return this.packageFile.exports;
	}

	get main() {
		return this.packageFile.main;
	}

	get hasChanges() {
		try {
			let hasChanges = !this._isSrcAndCacheEqual();
			return hasChanges
		} catch(err) {
			console.error(err);
			return false;
		} 
	}

	get cachePath() {
		return path.join(__dirname, this._path, this._config.cacheDir);
	}

	get hasCache() {
		return !!this.cacheFiles;
	}

	get cacheFiles() {
		return fs.readdirSync(this._config.cacheDir);
	}

	get packageFile() {
		if (this._fileCache.package) {
			return this._fileCache.package;
		}
    const packageFile = JSON.parse(this._readFile(PACKAGE_NAME));
		this._fileCache.package = packageFile;
		return packageFile;
	}

	get mainFile() {
		if (this._fileCache.main) {
			return this._fileCache.main;
		}
    const main = this._readFile(this.main);
		this._fileCache.main = main;

		return main;
	}

	get cacheFiles() {
		if (this._fileCache.mainCache) {
			return this._fileCache.mainCache;
		}
    const mainCache = this._safeReadCache();
		this._fileCache.mainCache = mainCache;

		return mainCache;
	}

	async build() {
		try {
			const inputPath = path.join(__dirname, this._path, this._config.srcPath);
			const exportPath = path.join(__dirname, this._path, this._extractDirPath(this.main));
			await this._builder.build(inputPath, exportPath);
			console.log(`package ${this.name} has been builded successfully`);
		} catch (err) {
			console.error(`package ${this.name} build failed`);
			console.error(err);
		}
	}

	/** @deprecated */
	checkUpdate() {
		if (this.hasCache) {
			if (this.hasChanges) {
				this.incrementVersion({patch: true});
			}

			this._createCache();
		}
	}

	cache() {
		try {
			if (this.exports) {
				for (const filePath of Object.values(this.exports)) {
					const file = this._readFile(filePath);
					this._writeFileSafe(this._config.cacheDir, filePath)(file);
				}
			} else {
				const file = this._readFile(this.main);
				this._writeFileSafe(this._config.cacheDir, this.main )(file);
			}
			console.error('dist files have been cached')
		} catch {
			console.error('couldn\'t create cache')
		}
	}

	/**
	 * increment version number only if package has changes
	 */
	incrementVersionSafe(config) {
		if(this.hasChanges) {
			this.incrementVersion(config);
		}
	}

	incrementVersion( {
		  major: incrementMajor,
		  minor: incrementMinor,
			patch: incrementPatch
		}) {
		try {
			let { major, minor, patch } = this.version
	
			if (incrementMajor) major = +major + 1;
			if (incrementMinor) minor = +minor + 1;
			if (incrementPatch) patch = +patch + 1;

			const packageFile = {...this.packageFile};
			packageFile.version = `${major}.${minor}.${patch}`;

			this._writeFile(PACKAGE_NAME)(
				JSON.stringify(packageFile, null, 2)
			);
	
			console.log(
				"package: " + this.name + "\n" +
					"version: " +
					`${this.version.major}.${this.version.minor}.${this.version.patch}` +
					" => " +
					`${major}.${minor}.${patch}`
			);
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * check if the count of cache files equals the cont of src files
	 */
	_isCacheComplete() {
		const srcFiles = Object.keys(this._getSrcFiles());
		const cacheFiles = Object.keys(this._getCacheFiles());
		let isComplete = srcFiles.length === cacheFiles.length;
		return isComplete;
	}

	_isSrcAndCacheEqual() {
		const srcFiles = this._getSrcFiles();
		const cacheFiles = this._getCacheFiles();
		let areEqual = false;
		if (!this._isCacheComplete()) {
			throw Error('either dist or src is missing')
		}
		for (const [name, file] of Object.entries(srcFiles)) {
			const isEqual = file === cacheFiles[name];
			areEqual = isEqual;
			if (!isEqual) {
				break;
			}
		}
		return areEqual;
	}


	_getCacheFiles() {
		let files =  {};
		if (this.exports) {
			for (const filePath of Object.values(this.exports)) {
				const file = this._readFile(this._config.cacheDir, filePath);
				files = {...files , [filePath]: file};
			}
		} else {
			const file = this._readFile(this._config.cacheDir, this.main);
			files = {...files , [this.main]: file};
		}
		return files;
	}

	_getSrcFiles() {
		let files =  {};
		if (this.exports) {
			for (const filePath of Object.values(this.exports)) {
				const file = this._readFile(filePath);
				files = {...files , [filePath]: file};
			}
		} else {
			const file = this._readFile(this.main);
			files = {...files , [this.main]: file};
		}
		return files;
	}


	_joinPackagePath(... segments) {
		return path.join(this._path, ...segments);
	}

	_readFile(...segments) {
		try {
			return fs.readFileSync(
				path.join(__dirname, this._path, ...segments), "utf-8"
			);
		} catch(err) {
			// console.error('make sure this path:"%s"is correct', path.join(__dirname, this._path, ...segments));
			return '';
		}
	}

	_writeFile(...segments) {
		function writeFile(data) {
			return fs.writeFileSync(
				path.join(__dirname, this._path, ...segments), data
			);
		}

		return writeFile.bind(this);
	}

	/**
	 * extension of writeFile.
	 * creates the directory path if not existent before writing a file.
	 */
	_writeFileSafe(...segments) {
		function writeFile(data) {
			this._safeDirExcess(...segments);
			return fs.writeFileSync(
				path.join(__dirname, this._path, ...segments), data
			);
		}

		return writeFile.bind(this);
	}

	_existsPath(...segments) {
		return fs.existsSync(path.join(__dirname, this._path, ...segments));
	}

	_mkdir(...segments) {
		fs.mkdirSync(
			path.join(__dirname, this._path, ...segments), {recursive: true}
		);
	}

	_safeDirExcess(...segments) {
		let dirPath = path.join(...segments);
		dirPath &&= this._extractDirPath(dirPath)
		const cacheFolderExists = this._existsPath(dirPath);
		if (!cacheFolderExists) { 
			this._mkdir(dirPath)
		} 
	}

	/** @deprecated */
	_createCacheFolder() {
		const cacheFolderExists = this._existsPath(this._config.cacheDir);

		if (!cacheFolderExists) { 
			this._mkdir(this._config.cacheDir)
		}
	}

	_extractDirPath(path) {
		 return path.replace(/(\/|\\)[a-zA-Z]+\.(js|mjs|cjs)/, '');
	}

}


module.exports = PackageController;

//"name": "@cinna-dev/eslint-config-error",
//"version": "1.0.14",
