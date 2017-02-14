var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var gulp_concat = require("gulp-concat");
var gulp_rename = require("gulp-rename");
var gulp_scss = require('gulp-sass');
 

gulp.task('default', function() {
    gulp.src('src/app/**/*.scss')
        .pipe(gulp_scss())
        .pipe(gulp_concat("concat.css"))
        .pipe(uglifycss({
          "maxLineLen": 100000,
          "uglyComments": true
        }))
        .pipe(gulp_rename("styles.css"))
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
	gulp.watch('src/app/**/*.scss',['default']);
});






