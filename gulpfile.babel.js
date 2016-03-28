import gulp from 'gulp';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
import PATH from './gulp/path';
requireDir('./gulp');

gulp.task('build', ['ejs', 'js', 'css']);

gulp.task('default', () => {
    browserSync.init({ server: { baseDir: "./template" }});
    gulp.watch(PATH.EJS_FULL, ['ejs']);
    gulp.watch(PATH.CSS_FULL, ['css']);
    gulp.watch(PATH.JS_FULL, ['js']);
});
