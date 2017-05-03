$(document).ready(function() {
	"use strict";
	var w = $(window).width();
	var h = $(window).height();

	var topMenuItemHover = false;
	var topMenuItemShown = false;

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

/*
	function preloadImages(arrayOfImages) {
		$(arrayOfImages).each(function() {
			$("<img />").attr("src",this).appendTo("body").css('display', "none");
		});
	}
/**/


	window.preloadImages = function(srcs) {

//		console.log("document.readyState = " + document.readyState);

		function loadImage(src) {
			return new $.Deferred(function(def) {
				var img = new Image();
				img.onload = function() {
					def.resolve(img);
				};
				img.onerror = img.onabort = function() {
					def.reject(src);
				};
				img.src = src;
			}).promise();
		}
		var promises = [];
		for (var i = 0; i < srcs.length; i++) {
			promises.push(loadImage(srcs[i]));
		}
		return $.when.apply($, promises).then(function() {
			// return results as a simple array rather than as separate arguments
			return Array.prototype.slice.call(arguments);

//			return;

		});
	};




	window.isBreakpoint = function(alias) {
		return $(".device-" + alias).is(":visible");
	};
	function redraw() {
		w = $(window).width();
		h = $(window).height();
		if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
			if (burgerMenuStatus === "shown") {
				$(".burger_menu_top").remove();
				$(".burger").removeClass("close_btn");
			}
			$(".header").css("width", "100%");
			$(".header .container").css("display", "block");
			$(".header ul").css("display", "block");

			$(".header ul li ul").css("display", "none");


			$(".burger").css("display", "none");
			$(".logo").css("display", "block");
			burgerMenuStatus = "hidden";
			$(".footer").css("background-position", (w - 1368) / 2 + "px 0");
		} else {
			$(".burger").css("display", "block");
			if (burgerMenuStatus === "shown") {
				$(".burger_menu_top").css("width", w - scrollBarWidth);
			} else {
				$(".header").css({
					"width": 0,
					"height": 0
				});
				$(".header .container").css("display", "none");
				$(".header ul").css("display", "none");
			}


//			topMenuStatus = "hidden";
//			topMenuItemHover = false;
//			topMenuItemShown = false;

/*
//			console.log(topMenuItemShown);

			if (topMenuItemShown) {

				console.log("!!!!");

				topMenuItemShown.css({
					"display": "none",
					"opacity": 1
				});

				topMenuItemShown.parent().find("span").css("z-index", "auto");

				topMenuItemShown = false;
				topMenuItemHover = false;
			}
/**/


			$(".footer").css("background-position", (w - 1368) * 0.75 + "px 52px");
		}

/**/
//		console.log(topMenuItemShown);

		if (topMenuItemShown) {

//			console.log("!");

			topMenuItemShown.css({
				"display": "none",
				"opacity": 1
			});

			topMenuItemShown.parent().find("span").css("z-index", "auto");

			topMenuItemShown = false;
			topMenuItemHover = false;
		}
/**/

	}




	$(window).load(function() {
		$("<div class=\"device-md visible-md\"></div>").appendTo("body");
		$("<div class=\"device-lg visible-lg\"></div>").appendTo("body");

		$("<div class=\"device-xs visible-xs\"></div>").appendTo("body");


/*
		preloadImages([
			"img/close.png"
		]);
/**/

		window.preloadImages(["img/close.png"]).then(function() {

//			console.log("CCC");

		}, function(errImg) {
			// at least one image failed to load

			console.log("Failed to load: " + errImg);

		});




/*
		$(".header ul li").hover(
			function() {
				if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
					var span = $(this).find("span");
					var ul = $(this).find("ul");
					if (span.length && ul.length) {
						span.css("z-index", 2);
						ul.fadeIn(300);
					}
				}
			}, function() {
				if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
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
/**/


/**/

//		var topMenuItemHover = false;
//		var topMenuItemShown = false;
		var topMenuInterval = false;




		function topSubMenuShow() {

//			console.log("topSubMenuShow()");

//			topMenuItemHover.css("display", "block");

			if (!topMenuInterval) {

				if (!topMenuItemShown) {

					topMenuItemShown = topMenuItemHover;

					var opacity = 0;

					topMenuItemHover.css({
						"display": "block",
						"opacity": 0
					});

					topMenuInterval = setInterval(function () {

						opacity += 0.03;

//						console.log("o show = " + opacity);
//						console.log("show");

						if (opacity > 1) {
							clearInterval(topMenuInterval);
							topMenuInterval = false;
							topMenuItemHover.css("opacity", 1);
						} else {
							topMenuItemHover.css("opacity", opacity);
						}

					}, 10);

				}

			}

		}


		function topSubMenuHide() {

//			console.log("topSubMenuHide()");

			if (topMenuItemShown) {

				clearInterval(topMenuInterval);
				topMenuInterval = false;

				var opacity = parseFloat(topMenuItemShown.css("opacity"));

				topMenuInterval = setInterval(function () {

					if (topMenuItemHover) {
						opacity -= 0.06;
					} else {
						opacity -= 0.03;
					}



//					console.log("o hide = " + opacity);
//					console.log("hide");


					if (opacity < 0) {
						clearInterval(topMenuInterval);
						topMenuInterval = false;
						topMenuItemShown.css({
							"display": "none",
							"opacity": 1
						});


						topMenuItemShown.parent().find("span").css("z-index", "auto");


						topMenuItemShown = false;

						if(topMenuItemHover) {

//							console.log(topMenuItemHover);

							topSubMenuShow();

						}


					} else {
						topMenuItemShown.css("opacity", opacity);
					}


				}, 10);

			}


		}




/**/







		$(".header ul li").hover(
			function() {
				if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
					var span = $(this).find("span");
					var ul = $(this).find("ul");
					if (span.length && ul.length) {

//						menuItemHover = $(this);

//						console.log("menuItemHover");

//						console.log(menuItemHover);

//						console.log(ul.css("display"));


						topMenuItemHover = ul;

						span.css("z-index", 2);
//						ul.fadeIn(300);

						topSubMenuShow();

//						topMenuItemHover.css("display", "block");


					}
				}
			}, function() {
				if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
					var span = $(this).find("span");
					var ul = $(this).find("ul");
					if (span.length && ul.length) {


						topMenuItemHover = false;

						topSubMenuHide();


//						console.log($(this));







/*
						ul.fadeOut(
						300,
						function() {
							span.css("z-index", "auto");

//							console.log(ul.css("display"));

						});
/**/


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
					$(".header")
					.css("width", w - scrollBarWidth)
					.animate({ "height": h },
					300,
					function() {
						$(this).css({
							"width": "100%",
							"height": "100%",
						});
						$(".header .container").css("display", "block");
						$(".burger").before("<div class=\"burger_menu_top\"></div>");
						$(".burger_menu_top").css("width", w - scrollBarWidth);
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
					 $(".burger_menu_top").remove();
					$(this).removeClass("close_btn");
					$(".header .container").css("display", "none");
					$(".header")
					.css("width", w - scrollBarWidth)
					.animate({ "height": 0 },
					300,
					function() {
						$(this).css("width", 0);
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
		$('a.page-scroll[href^="#"]').click(function() {
			var speed = 2000;
			var el = $(this).attr("href");
			var top = $(el).offset().top;
			if (window.isBreakpoint("lg") || window.isBreakpoint("md")) {
				$("html, body").animate({scrollTop: top}, speed);
			} else {
				$(".content").animate({scrollTop: top}, speed);
			}
			return false;
		});
		var $menuBlockScroll = $(".block-scroll");
		$(window).scroll(function() {
			if ($(this).scrollTop() > 900 && $menuBlockScroll.hasClass("default")) {
				$menuBlockScroll.removeClass("default").addClass("fixed");
			} else if($(this).scrollTop() <= 900 && $menuBlockScroll.hasClass("fixed")) {
				$menuBlockScroll.removeClass("fixed").addClass("default");
			}
		});
		$(".content").scroll(function() {
			if ($(this).scrollTop() > 900 && $menuBlockScroll.hasClass("default")) {
				$menuBlockScroll.removeClass("default").addClass("fixed");
			} else if($(this).scrollTop() <= 900 && $menuBlockScroll.hasClass("fixed")) {
				$menuBlockScroll.removeClass("fixed").addClass("default");
			}
		});
		$(window).resize(function() {
			redraw();
		});
		redraw();
	});
});