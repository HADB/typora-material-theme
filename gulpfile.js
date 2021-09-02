const gulp = require('gulp')
const fs = require('fs')
const concat = require('gulp-concat')
const rename = require('gulp-rename')

function build(done) {
    fs.readdirSync('./src/themes').map((file) => {
        return gulp
            .src([`./src/themes/${file}`, './src/base.css'])
            .pipe(concat(file))
            .pipe(rename({ dirname: '/' }))
            .pipe(gulp.dest('./dist/'))
    })
    done()
}

exports.default = build
