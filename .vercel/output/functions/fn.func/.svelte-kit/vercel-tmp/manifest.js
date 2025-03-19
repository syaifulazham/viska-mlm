export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/fefet-bg.jpg","images/fefet-logo-white-ii.png","images/fefet-logo-white.png","images/fefet-logo.png","images/hero-malaysia.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BOMZQaRs.js",app:"_app/immutable/entry/app.DnJ0cZrk.js",imports:["_app/immutable/entry/start.BOMZQaRs.js","_app/immutable/chunks/Cfye4eAq.js","_app/immutable/chunks/49846gV3.js","_app/immutable/chunks/Bt3JzDco.js","_app/immutable/entry/app.DnJ0cZrk.js","_app/immutable/chunks/49846gV3.js","_app/immutable/chunks/uxCHllH0.js","_app/immutable/chunks/BhygiytR.js","_app/immutable/chunks/7i1PPlP5.js","_app/immutable/chunks/Bt3JzDco.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/auth/login/_server.ts.js'))
			},
			{
				id: "/api/auth/magic-link",
				pattern: /^\/api\/auth\/magic-link\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/auth/magic-link/_server.ts.js'))
			},
			{
				id: "/api/auth/register",
				pattern: /^\/api\/auth\/register\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/auth/register/_server.ts.js'))
			},
			{
				id: "/api/auth/verify",
				pattern: /^\/api\/auth\/verify\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/auth/verify/_server.ts.js'))
			},
			{
				id: "/my",
				pattern: /^\/my\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/my/auth/login",
				pattern: /^\/my\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/my/auth/register",
				pattern: /^\/my\/auth\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/my/auth/verification",
				pattern: /^\/my\/auth\/verification\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/my/dashboard",
				pattern: /^\/my\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
