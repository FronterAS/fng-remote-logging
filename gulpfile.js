'use strict';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

gulp.task('default', ['test', 'lint']);

gulp.task('test', function () {
    return gulp.src('file-list-will-be-read-from-karma.conf.js')
        .pipe(plugins.karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            throw err;
        });
});

gulp.task('lint', ['jshint', 'jscs']);

gulp.task('build', ['test', 'lint'], function () {
    return gulp.src('src/**/!(*\\.test).js')
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglify())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', ['karma-for-watch', 'lint'], function () {
    plugins.livereload.listen();
    return gulp.watch('**/*', ['karma-for-watch', 'lint'])
        .on('change', plugins.livereload.changed);
});

gulp.task('jshint', function () {
    return gulp.src(['src/**/*.js', 'example/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail'))
        .on('error', swallowError);
});

gulp.task('jscs', function () {
    return gulp.src(['src/**/*.js', 'example/**/*.js'])
        .pipe(plugins.jscs('.jscsrc'))
        .on('error', swallowError);
});

gulp.task('karma-for-watch', function () {
    //this does not break on errors
    return gulp.src('file-list-will-be-read-from-karma.conf.js')
        .pipe(plugins.karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', swallowError);
});

gulp.task('bower', function () {
    return plugins.bower()
        .pipe(gulp.dest('./bower_components'));
});

function swallowError (error) {
    console.error(error.toString());
    /* jshint validthis: true */
    this.emit('end');
}
