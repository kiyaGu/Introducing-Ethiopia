
 // IIFE - Immediately Invoked Function Expression
(function($, window, document) {
// The $ is now locally scoped 
// Listen for the jQuery ready event on the document
$(function() {
		// The DOM is ready!
	$('.slider-portfolio-pic').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-portfolio-nav',
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});
	$('.slider-portfolio-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
		asNavFor: '.slider-portfolio-pic',       
        slide: 'div',
		autoplay:true,
		arrows: false
	});
	$('.slider-portfolio-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.slider-portfolio-content,.slider-portfolio-pic',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div',
		autoplay:true,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }
  ]
});    
	$('.slider-education-pic').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
		asNavFor: '.slider-education-content',
        centerMode: true,
        focusOnSelect: true,
        slide: 'div',
		autoplay:true,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	$('.slider-education-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-education-pic'
});	   
	$('.progress-bar-text').addClass('progress-bar-text-display');
	
});
//typed.js 
	$(function(){
	$("#typed").typed({stringsElement: $('#typed-strings'),
        typeSpeed: 80      
      });
});
window.addEventListener('scroll', function(){
  var place = document.body.scrollTop;
  var animateOn = document.getElementById('animate-progress-bar').offsetTop;
	if(place > animateOn){
     	$(".pr1,.pr2,.pr4,.pr5,.pr6").animate({
    	width: "80%"
	});
		$(".pr3").animate({
    	width: "90%"
		});
		$(".pr8").animate({
    	width: "50%"
	});
		$(".pr7").animate({
    	width: "40%"
	});
    	$(".pr10").animate({
    	width: "45%"
	});
    	$(".pr9,.pr11").animate({
    	width: "60%"
	});
		$('.progress-bar-text').removeClass('progress-bar-text-display');
    	this.removeEventListener('scroll', arguments.callee, false);
  }	
});
  //parallax scrolling
$(function() {	
	// Cache the Window object
	var $window = $(window);	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	$('section[data-type="background"]').each(function(){
       var $bgobj = $(this); // assigning the object
        $(window).scroll(function(){
                //scroll the background at var speed
                // the yPos is a negative value because we're scrolling it up
        var yPos = -(($window.scrollTop() - $bgobj.offset().top)/$bgobj.data('speed'));
        // put together our final background position
            var coords='50%' + yPos + 'px';
            //Move the background
            $bgobj.css({backgroundPosition:coords});
                         });
    });	
});
    // $(".home-section").css("height",$(window).height());
	//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
     var $anchor = $(this);
   	$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        	}, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
	

	
	
}(window.jQuery, window, document));
  // The global jQuery object is passed as a parameter

if ( $(window).height() > 568) {      
  $(".home-section").css("height",$(window).height());
// $(".about-me-section").css("height",$(window).height());
$(".portfolio-section").css("height",$(window).height());
$("#intro-name").css("height",$(window).height()-130+"px");
//$("#container-row").css("paddingTop",($(window).height()/2)-70+"px"); 
} 
else {
   $(".home-section").css("height",$(window).height());
	$("#intro-name").css("height",$(window).height()-130+"px");
   $(".about-me-section").css("height",$(window).height()+50+"px");
}
 