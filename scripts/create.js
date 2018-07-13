#!/usr/bin/env node
/**
 * @description 组件库辅助工具 快速生成组件初始文件 示例文件
 * @author jialong
 * @DateTime 2018/07/02
 */


const util = require('./utils')
const config = require('./config')
const fs = require('fs-extra')
const params = process.argv
if (params.length <= 2) {
    util.warn('please input your component name and description!')
    return
}
let componentName = process.argv[2]
let componentDes = process.argv[3]
let componentDirName = `${config.src}/${componentName}`
let expComponentDirName = `${config.example}/${componentName}`
let pageDirName = `${config.exampleDir}/pages/${componentName}`

util.log(`you will create ${componentName} component!`)

fs.readdir(componentDirName).then(res => {
    util.warn(`already exist ${componentName} component`)
}).catch(err => {
    util.log(`new component`)
    createComponent()
})

function createComponent() {
    fs.copy(config.tempPkg, componentDirName).then(res => {
        util.log(`${componentName} created!`)
    }).catch(err => {
        util.warn('create component error！')
    })
    fs.copy(config.tempPage, pageDirName).then(res => {
        util.log(`${componentName} example created!`)
        // modify app.json
        modifyAppJson()
        // modify index.json
        modifyPageJson()
        // modify des
        modifyDescribe()
        fs.writeFile(`${componentDirName}/index.wxml`, `<view>${componentName}</view>`, (err) => {
            if (err) util.log('modify wxml occured a error！')
            util.log('modify component wxml!')
        })  
        fs.writeFile(`${pageDirName}/index.wxml`, `<${componentName}></${componentName}>`, (err) => {
            if (err) util.log('modify example wxml occured a error！')
            util.log('modify example wxml!')
        })

    }).catch(err => {
        util.warn('create example error！')
    })
}

function modifyAppJson() {
    fs.readJson(`${config.exampleDir}/app.json`).then(obj => {
        obj.pages.push(`pages/${componentName}/index`)
        fs.writeJson(`${config.exampleDir}/app.json`, obj).then(res => {
            util.log('write success!')
        }).catch(err => {
            util.warn('write app.json occured a error！')
        })
    }).catch(err => {
        util.warn('read app.json occured a error!')
    })
}

function modifyPageJson() {
    fs.readJson(`${pageDirName}/index.json`).then(obj => {
        obj.usingComponents[`${componentName}`] = `../../components/${componentName}/index`
        fs.writeJson(`${pageDirName}/index.json`, obj).then(res => {
            util.log('write index.json success!')
        }).catch(err => {
            util.warn('write index.json occured a error！')
        })
    }).catch(err => {
        util.warn('read index.json occured a error!')
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
            util.log('modify des.js success！')
            util.log('finish!')
        })
    })
}





