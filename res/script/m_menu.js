  $(function(){
       //모바일메뉴보이기
        $('.btn').click(function(){
           $('.m_menu').slideToggle(); 
        });
	   //모바일메뉴 스크립트
    	$(".main").click(function(){
		  $(this).find('.sub_m').slideToggle();
		  $(this).siblings().children('.sub_m').slideUp();
		  return false;
	});
});