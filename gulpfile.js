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
  return gulp.src(paths.src.sass + '**/*.s+(a|c)ss')
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
});

/***************************************
 *
 *	Create new html builds, compiling to build and dist directories
 *  Run command "gulp html" to start
 *
 ***************************************/
gulp.task('html', function() {
  return gulp.src(paths.src.html + '*.twig')
    .pipe(twig())
    .pipe(gulp.dest(paths.build.html))
    .pipe(gulp.dest(paths.dist.html))
});

/***************************************
 *
 *	Create optimized images from src directory
 * (run manually, as needed because it can be slow)
 *  Run command "gulp images" to start
 *
 ***************************************/
gulp.task('images', function() {
	return gulp.src(paths.src.img + '**/*')
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
});

/***************************************
 *
 *	Create new css builds, compiling to build directory
 *  Run command "gulp css" to start
 *
 ***************************************/
gulp.task('css', function() {
  var postcss = require('gulp-postcss');
  var tailwindcss = require('tailwindcss');
  return gulp.src(paths.src.sass + '**/styles-all.scss')
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
});

/***************************************
 *
 *	Find new css builds and recompile
 *  Run command "gulp purgecss" to start
 *
 ***************************************/
gulp.task('purgecss', function() {
  return gulp
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
})

/***************************************
 *
 *	Run all compile tasks
 *  Run command "gulp deploy" to start
 *
 ***************************************/
gulp.task('deploy', ['css', 'html', 'purgecss', 'images'], function() {})

/***************************************
 *
 *	Watch for file changes and recompile
 *  Run command "gulp watch" to start
 *
 ***************************************/
gulp.task('watch', ['css', 'purgecss', 'html'], function() {
  gulp.watch(paths.src.sass + '/**/*.s+(a|c)ss', ['css'])
  gulp.watch(paths.src.html + '*.twig', ['html'])
});

/***************************************
 *
 *	Default CLF SASS compiling
 *  Run command "gulp" to start
 *
 ***************************************/
gulp.task('default', ['css', 'purgecss', 'html', 'watch'], function() {})
