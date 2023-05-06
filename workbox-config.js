module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,jpg,html,png,txt,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};