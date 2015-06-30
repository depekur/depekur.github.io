'use strict';
/*
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
*/



$('#landing-menu li').on("click", function() {
	$('#landing-menu').find("active-letter").removeClass("active-letter");
	$(this).parent().addClass("active-letter");			  
});


/*
* 	theater
*/

var theater = new TheaterJS({ locale: "ru" });

theater.describe("god", { speed: .8, accuracy: .7, invincibility: 4 }, "#god");

theater
	.on("say:start, erase:start", function (eventName) {
        var self    = this,
            current = self.current.voice;

        self.utils.addClass(current, "saying");
    })
    .on("say:end, erase:end", function (eventName) {
        var self    = this,
            current = self.current.voice;

        self.utils.removeClass(current, "saying");
    });

theater
	.write("god: для твоего бизнеса", 2000, false, fuckTheKing)	
	
		
	.write("god: и их сопровождение", 2000, false)
	.write("god: для производств", 2000, false, fuckTheKing)
	.write("god: которые продают", 2000)
	.write("god: лендингов, магазинов", 2000, fuckTheKing)
	.write("god: для твоего магазина", 2000)
	.write("god: которые решают задачи", 2000)
	.write(function () { theater.play(true); });


function fuckTheKing() {
	$("#coma").toggleClass("death");
}

//window.theater = theater;	


/*
* 	scroll & slider
*/

$(document).ready(function() {
			$('#fullPage').fullpage({

				verticalCentered: false,
				continuousVertical: false,
				css3: true,
				scrollBar: true,
				scrollingSpeed: 800,
				controlArrows: true,
				keyboardScrolling: true,
				animateAnchor: true,
				responsiveWidth: 800,
				responsiveHeight: 600,
				anchors: ['hello', 'offer', 'portfolio', 'about', 'comments', 'contacts'],
			  	//menu: '#landing-menu',
			  	navigation: true,
				navigationPosition: 'left',
				navigationTooltips: ['hello', 'offer', 'portfolio', 'about', 'comments', 'contacts']
	


				/*
				//Navigation
				menu: false,
				lockAnchors: false,
				anchors:['firstPage', 'secondPage'],
				navigation: false,
				navigationPosition: 'right',
				navigationTooltips: ['firstSlide', 'secondSlide'],
				showActiveTooltip: false,
				slidesNavigation: true,
				slidesNavPosition: 'bottom',

				//Scrolling
				css3: true,
				scrollingSpeed: 700,
				autoScrolling: true,
				fitToSection: true,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				continuousVertical: false,
				normalScrollElements: '#element1, .element2',
				scrollOverflow: false,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,

				//Accessibility
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,

				//Design
				controlArrows: true,
				verticalCentered: true,
				resize : false,
				sectionsColor : ['#ccc', '#fff'],
				paddingTop: '3em',
				paddingBottom: '10px',
				fixedElements: '#header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,

				//Custom selectors
				sectionSelector: '.section',
				slideSelector: '.slide',

				//events
				onLeave: function(index, nextIndex, direction){},
				afterLoad: function(anchorLink, index){},
				afterRender: function(){},
				afterResize: function(){},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
						*/

			}); //fullpage END
	

		});