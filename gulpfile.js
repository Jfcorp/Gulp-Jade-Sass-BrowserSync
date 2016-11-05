const gulp 					= require("gulp"),
			jade 					= require("gulp-jade"),
			sass 				 	= require("gulp-sass"),
			autoprefixer 	= require("gulp-autoprefixer"),
			browserSync  	= require('browser-sync').create()
			reload			 	= browserSync.reload;



gulp.task("sass", () => {
	return gulp.src('./sass/**/*.scss', ['sass'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./site/assets/css/'))
		.pipe(reload({stream: true}));
});

gulp.task('jade', () => {
	gulp.src('./pug/*.jade', ['jade'])
		.pipe(jade({
			//pretty: true
		}))
		.pipe(gulp.dest('./site/'))
		.pipe(reload({stream: true}))
});


gulp.task('serve', ['sass', 'jade'], () => {
	browserSync.init({
		//server: {
			//baseDir: "./"
		//},
		//startPath: "/site/"
		server: {
			proxy: "http://localhost/Gulp"
		},
		startPath: "./site/"
		port: 8080
	});

	gulp.watch('./sass/**/*.scss', ['sass']), reload;
	gulp.watch('./pug/**/*.jade', ['jade']), reload;
});

gulp.task('default', ['serve']);
