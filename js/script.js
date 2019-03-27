document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
			$('body').css({'overflow-y':'scroll'});
				setTimeout(function(){
						animate_this_shit();
							}, 2500);
		}
	}, 2500);
}
function animate_this_shit() {
	$('.company_name').addClass('company_name_animation');
}
$('.carusel').slick({
	arrows: true,
	dots: false,
	dotsClass: "my-dots",
	nextArrow: '.slick-next',
	prevArrow: '.slick-prev',
	 autoplay: true,
  autoplaySpeed: 2000,

	// draggable: false,
	// swipe: false
});
var video = $('.vid').hover(hoverVideo, hideVideo);

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

function Length() {
	var path0 = document.querySelector('#logo0');
	var path1 = document.querySelector('#logo1');
	// var path2 = document.querySelector('#logo2');
	// var path3 = document.querySelector('#logo3');
	// var path4 = document.querySelector('#logo4');
	// var path5 = document.querySelector('#logo5');
	// var path6 = document.querySelector('#logo6');
	// var path7 = document.querySelector('#logo7');
	// var path8 = document.querySelector('#logo8');
	var len0 = Math.round(path0.getTotalLength());
	var len1 = Math.round(path1.getTotalLength());
	// var len2 = Math.round(path2.getTotalLength());
	// var len3 = Math.round(path3.getTotalLength());
	// var len4 = Math.round(path4.getTotalLength());
	// var len5 = Math.round(path5.getTotalLength());
	// var len6 = Math.round(path6.getTotalLength());
	// var len7 = Math.round(path7.getTotalLength());
	// var len8 = Math.round(path8.getTotalLength());
	alert("__" + len0 + "__ " + len1 );
};

		$(document).ready(function(){
			// Length();
		$(".et-hero-tabs-container").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		});
		});
