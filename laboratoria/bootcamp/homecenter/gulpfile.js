var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	gulp.src('src/js/*.js')
		// detecta errores de JS
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		// concatenar archivos
		.pipe(concat('script.min.js'))
		// sacar espacios y comprimir
		.pipe(uglify())
		// se deja en carpeta dist
		.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function() {
	// tarea style
	gulp.src('src/sass/main.scss')
		// transformo de sass a css
		.pipe(sass().on('error', sass.logError))
		// se minimiza CSS genrado
		.pipe(minifyCSS())
		// se genera archivo
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('images', function() {
	// tarea images
	gulp.src('src/img/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
	gulp.watch('src/sass/**/*.scss', ['style']);
});

gulp.task('default', ['images', 'style', 'script']);