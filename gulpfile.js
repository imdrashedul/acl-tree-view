const gulp          = require('gulp');
const sass          = require('gulp-sass');
const browserSync   = require('browser-sync').create();
const useref        = require('gulp-useref');
const uglify        = require('gulp-uglify');
const gulpIf        = require('gulp-if');
const cssnano       = require('gulp-cssnano');
const babel         = require('gulp-babel');
const plumber       = require('gulp-plumber');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: ['./dist', './src/plugin/']
        },
    });

    gulp.watch("src/scss/**/*.scss", gulp.series(['sass']));
    gulp.watch("src/js/**/*.js", gulp.series(['jsbuild']));
    gulp.watch(["src/js/**/*.js", "src/css/**/*.css", "src/*.html"], gulp.series(['production']));
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("dist/js/**/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('jsbuild', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: [
        ['@babel/env', { modules: false }],
      ]
    }))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('production', function(){
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.series(['jsbuild', 'sass', 'production', 'serve']));

