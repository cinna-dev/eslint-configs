const path = require("path");
const PackageController = require('./PackageController.cjs');

const errorConfigController = new PackageController(path.join(
		"..",
	 'packages',
	  'eslint-config-import'
	)) 
	// .checkUpdate()


	console.log(errorConfigController.name);
	console.log(errorConfigController.version);
	console.log(errorConfigController.hasChanges);
// errorConfigController.createCache();
