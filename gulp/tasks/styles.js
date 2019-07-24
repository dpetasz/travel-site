const gulp = require('gulp'),
    postcss = require('gulp-postcss'), //filtr do css który przekształca nam do normalnego css
    autoprefixer = require('autoprefixer'), //filt rozbija nam na prefiksy to co to używa np column
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'); //ospowiada za media czyli za skoalowanie media widoków telefonów tablet i desctop


gulp.task('styles', function () {
    //tutaj pobiera plik który robi kopię do innego pliku jeżeli wprowadzimy jakieś zmiany bo obserwujemy to za pomocą watch
    //jezeli nie mamy pliku oraz foldru który podaliśmy w pipe to automatycznie nam utworzy więć nie musimy się tym przejmowac
    return gulp.src('./app/assets/styles/styles.css') //teraz możemy dodawać filtry a na końcu przekaże nam do pliku który wskazaliśmy
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', (errorInfo) => {
            // tutaj jest wyświetlanie o ewentualnych błędach
            console.log(errorInfo.toString());
            // tutaj jest kod odpowiadający za błędy gdyby się pojawiły i wtedy nie przestaje nam działać aktualizacja
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});