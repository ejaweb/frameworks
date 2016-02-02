var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    clean  = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache');

var app = {
  dist : './app/dist',
  css  : './app/components/**/*.scss',
  html : './app/components/**/*.html',
  js   : ['./app/app.js', './app/components/**/*.js']
};

var vendor = {
  css: [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
  ],
  js: [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/angular/angular.min.js'
  ]
};

// UTILITY TASKS
gulp.task('clean', function() {
  return gulp.src(app.dist, {read:false})
    .pipe(clean());
});

// VENDOR CSS TASKS
gulp.task('vendor:css', function() {
  return gulp.src(vendor.css)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(app.dist));
});

// VENDOR JS TASKS
gulp.task('vendor:js', function() {
  return gulp.src(vendor.js)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(app.dist));
});

// APP CSS TASKS
gulp.task('app:css', function() {
  return gulp.src(app.css)
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest(app.dist));
});

// APP JS TASKS
gulp.task('app:js', function() {
  return gulp.src(app.js)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(app.dist));
});

// APP HTML TASKS
gulp.task('app:html', function() {
  return gulp.src(app.html)
    .pipe(templateCache({module:'eja'}))
    .pipe(gulp.dest(app.dist));
});

gulp.task('default', ['clean','vendor:css','app:css','vendor:js','app:js','app:html']);