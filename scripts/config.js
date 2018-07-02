const path = require('path')

module.exports = {
	dist: path.resolve(__dirname, '../dist'),
	src: path.resolve(__dirname, '../src'),
	example: path.resolve(__dirname, '../example/components'),
	exampleDir: path.resolve(__dirname, '../example'),
	tempPkg: path.resolve(__dirname, '../.temp/component'),
	tempPage: path.resolve(__dirname, '../.temp/page')
}