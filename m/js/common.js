
//전체페이지 마우스휠이벤트 스크립트
window.onload = function () {
	$(".box").each(function () {
		// 개별적으로 Wheel 이벤트 적용
		$(this).on("mousewheel DOMMouseScroll", function (e) {
			e.preventDefault();
			var delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta / 120;
				if (window.opera) delta = -delta;
			} else if (event.detail) delta = -event.detail / 3;
			var moveTop = null;
			// 마우스휠을 위에서 아래로
			//offset() : 문서를 기준으로 일치하는 요소 세트에서 첫 번째 요소의 현재 좌표를 가져옴.
			if (delta < 0) {
				if ($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}
			// 마우스휠을 아래에서 위로
			} else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}
			// 화면 이동 0.8초(800)
			$("html,body").stop().animate({
				scrollTop: moveTop + 'px'
			}, {
				duration: 800, complete: function () {
				}
			});
		});
	});
 }
 
//1:1카톡
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
		//맨위로 버튼 1:1카톡 스크립트
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

//login.html 스크립트
function idpwCheck(){
 
 var idVal = document.getElementById('id');
 var pwVal = document.getElementById('pw'); 
 
 if(!idVal.value){
	 alert("아이디를 입력해주세요.");
	idVal.focus();
	return false;
 }
 if(!pwVal.value){
	 alert("비밀번호를 입력해주세요.");
	pwVal.focus();
	return false;
 }
   frm.submit();// action으로 이동
}

//order.html 스크립트
function orderCheck(){
 
 var idVal = document.getElementById('id');
 var numVal = document.getElementById('num');
 var pwVal = document.getElementById('pw'); 
 
 if(!idVal.value){
	 alert("주문자명을 입력해주세요.");
	idVal.focus();
	return false;
 }
 if(!numVal.value){
	 alert("주문번호를 입력해주세요.");
	pwVal.focus();
	return false;
 }
 if(!pwVal.value){
	 alert("비밀번호를 입력해주세요.");
	pwVal.focus();
	return false;
 }
   frm.submit();// action으로 이동
}

//join.html-join2.html 약관동의/올체크 스크립트 
function check(){
	var frm = document.frm;

	if(!frm.agree1.checked){
		alert("사이트 이용약관에 동의해주세요.");
		frm.agree1.focus();
		return;
	}
	if(!frm.agree2.checked){
		alert("개인정보 취급방침에 동의해주세요.");
		frm.agree1.focus();
		return;
	}
	if(!frm.agree4.checked){
		alert("만 14세 이상에 동의해주세요.");
		frm.agree2.focus();
		return;
	}

	location.href = "join2.html";	
}

function allCheck(){
	with(document.frm){
		if(all.checked){
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = true;
				}
			}
		}else{
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = false;
				}
			}
		}
	}
}


function formCheck(){
	
	var join = document.join;
	var reg_email = /([0-9a-zA-Z_]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_]+)/;
	var reg_num = /(?=.*[a-z])(?=.*[0-9])(?=.*[?~!@#$%^&*_-])/;
	
	//아이디검사
	if(!join.id.value){
		alert("아이디를 입력해주세요.");
		join.id.focus();
		return false;
	}
	//비밀번호 검사
	if(!join.pw.value){
		alert("비밀번호를 입력해주세요.");
		join.pw.focus();
		return false;
	}
	if(join.pw.value.length<10){
		alert("비밀번호를 10자 이상 입력해주세요.");
		join.pw.focus();
		return false;
	}
	if(!reg_num.test(join.pw.value)){
		alert("비밀번호는 영문, 숫자, 특수문자를 포함하는 형식이어야 합니다");
		join.pw.focus();
		return false;
	}
	//비밀번호 재입력 검사
	if(!join.repw.value){
		alert("비밀번호를 확인해주세요.");
		join.repw.focus();
		return false;
	}
	if(join.pw.value!=join.repw.value){
		alert("비밀번호가 맞지 않습니다");
		join.repw.focus();
		return false;
	}
	//회원명 검사
	if(!join.memberName.value){
		alert("회원명을 입력해주세요.");
		join.memberName.focus();
		return false;
	}
	//휴대전화번호 검사
	if(!join.hp.value){
		alert("휴대전화번호를 입력해주세요.");
		join.hp.focus();
		return false;
	}
	//이메일 검사
	if(!join.mail.value){
		alert("이메일을 입력해주세요.");
		join.mail.focus();
		return false;
	}
	if(!reg_email.test(join.mail.value)){
		alert("이메일형식에 맞게 입력해주세요.");
		join.mail.focus();
		return false;
	}
	//생년월일 검사
	if(!join.bt.value){
		alert("생년월일을 입력해주세요.");
		join.bt.focus();
		return false;
	}
}

//체크박스 자동
function checking(st){
	var join = document.join;
	
	if(st == "on"){
		for(var i=0;i<join.length;i++){
			if(join.elements[i].type == "checkbox"){
				join.elements[i].checked = true;
				join.elements[i].disabled = false;

			}
		}
	}else{
		for(var i=0;i<join.length;i++){
			if(join.elements[i].type == "checkbox"){
				join.elements[i].checked = false;
				join.elements[i].disabled = true;
			}
		}
	}
}

//Q&A 아코디언 메뉴
//dt클릭
$("#container_costomer .costomer .cont dt").click(function(){
	//alert("oi");
	$(this).next().toggleClass("on");
	$(this).next().siblings("dd").removeClass("on");
});

//dd클릭
$("#container_costomer .costomer .cont dd li").click(function(){
	//alert("dd");
	$(this).find("ul.answer").toggleClass("on");
	$(this).siblings().find("ul.answer").removeClass("on");
});