'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var nano = require('gulp-cssnano');
var purgecss = require('gulp-purgecss')
var autoprefixer = require('gulp-autoprefixer');
var sasslint = require('gulp-sass-lint');
var twig = require('gulp-twig');
var paths = {
  src: {
    html: 'src/html/',
    sass: 'src/sass/',
    css: 'src/css/'
  },
  build: {
    html: 'build/',
    css: 'build/css/'
  },
  dist: {
    css: 'dist/'
  }
};

/***************************************
 *
 *	Default CLF SASS compiling
 *  Run command "gulp" to start
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

// output a single file in the console with config options
// purgecss -c purgecss.config.js
gulp.task('purgecss', () => {
  return gulp
    .src('build/**/*.css')
    .pipe(
      purgecss({
        content: [paths.build.html + '*.html']
      })
    )
    .pipe(gulp.dest(paths.dist.css))
})

gulp.task('css', function() {
  var postcss = require('gulp-postcss');
  var tailwindcss = require('tailwindcss');
  return gulp.src(paths.src.sass + '**/styles-all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      tailwindcss('config/tailwind-config.js'),
      require('autoprefixer'),
    ]))
    .pipe(nano({
      discardComments: {
        removeAll: true
      },
      zindex: false
    }))
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest(paths.build.css));
});


gulp.task('html', function() {
  return gulp.src(paths.src.html + '*.twig')
    .pipe(twig())
    .pipe(gulp.dest(paths.build.html));
});


gulp.task('watch', ['css', 'purgecss', 'html'], function() {
  gulp.watch(paths.src.sass + '/**/*.s+(a|c)ss', ['css']);
  gulp.watch(paths.src.html + '*.twig', ['html']);
});


gulp.task('default', ['css', 'purgecss', 'html', 'watch'], function() {});
