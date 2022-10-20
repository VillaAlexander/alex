module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,ico,mp4,jpg,css,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};