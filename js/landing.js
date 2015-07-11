'use strict';

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
	.write("god: для твоего бизнеса", 2000, false)
	.write(fuckTheKing, "god: которые решают задачи", 2000, fuckTheKing)				
	.write("god: и их сопровождение", 2000, false)
	.write("god: для B2B сегмента", 2000, false)
	.write(fuckTheKing, "god: лендингов, магазинов", 2000, fuckTheKing)
	.write("god: для твоего магазина", 2000)
	.write(fuckTheKing, "god: которые продают", 2000, fuckTheKing)	
	.write("god: для твоей компании", 2000)
	.write("god: для предпринимателей", 2000)
	.write(function () { theater.play(true); });


function fuckTheKing() {
	$("#coma").toggleClass("death");
}



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
				//animateAnchor: true,
				responsiveWidth: 768,
				responsiveHeight: 500,
				anchors: ['hello', 'offer', 'portfolio', 'about', 'contacts'],
			  	navigation: true,
				navigationPosition: 'left',
				navigationTooltips: ['hello', 'offer', 'portfolio', 'about', 'contacts'],
				//slidesNavigation: true,
				//slidesNavPosition: 'top',
				//menu: '#offer-n',


				onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
						var offerNav = $('#offer-nav ul li');
			            //var leavingSlide = $(this);
			            //console.log(anchorLink);
			        }				

			}); //fullpage END
		});


