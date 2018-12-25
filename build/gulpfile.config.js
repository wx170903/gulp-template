const { host } = require('./netCheck')

var folder = {
  src: 'src/', // 源文件目录
  dist: 'dist/' // 文件处理目录
};

var distFiles = folder.dist + '**'; // 目标路径下的所有文件

var Config = {
  connect: {
    root: 'dist',
    livereload: true,
    port: 1234,
    host
  },
  src: folder.src,
  dist: folder.dist,
  distFiles: distFiles,
  html: {
    src: folder.src + 'pages/**/*.html',
    dist: folder.dist + 'pages/'
  },
  css: {
    src: folder.src + 'css/**/*.styl',
    dist: folder.dist + 'css/'
  },
  js: {
    src: folder.src + 'js/**/*.js',
    dist: folder.dist + 'js/'
  },
  images: {
    src: folder.src + 'images/**/*',
    dist: folder.dist + 'images/'
  },
  common: {
    src: folder.src + 'common/**/*',
    dist: folder.dist + 'common/'
  }
};

module.exports = Config;