var gulp        = require('gulp');

var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var stringify = require('stringify');


gulp.task('js', function () {
	// app.js is your main JS file with all your module inclusions
	return browserify({entries: './js/index.js', debug: true})
		.transform("babelify", { presets: ["es2015"] })
		.transform("stringify", {
			appliesTo: { includeExtensions: ['.json'] },
			minify: true
		})
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./build/'));
});


gulp.task('sass', function () {
	return gulp.src('./sass/**/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['js', 'sass']);