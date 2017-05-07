console.log("START");


$("<div class=\"image-cache\"><img src=\"img/hero_bg.jpg\" /><img src=\"img/hero_top.jpg\" /><img src=\"img/yogin.png\" /></div>").appendTo("body");
//$("<div class=\"image-cache\"><img src=\"img/hero_bg.jpg\" /><img src=\"img/hero_top.jpg\" /><img src=\"img/yogin.png\" /><img src=\"img/tmp/Home_display_ready1-1_a.png\" /></div>").appendTo("body");

setTimeout(function() {
	"use strict";
	
	console.log("$(\".image-cache\").css(\"display\") = " + $(".image-cache").css("display"));
	
	if ($(".image-cache").css("display") === "block") {
		$(".preloader img").css("display", "block");
		
	}
}, 600);



$(document).ready(function() {
	
	"use strict";
	

	var w, h, heroW, heroH, heroRatio, topIsVisible, sjeIsVisible, arrowIsVisible;
//	var heroW, heroH, heroRatio;
	
	
	
	
	
	
	
	
	function setTopVisibility(visibility) {
		
/*
		if (typeof window.topIsVisible === "undefined") {
			window.topIsVisible = visibility;
		} else {
			window.setTopVisibility(visibility);
		}
/**/
		
		topIsVisible = visibility;
		if (typeof window.topIsVisible !== "undefined") {
			window.setTopVisibility(visibility);
		}
	}
	
	function setSJEVisibility(visibility) {
		
/*
		if (typeof window.sjeIsVisible === "undefined") {
			window.sjeIsVisible = visibility;
		} else {
			window.setSJEVisibility(visibility);
		}
/**/
		
		sjeIsVisible = visibility;
		
		if (typeof window.sjeIsVisible !== "undefined") {
			window.setSJEVisibility(visibility);
		}
		
		
		if (visibility) {
			$("#sje_animation_container").css("display", "inline-block");
		} else {
			$("#sje_animation_container").css("display", "none");
		}
	}
	
	
	
	function setArrowVisibility(visibility) {
		
		arrowIsVisible = visibility;
		if (typeof window.arrowIsVisible !== "undefined") {
			window.setArrowVisibility(visibility);
		}
		if (visibility) {
			$("#arrow").css("display", "block");
		} else {
			$("#arrow").css("display", "none");
		}
	}
	
	
	
	
	
	
	
	function startHeroButtonAnimation() {
		
/*
		var heroButtonOpacity = 0;
		
		var heroButtonInterval = setInterval(function () {
			
			heroButtonOpacity += 0.01;
			
			console.log(heroButtonOpacity);
			
			if (heroButtonOpacity > 1) {
				
				clearInterval(heroButtonInterval);
				
			} else {
				
				$(".hero .button").css("opacity", heroButtonOpacity);
				
			}
			
			
		}, 5);
/**/
		
		
/*
		$(".hero .button")
		.css({
			"display": "none",
			"opacity": 1,
			"cursor": "pointer"
		});
/**/
		
		
		
		
/*
		setTimeout(function() {
			
			$(".hero .button")
			.fadeIn(
			1300,
			function() {
				
				window.arrowIsVisible = arrowIsVisible;
				window.startArrowAnimation();
				
				$(".header").fadeIn(500);
				
			});
			
		}, 1600);
/**/
		
		
/**/
		
		$(".header").fadeIn(600);
		
		$(".hero .button")
		.css({
			"display": "none",
			"opacity": 1,
			"cursor": "pointer"
		})
		.fadeIn(
		800,
		function() {
			
			window.arrowIsVisible = arrowIsVisible;
			window.startArrowAnimation();
			
//			$(".header").fadeIn(600);
			
		});
/**/
		
		
	}
	
	
	
	
	window.onArrowAnimationComplete = function() {
		
		console.log("onArrowAnimationComplete");
		
		
		$("#arrow")
		.css("cursor", "pointer")
		.hover(function() {
			window.arrowIsHover = true;
			window.onArrowHover();
		}, function() {
			window.arrowIsHover = false;
		})
		.click(function() {
			window.arrowIsHover = false;
			
			
			var contentTop = $(".hero + .container-fluid").offset().top;
			
			if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
				$("html, body").animate({scrollTop: contentTop}, 800);
			} else {
				$(".content").animate({scrollTop: contentTop}, 800);
			}
			
		});
		
		
		
		
	};
	
	
	
	window.onSJEAnimationComplete = function() {
		console.log("onSJEAnimationComplete");
		
		
		
		if ($(".hero h1").css("display") === "none") {
			

			$(".hero h1").css("opacity", 1);
			$(".hero p").css("opacity", 1);
			
			startHeroButtonAnimation();
			
			
		} else {
			
			$(".hero h1").css({
				"display": "none",
				"opacity": 1
			});
			
			$(".hero h1").fadeIn(
			300,
			function() {
				
				if ($(".hero p").css("display") === "none") {
					
					$(".hero p").css("opacity", 1);
					startHeroButtonAnimation();
					
				} else {
					
					$(".hero p")
					.css({
						"display": "none",
						"opacity": 1
					})
					.fadeIn(
					300,
					function() {
						startHeroButtonAnimation();
					});
					
				}
				
			});
		}
		
		
		
	};
	
	
	
	
	
	
	window.prepareSJEAnimation = function() {
		console.log("prepareSJEAnimation");
		
		window.sjeIsVisible = sjeIsVisible;
		window.startSJEAnimation();
		
	};
	
	
	
	
	
	
	window.onLogoAnimationComplete = function() {
		console.log("onLogoAnimationComplete");
		
//		window.sjeIsVisible = sjeIsVisible;
//		window.startSJEAnimation();
		
	};
	
	window.onHeroAnimationComplete = function() {
		console.log("onHeroAnimationComplete");
		
//		window.startLogoAnimation();
		
	};
	
	
	
	
	
	
	
	
	window.onHeroInit = function() {
		
		console.log("onHeroInit");
		
/*
		setTimeout(function() {
			$(".preloader img").fadeOut(
			300,
			function() {
				
				
				
				$(".container").css("display", "block");
				$(".container-fluid").css("display", "block");
				$(".footer").css("display", "block");
				
				
				$("[data-image-src]").each(function() {
					var imgContainer = $(this);
					var src = $(this).attr("data-image-src");
					window.preloadImages([src]).then(function(img) {
						var imgW = img[0].width;
						var imgH = img[0].height;
						if (imgContainer.hasClass("icon")) {
							imgContainer
							.after("<br>")
							.css({
								"background-image": "url(" + src + ")",
								"background-repeat": "no-repeat",
								"width": imgW,
								"height": imgH
							});
						} else {
							imgContainer
							.css({
								"background-image": "url(" + src + ")",
								"background-repeat": "no-repeat",
							})
							.attr({
								"data-image-w": imgW,
								"data-image-h": imgH
							});
							redraw();
						}
					}, function(errImg) {
						console.log("Failed to load: " + errImg);
					});
				});
				
				
				
			});
		}, 1000);
/**/
		
		
/**/
		$(".container").css("display", "block");
		$(".container-fluid").css("display", "block");
		$(".footer").css("display", "block");
		
		
		$("[data-image-src]").each(function() {
			var imgContainer = $(this);
			var src = $(this).attr("data-image-src");
			window.preloadImages([src]).then(function(img) {
				var imgW = img[0].width;
				var imgH = img[0].height;
				if (imgContainer.hasClass("icon")) {
					imgContainer
					.after("<br>")
					.css({
						"background-image": "url(" + src + ")",
						"background-repeat": "no-repeat",
						"width": imgW,
						"height": imgH
					});
				} else {
					imgContainer
					.css({
						"background-image": "url(" + src + ")",
						"background-repeat": "no-repeat",
					})
					.attr({
						"data-image-w": imgW,
						"data-image-h": imgH
					});
					redraw();
				}
			}, function(errImg) {
				console.log("Failed to load: " + errImg);
			});
		});
		
/*
		$("[data-image-src]").each(function() {
			var imgContainer = $(this);
			var src = $(this).attr("data-image-src");
			window.preloadImages([src]).then(function(img) {
				var imgW = img[0].width;
				var imgH = img[0].height;
				if (imgContainer.hasClass("icon")) {
					imgContainer
					.after("<br>")
					.css({
						"width": imgW,
						"height": imgH
					});
				}
				imgContainer
				.css("background-image", "url(" + src + ")")
				.attr({
					"data-image-w": imgW,
					"data-image-h": imgH
				});
				redraw();
			}, function(errImg) {
				console.log("Failed to load: " + errImg);
			});
		});
		
/*
		$("[data-image-src]").each(function() {
			var imgContainer = $(this);
			var src = $(this).attr("data-image-src");
			window.preloadImages([src]).then(function(img) {
				imgContainer
				.css("background-image", "url(" + src + ")")
				.attr({
					"data-image-w": img[0].width,
					"data-image-h": img[0].height
				});
				redraw();
			}, function(errImg) {
				console.log("Failed to load: " + errImg);
			});
		});
/**/
		
		
		
//---------------------------------------------------------
		
		$(window).resize(function() {
			redraw();
		});
		redraw();
/**/
		
		
		
		
/*
		$(".preloader").fadeOut(
		1000,
		function() {
			window.topIsVisible = topIsVisible;
			window.startHeroAnimation();
			if (!topIsVisible) {
				window.startLogoAnimation();
			}
		});
/**/
		
		setTimeout(function() {
			$(".preloader").fadeOut(
			1400,
			function() {
				window.topIsVisible = topIsVisible;
				window.startHeroAnimation();
				if (!topIsVisible) {
					window.startLogoAnimation();
				}
			});
		}, 10);
		
	};
	
	
	
	
	
	window.onLogoInit = function() {
		console.log("onLogoInit");
		
		window.heroInit();
	};
	
	window.onSJEInit = function() {
		
		console.log("onSJEInit");
		
		window.logoInit();
	};
	
	window.onArrowInit = function() {
		
		console.log("onArrowInit");
		
		window.sjeInit();
	};
	
	
	
	

	
	
	$("#carousel").swiperight(function() {
//		console.log("prev");
		$(this).carousel("prev");
	});
	$("#carousel").swipeleft(function() {
//		console.log("next");
		$(this).carousel("next");
	});
	
	
	
	
	
	
	
	function redraw() {
		
		console.log("Redraw index.js"); 
		
		w = $(window).width();
		h = $(window).height();
		
		
/*
		if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
			$("body").css("overflow-y", "scroll");
			$(".content").css("overflow-y", "hidden");
		} else {
			$("body").css("overflow-y", "hidden");
			$(".content").css("overflow-y", "scroll");
		}
/**/
		
		
		
		$(".hero").css({
			"height": h,
			"padding-top": 0
		});
		
		
		
		
		var topPoint = $(".logo").offset().top + $(".logo").height() * 1.15;
		
		if (heroRatio < w / h) {
			
			var heroContainerH = w / heroRatio;
			var heroContainerTop = (h - heroContainerH) * 0.4;
			
			$("#hero_animation_container").css({
				"width": w,
				"height": heroContainerH,
				"top": heroContainerTop,
				"left": 0
			});
			
			
			if (heroContainerH * 0.27 + heroContainerTop > topPoint) {
				setTopVisibility(true);
			} else {
				setTopVisibility(false);
			}
			
			
		} else {
			
			var heroContainerW = h * heroRatio;
			
			$("#hero_animation_container").css({
				"width": heroContainerW,
				"height": h,
				"top": 0,
				"left": (w - heroContainerW) / 2
			});
			
			if (h * 0.27 > topPoint) {
				setTopVisibility(true);
			} else {
				setTopVisibility(false);
			}
			
		}
		
		
		var midPoint;
		
		
		if (topIsVisible) {
			midPoint = Math.round(h * 0.47);
		} else {
			midPoint = Math.round(h * 0.33);
		}
		
		if (midPoint < topPoint) {
			midPoint = topPoint;
		}
		
		
		if (w > 600) {
			setSJEVisibility(true);
		} else {
			setSJEVisibility(false);
		}
		$(".hero h1").css("display", "inline-block");
		$(".hero p").css("display", "inline-block");
		
		var bottomPoint = midPoint + $(".hero .button").offset().top;
		
		if (bottomPoint + 86 > h) {
			
			if (topIsVisible) {
				setTopVisibility(false);
				midPoint = Math.round(h * 0.33);
				
				if (midPoint < topPoint) {
					midPoint = topPoint;
				}
				
				bottomPoint = midPoint + $(".hero .button").offset().top;
				
			}
			
			if (bottomPoint + 86 > h) {
				
				if (sjeIsVisible) {
					setSJEVisibility(false);
					bottomPoint = midPoint + $(".hero .button").offset().top;
				}
				
				if (bottomPoint + 86 > h) {
					
					$(".hero p").css("display", "none");
					bottomPoint = midPoint + $(".hero .button").offset().top;
					
					
					if (bottomPoint + 86 > h) {
						
						$(".hero h1").css("display", "none");
						bottomPoint = midPoint + $(".hero .button").offset().top;
						
					}
					
				}
				
			}
			
		}
		
		
		
		
		$(".hero").css("padding-top", midPoint);
		
		
		if (bottomPoint + 131 < h) {
			
			setArrowVisibility(true);
			
		} else {
			
			setArrowVisibility(false);
			
		}
		
		
/**/
		$(".content .col-sm-4.hidden-xs h3, .col-sm-4.hidden-xs+.col-sm-4.col-xs-12 h3").each(function() {
			
			$(this).css("top", ($(this).parent().height() - $(this).height()) / 2);
			
		});
/**/
		
		
		
//		var coverLeft = $(".content .col-sm-6.col-xs-12:nth-of-type(6) .cover");
//		var coverRight = $(".content .col-sm-6.col-xs-12:nth-of-type(8) .cover");
		
		
		
//		coverLeft.css("height", "auto");
//		coverRight.css("height", "auto");
		
		
		$(".content .col-sm-6.col-xs-12:nth-of-type(6)").css("height", "auto");
		$(".content .col-sm-6.col-xs-12:nth-of-type(6) .cover").css("height", "auto");
		
		$(".content .col-sm-6.hidden-xs:nth-of-type(7)").css("height", "auto");
		$(".content .col-sm-6.hidden-xs:nth-of-type(7) .cover").css("height", "auto");
		
		$(".content .col-sm-6.col-xs-12:nth-of-type(8)").css("height", "auto");
		$(".content .col-sm-6.col-xs-12:nth-of-type(8) .cover").css("height", "auto");
		
		
//		var coverLeftH = coverLeft.outerHeight();
		var coverLeftH = $(".content .col-sm-6.col-xs-12:nth-of-type(6)").outerHeight();
		var coverRightH = $(".content .col-sm-6.col-xs-12:nth-of-type(8) .cover").outerHeight();
		
		
		if (window.isBreakpoint("xs")) {
			
			
//			console.log("Is Breakpoint XS");
			
			
//--------------------------------------------
//			$(".content .col-sm-6.col-xs-12:nth-of-type(6)").css("height", coverLeftH);
			$(".content .col-sm-6.col-xs-12:nth-of-type(6) .cover").css("height", coverLeftH);
			
			$(".content .col-sm-6.col-xs-12:nth-of-type(8)").css("height", coverRightH);
//--------------------------------------------
			
			var carouseItemlMaxH = 0;
			
			$("#carousel .item").each(function() {
				$(this).css("height", "auto");
				var carouseItemlH = $(this).outerHeight();
				if (carouseItemlMaxH < carouseItemlH) {
					carouseItemlMaxH = carouseItemlH;
					
				}
			});
			
			$("#carousel .item").each(function() {
				$(this).css("height", carouseItemlMaxH);
			});
			
			$(".blogpost").css("height", "auto");
			
		} else {
			
//			var coverLeftH = $(".content .col-sm-6.col-xs-12:nth-of-type(6) .cover").outerHeight();
//			var coverRightH = $(".content .col-sm-6.col-xs-12:nth-of-type(8) .cover").outerHeight();
			
//			console.log(coverLeftH + "   " + coverRightH * 2);
			
//--------------------------------------------
			if (coverLeftH > coverRightH * 2) {
				
				$(".content .col-sm-6.col-xs-12:nth-of-type(6)").css("height", coverLeftH);
				$(".content .col-sm-6.col-xs-12:nth-of-type(6) .cover").css("height", coverLeftH);
				
				$(".content .col-sm-6.hidden-xs:nth-of-type(7)").css("height", coverLeftH / 2);
				$(".content .col-sm-6.hidden-xs:nth-of-type(7) .cover").css("height", coverLeftH / 2);
				
				$(".content .col-sm-6.col-xs-12:nth-of-type(8)").css("height", coverLeftH / 2);
				$(".content .col-sm-6.col-xs-12:nth-of-type(8) .cover").css("height", coverLeftH / 2);
				
			} else {
				
				$(".content .col-sm-6.col-xs-12:nth-of-type(6)").css("height", coverRightH * 2);
				$(".content .col-sm-6.col-xs-12:nth-of-type(6) .cover").css("height", coverRightH * 2);
				
				$(".content .col-sm-6.hidden-xs:nth-of-type(7)").css("height", coverRightH);
				$(".content .col-sm-6.hidden-xs:nth-of-type(7) .cover").css("height", coverRightH);
				
				$(".content .col-sm-6.col-xs-12:nth-of-type(8)").css("height", coverRightH);
				$(".content .col-sm-6.col-xs-12:nth-of-type(8) .cover").css("height", coverRightH);
				
			}
//--------------------------------------------
			
			$(".col-sm-6.hidden-xs:nth-last-of-type(3)").css("height", $(".col-sm-6.hidden-xs:nth-last-of-type(4)").outerHeight());
			
			
			
			
			var blogpostMaxH = 0;
			
			$(".blogpost").each(function() {
				$(this).css("height", "auto");
				var blogpostH = $(this).outerHeight();
				if (blogpostMaxH < blogpostH) {
					blogpostMaxH = blogpostH;
					
				}
			});
			
			$(".blogpost").each(function() {
				$(this).css("height", blogpostMaxH);
			});
			
			
			
		}
		
		
//		alert(window.isBreakpoint("lg") || window.isBreakpoint("md"));
		
		
		
//		$("[data-image-w]").each(function() {
		$("[data-image-w]:not(.icon)").each(function() {
			
			
//			console.log($(this).hasClass("icon"));
			
//			console.log("W " + $(this).attr("data-image-w") + "   H " + $(this).attr("data-image-h"));
			
			var imgAlign = $(this).attr("data-image-align");
			if (!imgAlign) {
				imgAlign = "middle";
			}
			
			var imgW = parseInt($(this).attr("data-image-w"));
			var imgH = parseInt($(this).attr("data-image-h"));
			
			var imgRatio = imgW / imgH;
			
//			console.log("W " + imgW + "   H " + imgH);
//			console.log(imgW === 1368);
			
			var containerW = $(this).outerWidth();
			var containerH = $(this).outerHeight();
			
//			console.log("W2 " + containerW + "   H2 " + containerH);

			
//			var containerRatio = containerW / containerH;
			
//			console.log(imgRatio + "   " + containerRatio);
			
			if (imgRatio < containerW / containerH) {
				
				
				
				var imgNewH = containerW / imgRatio;
				var imgTop = 0;
				
				if (imgAlign === "middle") {
					imgTop = (containerH - imgNewH) / 2;
				} else if(imgAlign === "bottom") {
					imgTop = containerH - imgNewH;
				}
//				console.log(imgAlign);
				
				
				
				
				$(this).css({
					"background-size": containerW + "px " + imgNewH + "px",
					"background-position": "0 " + imgTop + "px"
					
				});
				
			} else {
				
				
				
				var imgNewW = containerH * imgRatio;
				
				$(this).css({
					"background-size": imgNewW + "px " + containerH + "px",
					"background-position": (containerW - imgNewW) / 2 +"px 0"
					
				});
				
			}
			
			
			
		});
		
		
		
		var servContainer = $(".col-sm-6.col-xs-12:nth-of-type(n+10):not(:nth-last-of-type(-n+3)) .container");
		
		if (servContainer.length) {
			
			if (window.isBreakpoint("xs")) {
				
				$(".col-sm-6.col-xs-12:nth-of-type(n+10):not(:nth-last-of-type(-n+3)) p").css("margin-bottom", 0);
				
			} else {
				
				var servContainerMaxH = 0;
				
				for (var i = 0; i < servContainer.length; i++) {
					
					var $curr = servContainer.eq(i);
					
					var servContainerP = $curr.find("p");
					servContainerP.css("margin-bottom", 0);
					
					var currH = $curr.height();
					if (currH > servContainerMaxH) {
						servContainerMaxH = currH;
					}
					
					if ((i + 1) % 2 === 0) {
						
						
						for (var j = i - 1; j <= i; j++) {
							
//							console.log(i + "   " + j);
							
							$curr = servContainer.eq(j);
							servContainerP = $curr.find("p");
							
							servContainerP.css("margin-bottom", servContainerMaxH - $curr.height());
							
						}
						
//						console.log("---");
						
						servContainerMaxH = 0;
						
						
					}
					
					
				}
				
			}
			
		}
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	$(window).load(function() {
		
		console.log("Load index.js"); 
		
		heroW = parseInt($("#hero_canvas").attr("width"));
		heroH = parseInt($("#hero_canvas").attr("height"));
		heroRatio = heroW / heroH;
		
		
//		var heroButton = $(".hero .button");
//		heroButton.append(heroButton.attr("data-txt"));
		
		$(".button").each(function() {
			$(this).append($(this).attr("data-txt"));
		});
		
		
		
/**/

		
		$(".image-cache").css("display", "none");
		if ($(".preloader img").css("display") === "none") {
			window.arrowInit();
		} else {
			setTimeout(function() {
				$(".preloader img").fadeOut(
				300,
				function() {
					window.arrowInit();
				});
			}, 1000);
		}
		
/**/
		
		
		
/*

		$(".preloader").css("display", "none");
		$(".hero").css("display", "none");
		$(".container").css("display", "block");
		$(".container-fluid").css("display", "block");
		$(".footer").css("display", "block");
		$("[data-image-src]").each(function() {
			var imgContainer = $(this);
			var src = $(this).attr("data-image-src");
			window.preloadImages([src]).then(function(img) {
				var imgW = img[0].width;
				var imgH = img[0].height;
				if (imgContainer.hasClass("icon")) {
					imgContainer
					.after("<br>")
					.css({
						"background-image": "url(" + src + ")",
						"background-repeat": "no-repeat",
						"width": imgW,
						"height": imgH
					});
				} else {
					imgContainer
					.css({
						"background-image": "url(" + src + ")",
						"background-repeat": "no-repeat",
					})
					.attr({
						"data-image-w": imgW,
						"data-image-h": imgH
					});
					redraw();
				}
			}, function(errImg) {
				console.log("Failed to load: " + errImg);
			});
		});
		$(window).resize(function() {
			redraw();
		});
		redraw();
/**/
		
		
		

		
		
		
		
		
		
		
		
		
/*

		
		
		var animationIsStarted = false;
		
//		window.preloadImages(["img/tmp/hero_bg.png", "img/tmp/hero_top.png"]).then(function() {
		window.preloadImages(["img/tmp/hero_bg.png", "img/tmp/hero_top.png", "img/tmp/yogin.png"]).then(function() {
			
			
//			console.log("document.readyState = " + document.readyState);
			
			animationIsStarted = true;
			
			if ($(".preloader img").css("display") === "none") {
				window.arrowInit();
			} else {
				setTimeout(function() {
					$(".preloader img").fadeOut(
					300,
					function() {
						window.arrowInit();
					});
				}, 1000);
			}
		}, function(errImg) {
			console.log("Failed to load: " + errImg);
		});
		
		
		setTimeout(function() {
			if (!animationIsStarted) {
				
//				$(".preloader img").fadeIn(800);
				
				$(".preloader img").css("display", "block");
				
			}
		}, 600);
		
/**/
		
		
		
	});
	
	
	
	
});