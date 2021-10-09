//탑메뉴 고정

$( document ).ready(function() {
 	 var header= $('#header').offset();
 		$(window).scroll(function(){
 			if( $(document).scrollTop() > 0){
 				$('#header').addClass('headerfixed');
				}else{
 					$('#header').removeClass('headerfixed');
 				}
 			}); 
 		}); 