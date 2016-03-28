import gulp from 'gulp';
import ejs from 'gulp-ejs';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import fs from 'fs';
import PATH from './path';

gulp.task('ejs', () => {
  gulp.src([PATH.EJS_FULL, PATH.EJS_REMOVE])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(ejs({}, {ext: '.html'}))
  .pipe(gulp.dest(PATH.TEMP_EJS))
  .pipe(browserSync.stream());
})
