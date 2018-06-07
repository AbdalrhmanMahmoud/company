 	$(function () {
		"use strict";		
	//smooth scroll to div
 			$(" li a").click(function () {
 			$("html,body").animate({
 					scrollTop:$("#"+$(this).data("value")).offset().top},2000);
 				});
	//niceScroll for page
 			 $("html,body").niceScroll({
 				 cursorcolor: "#111",
 				 cursorwidth: "10px",
 				 // mousescrollstep: 80,
 				cursorborder: "2px solid #0895d1"  });
			});
//loding page
$(window).on('load',function(){ 
    $(".loding .spinner").delay(10).fadeOut(200,function(){
    $(this).parent().slideUp(1000,function(){
 		$(this).remove()
 		});
 	});

});



