const npmjsApi = require("./npmjs-api.cjs");

(async () => {
	const res = await npmjsApi.fetch('@cinna-dev/eslint-config-ts');

	console.log(res?.versions['1.0.9']);
})();
