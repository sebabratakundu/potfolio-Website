// JavaScript Document

/* start loader coding */
	
	window.onload = function()
	{
		"use strict";
		
		$(document).ready(function(){
			$(".loader").fadeOut(1000,function(){
				$(".left-slider").animate({width:'0%'},500);
					$(".right-slider").animate({width:'0%'},500,function(){
						$(".main-box").fadeOut();
					});
				});
            });
	}
/* end loader coding */


/* start menu coding */
$(function(){
	"use sritct";
	
	$("#menu").slicknav({
		label : '',
		brand : 'A & S Animation',
	});
})

/*end menu coding */

/* start slider coding */

$(document).ready(function() {
  $(".skitter-large").skitter({
	  label:false,
	  dots:false,
  });
});

/*end slider coding */

/*start slider label coding*/

$(document).ready(function(){
	"use strict";
	
	$(".label-text").slideDown(1000,function(){
		$(".label-btn").fadeIn(1500,function(){
			$(".label-text,.label-btn").delay(100).fadeOut(100,function(){
				$(".slider-label").css("background","rgba(0,0,0,0.8)");
				$(".about").fadeIn(1000,function(){
					$(".about-text").show(1000,function(){
						$(".contact-text").fadeIn(500,function(){
							$(".contact-btn").fadeIn(function(){
								$(".about,.about-text,.contact-text,.contact-btn").delay(4000).fadeOut(function(){
									$(".slider-label").css("background","inherit");
								});
							});
						});
					});
				});
			});
		});
	});
});

$(document).ready(function(){
	setInterval(function()
		{
	"use strict";
	
	$(".label-text").slideDown(1000,function(){
		$(".label-btn").fadeIn(1500,function(){
			$(".label-text,.label-btn").delay(50).fadeOut(100,function(){
				$(".slider-label").css("background","rgba(0,0,0,0.8)");
				$(".about").fadeIn(100,function(){
					$(".about-text").show(1000,function(){
						$(".contact-text").fadeIn(500,function(){
							$(".contact-btn").fadeIn(function(){
								$(".about,.about-text,.contact-text,.contact-btn").delay(2800).fadeOut(function(){
									$(".slider-label").css("background","inherit");
								});
							});
						});
					});
				});
			});
		});
	});
	},10000);
});

/*end slider label coding*/

/*start project slider coding */

$(document).ready(function(){
	$(".center").slick({
		dots:false,
		infinite:true,
		centerMode:true,
		slidesToShow:5,
		slidesToScroll:3,
		responsive:[
			{
				breakpoint:768,
				settings:{
					dots:false,
					infinite:true,
					centerMode:true,
					slidesToShow:3,
					slidesToScroll:3,
			}
			},
			
			{
				breakpoint:480,
				settings:{
					arrows:false,
					dots:false,
					infinite:true,
					slidesToShow:1,
					slidesToScroll:1,
				}
			},
		]
	});
});
/*end project slider coding */

/*start progress bar coding*/

$(document).ready(function(){
	$(document).scroll(function(){
		var sheight = window.pageYOffset;
		if(sheight>1100)
			{
				$(document).ready(function(){
	$(".pro-photo div").animate({width:'90%'},500,function(){
		$(".pro-illu div").animate({width:'80%'},300,function(){
			$(".pro-html-css div").animate({width:'90%'},300,function(){
				$(".php div").animate({width:'70%'},300);
			});
		});
	});
});
			}
	});
});
	

/*end progress bar coding*/


/*start scroll coding*/

$(document).ready(function(){
	if($(window).width()>1024){
	$(document).scroll(function(){
		var scrollHeight = window.pageYOffset;
		if(scrollHeight>600)
			{
				$(".about-me").slideDown(1200);
			}
		else{
			$(".about-me").fadeOut(500);
		}
		if(scrollHeight>1500)
			{
				$(".people").addClass("animated slideInRight");
			}
		if(scrollHeight>1800)
			{
				$(".foot-box").fadeIn(1000);
			}
		else{
			$(".foot-box").fadeOut(500);
		}
		
	});
}});

/*end scroll coding*/

/*start services coding*/

//for desktop 

$(document).ready(function(){
	$(".web-design-pic img").fadeIn(500).addClass("animated slideInLeft");
	$(window).scroll(function(){
		var h = window.pageYOffset;
	if($(window).width()>1024)	
		{if(h>200)
			{
				$(".web-dev-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>700)
			{
				$(".search-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>1300)
			{
				$(".graphic-design-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>1700)
			{
				$(".logo-design-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>2200)
			{
				$(".redesign-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		
	}});
});

//for laptop

$(document).ready(function(){
	$(".web-design-pic img").fadeIn(500).addClass("animated slideInLeft");
	$(window).scroll(function(){
		var h = window.pageYOffset;
	if($(window).width()>768)	
		{if(h>100)
			{
				$(".web-dev-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>500)
			{
				$(".search-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>1000)
			{
				$(".graphic-design-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>1500)
			{
				$(".logo-design-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>1900)
			{
				$(".redesign-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		
	}});
});

//for tablet

$(document).ready(function(){
	$(".web-design-pic img").fadeIn(500).addClass("animated slideInLeft");
	$(window).scroll(function(){
		var h = window.pageYOffset;
	if($(window).width()>480)	
		{if(h>200)
			{
				$(".web-dev-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>700)
			{
				$(".search-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>1300)
			{
				$(".graphic-design-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>2200)
			{
				$(".logo-design-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>2800)
			{
				$(".redesign-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		
	}});
});


//for mobile

$(document).ready(function(){
	$(".web-design-pic img").fadeIn(500).addClass("animated slideInLeft");
	$(window).scroll(function(){
		var h = window.pageYOffset;
	if($(window).width()<480)	
		{if(h>200)
			{
				$(".web-dev-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>1000)
			{
				$(".search-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>2000)
			{
				$(".graphic-design-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		if(h>2900)
			{
				$(".logo-design-pic img").fadeIn(500).addClass("animated slideInLeft");
			}
		if(h>3700)
			{
				$(".redesign-pic img").fadeIn(500).addClass("animated slideInRight");
			}
		
	}});
});

/*end services coding*/

/* start scroll to top coding*/

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>100)
			{
				$(".scrolltop").fadeIn();
			}
		
		else{
			$(".scrolltop").fadeOut();
		}
		
		$(".scrolltop").click(function(){
			$("html,body").animate({scrollTop:0},700);
			return false;
			});
	});
});

/* end scroll to top coding*/

/*start portfolio no increasing coding*/

$(document).ready(function(){
	$("#fa-icon-1").mouseover(function(){
		$(".circle-1").show({
			effect:"scale",
			duration:1000
		});
		$("#fa-icon-1").css("color","black");
	});
	
	$("#fa-icon-1").mouseout(function(){
		$(".circle-1").hide({
			effect:"scale",
			duration:1000
		});
		$("#fa-icon-1").css("color","white");
	});
	
	$("#fa-icon-2").mouseover(function(){
		$(".circle-2").show({
			effect:"scale",
			duration:1000
		});
		$("#fa-icon-2").css("color","black");
		
	});
	
	$("#fa-icon-2").mouseout(function(){
		$(".circle-2").hide({
			effect:"scale",
			duration:1000
		});
		$("#fa-icon-2").css("color","white");
	});
		
	$("#fa-icon-3").mouseover(function(){
		$(".circle-3").show({
			effect:"scale",
			duration:1000
		});
		$("#fa-icon-3").css("color","black");
		
	});
	
	$("#fa-icon-3").mouseout(function(){
		$(".circle-3").hide({
			effect:"scale",
			duration:1000
		});
		
		$("#fa-icon-3").css("color","white");
	});
	
		$("#fa-icon-4").mouseover(function(){
		$(".circle-4").show({
			effect:"scale",
			duration:1000
		});
		$("#fa-icon-4").css("color","black");
		
	});
	
	$("#fa-icon-4").mouseout(function(){
		$(".circle-4").hide({
			effect:"scale",
			duration:1000
		});
		
		$("#fa-icon-4").css("color","white");
	});
	
		$("#fa-icon-5").mouseover(function(){
		$(".circle-5").show({
			effect:"scale",
			duration:1000
		});
		$("#fa-icon-5").css("color","black");
		
	});
	
	$("#fa-icon-5").mouseout(function(){
		$(".circle-5").hide({
			effect:"scale",
			duration:1000
		});
		
		$("#fa-icon-5").css("color","white");
	});
});

window.onload = function(){
	$(window).scroll(function(){
		var height = window.pageYOffset;
		if(height>2700)
			{
				var x =0;
		var y = setInterval(wap,200);
		function wap()
		{
			var result = document.getElementById("result-one");
			result.innerHTML = x++;
			if(x==4)
				{
					clearInterval(y);
				}
		}
	
	var a = 0;
	var b = setInterval(me,50);
	function me()
	{
		var result = document.getElementById("result-two");
		result.innerHTML = a++;
		if(a==26)
			{
				clearInterval(b);
			}
	}
	
	var c= 0;
	var d = setInterval(satisfy);
	function satisfy()
	{
		var result = document.getElementById("result-three");
		result.innerHTML = c++;
		if(c==312)
			{
				clearInterval(d);
			}
	}
	
	var e = 0;
	var f = setInterval(finished);
	function finished()
	{
		var result = document.getElementById("result-four");
		result.innerHTML = e++;
		if(e==733)
			{
				clearInterval(f);
			}
	}
			}
	});
}

/* end portfolio no increasing coding */

