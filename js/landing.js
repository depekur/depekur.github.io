'use strict';


$(document).ready(function() {



/*
* 	theater


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
	.write("god: для твоего бизнеса", 2000)
	//.write(fuckTheKing, "god: которые решают задачи", 2000, fuckTheKing)				
	.write("god: и их сопровождение", 2000, false)
	.write("god: для B2B сегмента", 2000, false)
	.write(fuckTheKing, "god: лендингов, магазинов", 2000, fuckTheKing)
	.write("god: для твоего магазина", 2000)
	.write("god: под задачи бизнеса", 2000)
	.write(fuckTheKing, "god: которые продают", 2000, fuckTheKing)	
	.write("god: для твоей компании", 2000)
	
	.write(function () { theater.play(true); });


function fuckTheKing() {
	$("#coma").toggleClass("death");
}


*/

var theater = new TheaterJS({ locale: "ru" });
4
theater
	.describe("jenya", { speed: .9, accuracy: .9, invincibility: 100 }, "#jenya")
	.describe("dima", { speed: .9, accuracy: .7, invincibility: 2 }, "#dima")
	.describe("valia", { speed: .9, accuracy: .6, invincibility: 4 }, "#valia")
	.describe("igor", { speed: .9, accuracy: .7, invincibility: 10 }, "#igor");

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
	.write("jenya: я вам проект принес", 400)
	.write("igor: ура, я не буду голодать", 400)	
	.write("dima: опять лендинг притащил?", 500)
	.write("valia: ближе к делу! что рисовать будем?", 500)
	.write("jenya: итак, у нас сегодня интернет магазин резиновых членов", 500)
	.write("igor: бля", 500)
	.write("valia: я не буду это рисовать!", 500)
	.write("dima: ща престашопик развернем, шаблончик накатим..", 500)
	.write("jenya: дима начинай, валя - рисуй давай, иначе без премии будешь!", 500)
	.write("valia: фуууууу", 500)
	.write("valia: ок)))", 500)
	.write("igor: может купим наконец-то премиум шаблон? надоело верстать ну", 500)	
	.write("jenya: а я пойду поем", 500)
	.write("dima: сук))", 500)
	.write("igor: бля", 500)
	.write("valia: ну ты че((", 500)
	

	
	.write(function () { theater.play(true); });



/*
* 	scroll & slider (fullpage plugin)
*/

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
				anchors: ['hello', 'offer', 'about', 'how-banana-work', 'escort', 'contacts'],
			  	navigation: true,
				navigationPosition: 'left',
				//navigationTooltips: ['приветик', 'offer', 'portfolio', 'how-banana-work', 'about', 'contacts'],
				slidesNavigation: true,
				slidesNavPosition: 'bottom',
				//menu: '#offer-n',


				onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
						var offerNav = $('#offer-nav ul li');
			            //var leavingSlide = $(this);
			            //console.log(anchorLink);
			        }				

			}); //fullpage END


// my button is on fire



	


	
});//end doc.ready

var buttonFire = $('.toogle-nav'),
	landingNav = $('.landing-nav'),
	superNav = $('#super-pupper-navigation'),
	fireInTheButton = true;

	buttonFire.click(function() {
		if (fireInTheButton) {
			landingNav.stop(true, true)
			superNav.toggleClass('death');
			landingNav.animate({
				'width' : '300px'},
				1000, 
				'easeOutElastic', 
				function() {
					fireInTheButton = false;					
				});
		} else {
			landingNav.stop(true, true);
			superNav.toggleClass('death');
			landingNav.animate({
				'width' : '70px'},
				1000, 
				'easeOutElastic', 
				function() {
					fireInTheButton = true;
				});			
		}		
	});



$('.scroll-down-please').click(function(){
	$.fn.fullpage.moveSectionDown();
});