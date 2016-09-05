'use strict';
var gulp     = require('gulp');
var sass     = require('gulp-sass');
var pug      = require('gulp-pug');
var connect  = require('gulp-connect');

gulp.task('views', function () {
  gulp.src('./src/views/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./dist/'))
      .pipe(connect.reload())
});

gulp.task('stylesheet', function () {
  gulp.src('./src/stylesheet/sass/materialize.scss')
      .pipe(sass())
      .pipe(gulp.dest('./dist/css/'))
      .pipe(connect.reload())
});

gulp.task('watch', function () {
  gulp.watch('./src/stylesheet/sass/**/*', ['stylesheet']);
  gulp.watch('./src/views/**/*', ['views']);
});

gulp.task('server',function(){
  connect.server({
    name:'materialize learning',
    root:'./dist',
    livereload:'8080'
  })
})

gulp.task('build', ['stylesheet', 'views']);

gulp.task('default', ['watch', 'build','server']);
