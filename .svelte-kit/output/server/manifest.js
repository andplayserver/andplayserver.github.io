export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","imagen.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DriRjHtX.js",app:"_app/immutable/entry/app.DEgV3X6Z.js",imports:["_app/immutable/entry/start.DriRjHtX.js","_app/immutable/chunks/sqHSvigP.js","_app/immutable/chunks/BpeKFQjq.js","_app/immutable/chunks/CKz58RzB.js","_app/immutable/entry/app.DEgV3X6Z.js","_app/immutable/chunks/BpeKFQjq.js","_app/immutable/chunks/0S_ZWfQm.js","_app/immutable/chunks/DvjQHv06.js","_app/immutable/chunks/CKz58RzB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
