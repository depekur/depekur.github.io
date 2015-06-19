$(function() {		
	$('body').waitForImages({
		finished: function() {
				Website();
				//$('body').jKit();
		},
		waitForAll: true
	});

function Website() {
		CheckScripts();		

		//$('body').jKit();
		//backgroundmenu();
		setTimeout(function(){
			$(".preloader").fadeOut(500);							
		},2000);
		setTimeout(function(){
			$('header').fadeIn();							
		},500);
}

function CheckScripts() {

  $(document).ready(function(){
    preloaderCheck();

  });

}

function OpenCheck() {
    setTimeout(function() {
        hidePreloader();
    }, 1000);
}




function preloaderCheck() {
    showPreloader();
    $(window).load(function() {
        hidePreloader();
    });
}


function showPreloader() {
  $(".preloader").fadeIn("slow");
}

function hidePreloader() {
  $(".preloader").delay(2000).fadeOut("slow");
}



})