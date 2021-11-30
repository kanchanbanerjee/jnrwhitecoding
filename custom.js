// JavaScript Document


$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow-x':'hidden'});
});

$(document).ready(function(){


$('.testislider').owlCarousel({
  autoplay:true,
    loop:true,
    margin:10,
    nav:false,
	dots:true,
	items:3,
	addClassActive: true,
    transitionStyle : "fade",
    
	animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:false,
            loop:false
        }
    }
    
})

$('.newsslider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    items:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})
jQuery('.navigation nav').meanmenu();


});
WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
  };

  var wow = new WOW();
  wow.init();


  $('.wow').on('scrollSpy:exit', function() {
    $(this).css({
      'visibility': 'hidden',
      'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
  }).scrollSpy();

$(".navigation ul li").find("ul").parent().addClass("new");




// page animations js
  if ($(".each_scroll").length) {
      var ctrl = new ScrollMagic.Controller();
    $(".each_scroll").each(function () {
      var _this = $(this);
      if (_this.attr("data-effect") == "fade") {
        var eachTween = TweenMax.from(_this.children(), 1.2, {
          opacity: 0,
          stagger: 0.3,
          yoyo: true,
        });
      } else if (_this.attr("data-effect") == "slideFade") {
        var eachTween = TweenMax.from(_this.children(), 0.7, {
          opacity: 0,
          x: -20,
          stagger: 0.3,
          yoyo: true,
        });
      } 
       else if (_this.attr("data-effect") == "slideTop") {
        var eachTween = TweenMax.from(_this.children(), 0.7, {
          opacity: 0,
          y: -20,
          stagger: 0.3,
          yoyo: true,
        });
      } 
      else if (_this.attr("data-effect") == "slideSwing") {
        var eachTween = TweenMax.from(_this.children(), 1.2, {
          opacity: 0,
          x: 30,
          stagger: 0.5,
          yoyo: true,
          ease: Back.easeOut.config(2.7)
        });
      } else {
        var eachTween = TweenMax.from(_this.children(), 1.2, {
          opacity: 0,
          y: 80,
          stagger: 0.3,
          yoyo: true,
        });
      }
      new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: "0.8",
        }).setTween(eachTween)
        .addTo(ctrl)
        .on("progress", function (event) {
          var scene_progress = event.progress;
          if (scene_progress >= 0.5) {
            setTimeout(() => {
              _this.children().addClass("visible");
            }, 1200);
          } else {
            setTimeout(() => {
              _this.children().removeClass("visible");
            }, 1200);
          }
        });
    });
  }

