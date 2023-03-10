(function($) {
	
	"use strict";
	
	
	//Preloader
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
	
	
	//Update Header Style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 80) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown
	if($('.navigation li.dropdown > ul').length){
		$( '.navigation li.dropdown' ).hover(
			function(){
				$(this).children('ul').delay(200).slideDown(300);
			},
			function(){
				$(this).children('ul').slideUp(0);
			}
		);
	}
	
	
	
	//Main Slider
	if($('.main-slider .tp-banner').length){

		jQuery('.main-slider .tp-banner').show().revolution({
		  delay:10000,
		  startwidth:1200,
		  startheight:750,
		  hideThumbs:600,
	
		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,
	
		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",
	
		  touchenabled:"on",
		  onHoverStop:"off",
	
		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,
	
		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	
		  keyboardNavigation:"off",
	
		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:20,
	
		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,
	
		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,
	
		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",
	
		  spinner:"spinner4",
	
		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,
	
		  shuffle:"off",
	
		  autoHeight:"off",
		  forceFullWidth:"on",
	
		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,
	
		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

		
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	//Clients Testimonial Slider
	if($('.testimonial-slider-full').length){
		$('.testimonial-slider-full').bxSlider({
			adaptiveHeight: true,
			auto:true,
			mode:'fade',
			controls: false,
			pause: 5000,
			speed: 1000,
			pager:true
		});
	}
	
	
	
	//Column Carousel / Four Column
	if ($('.column-carousel.four-column').length) {
		$('.column-carousel.four-column').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 5500,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	
	//One Column Carousel
	if ($('.column-carousel.one-column').length) {
		$('.column-carousel.one-column').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 6000,
			smartSpeed: 500,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1100:{
					items:1
				}
			}
		
		});    		
	}
	
	
	//Image Slider
	if ($('.image-slider').length) {
		$('.image-slider').owlCarousel({
			loop:true,
			  nav : true,
			  smartSpeed : 1000,
			  autoplay: 7000,
			  responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1400:{
					items:1
				}
			}
		});    		
	}
	
	
	//Progress Bar
	if($('.progress-levels .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			$(this).children('.percent').html(progressWidth+'%');
		});
	}
	
	
	//Accordions
	if($('.accordion-box').length){
		$('.accordion-box .acc-btn').on('click', function() {
		if($(this).hasClass('active')!==true){
				$('.accordion-box .acc-btn').removeClass('active');
			}
			
		if ($(this).next('.acc-content').is(':visible')){
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(500);
			}
		else{
				$(this).addClass('active');
				$('.accordion-box .acc-content').slideUp(500);
				$(this).next('.acc-content').slideDown(500);	
			}
		});
	}
	
	
	
	
	//Contact Form Validation
	if($('#contact-form-one').length){
		$('#contact-form-one').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Google Map Settings
	// if($('#map-location').length){
	// 	var map;
	// 	 map = new GMaps({
	// 		el: '#map-location',
	// 		zoom: 14,
	// 		scrollwheel:false,
	// 		//Set Latitude and Longitude Here
	// 		lat: -37.817085,
	// 		lng: 144.955631
	// 	  });
		  
	// 	  //Add map Marker
	// 	  map.addMarker({
	// 		lat: -37.817085,
	// 		lng: 144.955631,
	// 		infoWindow: {
	// 		  content: '<p class="info-outer" style="text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
	// 		}
		 
	// 	});
	// }
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var HeaderHeight = $('.header-lower').height();
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top - HeaderHeight
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
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
	});

	

})(window.jQuery);



// blog get data

// blog get data
(async function () {
    let response = await fetch("https://zariagency.com/test/public/api/blog/list")
    let responseData = await response.json();
    Blogs = responseData.Blogs;
	console.log(Blogs);
    displayBlogAr();
    console.log(Blogs);
    if (Blogs.length === 0) {
        console.log('????????');
        document.getElementById("blog").classList.add("d-none");
        document.getElementById("navBlog").classList.add("d-none");
    }else{
        
        console.log('??????????');
        document.getElementById("blog").classList.add("d-block");
        document.getElementById("navBlog").classList.add("d-block");
    }
})();

function displayBlogEn() {
    var cartona = ``;
    for (var i = 0; i < Blogs.length; i++) {
        cartona += `
        <div class="app__blog col-md-4 mb-3 p-2 position-relative ">
            <div   class="w-100 bg-blog rounded-3 overflow-hidden  p-3 ">
            <a target="_blank" href="blogsDetailes.html?id=${Blogs[i].IDBlog}">
                 <img class="blog-img w-100" src="${Blogs[i].BlogImage}">
            </a>
                 <h3 class='mt-3 app__blog-h3'>${Blogs[i].BlogTitle}</h3>
                <div class="app__Blog-footer " style="display: flex !important; justify-content: space-between !important; align-items: center; flex-direction: row;">
                    <div class="app__Blog-footer-right ">
                        <i class="fa fa-user"></i>
                        <span class='mt-3 blogAuthor' >${Blogs[i].BlogAuthor}</span>
                    </div>
                    <div class="app__Blog-footer-left">
                        <span>${Blogs[i].BlogDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    }
    document.getElementById("rowData").innerHTML = cartona;
}

function displayBlogAr() {
    var cartona = ``;

    for (var i = 0; i < Blogs.length; i++) {
        cartona += `
        <div class="app__blog col-md-4 mb-3 p-2 position-relative "  >
            <div class="w-100 bg-blog rounded-3 overflow-hidden  p-3 ">
            <a href="blogsDetailes.html?id=${Blogs[i].IDBlog}" target="_blank">
                 <img class="blog-img w-100" src="${Blogs[i].BlogImage}">
            </a>
                <h3 class='mt-3 app__blog-h3'>${Blogs[i].BlogTitle}</h3>
                <div class="app__Blog-footer" style="display: flex !important; justify-content: space-between !important; align-items: center; flex-direction: row;">
                    <div class="app__Blog-footer-right ">
                        <i class="fa fa-user"></i>
                        <span class='mt-3 blogAuthor' >${Blogs[i].BlogAuthor}</span>
                    </div>
                    <div class="app__Blog-footer-left">
                        <span class="BlogDate">${Blogs[i].BlogDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    }
    document.getElementById("rowData").innerHTML = cartona;
}
 


/** contact us send message */
let userName = document.getElementById('label__name');
let phone = document.getElementById('label__phone');
let email = document.getElementById('label__email');
let companyname = document.getElementById('label__company');
let message = document.getElementById('label__message');
 
	async function sendMessage() {
		$.ajax({
		   url: "https://zarimain.online/messages/public/api/message",
		   method: 'post',
		   data: {
			   MessageName: userName.value,
			   MessageEmail: email.value,
			   MessagePhone: phone.value,
			   MessageSubject: companyname.value,
			   MessageText: message.value,
			   MessageSource: "AGENCY",
		   },
		   success: function (result) {
			   alert(result.MessageAr);
		   }
	   });
   
   
   }
 
function usernameValidation() {
    if (userName.value != "") {
        return true;
    }
    else {
        return false
    }
}
function phoneVali() {
    if (phone.value != "") {
        return true;
    }
    else {
        return false
    }
}
function emailVali() {
    if (email.value != "") {
        return true;
    }
    else {
        return false
    }
}
function compVali() {
    if (companyname.value != "") {
        return true;
    }
    else {
        return false
    }
}


