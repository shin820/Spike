var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// uglify
gulp.task('minify', function () {
   gulp.src(['js/*.js','!js/*.min.js'])
      .pipe(uglify())
      .pipe(rename({suffix:'.min'}))
      .pipe(gulp.dest('build'))
      .pipe(notify({message:'minify task complete.'}))
});

// jshint
gulp.task('jshint', function () {
   gulp.src(['js/*.js','!js/*.min.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(notify({message:'jshint task complete.'}))
});

// concat
gulp.task('concat', function () {
   gulp.src(['js/*.js','!js/*.min.js'])
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build'))
      .pipe(notify({message:'concat task complete.'}))
});

// cleanup
gulp.task('cleanup',function(){
    return del(['build']);
});

// watch
gulp.task('watch',function(){
    gulp.watch('js/*.js',['minify','concat'])
})