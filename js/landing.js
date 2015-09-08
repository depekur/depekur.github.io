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

theater
	.describe("jenya", { speed: 1, accuracy: .9, invincibility: 4 }, "#jenya_speech")
	.describe("dima", { speed: 1, accuracy: .7, invincibility: 4 }, "#dima_speech")
	.describe("valia", { speed: 1, accuracy: .7, invincibility: 4 }, "#valia_speech")
	.describe("igor", { speed: 1, accuracy: .9, invincibility: 4 }, "#igor_speech");

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
	.write("jenya: доложить обстановку", 500)
	.write("igor: фронтенд почти готов", 300, "igor: сегодня выкачу мобильную версию")
	.write("dima: есть взрывная идея по стройматериалам!", 500, "dima: по автозапчастям смотрю конкурентов")	
	.write("valia: инфографики у тебя на почте, проверил бы", 500)		
	.write("jenya: вижу инфографики, хороши", 500, "jenya: и Валя, сделай уже нам логотип с бананом!", 200)
	.write("valia: да ты офи", -9, "valia: тебе же не угодишь!!", 300, "valia: шестой рисовать не буду!!", 400)
	.write("jenya: ладно, а что там за идея по стройке?", 400)
	.write("dima: если в двух словах то нужно просто..", 10)
	.write("igor: ребята, я клиента нашел!", 100)
	.write("jenya: опа", 100, "dima: тематика?", 100, "valia: бананы ему..", 300)
	.write("igor: вообщем есть один татуировщик", 300, "igor: у него только группа вконтактике", 300, "igor: надоело говорит, хочет другой уровень")
	.write("jenya: по классике портфолио ему, что еще?", 400)
	.write("dima: календарь с расписанием например", 400, "dima: или примерку татух", 400)
	.write("valia: фирменный стиль у него есть?", 500, "valia: и мне нужны его работы в качестве", 400)
	.write("jenya: примерку на 3д модель можно сделать", 400, "jenya: или пусть свои фото загружают..", 400, "jenya: Димас, с тебя решения", 400, "jenya: Игорь, про планшеты не забываем", 400, "jenya: дедлайн на носу", 400, "jenya: а на мне еще магазин висит", 400)
	.write("dima: уже смотрю тату салон из калифорнии", 400, "dima: у нас аналогов наверное нет", 400, "dima: будет круто", 400)
	.write("valia: хочу татуху..", 500, "valia: Жень может предложи ему бартер, м?", 400)
	.write("jenya: решено, набьем тебе бананы на жоп", -3, "булк", -4, "шею", 400)
	.write("valia: увольняюсь!", 500, "jenya: с тебя сегодня иконки для магазина", 400, "jenya: расслабимся в отпуске", 400)
	

	
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
				responsiveWidth: 1108,
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






	


	
});//end doc.ready


// my button is on fire
var buttonFire = $('.toogle-nav'),
	superNav = $('.super-pupper-navigation');


buttonFire.click(function() {
	superNav.toggleClass('active-nav', 500, "easeInOutBack");
});


$('.scroll-down-please').click(function(){
	$.fn.fullpage.moveSectionDown();
});




