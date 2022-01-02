module.exports = {
	root: true,
	extends: ['@petchkubbb/eslint-config-petchkubbb'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'no-unused-vars': 0,
		'react/prop-types': 0,
		'no-undef': 0,
		'no-console': 0,
		'arrow-body-style': [0, 'always'],
		'space-infix-ops': 2,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	}
}
