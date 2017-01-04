var gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename');

// uglify
gulp.task('minify', function () {
   gulp.src(['js/*.js','!js/*.min.js'])
      .pipe(uglify())
      .pipe(rename({suffix:'.min'}))
      .pipe(gulp.dest('build'))
});