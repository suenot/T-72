'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gutil = require('gulp-util');

var serverOpen = false;
var reloadBrowser = false;
if(gutil.env.open === true) {
	serverOpen = true;
};
if(gutil.env.live === true) {
	reloadBrowser = true;
};
if(gutil.env.prefix == true) {

}

gulp.task('server', function() {
	browserSync({
		server: {
			baseDir: '.'
		},
		notify: false,
		scrollProportionally: false,
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		},
		open: serverOpen,
		codeSync: reloadBrowser
	});
});