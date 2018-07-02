const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const cssmin = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const fs = require('fs-extra')
const plumber = require('gulp-plumber')
const config = require('./config')
const util = require('./utils')
const mode = process.env.NODE_ENV
const isProd = (mode === 'prod')
const buildDir = isProd ? config.dist : config.example

util.log(buildDir)

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

if (mode === "dev") {
    var watcher = gulp.watch(config.src + '/**/*', ['build']);
    watcher.on('change', function(event) {
        console.log(event.type)
    });
}

gulp.task('build', ['clean', 'copy', 'css'], () => {
    if (mode === 'dev') {
        util.log('开发模式:开始监听组件变化')
    }
    else if (mode === 'prod') {
        util.log('打包模式:打包完成')
    }
})
