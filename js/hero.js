(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != hero_exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != hero_exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != hero_exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.hero_1 = function() {
	this.initialize(img.hero_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1368,864);


// stage content:
(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		that.stop();
		window.startHeroAnimation = function() {
			that.play();
		};
		window.onHeroInit();
	}
	this.frame_2 = function() {
		this.stop();
		window.onHeroAnimationComplete();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// image
	this.instance = new lib.hero_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1368,
	height: 864,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"img/tmp/hero_1.jpg", id:"hero_1"}
	],
	preloads: []
};




})(lib_hero = lib_hero||{}, images_hero = images_hero||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_hero, images_hero, createjs, ss, AdobeAn;





/**/
var hero_canvas, hero_stage, hero_exportRoot, hero_anim_container, hero_dom_overlay_container;//, fnStartAnimation;
function heroInit() {
	hero_canvas = document.getElementById("hero_canvas");
	hero_anim_container = document.getElementById("hero_animation_container");
	hero_dom_overlay_container = document.getElementById("hero_dom_overlay_container");
	images_hero = images_hero||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", heroHandleFileLoad);
	loader.addEventListener("complete", heroHandleComplete);
	loader.loadManifest(lib_hero.properties.manifest);
}
function heroHandleFileLoad(evt) {	
	if (evt.item.type == "image") { images_hero[evt.item.id] = evt.result; }	
}
function heroHandleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib_hero.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	hero_exportRoot = new lib_hero.hero();
	hero_stage = new createjs.Stage(hero_canvas);
	hero_stage.addChild(hero_exportRoot);	
	//Registers the "tick" event listener.
	var fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib_hero.properties.fps);
		createjs.Ticker.addEventListener("tick", hero_stage);
	}	    
	fnStartAnimation();
}
/**/