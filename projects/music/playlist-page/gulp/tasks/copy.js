export const copy = () => {
	return app.gulp.src(app.path.src.files)

		.pipe(app.gulp.dest(app.path.build.files))

		.pipe(app.gulp.src(app.path.src.favicon))
		.pipe(app.gulp.dest(app.path.build.html))

		.pipe(app.gulp.src(app.path.src.faviconAppleTouch))
		.pipe(app.gulp.dest(app.path.build.html))

}