$(window).scroll(function(){
	if ($(window).scrollTop() == 0) {
		$('#down').show();
	}else{
		$('#down').hide();
	};
});

$(function(){
	$('#firstPage').mousemove(function(){
		$('.down').animate({'bottom':'5rem'},'slow');
	})
	$('#firstPage').mousemove(function(){
		$('.down').animate({'bottom':'2rem'},'slow');
	})
});

$(function(){
	$('#down').click(function(){
		$('body').animate({
			scrollTop: $('#a').offset().top
		},500);
	});
});

$('#fpFontLeft,#fpLeftEn').animate({left:'0em',opacity:'0.8'},1000);
$('#fpFontRight,#fpRightEn').animate({left:'0em',opacity:'0.8'},1000);





