const { watch, series, parallel, src, dest } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sasslint = require('gulp-sass-lint');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const twig = require('gulp-twig');
const tailwindcss = require('tailwindcss');

function lint() {
  return src('src/scss/**/*.s+(a|c)ss')
  .pipe(sasslint({
    options: {
      formatter: 'stylish',
      'merge-default-rules': true,
    },
    files: {
      ignore: ('src/scss/vendor/*.s+(a|c)ss', 'src/scss/config/*.s+(a|c)ss')
    },
    configFile: 'config/.sass-lint.yml'
  }))
  .pipe(sasslint.format())
  .pipe(sasslint.failOnError())
}

function javascript(cb) {
  // body omitted
  cb();
}

function html(done) {
  return src('src/html/*.twig')
    .pipe(twig())
    .pipe(dest('build/'))
    .pipe(dest('dist/'))
  done();
}

function tailwind() {
  return src('src/scss/**/*.s+(a|c)ss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    tailwindcss('config/tailwind-config.js'),
    require('autoprefixer'),
  ]))
  .pipe(rename({
    extname: ".css"
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(dest('build/css/'))
}

function minify() {
  return src('build/css/**/*.css')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 4 versions']
  }))
  .pipe(nano({
    discardComments: {
      removeAll: true
    },
    zindex: false
  }))
  .pipe(rename({
    extname: ".css"
  }))
  .pipe(dest('dist/css/'))
}

function images() {
  return src('src/html/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        }]
      })
    ], {
      verbose: true
    }))
    .pipe(dest('build/img/'))
    .pipe(dest('dist/img/'))
}

function watcher() {
  watch('src/html/*.twig', series(html));
  watch('src/scss/**/*.s+(a|c)ss', series(css));
  watch('src/*.js', series(javascript));
}

exports.watch = parallel(watcher);
exports.lint = series(lint);
exports.html = series(html);
exports.javascript = series(javascript);
exports.css = series(tailwind);
exports.images = parallel(images);
exports.minify = series(minify);
exports.build = series(html, javascript, images, tailwind, minify, lint);
exports.default = parallel(html, javascript, tailwind);
