var gulp = require ('gulp');
var sass = require ('gulp-sass');
var please = require ('gulp-pleeease');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
    gulp.src(['scss/*.scss', '!scss/mixins.scss'])
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(please({
    optimizers: {
        "autoprefixer": { "browsers": ["Firefox 25", "Chrome 21", "Android 4"]}
    }}))
        .pipe(gulp.dest('./css'))
        .pipe(notify({message: 'SASS task complete'}));
});

gulp.task('default',['watch']);

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']).on('change', function(event){
        console.log('Le fichier ' + event.path + ' a ete modifie');
    })
});
