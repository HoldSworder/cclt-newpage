$(window).scroll(function(){
	if ($(window).scrollTop() == 0) {
		$('#nav').css({'background-color':'rgba(0,30,50,0)','box-shadow':'none'});
	}else{
		$('#nav').css({'background-color':'rgba(0,30,50,0.5)','box-shadow':'0 4px 8px rgba(0,0,0,0.1'});
	};
});

function show(hover,show){
	hover.mousemove(function(){
		show.removeClass('hidden');
	});
	hover.mouseout(function(){
		show.addClass('hidden');
	});
};

show($('#weixin'),$('#weixin-ma'));

$(function(){
	$('#ft-logo').click(function(){
		$('body').animate({
			scrollTop:0
		},500);
	});
});