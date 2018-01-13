
$(document).ready(function(){
//
// $("#menu").on("click","a", function (event) {
//
//     //отменяем стандартную обработку нажатия по ссылке
//
//     event.preventDefault();
//
// 
//
//     //забираем идентификатор бока с атрибута href
//
//     var id  = $(this).attr('href'),
//
// 
//
//     //узнаем высоту от начала страницы до блока на который ссылается якорь
//
//         top = $(id).offset().top-80;
//
//      
//
//	        //анимируем переход на расстояние - top за 1500 мс
//
//        $('body,html').animate({scrollTop: top}, 1500);
//    });


$(".to_yellow_header1").click(function() {
		$("html, body").animate({ scrollTop: $(".about_me").height()+35 }, "slow");
		return false;
	});

$(".to_yellow_header2").click(function() {
		$("html, body").animate({ scrollTop: $(".about_me").height()+$(".about_me").height()+35 }, "slow");
		return false;
	});

$(".to_yellow_header3").click(function() {
		$("html, body").animate({ scrollTop: $(".about_me").height()+$(".about_me").height()+$(".my_skills").height()+35 }, "slow");
		return false;
	});
    
$(".to_yellow_header4").click(function() {
		$("html, body").animate({ scrollTop: $(".about_me").height()+$(".about_me").height()+$(".my_skills").height()+$(".portfolio").height()+35 }, "slow");
		return false;
	});

$(".logo").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

//Фиксация меню вверху экрана
$(document).scroll(function(){
			$('.top-line').css({
				top: $(document).scrollTop()
			});
		});
$(".item").magnificPopup({
    type: 'image',
    gallery : {
        enabled: true
    },
    
});

});

