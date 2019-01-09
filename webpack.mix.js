let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist')
   .sass('src/scss/freelancer.scss', 'dist')
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