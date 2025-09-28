(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});

		$('.main-menu .navigation > li .mega-menu-bar > .column > ul').addClass('first-ul');
		$('.main-header .main-menu .navigation > li > ul').addClass('last-ul');

		$('.xs-sidebar-group .close-button').on('click', function(e) {
			$('.xs-sidebar-group.info-group').removeClass('isActive');
		});

		$('.about-widget').on('click', function(e) {
			$('.about-sidebar').addClass('active');
		});

		$('.about-sidebar .close-button').on('click', function(e) {
			$('.about-sidebar').removeClass('active');
		});
		
		$('.about-sidebar .gradient-layer').on('click', function(e) {
			$('.about-sidebar').removeClass('active');
		});
		
	}
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		//$('.mobile-menu .menu-box').mCustomScrollbar();
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		


		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
			console.log('btn clicked');
			e.preventDefault();
			var target = $(this).parent('li').children('ul');
			var target1 = $(this).parent('li').children('div.mega-menu');
			// console.log('target', $(target).is(':visible'));
			console.log('target1', $(target1).is(':visible'));
			
			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul.last-ul').slideUp(500);
				return false;
			} else{
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul.last-ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul.last-ul').slideToggle(500);
			}
			if ($(target1).is(':visible')) {
				console.log('Visible');
				$(this).parent('li').removeClass('open');
				$(target1).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > .mega-menu').slideUp(500);
				// return false;
			} else {
				console.log('Not Visible');
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('.mega-menu').slideUp(500);
				$('.first-ul').css('display', 'block');
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('.mega-menu').slideToggle(500);
			}
		});


		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');
			
			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});



		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });
		
	}




	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav ul').onePageNav();
	}
	
	
	//Custom Scroll Linsk / Sidebar
	if($('.scroll-nav li a').length){
		$(".scroll-nav li a").on('click', function(e) {
			e.preventDefault();
		   $('body').removeClass('mobile-menu-visible');
		});
	}



	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}



	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}


	
	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}

	if ($('.main-header .main-menu .navigation').length) {
		dynamicCurrentMenuClass($('.main-header .main-menu .navigation'));
	}
	
	
	
	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	



	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}



	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}
	
	

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 10000,
			values: [ 1000, 8000 ],
			slide: function( event, ui ) {
			$( "input.price-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.price-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}



	//  Animation Fade Left End
	/////////////////////////////////////////////////////
	// CURSOR
	var cursor = $(".cursor"),
	follower = $(".cursor-follower");

	var posX = 0,
		posY = 0;

	var mouseX = 0,
		mouseY = 0;

	TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {
			left: posX - 12,
			top: posY - 12
			}
		});

		TweenMax.set(cursor, {
			css: {
			left: mouseX,
			top: mouseY
			}
		});
	}
	});

	$(document).on("mousemove", function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
	//circle
	$(".theme-btn, a").on("mouseenter", function() {
		cursor.addClass("active");
		follower.addClass("active");
	});
	$(".theme-btn, a").on("mouseleave", function() {
		cursor.removeClass("active");
		follower.removeClass("active");
	});   
	// CURSOR End


	
	// Main Slider - Responsive behavior
	var slider = new Swiper('.main-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: window.innerWidth > 768, // Only loop on desktop
		autoplay: {
			enabled: window.innerWidth > 768, // Only autoplay on desktop
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: window.innerWidth > 768 ? '.main-slider-next' : null,
			prevEl: window.innerWidth > 768 ? '.main-slider-prev' : null,
			clickable: window.innerWidth > 768,
		},
		//Pagination
		pagination: {
			el: window.innerWidth > 768 ? ".swiper-pagination" : null,
			clickable: window.innerWidth > 768,
		},
		speed: 500,
		allowTouchMove: window.innerWidth > 768, // Disable touch on mobile
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// Handle window resize for responsive slider behavior
	window.addEventListener('resize', function() {
		if (slider) {
			if (window.innerWidth <= 768) {
				// Mobile: disable carousel features
				slider.autoplay.stop();
				slider.allowTouchMove = false;
				slider.loop = false;
			} else {
				// Desktop: enable carousel features
				slider.autoplay.start();
				slider.allowTouchMove = true;
				slider.loop = true;
			}
		}
	});

	// Single One Slider
	var slider = new Swiper('.single-item_carousel', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.single-item_carousel-next',
			prevEl: '.single-item_carousel-prev',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".single-item_carousel-pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});




	// Four One Slider
	var slider = new Swiper('.four-item_carousel', {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.four-item_carousel-next',
			prevEl: '.four-item_carousel-prev',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".four-item_carousel-pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});



	// Team One Slider
	var slider = new Swiper('.team-one_carousel', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.team-one_next-arrow',
			prevEl: '.team-one_prev-arrow',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".team-one_carousel-pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'600': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});





	// Instagram One Slider
	var slider = new Swiper('.instagram-one_carousel', {
		slidesPerView: 5,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.instagram-one_next-arrow',
			prevEl: '.instagram-one_prev-arrow',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".instagram-one_carousel-pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});





	// Instagram One Slider
	var slider = new Swiper('.instagram-one_carousel-two', {
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.instagram-one_next-arrow',
			prevEl: '.instagram-one_prev-arrow',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".instagram-one_carousel-pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});




	// Button Hover Animation
	$('.discuss-one_contact').on('mouseenter', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
	
		$(this).find('span').css({
		  top: y,
		  left: x
		});
	});




	// Masonary
	function enableMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-6'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();




	// Testimonial Section Four Carousel
	if($('.shop-detail').length){
		var thumbsCarousel = new Swiper('.shop-detail .thumbs-carousel', {
	      spaceBetween: 15,
	      slidesPerView: 4,
	      //direction: 'vertical',
	      breakpoints: {
		      320: {       
	     		  //direction: 'horizontal',
			      slidesPerView: 3, 
		      },
		      640: {       
	     		  //direction: 'horizontal',
			      slidesPerView: 4, 
		      } ,
		      1023: {       
			      slidesPerView: 4, 
		      } 
		  
		   }
	    });

	    var contentCarousel = new Swiper('.shop-detail .content-carousel', {
	      spaceBetween: 0,
	      loop:true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	      thumbs: {
	        swiper: thumbsCarousel
	      },
	    });
	}




	//Jquery Spinner / Quantity Spinner
	if($('.qty-spinner').length){
		$("input.qty-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}




	//Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}


	if($('.clock-wrapper').length){  
		(function(){
            //generate clock animations
            var now       = new Date(),
                hourDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
                minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
                secondDeg = now.getSeconds() / 60 * 360,
                stylesDeg = [
                    "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
                ].join("");
            document.getElementById("clock-animations").innerHTML = stylesDeg;
        })();
    }




	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}




	// Clients Slider
	var slider = new Swiper('.clients-one_slider', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.clients-one_slider_button-next',
			prevEl: '.clients-one_slider_button-prev',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".clients-one_pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});




	// Odometer
	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function(){
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}




	// Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).next('.acc-content').is(':visible')){
				//return false;
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(300);
				$(outerBox).children('.accordion').removeClass('active-block');
			}else{
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}





	///////////////////////////////////////////////////// 
    // Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////


	if ($(".animation_mode").length) {
		$('.animation_mode').marquee({
			speed: 50,
			gap: 20,
			delayBeforeStart: 0,
			direction: 'left',
			duplicated: true,
			pauseOnHover: true,
			startVisible:true,
		});
	}



	if ($(".animation_mode-two").length) {
		$('.animation_mode-two').marquee({
			speed: 50,
			gap: 20,
			delayBeforeStart: 0,
			direction: 'right',
			duplicated: true,
			pauseOnHover: true,
			startVisible:true,
		});
	}




	// Active Class
	let selectedIndex = 0;
	$('.program-one_title').on('mousemove', function (e) {
		$(this).addClass('active').siblings().removeClass('active');
		let arr = [...$('.program-one_titles .program-one_title')];
		arr.forEach((value, index) => {
			if ($(value).hasClass('active')) {
				selectedIndex = index + 1;
			}
		});
		$('.program-one_images_outer .program-one_image:nth-child(' + selectedIndex + ')').addClass('active').siblings().removeClass('active');
	});




	// LightBox Image
	if($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	}
	


	// LightBox Video
	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
	      // disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}



	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});	

})(window.jQuery);