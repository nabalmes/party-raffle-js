$(window).on("load", function(){
	// startRaffle()
    $(".pudding-logo").css("transform", " translateX(0)").css("transition", "all 1000ms ease-in-out")
})
   



function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function startRaffle(){
var drum__roll = document.querySelector(".party-drum__roll")
drum__roll.play();
$(".text__error").val("");
$(".text__link").val("");

	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ`\|'.split('');

var progress404 = 0;
var total404 = $('.text__error').data('text').length;

var progressLink = 0;
var totalLink = $('.text__link a').data('text').length;

var scrambleInterval = setInterval(function() {
	var string404 = $('.text__error').data('text');
	var stringLink = $('.text__link a').data('text');
	
	for(var i = 0; i < total404; i++) {
		if(i >= progress404) {
			string404 = setCharAt(string404, i, characters[Math.round(Math.random() * (characters.length - 1))]);
		} 
	}
	
	for(var i = 0; i < totalLink; i++) {
		if(i >= progressLink) {
			stringLink = setCharAt(stringLink, i, characters[Math.round(Math.random() * (characters.length - 1))]);
		} 
	}
	
	$('.text__error').text(string404);
	$('.text__link a').text(stringLink);	
		

}, 2000 / 60);

setTimeout(function() {
	var revealInterval = setInterval(function() {
		if(progress404 < total404) {
			progress404++;
		}else if(progressLink < totalLink) {
			setInterval(function(){
				progressLink++;
				setInterval(function(){
					drum__roll.pause();
					var winner = document.querySelector(".party-drum__winner")
					winner.play();
				}, 3000)
			}, 5000)
		
		}else{
			clearInterval(revealInterval);
			clearInterval(scrambleInterval);
			$('.modal-container').addClass('active');
			$('.modal-wrapper').addClass('active');
		}
	}, 200);
}, 8000);

}

