
$(document).ready(function() {
	
	"use strict";
	

	var w, h;
	
	function redraw() {
		w = $(window).width();
		h = $(window).height();
		
		
		$(".hero").css("height", h);
		
		
	}
	
	
	$(window).resize(function(){
		redraw();
	});
/**/
	
	$(window).load(function() {
		
		console.log("Load index.js"); 
		
		redraw();
		
		
/*
		window.onHeroInit = function() {
			console.log("onHeroInit");
			window.startHeroAnimation();
		};
		
		window.onHeroAnimationComplete = function() {
			console.log("onHeroAnimationComplete");
			window.startLogoAnimation();
		};
		
		
		window.onLogoInit = function() {
			console.log("onLogoInit");
			window.heroInit();
		};
		
		window.onLogoAnimationComplete = function() {
			console.log("onLogoAnimationComplete");
		};
		
		window.logoInit();
/**/
		
		
		
		
		
		
		
/*
		window.onLogoAnimationComplete = function() {
			console.log("onLogoAnimationComplete");
		};
		
		window.onLogoInit = function() {
			console.log("onLogoInit");
			window.startLogoAnimation();
		};
		
		window.logoInit();
/**/
		
		
		
		
		
		
		
		
		
//		redraw();
		
	});
/**/




	
/*
	window.onHeroInit = function() {
		console.log("onHeroInit");
		window.startHeroAnimation();
	};
	
	window.onHeroAnimationComplete = function() {
		console.log("onHeroAnimationComplete");
		window.startLogoAnimation();
	};
	
	
	window.onLogoInit = function() {
		console.log("onLogoInit");
		window.heroInit();
	};
	
	window.onLogoAnimationComplete = function() {
		console.log("onLogoAnimationComplete");
	};
	
	window.logoInit();
/**/
	
	
	
/*
	window.onLogoAnimationComplete = function() {
		console.log("onLogoAnimationComplete");
	};
	
	window.onLogoInit = function() {
		console.log("onLogoInit");
		window.startLogoAnimation();
	};
	
	window.logoInit();
	
/**/
	
	
});