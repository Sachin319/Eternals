(function($) {
 
//Stiky Header
$(window).scroll(function(){
	if($(this).scrollTop() > 80){
		$('.stikky_header').addClass('fixedHeader');
	}else{
		$('.stikky_header').removeClass('fixedHeader');
    }
	
	if($(this).scrollTop() > 1200){
		$('.stikky_sub_header').addClass('fixedSubHeader');
	}else{
		$('.stikky_sub_header').removeClass('fixedSubHeader');
    }
	
	if($(this).scrollTop() > 400){
		$('.stikky_filter_header').addClass('fixedFilter');
	}else{
		$('.stikky_filter_header').removeClass('fixedFilter');
    }
	

    //if ($('.text-anim:visible')) {
    //    $('.text-anim').fadeIn(3000);
    //}
    //else {
    //    $('.text-anim').fadeOut(3000);
    //}
    
    });
    function reveal() {
        var reveals = document.querySelectorAll(".text-anim");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
//console.log( reveals[i].getBoundingClientRect().top);
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
                
             //   reveals[i].style.transform = scaleY(1);;
            } else  {
              //  reveals[i].classList.remove("active");
              reveals[i].classList.remove("active");
              //reveals[i].style.transform = scaleY(0);;
            }
        }
    }

    window.addEventListener("scroll", reveal);
//Stiky Header End
	
	
	// jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });
	
	
	//Number Count
	$('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          
          //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

/*  Preloader  */
	jQuery(window).on('load', function(){
		jQuery("#preloader").fadeOut(500);
});	
	
	
//Home Slide Mouse scuoll
    $(window).bind('mousewheel', function (event) {      
       
        if (event.originalEvent.wheelDelta >= 0) {
           
            $('.owl-prev').click();
          
        }
        else if(event.originalEvent.wheelDelta <= 0) {
           
            $('.owl-next').click();
          
        }

    });
	

	// Got to Top
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#goto_top').fadeIn(); 
        } else { 
            $('#goto_top').fadeOut(); 
        } 
    }); 
    $('#goto_top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false; 
    }); 


//Steps Page BG Color Change designStudio
    $('.btn').click(function(e){
      console.log( $(this).attr('aria-controls'));
       $(".stepbg_cont").removeAttr('style');
       $(".steps_form").removeClass('step1_bg');
       $(".steps_form").removeClass('step2_bg');
       $(".steps_form").removeClass('step3_bg');
       $(".steps_form").removeClass('step4_bg');
       $(".steps_form").removeClass('step5_bg');
       $(".steps_form").removeClass('step6_bg');
       $(".steps_form").removeClass('step7_bg');
    switch ($(this).attr('aria-controls')) {
        case "step1":
            // code block
            $(".stepbg_cont").removeAttr('class').addClass("stepbg_cont step1_bg");
            $(".stepbg_cont").animate({ 'opacity': 1} , 1000);
            break;
        case "step2":
              // code block
              $(".stepbg_cont").removeAttr('class').addClass("stepbg_cont step2_bg");
              $(".stepbg_cont").animate({ 'opacity': 1} , 1000);
              break;
        case "step3":
                // code block
               $(".stepbg_cont").removeAttr('class').addClass("stepbg_cont step3_bg");
               $(".stepbg_cont").animate({ 'opacity': 1} , 1000);
                break;
        case "step4":
                  // code block
                  $(".stepbg_cont").removeAttr('class').addClass("stepbg_cont step4_bg");
                  $(".stepbg_cont").animate({ 'opacity': 1} , 1000);
                  break;
        case "step5":
                    // code block
                    $(".stepbg_cont").removeAttr('class').addClass("stepbg_cont step5_bg");
                    $(".stepbg_cont").animate({ 'opacity': 1} , 1000);
                    break;
        case "step6":
                      // code block
                      $(".stepbg_cont").removeAttr('class').addClass("stepbg_cont step6_bg");
                      $(".stepbg_cont").animate({ 'opacity': 1} , 1000);
                      break;
        case "step7":
                        // code block
                        $(".stepbg_cont").removeAttr('class').addClass("stepbg_cont step7_bg");
                        $(".stepbg_cont").animate({ 'opacity': 1} , 1000);
                        break;
  
        
    }});
})(jQuery);


//Slider
// debounce from underscore.js
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// use x and y mousewheel event data to navigate flickity
function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
  // do not trigger a slide change if another is being animated
  if (!slick_is_animating) {
    // pick the larger of the two delta magnitudes (x or y) to determine nav direction
    var direction =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (direction > 0) {
      // next slide
      slick_instance.slick("slickNext");
    } else {
      // prev slide
      slick_instance.slick("slickPrev");
    }
  }
}

// debounce the wheel event handling since trackpads can have a lot of inertia
var slick_handle_wheel_event_debounced = debounce( 
  slick_handle_wheel_event
  , 100, true
);

// init slider 
const slick_2 = $(".home_banner_slider");
if(slick_2.length){
  slick_2.slick({
    infinite:false,
    speed:2000
  });
}

var slick_2_is_animating = false;

slick_2.on("afterChange", function(index) {
  onChangeCallback();
  slick_2_is_animating = false;
});

slick_2.on("beforeChange", function(index) {
  slick_2_is_animating = true;
});

$(window).on("wheel", function(e) {
  slick_handle_wheel_event_debounced(e.originalEvent, slick_2, slick_2_is_animating);  
});



function onChangeCallback() {
    var dataId = $('.slick-active').attr("data-slick-index");  
   console.log(dataId)
    $("body").removeAttr('class');
    switch (dataId) {
        case '0':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_blue_purple_bg");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').addClass('d-none');
            break;
        case '1':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_purple_red_bg");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').addClass('d-none');
            break;
        case '2':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_red_orange_bg");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').addClass('d-none');
            break;
        case '3':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_orange_yellow_bg");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').addClass('d-none');
            break;
        case '4':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_yelloy_green_bg");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').addClass('d-none');
            break;
        case '5':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_green_seegreen_bg");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').addClass('d-none');
            break;
        case '6':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_blue_purple_bg2");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').addClass('d-none');
            break;
        case '7':
            // code block
            $(".bg_body_clr").removeAttr('class').removeAttr('style').addClass("bg_body_clr body_purple_red_bg");
            $(".bg_body_clr").animate({ 'opacity': 1} , 1000);
            $('footer').removeClass('d-none');
            break;
    }                
}

jQuery(document).ready(function($) {
"use strict";
var stepslider= $('#designStudio').owlCarousel({
	loop: true,
	center: true,
	items: 3,
	margin: 0,
	nav: true,
	navText: [
	"<i class='fa fa-chevron-circle-left'></i>",
    "<i class='fa fa-chevron-circle-right'></i>"
	],
	autoplay: false,
	dots:false,
	autoplayTimeout: 8500,
	smartSpeed: 450,
	responsive: {
	  0: {
		items: 1
	  },
	  768: {
		items: 2
	  },
	  1170: {
		items: 3
	  }
	}
});

stepslider.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        stepslider.trigger('next.owl');
    } else {
        stepslider.trigger('prev.owl');
    }
    e.preventDefault();
});

});

//Ring Slider
jQuery(document).ready(function($) {
"use strict";
$('#ringSlider').owlCarousel({
	loop: false,
	center: true,
	items: 3,
	margin: 0,
	nav: true,
	navText: [
	"<i class='fa fa-chevron-circle-left'></i>",
    "<i class='fa fa-chevron-circle-right'></i>"
	],
	autoplay: false,
	dots:false,
	autoplayTimeout: 8500,
	smartSpeed: 450,
	responsive: {
	  0: {
		items: 1
	  },
	  768: {
		items: 2
	  },
	  1170: {
		items: 3
	  }
	}
});
});


//Resizing Banner
jQuery(".resizing_slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 20,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
	415: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
	 1366: {
      items: 1
    }
  }
});


//complementary_products
jQuery(".complementary_products_slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 20,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
	415: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
	 1366: {
      items: 3
    }
  }
});

//complementary_products
jQuery(".comments_reviews_slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 20,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
	415: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
	 1366: {
      items: 3
    }
  }
});

//Steps Banner
jQuery(".steps_favorite_slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 0,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-circle-left'></i>",
    "<i class='fa fa-chevron-circle-right'></i>"
  ],
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
	415: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 3
    },
	 1366: {
      items: 3
    }
  }
});

//Education Banner
jQuery(".education_slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 30,
  nav: false,
  dots: true,
  navText: [
    "<i class='fa fa-chevron-circle-left'></i>",
    "<i class='fa fa-chevron-circle-right'></i>"
  ],
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
	415: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
	 1366: {
      items: 1
    }
  }
});

// No. Count
$('.counter-count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
	  
	  //chnage count up speed here
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});

/*Expend All*/
$( '.closeall' ).click( function( e ) {
		e.preventDefault();
		$( '.accordion .collapse.show' ).collapse( 'hide' );
		return false;
	});
	$( '.openall' ).click( function( e ) {
		e.preventDefault();
		$( '.accordion .collapse' ).collapse( 'show' );
		return false;
	});
	$(".closeall").hide();
	$(document).ready(function(){
		$(".openall").click(function(){
			$(".closeall").toggle();
			$(".openall").toggle();
		});
		$(".closeall ").click(function(){
			$(".openall").toggle();
			$(".closeall").toggle();
		});
		
});

// Slide vertical animation	
$(document).ready(function() {
   var owl = $('.owl-carousel');
   owl.owlCarousel({
     autoplay: false,
     items: 1,
     nav: false,
     loop: false,
     autoplayHoverPause: true,
     animateOut: 'slideOutUp',
     animateIn: 'slideInUp',
     autoplayTimeout: 5000,
     autoplayHoverPause: false,
   });
   $('.play').on('click', function() {
   owl.trigger('play.owl.autoplay', [1000]);
     console.log('play');
 })
 $('.stop').on('click', function() {
   owl.trigger('stop.owl.autoplay');
        console.log('stop');
 });
 
 });
 
//Animation
new WOW().init();

$('.reset').click(function(){
  new WOW().init();
})


//Mouse Hover Text Scroll
var step = 50;
	var scrolling = false;
	jQuery(".max400, .max300, .max200").each(function(){
		var ths = $(this).find('.scroll_hover');
		$(this).hover(
				function() {
					event.preventDefault();
					scrolling = true;
					scrollContent("down",ths);
				}, function() {
					scrolling = true;
					scrollContent("up",ths);
				}
		);
	});
	function scrollContent(direction,selector) {
		var amount = (direction === "up" ? "-=25px" : "+=5px");
		selector.stop().animate({
			scrollTop: amount
		}, 1, function() {
			if (scrolling) {
				scrollContent(direction,selector);
			}
		});
	}

	
// Menu Hover Bg Move	
const triggers = document.querySelectorAll('.nav-tabs a');

// Create Element
/*
const highlight = document.createElement('span');
highlight.classList.add('highlight_tab');
document.body.append(highlight);

function setHighlight() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
*/
// Listeners
triggers.forEach((trigger) => {
  trigger.addEventListener('mouseover', setHighlight);
});

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    console.log("enable");
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



// Tooltip	
$('[data-toggle="popover"]').popover({
	html: true,
	content: function () {
		var id = $(this).attr('id')
		return $('#po' + id).html();
	}
});

//Window Height
$(document).ready(function() {	
function resize()
	{
		var heights = window.innerHeight;

		//document.getElementById("homepage_height").style.height = (heights - 180 + "px");
	}
	resize();
	window.onresize = function() {
		resize();
	};
});

//Custum Scroll Text
(function($){
  $(window).on("load",function(){
      $(".content").mCustomScrollbar();
  });
})(jQuery);

