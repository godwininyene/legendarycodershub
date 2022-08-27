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

	// $('#section-courses').waypoint(function(direction){
	// 	$('.link-1').toggleClass('active');
	// 	// alert('We have enter into the course section');
	// });

	
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

	/* Animation on Scroll */

	// $('.js-wp-1').waypoint(function(direction){
	// 	$('.js-wp-1').addClass('animate__animated animate__fadeInLeft');
	// }, {
	// 	offset: '70%'
	// });

	// $('.js-wp-2').waypoint(function(direction){
	// 	$('.js-wp-2').addClass('animate__animated  animate__fadeInRight');
	// }, {
	// 	offset: '70%'
	// });

});