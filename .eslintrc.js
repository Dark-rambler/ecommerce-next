module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2021, // ES12 (ES2021)
		sourceType: 'module',
	},
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	plugins: ['import'],
	rules: {
		// Aquí puedes agregar o modificar reglas según tus necesidades
		'indent': ['error', 'tab'], // Usa tabulación con 1 tab
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
	},
};
