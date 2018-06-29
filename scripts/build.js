const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const cssmin = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const fs = require('fs-extra')
const plumber = require('gulp-plumber')
const config = require('./config')
const util = require('./utils')
const isProd = process.env.NODE_ENV === 'prod'
const buildDir = isProd ? config.dist : config.example

gulp.task('clean', () => {
    fs.emptyDirSync(buildDir)
})

gulp.task('copy', () => {
    gulp.src(config.src + '/**/*.@(js|json|wxml)')
        .pipe(gulp.dest(buildDir))
})

gulp.task('css', () => {
    let stream = gulp.src(config.src + '/**/*.less').pipe(plumber()).pipe(less()).pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    stream = isProd ? stream.pipe(cssmin()) : stream
    return stream.pipe(rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest(buildDir))
})


// let cachedComponentDir = util.getPkgDir()
if (!isProd) {
    var watcher = gulp.watch(config.src + '/**/*.*', ['build']);
    watcher.on('change', function(event) {
        // let currentComponentDir = util.getPkgDir()
        // if (cachedComponentDir.length > currentComponentDir.length) {
        //     let diffComponent = getDiff(currentComponentDir, cachedComponentDir)
        // } 
        // else if (cachedComponentDir.length < currentComponentDir.length) {
        //     let diffComponent = getDiff(cachedComponentDir, currentComponentDir)
        // }
    });
}



// function getDiff(shortArr = [], longArr = []) {
//     return longArr.filter(v => !shortArr.includes(v))
// }

gulp.task('build', ['clean', 'copy', 'css'], () => {
    util.log(isProd ? '打包模式:打包完成' : '开发模式:开始监听组件变化')
})
