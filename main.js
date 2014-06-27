$(document).on('ready', function() {
	
	$.fn.createSlidshow = function(){
		var cssLi = {
			'list-style' : 'none'
		}
		this.find('li').css(cssLi);
		console.log('createSlidshow Called!');
	};

	$('.slideshow').createSlidshow()

});