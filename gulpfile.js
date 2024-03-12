const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function compileSass() {
    return gulp.src('./css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/'));
}

function watchFiles() {
    gulp.watch('./css/**/*.scss', compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);
