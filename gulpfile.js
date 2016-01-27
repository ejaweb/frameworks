var gulp   = require('gulp');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default', function() {});

var distDir = './dist';
var sassDir = './scss/**/*.scss';

gulp.task('sass', function() {
  gulp.src(sassDir)
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(rename({extname:'.min.css'}))
    .pipe(gulp.dest(distDir));
});

gulp.task('sass:watch', function() {
  gulp.watch(sassDir, ['sass']);
});
