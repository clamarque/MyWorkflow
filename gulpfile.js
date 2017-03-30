// Requis
var gulp = require('gulp');
var mkdirp = require('mkdirp');
var fs = require('fs');
const imagemin = require('gulp-imagemin');

// Include plugins
var plugins = require('gulp-load-plugins')();

// Path
var source ='./assets'; 
var destination = './public';
var app = "workflow_";
const repo = "https://github.com/clamarque/workflow_.git"; 

// Checking exists folders (optional)
if (!fs.existsSync(source)){
    mkdirp('./assets/scss/', function(err){
        console.log(err)
    })
}
else if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination)
}

//  Task "BUILD"
gulp.task('sass', function () {
    return gulp.src([ source + '/scss/*.scss', '!scss/mixins.scss'])
        .pipe(plugins.plumber())
        .pipe(plugins.sass({ errLogToConsole: true }))
        .pipe(plugins.csscomb())
        .pipe(plugins.cssbeautify({indent: ' '}))
       /* .pipe(plugins.uncss({
            html: []
        }))
        */
        .pipe(gulp.dest(destination))
        .pipe(plugins.notify({message: 'SASS task complete' }));
});

gulp.task('optimization', function () {
    return gulp.src(source + '/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(destination))
        .pipe(plugins.notify({message: 'Optimized images'}))
})

// Task "MINIFY"
gulp.task('minify', function () {
    setTimeout(function(){
    return gulp.src(destination + '/*.css')
        .pipe(plugins.plumber())
        .pipe(plugins.pleeease({
            optimizers: {
                "autoprefixer": { "browsers": ["Firefox 25", "Chrome 21", "Android 4"] }
            }
        }))
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destination))
        .pipe(plugins.notify({message: 'Minified files'}))
    }, 10000)
});

// Task "build"
gulp.task('build', ['sass']);

// Task "prod"
gulp.task('prod', ['build', 'optimization', 'minify']);

gulp.task('watch', function () {
    gulp.watch(source + '/scss/*.scss', ['sass']).on('change', function (event) {
        console.log('File ' + event.path + ' was been updated');
    })
});

gulp.task('default', ['watch']);