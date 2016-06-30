
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var ejs = require("gulp-ejs");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var gutil = require('gulp-util');

// ... variables
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
  // outputStyle: 'compressed'
};
var autoprefixerOptions = {
  // browsers: ['Firefox < 20']
};


gulp.task('serve', ['sass', 'ejs', 'scripts'], function() {

    browserSync.init({
        server: "./"
    });

    // gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('./ejs/**/*.ejs', ['ejs']);
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch("./js/*.js", ['scripts']);
});


gulp.task('ejs', function() {
        return gulp.src("./ejs/index.ejs")
        .pipe(ejs({
    		msg: 'Hello Gulp!'
    	}).on('error', gutil.log))
        .pipe(rename('index.html'))
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});


gulp.task('sass', function() {
    return gulp.src("./sass/**/*.scss")
        // .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        // .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
