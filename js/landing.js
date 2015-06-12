'use strict';
/*
* 	menu button
*/

$('#button').on('click', function() {
  $( ".opacity-nav" ).fadeToggle( "fast", "linear" );
});


/*
* 	parallax
*/

$('.sky').parallax({
	imageSrc: 'media/landing/OSJQVTURTM.jpg',
	speed: '0.3',
	bleed: '1',
});

$('.landing-contact').parallax({
	imageSrc: 'media/landing/4YCB0VAY1L.jpg',
	speed: '0',
	bleed: '1',
	//androidFix: false,
	//iosFix: false
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
	.write("god: для твоего бизнеса.", 2000, false)
	.write("god: которые продают", 2000)
	.write("god: лендингов, магазинов", 2000)
	.write("god: для твоего стартапа.", 2000)
	.write("god: для твоего производства.", 2000)
	.write("god: для твоего магазина.", 2000)
	.write(function () { theater.play(true); });

window.theater = theater;	