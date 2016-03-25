/*
*/
//include gulp
var gulp = require('gulp');

//include jshint plugin
 var jshint = require('jshint');

//include ruby sass
var sass = require("gulp-ruby-sass")

//Jshint Task
gulp.task('jshint', function(){
	gulp.src('src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
gulp.task ('default', function(){
console.log('hello world!');
});
//sass task
gulp.task('styles', function() {
  return sass('src/styles/main.scss', { style: 'expanded' })
    .pipe(gulp.dest('src/styles/main.css'))
    
});