const { program } = require('commander');
const path = require("path");
const fs = require("fs");
const PackageController = require('./PackageController.cjs');
const { log } = require('console');

program
	.name('Workspaces Observer')
  .description('CLI to observer and manage mono-repo changes')
  // .version('0.0.1')
  .option('-s, --changes', 'show changes', false)
  .option('-n, --name', 'show name', false)
  .option('-v, --version', 'show version', false)
  .option('-p, --package', 'directory containing npm packages. defaults to "packages"', 'packages')
  .option('-d, --dist', 'path to the distribution directory. defaults to "dist"', 'dist')
  .option('-s, --src', 'path to the source directory. defaults to "src"', 'src')
  .option('-b, --build', 'build package', false)
  .option('-i, --increment', 'increment package version if changes have been detected', false)
  .option('-c, --cache', 'create cache of the dist directory', false)

program.parse();

const options = program.opts();
const dir = options.package 
const dirPath = path.join(__dirname, '..', dir);
const packageNames  = program.args;
const packageDirs = fs.readdirSync(dirPath);

const packageControllers= [];

const pgkCOptions = {
	dist: options.dist
};

// init packages
const allPackages = packageNames[0] === '.';
if (allPackages) {
	for (const packageDir of packageDirs) {
		packageControllers.push(new PackageController(
			path.join("..", dir, packageDir),
			pgkCOptions
		));
	}
} else {
	for (const packageDir of packageDirs) {
		const packageController = new PackageController(
			path.join("..", dir, packageDir),
			pgkCOptions
			);
		const isWantedPackage = packageNames.includes(packageController.name)
		if (isWantedPackage) {
			packageControllers.push(packageController);
		}
	}
}

// execute
for (const packageController of packageControllers) {
	if (options.name) {
		console.log(`package name: ${packageController.name}`);
	}
	if (options.version) {
		const version = packageController.version;
		console.log(`package version: ${version.major}.${version.minor}.${version.patch}`);
	}
	if (options.changes) {
		console.log(`has changes:  ${packageController.hasChanges}`);
	}
	if (options.build) {
		packageController.build();
		console.log('build is async')
	}
	if (options.increment) {
		packageController.incrementVersionSafe({patch: true});
	}
	if (options.cache) {
		packageController.cache();
	}
}

// console.log(program.args, options);
