$(document).on('ready', function() {
	
	$.fn.createSlidshow = function(){
		var cssNavbar = {
			'max-width' : '680px',
			'max-height' : '320px',
			'margin' : '0 auto'
		}
		var cssLi = {
			'max-width' : '680px',
			'max-height' : '320px',
			'list-style' : 'none',
			'box-shadow' : '0px 0px 5px #DDDDDD',
			'position' : 'absolute'
		}
		var cssImg =  {
			'width' : '100%',
			'height' : '100%',
			'border' : '5px solid #fbfbfb'
		}
		this.closest('.slideshow').css(cssNavbar);
		this.find('li').css(cssLi);
		this.find('img').css(cssImg);
		console.log('createSlidshow Called!');
/*		for (var i = 0; i < slides.length; i++){
			var fadeTime = parseInt(i + '000');
		setTimeout(function(){
			$(slides[i]).fadeOut(1000);
			}, fadeTime);
		}*/
		setInterval(function() { 
		  var slides = $(this).find('li');
		  $(slides[slides.length-1])
		    .fadeOut(500)
		    .prev()
		    .fadeIn(500)
		    .end()
		    .prependTo($(this).closest('ul'));
		    console.log('shit happened');
		}, 2000);
		// return this;
	};

	$('.slideshow').createSlidshow()

});