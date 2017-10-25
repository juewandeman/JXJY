$(document).ready(function(){
//点击直接隐藏
//	$("#menu-click").click(function(){
//		$("#menu-total").toggleClass("none");
//	});
//	$("#menu-clicks").click(function(){
//		$("#menu-total").toggleClass("none");
//	});
//});	
//点击收缩
	$("#menu-click").click(function(){
		$("#menu-total").animate({height:"toggle"});
	});
	$("#menu-click").click(function(){
		$(".aaaa").animate({height:"toggle"});
	});
	$("#menu-clicks").click(function(){
		$(".aaaa").animate({height:"toggle"});
	});
	
	$(".gengduo").click(function(){
		$(".xiaoping").toggleClass("nones");
		$('.gengduo').css('display','none');
	});
	$(".fanhui").click(function(){
		$(".xiaoping").toggleClass("nones");
		$('.gengduo').css('display','block');		
	});
	$(".fengcai_dianji").click(function(){
		$(".fengcai_dianjis").toggleClass("nones");
	});
	
	$(".zuopin_dianji").click(function(){
		$(".zuopin_dianjis").toggleClass("nones");
		$('.zuopin_dianji').css('display','none');
	});
	$(".zuopin_fanhui").click(function(){
		$(".zuopin_dianjis").toggleClass("nones");
		$('.zuopin_dianji').css('display','block');		
	});
	
	$(".xuezi_dianji").click(function(){
		$(".xuezi_dianjis").toggleClass("nones");
		$('.xuezi_dianji').css('display','none');
	});
	$(".xuezi_fanhui").click(function(){
		$(".xuezi_dianjis").toggleClass("nones");
		$('.xuezi_dianji').css('display','block');		
	});
	
	$(".jiuye_dianji").click(function(){
		$(".jiuye_dianjis").toggleClass("nones");
		$('.jiuye_dianji').css('display','none');
		$('.jiuye_fanhui').css('display','block');				
	});
	$(".jiuye_fanhui").click(function(){
		$(".jiuye_dianjis").toggleClass("nones");
		$('.jiuye_fanhui').css('display','none');		
		$('.jiuye_dianji').css('display','block');		
	});
	
	
});
	





	



