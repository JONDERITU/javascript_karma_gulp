/*
*/
//include gulp
var gulp = require('gulp');

//include jshint plugin
var jshint = require('jshint');

//Jshint Task
gulp.task('jshint', function(){
	gulp.src('/src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
gulp.task ('default', function(){
console.log('hello world!');
});