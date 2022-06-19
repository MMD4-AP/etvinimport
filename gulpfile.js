const { watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gzip = require('gulp-gzip');

gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});
gulp.task('compress', function() {
    return gulp.src('../src/assets/js/*.js')
            .pipe(gzip({ extension: 'zip', gzipOptions: { level: 9 } }))
            .pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
    gulp.watch('src/assets/js/*.js', gulp.series('compress'));
});

gulp.task('default', gulp.series('watch'));

