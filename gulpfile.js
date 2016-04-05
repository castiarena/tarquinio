var gulp = require('gulp'),
    wath = require('gulp-watch'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    fs = require('fs');

gulp.task('sass',function(){
    gulp.src('src/sass/style.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('src/css'));
});

gulp.task('font',function(){
    gulp.src('bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('src/fonts'));
});

gulp.task('gmap',function(){
    gulp.src('node_modules/gmap-component/dist/js/gmap.min.js')
        .pipe(gulp.dest('src/js'));

    gulp.src('node_modules/gmap-component/src/sass/_gmap.scss')
        .pipe(concat('gmap.css'))
        .pipe(gulp.dest('src/css'));
});


gulp.task('dist',function(){
    gulp.src('src/assets/*').pipe(gulp.dest('dist/assets'));
    gulp.src('src/css/*').pipe(gulp.dest('dist/css'));
    gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'));
    gulp.src('src/js/*').pipe(gulp.dest('dist/js'));
    gulp.src('src/index.html').pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
    gulp.watch('src/sass/**/*.scss',['sass']);
});