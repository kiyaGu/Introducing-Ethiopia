
 // IIFE - Immediately Invoked Function Expression
(function($, window, document) {
// The $ is now locally scoped 
// Listen for the jQuery ready event on the document
//for setting the time for alertify js for displying error messages
    alertify.set({ delay: 10000 });
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
  //var animateOn = document.getElementById('animate-progress-bar').offsetTop;
	
	function log(txt) {
  console.log(txt );
}
var eTop = $('#animate-progress-bar').offset().top; //get the offset top of the element
var animateOn = eTop - $(window).scrollTop();
//start the skills progress bar to animate when the user scrolls to #animate-progress-bar
	if(animateOn < 89 ){
     	$(".pr1,.pr2,.pr4,.pr6").animate({
    	width: "90%"
	});
		$(".pr3,.pr5").animate({
    	width: "80%"
		});
		$(".pr8").animate({
    	width: "50%"
	});
		$(".pr7,.pr9,.pr11").animate({
    	width: "60%"
	});
    	$(".pr10").animate({
    	width: "40%"
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

//setting the pages height dynamically
if ( $(window).height() > 640) {      
  $(".home-section").css("height",$(window).height());
 $(".about-me-section").css("height",$(window).height());
$(".portfolio-section").css("height",$(window).height());
$("#intro-name").css("height",$(window).height()-130+"px");
//$("#container-row").css("paddingTop",($(window).height()/2)-70+"px");
    
} 
    else if ( $(window).height() > 700) {      
  $(".home-section").css("height",$(window).height());
 $(".about-me-section").css("height",$(window).height());
$(".portfolio-section").css("height",$(window).height());
$("#intro-name").css("height",$(window).height()-140+"px");
//$("#container-row").css("paddingTop",($(window).height()/2)-70+"px");
    
} 
        else if ( $(window).height() < 800) {      
  $(".home-section").css("height",$(window).height());
 $(".about-me-section").css("height",$(window).height());
$(".portfolio-section").css("height",$(window).height());
$("#intro-name").css("height",$(window).height()-130+"px");
//$("#container-row").css("paddingTop",($(window).height()/2)-70+"px");
    
}
else {
   $(".home-section").css("height",$(window).height());
  $("#intro-name").css("height",$(window).height()+"px");
//   $(".about-me-section").css("height",$(window).height()+50+"px");

}	

$("#send-button").on('click',function(e){
  var name=$("#name").val();
  var email=$("#email").val();
  var subject=$("#subject").val();
  var message=$("#message").val();
  
  window.open('mailto:kiya.gurmesa@gmail.com?subject='+subject+'&body='+message);
  e.preventDefault();
})	
//validating the form entry for the contact us section
//to validate the email address
var regexp=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
// to hold the error messages
 var errM=[];
//errors that will be displayed according to the error
errM[1]="Please fill your <u>Name</u>";
errM[2]="Please fill Your <u>Email</u> Address";
errM[3]="Please fill the <u>subject</u> of your message";
errM[4]="Please fill the <u>message</u> you want to send to me";
 //==========================ajax request===================================//
function Ajax_request(){
   if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      xmlhttp = new XMLHttpRequest();
    } 
    else if (window.ActiveXObject) { // IE
      try {  
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
           } 
      catch (e) {
        try {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } 
        catch (e) {}
      }//catch
    }//else if

    if (!xmlhttp) {
      alertify.error('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
     return xmlhttp;
       } 
    
    //=========================send message========================================//
  
  
  function send_message(event) {
    var name=$('#name').val();
    var email1=$('#email').val();
    var subject=$('#subject').val();
    var message=$('#message').val();   
    if (name==='')
     { 
         
         alertify.error(errM[1]);
        $('#name').focus();
        event.preventDefault();
        event.stopPropagation();
        return;
    } 
    else if (email1==='')
     {      
          
         alertify.error(errM[2]);
        $('#email1').focus();
        event.preventDefault();
        event.stopPropagation();
        return;
    } 
    else if (!(regexp.test(email1)))
     {      
            
        alertify.error("<h5><u>SORRY</u>:</h5> the Email address <u>"+email1+"</u> is not a valid email address");
        $('#email1').focus();
        event.preventDefault();
        event.stopPropagation();
        return;
    }
     else if (subject==='')
     {      
            
        alertify.error(errM[3]);
        $('#subject').focus();
        event.preventDefault();
        event.stopPropagation();
        return;
    } 
     else if (message==='')
     {      
            
        alertify.error(errM[4]);
        $('#message').focus();
        event.preventDefault();
        event.stopPropagation();
        return;
    } 
     
      else {
       xmlhttp=Ajax_request();
       var resultP=null;
       var resP;
          respP= function(callback,resP){
             if(resultP === "failed"){
                    alertify.success("<strong><u>ERROR</u>:</strong>  <b>Sorry, it seems your message can not be sent currently!!!!</b>");
                  }
          else if(resultP === "success"){
             alertify.success("<strong><u>success</u>:</strong>  <b>Thank you, Very Much for contacting us we will respond to you as soon as possible!!!!</b>");
              $('#message_form').trigger("reset");             
             }

            else{
              
              alertify.error("<blockquote><u>ERROR</u>: <h5>"+resultP+"</h5></blockquote>");
                     
                 } 
               }



        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              resP=xmlhttp.responseText;              
              resultP=JSON.parse(xmlhttp.responseText);
              respP(resultP,resP);
               
            }
        }
        xmlhttp.open("POST","../sendMessage.php?",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
       //================prepare=====================//
       var data=$('#send_message').serialize();
       xmlhttp.send(data);
       event.preventDefault();
        event.stopPropagation();
        }
       }
    
    
    
    
    
    
}   

}(window.jQuery, window, document));
  // The global jQuery object is passed as a parameter

 