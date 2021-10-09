//menu
$(function(){
			$('.main_m>li').on('mouseover',function(){
				$('.sub').stop().slideDown(300);
			}).on('mouseleave',function(){
				$('.sub').stop().slideUp(300);
			});
//slider
function slide(){
	$('.swiper-wrapper').animate({left:'-100%'},function(){
	$('.swiper-wrapper div:first').appendTo('.swiper-wrapper')
	$('.swiper-wrapper').css({left:0})
})
}
	setInterval(slide,3000);
});

