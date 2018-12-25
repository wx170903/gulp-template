var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var gulpSequence = require('gulp-sequence');
var opn = require('opn');
// var cssnano = require('cssnano');
// var pxtorem = require('postcss-pxtorem');
var Config = require('./gulpfile.config');
var { getPort } = require('./netCheck');


function dev() {
  // 处理端port及host
  gulp.task('checkNet', async function () {
    Config.connect.port = await getPort()
    return Config.connect.port
  })

  gulp.task('connect', function () {
    connect.server(Config.connect);
  });

  gulp.task('html:dev', function () {
    gulp.src(Config.html.src)
      .pipe(plumber())
      .pipe(gulp.dest(Config.html.dist))
      .pipe(connect.reload());
  })

  gulp.task('css:dev', function () {
    var postCssOpts = [
      autoprefixer({
        browsers: ['last 2 versions', '> 2%']
      }),
      // pxtorem({
      //   rootValue: 75,
      //   unitPrecision: 5,
      //   propList: ["*"]
      // }),
      // cssnano
    ];

    gulp.src(Config.css.src)
      .pipe(plumber())
      .pipe(stylus())
      .pipe(postcss(postCssOpts))
      .pipe(gulp.dest(Config.css.dist))
      .pipe(connect.reload());
  });

  gulp.task('images:dev', function () {
    gulp.src(Config.images.src)
      .pipe(plumber())
      .pipe(gulp.dest(Config.images.dist))
      .pipe(connect.reload());
  });

  gulp.task('js:dev', function () {
    gulp.src(Config.js.src)
      .pipe(plumber())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(gulp.dest(Config.js.dist))
      .pipe(connect.reload());
  });

  gulp.task('common:dev', function () {
    gulp.src(Config.common.src)
      .pipe(plumber())
      .pipe(gulp.dest(Config.common.dist))
      .pipe(connect.reload());
  });

  gulp.task('opn', function () {
    const {host, port} = Config.connect;
    const url = `http://${host}:${port}/pages`
    opn(url)
  })

  gulp.task('watch', function () {
    gulp.watch([Config.html.src], ['html:dev']);
    gulp.watch([Config.css.src], ['css:dev']);
    gulp.watch([Config.images.src], ['images:dev']);
    gulp.watch([Config.js.src], ['js:dev']);
    gulp.watch([Config.common.src], ['common:dev']);
  });

  gulp.task('dev', gulpSequence('checkNet', ['connect', 'watch', 'html:dev', 'css:dev', 'images:dev', 'js:dev', 'common:dev'], 'opn'));
}

module.exports = dev;