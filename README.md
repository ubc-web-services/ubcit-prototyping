# Commands

`npx autoprefixer --info` output information about current autoprefixer support

`npm run test` run SNYK to check for node mudule security issues

`npm run serve` start local server, watch CSS files in SRC and recompile when changes are made, saving to the BUILD directory

`npm run lint:css` run a CSS style / format checker against CSS in SRC and output any errors in terminal

`npm run lint:fix-css` run a CSS style / format checker against CSS in SRC and fix any errors if possible

`npm run build:html` compile TWIG to HTML from SRC directory, save to BUILD directory

`npm run build:js` compile js via Babel from SRC directory, concatenating all files not in the LIBS directory, save to BUILD directory

`npm run build:dev` build CSS, JS and HTML from SRC directory, save to BUILD directory

`npm run development` build CSS, JS and HTML from SRC directory, save to BUILD directory (same as `npm run build:dev`)

`npm run build:prod` build CSS, JS and HTML from SRC directory, save to DIST directory

`npm run production` build CSS, JS and HTML from SRC directory, save to DIST directory (same as `npm run build:prod`)
