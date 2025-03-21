// const eslintConfigError = require("@cinna-dev/eslint-config-error");
// const eslintConfigSuggestions = require("@cinna-dev/eslint-config-suggestions");
// const {rules} = require("@cinna-dev/eslint-config-ts");
// const eslintConfigReact = require("@cinna-dev/eslint-config-react");
// const eslintConfigImport = require("@cinna-dev/eslint-config-import/config");
// const globals = require("globals");
//
// // const x ={
// // 	error,
// // 		suggestions  ,
// // 		ts,
// // 		errors,
// // 		react,
// // 		imports,
// // 		rule
// // }
// module.exports = function createConfig({
// 	error = false,
// 									   }  ) {
// 	/** @type { import("eslint").Linter.FlatConfig[] } */
// 	return [
// 		{
// 			languageOptions: {
// 				globals: {
// 					...globals.browser
// 				}
// 			}
// 		},
// 		...(error ? eslintConfigError : []),
// 		// ...(suggestions ? eslintConfigSuggestions : []),
// 		// ...(rule ? rules : []),
// 		// ...(react ? eslintConfigReact : []),
// 		// ...(imports ? eslintConfigImport : []),
// 	];
// }
