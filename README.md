# gulp template
一个简单的gulp模板，用来写一下简单的移动端静态页面


## 安装
### 1. 全局安装gulp
因为全局需要用到gulp命令行，所以需要全局安装它。
```shell
npm i -g gulp

#  安装本地依赖， 接着设置本地ip地址！
npm i
# 运行
npm run dev
# 不运行 gulp-tinypng-nokey 打包（tinypng压缩图片）
npm run build
```

## 配置分析
```json
 "devDependencies": {
    "autoprefixer": "^9.1.3",
    "cssnano": "^4.1.0",
    "gulp": "^3.9.1",
    "gulp-babel": "^8.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-connect": "^5.5.0",
    "gulp-plumber": "^1.2.0",
    "gulp-postcss": "^8.0.0",
    "gulp-stylus": "^2.7.0",
    "postcss-pxtorem": "^4.0.1",
    "gulp-sequence": "^1.0.0",
    "autoprefixer": "^9.1.3",
    "opn": "^5.4.0",
  }
```

* **autoprefixer** 代码自动补全插件，没什么好说的，主要是 gulp-postcss 的插件，解决浏览器的兼容问题。

* **cssnano** css压缩工具，开发环境，可以关闭掉。

* **gulp** 基于文件流的前端自动化构建工具。适合于写静态页面的场景下。

* **gulp-concat** gulp 开启本地服务器，用于 html，css文件修改后的自动刷新。

* **gulp-plumber** 组织gulp运行中意外终止。

* **gulp-postcss** postcss，css后处理器。

* **gulp-stylus** stylus预处理器。

* **postcss-pxtorem** 自动将css中的px转换为rem。

* **gulp-babel** 转译js。

* **opn** 在浏览器中打开网页。


## 文件目录

- build
  - gulpfile.config.js // gulp配置config文件
  - gulpfile.dev.js    // gulp开发环境文件
  - netChenck.js // 检测本地host及port是否被占用
- src
  - common // 直接转发到dist目录下
  - css // 样式文件
  - images // 图片文件
  - js // js文件
  - pages // 页面文件
  - stylus // stylus 相关配置的 styl 文件，包括 mixins.styl , reset.styl 和 index.styl

## 一些小问题
图片新建文件夹时有时会未同步到 dist 目录

gulp 起的服务是监听的 dist 目录下的文件， src 文件编译也会动态添加到 dist 目录下，所以页面中的 css 文件引入需要将 `../css/*.styl` 转换成对应的 `../css/*.css` 。
