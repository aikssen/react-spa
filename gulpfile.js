var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var sourcemaps  = require('gulp-sourcemaps');



gulp.task('js:react', function () {
    return browserify({ entries: './assets/js/App.jsx', extensions: ['.jsx'], debug: true })
        .transform('babelify', { presets: ['es2015', 'stage-0', 'react'] })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js/'));
});


gulp.task('font-awesome:icons', function() {
    return gulp.src('./vendor/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});


gulp.task('bootstrap:icons', function() {
    return gulp.src('./vendor/bootstrap-sass/assets/fonts/bootstrap/**.*')
        .pipe(gulp.dest('./public/fonts'));
});


gulp.task('sass', function () {
    return gulp.src('./assets/styles/styles.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps',{addComment: false}))
        .pipe(gulp.dest('./public/css/'));
});


gulp.task('build', ['js:react', 'bootstrap:icons', 'font-awesome:icons','sass']);



gulp.task('watch', ['js:react','sass'], function () {
    gulp.watch('*.jsx', ['react']);
    gulp.watch('*.scss', ['sass']);
});

gulp.task('default', ['build','watch']);