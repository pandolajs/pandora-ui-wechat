#!/usr/bin/env node

const util = require('./utils')
const config = require('./config')
const fs = require('fs-extra')
let params = process.argv
if (params.length <= 2) {
    util.warn('please input your component name and describe!')
}
let componentName = process.argv[2]
let componentDes = process.argv[3]
util.log(`you will create ${componentName} component!`)
fs.readdir(`${config.src}/${componentName}`).then(res => {
    util.warn(`already exist ${componentName} component`)
}).catch(err => {
    util.log(`new component`)
    createComponent()
})

function createComponent() {
    fs.copy(config.tempPkg, `${config.src}/${componentName}`).then(res => {
        util.log(`${componentName} created!`)
    }).catch(err => {
        util.warn('create component error！')
    })
    util.log(config.tempPage, `${config.exampleDir}/pages/${componentName}`)
    fs.copy(config.tempPage, `${config.exampleDir}/pages/${componentName}`).then(res => {
        util.log(`${componentName} example created!`)
        // modify app.json
        writeAppJson()
        // modify des
        modifyDescribe()
    }).catch(err => {
        util.warn('create example error！')
    })
}

function writeAppJson() {
    fs.readJson(`${config.exampleDir}/app.json`).then(obj => {
        let nameArr = [`pages/${componentName}/index`]
        obj.pages = nameArr.concat(obj.pages)
        fs.writeJson(`${config.exampleDir}/app.json`, obj).then(res => {
            util.log('write success!')
        }).catch(err => {
            util.warn('write app.json occured a error！')
        })
    }).catch(err => {
        util.warn('read app.json occured a error!')
    })
}

function modifyDescribe() {
    fs.readFile(`${config.exampleDir}/des.js`, 'utf8', (err, res) => {
        if (err) util.warn('read des.js occured a error!')
        let resStr = res.replace(/export\s*default/, '')
            resStr = resStr.replace(/\'/gm, '"')
        let desArr = JSON.parse(resStr.trim())
        desArr.push({
            'name': componentName,
            'des': componentDes,
            'url': `/pages/${componentName}/index`
        })
        fs.writeFile(`${config.exampleDir}/des.js`, `export default ${JSON.stringify(desArr, null, 4)}`, (err) => {
            if (err) util.warn('write des.js occured a error！')
            util.log('write des.js success！')
            util.log('finish!')
        })
    })
}