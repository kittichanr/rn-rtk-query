module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: ['@babel/plugin-proposal-export-default-from',
		['module-resolver', {
			root: ['.'],
			extensions: ['.js', '.ios.js', '.android.js', '.json', '.ts', '.tsx'],
		},
		],
	],
	env: {
		production: {
			plugins: ['transform-remove-console'],
		},
	},
}
