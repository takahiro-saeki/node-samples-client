import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import PATH from './path';

gulp.task('js', () => {
  browserify({
    entries: ['./assets/js/common.js']
  })
  .bundle()
  .on('error', function(err) {
    return notify().write(err);
  })
  .pipe(source('./template/js/main.js'))
  .pipe(buffer())
  .pipe(gulp.dest(PATH.TEMP_JS))
  .pipe(browserSync.stream());
});
