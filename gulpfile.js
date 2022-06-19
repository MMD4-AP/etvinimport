const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minifier');

gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});

gulp.task('minifyJS', function() {
    return gulp.src('src/**/*.js').pipe(minify({
      minify: true,
      minifyJS: {
        sourceMap: true
      },
    }))
    .pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
    gulp.watch('src/assets/**/*.js', gulp.series('minifyJS'));
});



gulp.task('default', gulp.series('watch'));

