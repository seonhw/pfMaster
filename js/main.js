;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		// if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		// }

	};

	var parallax = function() {
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false, 
			responsive: true

		});
	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: false,
		    dots: true,
		    smartSpeed: 500,
		    autoHeight: true
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#counter-animate').length > 0 ) {
			$('#counter-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
		});

	};

	// Document on load.
	$(function(){
		fullHeight();
		parallax();
		testimonialCarousel();
		contentWayPoint();
		counterWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
	});
//Visual txt
	$(function() {
		$('.type-it').typeIt({
			content : '안녕하세요.'
		})
	});	
//Skill
	$('#skills').waypoint(function() {
		$('.progress .progress-bar').each(function() {
		$(this).css("width", $(this).attr("aria-valuenow") + '%');
		});
	}, { offset: '80%'} 
	);	
//TOP btn

		$(window).scroll(function() {
			if ($(this).scrollTop() > 500) {
				$('#MOVE_TOP_BTN').fadeIn();
			} else {
				$('#MOVE_TOP_BTN').fadeOut();
			}
		});
		
		$("#MOVE_TOP_BTN").click(function() {
			$('html, body').animate({
				scrollTop : 0
			}, 400);
			return false;
		});


//work Background
		var cvs = document.getElementById('cvs');

		// Canvas fills window
		cvs.height = window.innerHeight;
		cvs.width = window.innerWidth;

		// Get canvas context
		var ctx = cvs.getContext('2d');

		// Set font, size & number of columns
		var font = 'arial';
		var fontSize = 10;
		ctx.font = fontSize + 'px ' + font;
		var cols = cvs.width / fontSize;

		// Characters
		var charSet;
		charSet = '0123456789ABCDEF'; // Hex
		charSet = charSet.split(''); // Convert string to array

		// One drop per column, row set randomly
		var drops = [];
		for (var col = 0; col < cols; col++)
		drops[col] = Math.floor(Math.random() * cvs.height);

		// Call rain() every 25ms
		setInterval(rain, 25);

		function rain() {
		// Background, black, translucent
		/* This is key to the fade effect, clear the window with an alpha of 0.05, which doesn't clear it entirely but leaves existing text progressively dimmed with each subsequent call to rain()
		*/
		ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		
		// For each column / drop
		for (var col = 0; col < drops.length; col++) {
			// Pick a random char
			var char = charSet[Math.floor(Math.random() * charSet.length)];
			// Pick a random colour
			ctx.fillStyle = randColour();
			// Draw the char
			ctx.fillText(char, col * fontSize, drops[col] * fontSize);
			// Randomly reset drop back to top row
			if (Math.random() > 0.99)
			drops[col] = 0;

			drops[col]++; // Move drop down a row
		}
		}

		function randColour()
		{
		return'rgb(' + 
			Math.floor(Math.random() * 256) + ',' + 
			Math.floor(Math.random() * 256) + ',' + 
			Math.floor(Math.random() * 256) + ')';
		}

}());