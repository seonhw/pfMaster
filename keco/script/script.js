$(document).ready(function(){	
	
//skip_menu	
	$('.skip_menu a').on('focus', function(){
        $(this).stop().animate({"top":0, "opacity":1});
    });
    $('.skip_menu a').on('click', function(){
        $(this).stop().animate({"top":"-30px", "opacity":0});
    });
    $('.skip_menu a').on('focusout', function(){
        $(this).stop().animate({"top":"-30px", "opacity":0});
    });

//pop_up
	$('.full_nav').find('li').click(function(){
		$('.pop_up').show();
	});
	$('.close_bt').click(function(){
		$('.pop_up').hide();
	});

//quick
	 $("#quick h3").click(function(){
	 	$("#quick ul ul").slideUp();
		if(!$(this).next().is(":visible"))
	 	{
	 		$(this).next().slideDown();
	 	}
	 })
	 
//bxslider
	var main = $('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,		
		autoControls: true,
		pager:true,	
		pause: 3000,
		autoDelay: 0,	
		speed: 500,
		stopAutoOnclick:true
	});
	$(".bx-start").hide();
	$(".bx-stop").click(function(){	
		main.stopAuto();
		$(".bx-stop").hide();
		$(".bx-start").show();
		return false;
	});
	$(".bx-start").click(function(){
	    main.startAuto();
		$(".bx-start").hide();
		$(".bx-stop").show();
		return false;
	});

//tab
	$('.tab_cont > div').hide();
	$('.tab_nav a').click(function () {
	$('.tab_cont > div').hide().filter(this.hash).fadeIn();
	$('.tab_nav a').removeClass('active');
	$(this).addClass('active');
	return false;
	}).filter(':eq(0)').click();

//family
	$(".family_menu").hide();
	$(".button").click(function(e){
			e.preventDefault();
			$(".family_menu").toggle();	
			$(".family_menu2").hide();
			$(".family_menu3").hide();           
	});
	
	$(".family_menu2").hide();
	$(".button2").click(function(e){
			e.preventDefault();
			$(".family_menu2").toggle();
			$(".family_menu").hide();
			$(".family_menu3").hide();		           
	});
	
	$(".family_menu3").hide();
	$(".button3").click(function(e){
			e.preventDefault();
			$(".family_menu3").toggle();
			$(".family_menu").hide();
			$(".family_menu2").hide();	           
	}); 

//f_slide
	var intv;
	var current = 0;
	var sIdx = 0;
	var sCnt =  5;
	
	function startTopSlider() {
		intv = setInterval(function () {
			$("#ul_btns").find("a").eq(current++ % sCnt).click();
		}, 3000);
	}
	function setBnr(idx, bnr, allTab, addCls) {
		$(bnr).css("visibility", "hidden").eq(idx).css("visibility", "visible");
		$(allTab).removeClass(addCls);
		$(allTab).eq(idx).addClass(addCls);
	}
	$(document).ready(function () {   
		//set init
		$("#top_0").css("visibility", "visible");
		$("#btn_0").addClass("on");
		startTopSlider();
				
		$("#ul_btns").find("a").click(function(){
			var idx = $(this).attr("id").split("_")[1];
			setBnr(idx, "#TopSlider > div" , "#ul_btns li > a" , "on" );		
	});      
	});

	$(".que").click(function() {
		$(this).next(".anw").stop().slideToggle(300);
	$(this).toggleClass('on').siblings().removeClass('on');
	$(this).next(".anw").siblings(".anw").slideUp(300); 
	});
	
});