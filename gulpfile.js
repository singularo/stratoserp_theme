var gulp = require('gulp');
var changed = require('gulp-changed');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

var SASS = 'scss';
var CSS = 'css';

gulp.task('sass', function () {
  return sass(SASS + '/**/*.scss', {
      compass: true
    })
    .on('error', sass.logError)
    .pipe(gulp.dest(CSS));
});

gulp.task('autoprefixer', ['sass'], function() {
  gulp.src(CSS + '/*.css')
    .pipe(autoprefixer({
        browsers: ['> 1%']
    }))
    .pipe(gulp.dest(CSS));
});

gulp.task('build', ['sass']);

gulp.task('watch', function() {
  gulp.watch(SASS + '/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'watch']);
