;(function(){
	$(window).on('load', function() {
		$('#banner-slider').slick({
			slide: '.ba-slide',
			prevArrow: '#banner-slider .ba-slider__arrow--left',
			nextArrow: '#banner-slider .ba-slider__arrow--right',
			dots: true
		});
		updateCurrentSlide();
		$('#banner-slider').on('afterChange', function(e) {
			updateCurrentSlide();
		});
		$('#banner-slider .slick-dots li').each(function() {
			$(this).find('button').text( '0' + $(this).find('button').text() );
		});
	});

	// projects sliders
	$('#ba-big-projects .ba-slider').slick({
		slide: '.ba-slide',
		prevArrow: '#ba-big-projects .ba-slider__arrow--left',
		nextArrow: '#ba-big-projects .ba-slider__arrow--right',
		asNavFor: '#ba-small-projects .ba-slider',
	});
	$('#ba-small-projects .ba-slider').slick({
		slide: '.ba-slide',
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '#ba-big-projects .ba-slider',
		
	});

	function updateCurrentSlide() {
		var currentSlideIndex = $('#banner-slider .slick-current').data('slick-index') + 1;
		$('#banner-slider .ba-current-position').text( '0' + currentSlideIndex);

	}
})();  