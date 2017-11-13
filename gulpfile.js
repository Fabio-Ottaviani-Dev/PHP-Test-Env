var gulp      = require('gulp');
var phpspec   = require('gulp-phpspec');
var run       = require('gulp-run');
var notify    = require('gulp-notify');

// single
// var src       = ' ../project-dir/spec/singleFile.php';

// all
var src       = '';

var run       = './bin/phpspec run' + src;
var options   = {verbose: 'v', notify: true, clear: true, formatter: 'pretty'};


gulp.task('test', function() {
  gulp.src('')
  .pipe(phpspec(run, options))
  .on('error', notify.onError({
    title: 'Crap',
    message: 'Your tests failed!',
    icon: __dirname + '/_icons/ko.png'
    ,sound: 'Basso'
  }))
  .pipe(notify({
    title: 'Success',
    message: 'All tests have returned green!',
    icon: __dirname + '/_icons/ok.png'
  }));
});

gulp.task('watch', function() {
  gulp.watch(['spec/**/*.php', 'src/**/*.php'], ['test']);
});

gulp.task('default', ['test', 'watch']);
