module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,png,css,html,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};