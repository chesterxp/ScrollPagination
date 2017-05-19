$(function(){
	$('#content').scrollPagination({
		'contentPage': 'dane.html', 
		'contentData': {}, 
		'scrollTarget': $(window),
		'heightOffset': 10,
		'beforeLoad': function(){
			$('#loading').fadeIn();	
		},
		'afterLoad': function(elementsLoaded){ 
			 $('#loading').fadeOut();
			 var i = 0;
			 $(elementsLoaded).fadeInWithDelay();
			 if ($('#content').children().size() > 10){
			 	$('#nomoreresults').fadeIn();
				$('#content').stopScrollPagination();
			 }
		}
	});
	$.fn.fadeInWithDelay = function(){
		var delay = 0;
		return this.each(function(){
			$(this).delay(delay).animate({opacity:1}, 200);
			delay += 100;
		});
	};
});