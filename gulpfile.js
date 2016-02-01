var gulp   = require('gulp');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');

var distDir = './app/dist';
var sassDir = './app/scss/**/*.scss';

gulp.task('sass', function() {
  gulp.src(sassDir)
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(rename({extname:'.min.css'}))
    .pipe(gulp.dest(distDir));
});

gulp.task('sass:watch', function() {
  gulp.watch(sassDir, ['sass']);
});

gulp.task('default', ['sass']);