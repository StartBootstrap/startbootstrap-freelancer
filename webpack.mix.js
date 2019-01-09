let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js')
   .sass('src/scss/vendor.scss', 'dist/css')
   .sass('src/scss/freelancer.scss', 'dist/css')
   .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'webfonts')
   .autoload({
	    jQuery: 'jquery',
	    $: 'jquery',
	    jquery: 'jquery'
	})
   .extract()
   .options({
      processCssUrls: false
   })
   .setPublicPath('dist');