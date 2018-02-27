'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var nano = require('gulp-cssnano');
var purgecss = require('gulp-purgecss')
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sasslint = require('gulp-sass-lint');
var twig = require('gulp-twig');
var imagemin = require('gulp-imagemin');
var paths = {
  src: {
    html: 'src/html/',
    sass: 'src/sass/',
    css: 'src/css/',
    img: 'src/html/img/'
  },
  build: {
    html: 'build/',
    css: 'build/css/',
    img: 'build/img/'
  },
  dist: {
    css: 'dist/',
    html: 'dist/',
    img: 'dist/img/'
  }
};

/***************************************
 *
 *	Check SCSS and CSS for style guide adherence
 *  Rules are defined in config/.sass-lint.yml
 *  Run command "gulp lint" to start
 *
 ***************************************/
// full list of rules at: https://github.com/sasstools/sass-lint/tree/develop/docs/rules
gulp.task('lint', function() {
  var stream = gulp
    .src(paths.src.sass + '**/*.s+(a|c)ss')
    .pipe(sasslint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': true,
      },
      files: {
        ignore: paths.src.sass + 'vendor/*.s+(a|c)ss'
      },
      configFile: 'config/.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
  return stream;
});

/***************************************
 *
 *	Create optimized images from src directory
 * (run manually, as needed because it can be slow)
 *  Run command "gulp images" to start
 *
 ***************************************/
gulp.task('images', function() {
  var stream = gulp
    .src(paths.src.img + '**/*')
		.pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({plugins: [{removeViewBox: false}]})
      ], {
        verbose: true
    }))
    .pipe(gulp.dest(paths.build.img))
    .pipe(gulp.dest(paths.dist.img))
  return stream;
});

/***************************************
 *
 *	Create new html builds, compiling to build and dist directories
 *  Run command "gulp html" to start
 *
 ***************************************/
gulp.task('html', function(done) {
  var stream = gulp
    .src(paths.src.html + '*.twig')
    .pipe(twig())
    .pipe(gulp.dest(paths.build.html))
    .pipe(gulp.dest(paths.dist.html))
  return stream;
  done();
});

/***************************************
 *
 *	Create new css builds, compiling to build directory
 *  Run command "gulp css" to start
 *
 ***************************************/
gulp.task('css', ['html'], function(done) {
  var postcss = require('gulp-postcss');
  var tailwindcss = require('tailwindcss');
  var stream = gulp
    .src(paths.src.sass + '**/styles-all.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      tailwindcss('config/tailwind-config.js'),
      require('autoprefixer'),
    ]))
    .pipe(rename({
      extname: ".css",
      suffix: ".min"
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.build.css))
  return stream;
  done();
});

/***************************************
 *
 *	Run css and html compile tasks then purge unused css when complete
 *  Note that async tasks are intentionally avoided to prevent
 *  purging based on old css / html files
 *  https://stackoverflow.com/questions/22824546/how-to-run-gulp-tasks-sequentially-one-after-the-other#22826429
 *  Run command "gulp deploy" to start
 *
 ***************************************/
gulp.task('deploy', ['css', 'html'], function() {
  var purgecss = require('gulp-purgecss')
  var stream = gulp
    .src('build/**/*.css')
    .pipe(
      purgecss({
        content: [paths.build.html + '*.html'],
        // use a custom extractor so that we don't purge tailwind classes with the '/' character
        // https://github.com/FullHuman/purgecss/issues/28
        extractors: [{
          extractor: class {
            static extract(content) {
              return content.match(/[A-z0-9-:\/@]+/g) || []
            }
          },
          extensions: ['html']
        }]
      })
    )
    .pipe(nano({
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(gulp.dest(paths.dist.css))
  return stream;
})

/***************************************
 *
 *	Watch for file changes and recompile
 *  Run command "gulp watch" to start
 *
 ***************************************/
gulp.task('watch', ['css', 'html', 'deploy' ], function() {
  gulp.watch(paths.src.sass + '/**/*.s+(a|c)ss', ['css'])
  gulp.watch(paths.src.html + '*.twig', ['html'])
});

/***************************************
 *
 *	Default CLF SASS compiling
 *  Run command "gulp" to start
 *
 ***************************************/
gulp.task('default', ['css', 'html', 'deploy', 'watch'], function() {})
