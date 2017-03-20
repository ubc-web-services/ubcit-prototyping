# WS Prototype Boilerplate

This is a boilerplate for creating UBC CLF prototypes using harpjs (https://harpjs.com). Harpjs is capable of compiling EJS, Jade, Markdown, CoffeeScript, SASS, LESS and Stylus files without configuration.

## About these files

The files included here are currently using Jade to template the HTML and LESS for the CSS. 

## File Structure

- _components: this directory contains the LESS and Jade partials, grouped by component. Every file that begins with an underscore doesn't compile directly by default. LESS files have a master and unit file. For example, there is an _accordions.less that is included the _unit-accordions.less file. This allows unit-specific overrides. The _unit-accordions.less file is then included in the unit.less file, which outputs the compiled css.
- _shared: this directory contains partials that are used by multiple pages.
- _layout.jade: this file contains partials that are included in all pages. The active page area is noted by the '!= yield' tag.
- -harp.json: defines some variables that are used in the templates, controlling things such as the Unit Name, CLF version ('full' or 'fixed'), CLF Color, remote or local (minimal) CLF