module.exports = {
	globDirectory: 'assets/',
	globPatterns: [
		'**/*.{jpg, html, json, js, css}'
	],
	swDest: 'assets/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};