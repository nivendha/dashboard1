var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
      usemin = require('gulp-usemin');


gulp.task('default', function() {
     gulp.src('src/index.html')
        .pipe(usemin({
            js: ['concat'],
            css: ['concat'],
        }))
        .pipe(gulp.dest('build'));
});
