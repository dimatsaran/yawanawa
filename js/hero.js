(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.hero_bg = function() {
	this.initialize(img.hero_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1300);


(lib.hero_top = function() {
	this.initialize(img.hero_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,800);


(lib.yogin = function() {
	this.initialize(img.yogin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,133);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_top();
	this.instance.parent = this;
	this.instance.setTransform(-700,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.top, new cjs.Rectangle(-700,-400,1400,800), null);


(lib.flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.1,-0.2,0,-0.1,-0.2,825.7).s().p("EhacBnlUglegq6AAAg8rUAAAg8rAlegq7UAlfgq6A09AAAUA0/AAAAleAq6UAleAq7AAAA8rUAAAA8rgleAq6UgleAq8g0/AAAUg09AAAglfgq8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flash, new cjs.Rectangle(-818.7,-937.6,1637.4,1875.4), null);


(lib.corner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2YXVMAa6gupIGbAAMgXuApGIf9AAIDNFjg");
	this.shape.setTransform(143.3,-149.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.corner, new cjs.Rectangle(0,-298.5,286.6,298.5), null);


// stage content:
(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{End:68});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.top.visible = false;
		var that = this;
		window.startHeroAnimation = function() {
			if (window.topIsVisible) {
				that.top.visible = true;
				that.play();
			} else {
				that.gotoAndStop("End");
			}
		};
		window.setTopVisibility = function(visibility) {
			window.topIsVisible = visibility;
			that.top.visible = visibility;
		};
		window.onHeroInit();
	}
	this.frame_28 = function() {
		window.startLogoAnimation();
	}
	this.frame_68 = function() {
		this.stop();
		window.onHeroAnimationComplete();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(40).call(this.frame_68).wait(1));

	// top
	this.top = new lib.top();
	this.top.parent = this;
	this.top.setTransform(960,400);
	this.top.alpha = 0;
	this.top._off = true;

	this.timeline.addTween(cjs.Tween.get(this.top).wait(45).to({_off:false},0).to({alpha:1},22).wait(2));

	// flash
	this.instance = new lib.flash();
	this.instance.parent = this;
	this.instance.setTransform(968.9,258.7,0.338,0.338);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13).to({alpha:0},10).to({_off:true},1).wait(40));

	// flash
	this.instance_1 = new lib.flash();
	this.instance_1.parent = this;
	this.instance_1.setTransform(968.9,258.7,0.646,0.646);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},7).to({alpha:0},21).to({_off:true},1).wait(29));

	// flash
	this.instance_2 = new lib.flash();
	this.instance_2.parent = this;
	this.instance_2.setTransform(968.9,258.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},11).to({alpha:0},16).to({_off:true},1).wait(34));

	// yogin
	this.instance_3 = new lib.yogin();
	this.instance_3.parent = this;
	this.instance_3.setTransform(917,361);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},49).wait(2));

	// triangle
	this.instance_4 = new lib.corner("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1132.6,563.5,1,1,-120);

	this.instance_5 = new lib.corner("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(988,228.4,1,1,120);

	this.instance_6 = new lib.corner("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(770.1,521.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},18).to({state:[]},49).wait(2));

	// bg
	this.instance_7 = new lib.hero_bg();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,650,1920,1300);
// library properties:
lib.properties = {
	width: 1920,
	height: 1300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"img/hero_bg.jpg", id:"hero_bg"},
		{src:"img/hero_top.jpg", id:"hero_top"},
		{src:"img/yogin.png", id:"yogin"}
	],
	preloads: []
};




})(lib_hero = lib_hero||{}, images_hero = images_hero||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_hero, images_hero, createjs, ss, AdobeAn;
































/**/
var hero_canvas, hero_stage, hero_exportRoot;//, hero_anim_container, hero_dom_overlay_container;//, fnStartAnimation;
function heroInit() {
	hero_canvas = document.getElementById("hero_canvas");
//	hero_anim_container = document.getElementById("hero_animation_container");
//	hero_dom_overlay_container = document.getElementById("hero_dom_overlay_container");
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


/*
window.onHeroInit = function() {
	window.topIsVisible = true;
	window.startHeroAnimation();
};
/**/


