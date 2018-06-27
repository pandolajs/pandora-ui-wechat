const fs = require('fs')
const colors = require('colors')
const config = require('./config')
module.exports = {
    log(msg = '') {
        console.log(colors.green(msg))
    },
    warn(msg = '') {
        console.log(colors.red(msg))
    },
    getPkgDir() {
        return fs.readdirSync(config.src + '/components') || []
    }
}