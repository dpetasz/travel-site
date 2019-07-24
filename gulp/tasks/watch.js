const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(); //aby nie był wymagany w całym pakiecie to użyjemy cerate



gulp.task('watch', function () {

    // kod umożliwi nam otworzenie naszej strony po wpisaniu w lini poleceń gulp watch
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html', function () {
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('cssInject');
    })
});
//wszystko co się tutaj dzieje jest w unit 16 (7:00')
gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});