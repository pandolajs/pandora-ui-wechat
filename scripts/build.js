const gulp = require('gulp')
const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] })
const rename = require('gulp-rename')
const cssmin = require('gulp-clean-css')
const fs = require('fs-extra')
const config = require('./config')
const util = require('./utils')
const isProd = process.env.NODE_ENV === 'prod'
const buildDir = isProd ? config.dist : config.example

gulp.task('clean', () => {
    fs.emptyDirSync(buildDir)
})

gulp.task('copy', () => {
    gulp.src(config.src + '/components/**/*.@(js|json|wxml|md)')
        .pipe(gulp.dest(buildDir))
})


gulp.task('css', () => {
    return gulp.src(config.src + '/components/**/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(cssmin())
        .pipe(rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest(buildDir))
})


let cachedComponentDir = util.getPkgDir()
if (!isProd) {
    var watcher = gulp.watch(config.src + '/**/*.*', ['build']);
    watcher.on('change', function(event) {
        let currentComponentDir = util.getPkgDir()
        if (cachedComponentDir.length > currentComponentDir.length) {

        } 
        else if (cachedComponentDir.length < currentComponentDir.length) {

        }
    });
}

gulp.task('build', ['clean', 'copy', 'css'])
