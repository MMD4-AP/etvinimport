const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});
gulp.task('purgecss', () => {
    return gulp.src('styles/*.scss')
        .pipe(purgecss({
            content: ['sections/*.liquid', 'snippets/*.liquid']
        }))
        .pipe(gulp.dest('templates/customers'))
});
gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass', 'purgecss'));
});