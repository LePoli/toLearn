var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('js', function(){
	gulp.src('src/js/*.js')
	.pipe(concat('compiled.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
});

gulp.task('style', function(){
	// aca va la tarea
	gulp.src('src/css/main.css')
	// transformar los sass
	.pipe(sass().on('error', sass.logError))
	// minimizarlo
	.pipe(minifyCSS())
	// dejarlo en archivo de destino
	.pipe(concat('style.min.css'))
	// dejarlo en carpeta dist/css
	.pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['script', 'style']);