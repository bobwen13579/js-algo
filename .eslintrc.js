module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		commonjs: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		App: 'writable',
		Page: 'writable',
		Component: 'writable',
		Behavior: 'writable',
		wx: 'writable',
		getApp: 'writable',
		getCurrentPages: 'writable',
	},
	parserOptions: {
		ecmaVersion: 2018,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'no-unused-vars': 'off',
		'no-mixed-spaces-and-tabs': 'off',
	},
};
