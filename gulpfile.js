var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('assets/scss/**/*.scss', { base: './' })
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace('scss', 'css'),
            path.basename += '.min';
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(''))
});
 
gulp.task('js', function(){
    gulp.src('assets/js/project.js', { base: "./" })
        .pipe(include())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(uglify())
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('assets/js/project.js', ['js']);
});