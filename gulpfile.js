var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    usemin = require('gulp-usemin'),
    livereload = require('gulp-livereload');

gulp.task('default', function() {
	 gulp.src('src/img/*.*').pipe(gulp.dest('build/img'));
    gulp.src('src/fonts/*.*').pipe(gulp.dest('build/fonts'));
    gulp.src('src/index.html')
        .pipe(usemin({
            js: ['concat'],
            css: ['concat'],
        }))
        .pipe(gulp.dest('build')).pipe(livereload());
   
});
