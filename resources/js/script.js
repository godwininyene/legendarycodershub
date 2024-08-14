$(document).ready(function(){
	$nav = $(".nav");

	$toggleCollapse = $(".toggle-collapse");

	/** Click event on toggle menu */
	$toggleCollapse.click(function(){
		$nav.toggleClass("collapse");
	});

	/* For the Sticky Navigation */
	$('#section-about').waypoint(function(direction){
		if(direction == 'down'){
			$('.nav').addClass('sticky');
		}else{
			$('.nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

	
	/* Scroll To Section*/
	$('a').click(function(event){
		//Get target
		var target = this.hash;
		// Prevent default anchor links behaviour
		event.preventDefault();
		//is there a target
		if(target){
			// Scroll to target
			$('html, body').animate({scrollTop: $(target).offset().top}, 3000);
		}
	});

	// Animation on scroll Instances
	AOS.init();
});