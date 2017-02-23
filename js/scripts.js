
$(document).ready(function() {
	
	"use strict";
	
	var w = $(window).width();
	var h = $(window).height();
	var burgerMenuStatus = "hidden";
	
	function getScrollBarWidth() {
		var inner = document.createElement("p");
		inner.style.width = "100%";
		inner.style.height = "200px";
		var outer = document.createElement("div");
		outer.style.position = "absolute";
		outer.style.top = "0px";
		outer.style.left = "0px";
		outer.style.visibility = "hidden";
		outer.style.width = "200px";
		outer.style.height = "150px";
		outer.style.overflow = "hidden";
		outer.appendChild(inner);
		document.body.appendChild (outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = "scroll";
		var w2 = inner.offsetWidth;
		if (w1 === w2) {
			w2 = outer.clientWidth;
		}
		document.body.removeChild (outer);
		return (w1 - w2);
	}
	var scrollBarWidth = getScrollBarWidth();
	
	function preloadImages(arrayOfImages) {
		$(arrayOfImages).each(function() {
			$("<img />").attr("src",this).appendTo("body").css('display', "none");
		});
	}
	
	function isBreakpoint(alias) {
		return $(".device-" + alias).is(":visible");
	}
/**/
	
	
	function redraw() {
		w = $(window).width();
		h = $(window).height();
		
		
		
/*
		if (isBreakpoint("lg") || isBreakpoint("md")) {
			$(".header").css("width", w);
		} else {
			$(".header").css("width", w - scrollBarWidth);
		}
*/
		
//		$(".burger").addClass("close_btn");
		
	}
	
	
	
	
	$(window).resize(function(){
		redraw();
	});
	
	
	
	$(window).load(function() {
		
		
		$("<div class=\"device-md visible-md\"></div>").appendTo("body");
		$("<div class=\"device-lg visible-lg\"></div>").appendTo("body");
		
		
		preloadImages([
			"img/close.png"
		]);
		
		
		$(".header ul li").hover(
			function() {
				if (isBreakpoint("lg") || isBreakpoint("md")) {
					var span = $(this).find("span");
					var ul = $(this).find("ul");
					if (span.length && ul.length) {
						span.css("z-index", 2);
						ul.fadeIn(300);
					}
				}
			}, function() {
				if (isBreakpoint("lg") || isBreakpoint("md")) {
					var span = $(this).find("span");
					var ul = $(this).find("ul");
					if (span.length && ul.length) {
						ul.fadeOut(
						300,
						function() {
							span.css("z-index", "auto");
						});
					}
				}
			}
		);
		
		
		
		
		
		
		$(".burger").click(function() {
			
			
			
			if (burgerMenuStatus === "hidden") {
				
				burgerMenuStatus = "animated";
				
				$(".logo").fadeOut(300);
				
				$(this).fadeOut(
				300,
				function () {
					
					
					
					
					$(this).addClass("close_btn");
					
					$(".header .container").css({
						"display":"block",
						"padding": 0,
					});
					
					
					$(".header")
					.css("width", w - scrollBarWidth)
					.animate({ "height": h },
					300,
					function() {
						
						$(".header .container").css("padding", "82px 0 24px");
						
						$(this).css({
							"width": "100%",
							"height": "100%",
							"overflow-y": "scroll"
						});
						
						
						$(".header ul").fadeIn(300);
						
						$(".burger").fadeIn(
						300,
						function() {
							
							
							
							burgerMenuStatus = "shown";
							
						});
						
						
						
					});
					
					
					
				});
				
				
				
				
			} else if (burgerMenuStatus === "shown") {
				
				burgerMenuStatus = "animated";
				
				$(".header ul").fadeOut(300);
				
				$(".burger").fadeOut(
				300,
				function() {
					
					
					
					$(this).removeClass("close_btn");
					
					
					
					

					$(".header")
					.css({
						"width": w - scrollBarWidth,
						"overflow": "hidden"
					})
					.animate({ "height": 0},
					300,
					function() {
						
						$(this).css("width", "100%");
						
						
						$(".header .container").css({
							"display":"none",
							"padding": 0,
						});
						
						
						
						$(".logo").fadeIn(300);
						
						$(".burger").fadeIn(
						300,
						function() {
							
							
							burgerMenuStatus = "hidden";
							
						});
						
						
					});

					
					
					
				});
				
			}
			
			
		});
		
		
		
		
		redraw();
		
		$(".header").css("display", "block");
		
	});
	
});