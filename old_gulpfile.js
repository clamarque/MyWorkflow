var gulp = require('gulp');
var sass = require('gulp-sass');
var please = require('gulp-pleeease');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('default', ['sass', 'pleeease']);// par défaut utilise 2 fonction sass et pleeease

gulp.task('sass', function () {
    gulp.src(['scss/*.scss', '!scss/mixins.scss'])
        .pipe(watch('scss/*.scss'))
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('scss/tmp-sassed'))
        .pipe(notify({message: 'SASS task complete'}));
});

var PleeeaseOptions = {
    optimizers: {
        "autoprefixer": { "browsers": ["Firefox 25", "Chrome 21", "Android 4"]}
    }
};

gulp.task('pleeease', function () {
    gulp.src('scss/tmp-sassed/*.css')
        .pipe(watch('scss/tmp-sassed/*.css'))
        .pipe(plumber())
        .pipe(please( 
            PleeeaseOptions
        ))
        .pipe(gulp.dest('./css'))
        .pipe(notify({message: 'Pleeease task complete'}));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss',['sass', 'pleeease']).on('change', function(event){
        console.log('Le fichier ' + event.path + ' a ete modifie');
    })
    gulp.watch('css/*.css').on('change', function(event){
        console.log('Le fichier ' + event.path + ' a ete modifie');
    })
});
