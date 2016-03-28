import gulp from 'gulp';
import postcss from 'gulp-postcss';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import PATH from './path';

gulp.task('css', () => {
  let processors = [
    require('autoprefixer')({browsers: 'last 2 versions'}),
    require('precss')(),
    require('postcss-size')(),
    require('postcss-media-minmax')()
  ];
  return gulp.src(PATH.CSS)
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(postcss(processors))
  .pipe(gulp.dest(PATH.TEMP_CSS))
  .pipe(browserSync.stream());
});
