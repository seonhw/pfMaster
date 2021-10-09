
//메뉴바 스크립트1
    window.console = window.console || function(t) {};
//메뉴바 스크립트2
    if (document.location.search.match(/type=embed/gi)) {
      window.parent.postMessage("resize", "*");
    }
//메뉴바 스크립트3
    $(document).ready(function(){
      $(".menuContent ul.sub").hide();
      $(".menuContent ul.menu_top li").click(function(){
        $("ul",this).slideToggle("fast");
      });
    });
//검색폼 보이게 하는 스크립트
        $(function(){
        
        $(".search_toggle a img").click(function(){    //gnb메뉴를 클릭하면
        $("#search_wrap").slideToggle(); // slideToggle은 show와 hide속성을 다가지고있어 숨기고 나타내기 둘다 가능하다.			  
        return false;
        });	
        });

$(function(){
 
	 });

$(function(){
	 $("#wrap").prepend("<div class='bg'></div>"); //prepend = 새로운 div class="bg" 추가함
	 $("#wrap .bg").css({width:"100%",height:"100%",
	 position:"absolute","z-index":"5050",
	 background:"#bbb",opacity:"0.8"}).hide();
		//메뉴 스크립트
		$("#menu_icon a img").click(function(){
		$("#gnb").stop().animate({'margin-left':'0'},500,'swing');
		$("#wrap .bg").stop().fadeIn();
		return false;
		});
		 $(".close").click(function(){
		 $("#gnb").stop().animate({'margin-left':'-75%'},500,'swing');
		 $("#wrap .bg").stop().fadeOut();
		 return false;
		}); 
		$("#wrap .bg").click(function(){
		 $("#gnb").stop().animate({'margin-left':'-75%'},500,'swing');
		 $("#wrap .bg").stop().fadeOut();
		 return false;
		}); 

		//서브 메뉴 스크립트(더 만들어야함)
		$("#wrap #gnb #main_menu .main_menu").click(function(){//누르면 작동한다.
		$(this).find('.main_menu_sub').slideToggle();
		$(this).siblings().children('.main_menu_sub').slideUp();
		 //return;
		});
		//맨위로 버튼
		 $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('#top').fadeIn('slow');
            } else {
                $('#top').fadeOut('slow');
            }
        });
        
        $("#top").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
		
		
});

