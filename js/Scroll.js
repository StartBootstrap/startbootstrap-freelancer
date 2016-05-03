$(document).ready(function(){ 
	$('#port').click(function(){ 
		$("html, body").animate({ scrollTop: $('#portfolio').offset().top }, 1000); 
		return false; 
	});
	$('#ab').click(function(){ 
		$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000); 
		return false; 
	});
	$('#con').click(function(){ 
		$("html, body").animate({ scrollTop: $('#contact').offset().top }, 1000); 
		return false; 
	});
});