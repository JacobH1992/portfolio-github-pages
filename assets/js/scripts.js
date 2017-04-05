window.sr = ScrollReveal();

sr.reveal('.revealBottom', { 
	duration: 600,
	delay: 100,
	origin: 'bottom',
	viewFactor: 0.2,
	scale: 0.98
});

sr.reveal('.fadeIn', { 
	duration: 500,
	delay: 500,
	distance: '0',
	viewFactor: 0,
	scale: 0
});

sr.reveal('.revealLeft', { 
	duration: 1000,
	origin: 'left',
	distance: '5%',
	scale: 0
});


// reveal box effect

$('.revealedBox').each(function(i){ 

	var childrenSpan = $(this).children('span').length;

	$(this).addClass('childrenSpan-' + childrenSpan);  

	if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
		$(this).addClass('revealedBox-in');       
	}   

}); 

	$(window).scroll(function() { 
		$('.revealedBox').each(function(i){  
	  if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
	  	$(this).addClass('revealedBox-in');       
	  }   
	}); 
  
});

// instafeed

var userFeed = new Instafeed({
	get: 'user',
	userId: '539904588',
	clientId: 'a8663d5b5e024ee39afdd41d48898c11',
	accessToken: '539904588.a8663d5.32c1b818aadb456dbeaa4913e2a3a7ee',
	resolution: 'standard_resolution',
	template: '<div class="photo"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>',
	sortBy: 'most-recent',
	limit: 4,
	links: true
});
userFeed.run();
