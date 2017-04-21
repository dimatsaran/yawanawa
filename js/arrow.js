(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(249,243,244,0)").ss(0.1,1,1).p("ABuAAQAAAuggAgQghAggtAAQgtAAggggQggggAAguQAAgsAgggQAgghAtAAQAtAAAhAhQAgAgAAAsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(249,243,244,0.11)").ss(0.3,1,1).p("Ah0AAQAAgvAigiQAigjAwAAQAwAAAjAjQAiAiAAAvQAAAxgiAiQgjAigwAAQgwAAgigiQgigiAAgxg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(249,243,244,0.224)").ss(0.5,1,1).p("Ah8AAQAAgyAlgkQAkgmAzAAQAzAAAlAmQAlAkAAAyQAAA0glAkQglAlgzAAQgzAAgkglQglgkAAg0g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(249,243,244,0.333)").ss(0.8,1,1).p("AiDAAQAAg1AngmQAmgoA2AAQA2AAAnAoQAnAmAAA1QAAA3gnAmQgnAng2AAQg2AAgmgnQgngmAAg3g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(249,243,244,0.443)").ss(1,1,1).p("AiKAAQAAg4ApgoQAogqA5AAQA5AAApAqQApAoAAA4QAAA6gpAoQgpApg5AAQg5AAgogpQgpgoAAg6g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(249,243,244,0.557)").ss(1.2,1,1).p("AiRAAQAAg7ArgrQAqgrA8AAQA8AAArArQArArAAA7QAAA9grAqQgrArg8AAQg8AAgqgrQgrgqAAg9g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(249,243,244,0.667)").ss(1.4,1,1).p("AiZAAQAAg+AugtQAsguA/AAQA/AAAtAuQAuAtAAA+QAABAguAsQgtAug/AAQg/AAgsguQgugsAAhAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(249,243,244,0.776)").ss(1.6,1,1).p("AigAAQAAhBAvgvQAvgwBCAAQBCAAAwAwQAvAvAABBQAABDgvAvQgwAvhCAAQhCAAgvgvQgvgvAAhDg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(249,243,244,0.89)").ss(1.8,1,1).p("AinAAQAAhEAxgxQAxgyBFAAQBFAAAyAyQAxAxAABEQAABGgxAxQgyAxhFAAQhFAAgxgxQgxgxAAhGg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F9F3F4").ss(2,1,1).p("ACvAAQAABJgzAzQg0AzhIAAQhIAAgzgzQgzgzAAhJQAAhHAzgzQAzg0BIAAQBIAAA0A0QAzAzAABHg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F9F3F4").ss(1.9,1,1).p("Ai1AAQAAhKA1g1QA1g2BLAAQBLAAA2A2QA1A1AABKQAABMg1A1Qg2A1hLAAQhLAAg1g1Qg1g1AAhMg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F9F3F4").ss(1.8,1,1).p("Ai9AAQAAhNA4g3QA3g5BOAAQBOAAA4A5QA4A3AABNQAABPg4A3Qg4A4hOAAQhOAAg3g4Qg4g3AAhPg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F9F3F4").ss(1.7,1,1).p("AjEAAQAAhQA6g5QA5g7BRAAQBRAAA6A7QA6A5AABQQAABSg6A5Qg6A6hRAAQhRAAg5g6Qg6g5AAhSg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F9F3F4").ss(1.6,1,1).p("AjLAAQAAhTA8g7QA7g9BUAAQBUAAA8A9QA8A7AABTQAABVg8A7Qg8A8hUAAQhUAAg7g8Qg8g7AAhVg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F9F3F4").ss(1.5,1,1).p("AjSAAQAAhVA+g+QA9g/BXAAQBWAAA/A/QA+A+AABVQAABYg+A9Qg/A+hWAAQhXAAg9g+Qg+g9AAhYg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F9F3F4").ss(1.4,1,1).p("AjaAAQAAhYBBhAQA/hCBaAAQBZAABBBCQBBBAAABYQAABbhBA/QhBBBhZAAQhaAAg/hBQhBg/AAhbg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F9F3F4").ss(1.2,1,1).p("AjhAAQAAhbBChCQBChEBdAAQBcAABEBEQBCBCAABbQAABehCBCQhEBChcAAQhdAAhChCQhChCAAheg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F9F3F4").ss(1.1,1,1).p("AjoAAQAAheBEhEQBEhGBgAAQBfAABGBGQBEBEAABeQAABhhEBEQhGBEhfAAQhgAAhEhEQhEhEAAhhg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F9F3F4").ss(1,1,1).p("ADwAAQAABkhGBGQhIBGhiAAQhjAAhGhGQhGhGAAhkQAAhhBGhGQBGhIBjAAQBiAABIBIQBGBGAABhg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(249,243,244,0.89)").ss(0.9,1,1).p("Aj2AAQAAhkBIhIQBIhKBmAAQBlAABKBKQBIBIAABkQAABnhIBIQhKBIhlAAQhmAAhIhIQhIhIAAhng");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(249,243,244,0.776)").ss(0.8,1,1).p("Aj+AAQAAhnBLhKQBKhNBpAAQBoAABMBNQBLBKAABnQAABqhLBKQhMBLhoAAQhpAAhKhLQhLhKAAhqg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(249,243,244,0.667)").ss(0.7,1,1).p("AkFAAQAAhqBNhMQBMhPBsAAQBrAABOBPQBNBMAABqQAABthNBMQhOBNhrAAQhsAAhMhNQhNhMAAhtg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(249,243,244,0.557)").ss(0.6,1,1).p("AkMAAQAAhtBPhOQBOhRBvAAQBuAABQBRQBPBOAABtQAABwhPBOQhQBPhuAAQhvAAhOhPQhPhOAAhwg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(249,243,244,0.443)").ss(0.5,1,1).p("AkTAAQAAhwBRhRQBQhSByAAQBxAABSBSQBRBRAABwQAABzhRBQQhSBRhxAAQhyAAhQhRQhRhQAAhzg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(249,243,244,0.333)").ss(0.4,1,1).p("AkbAAQAAhzBUhTQBShVB1AAQB0AABUBVQBUBTAABzQAAB2hUBSQhUBUh0AAQh1AAhShUQhUhSAAh2g");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(249,243,244,0.224)").ss(0.3,1,1).p("AkiAAQAAh2BVhVQBVhXB4AAQB3AABXBXQBVBVAAB2QAAB5hVBVQhXBVh3AAQh4AAhVhVQhVhVAAh5g");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(249,243,244,0.11)").ss(0.2,1,1).p("AkpAAQAAh5BXhXQBXhZB7AAQB6AABZBZQBXBXAAB5QAAB8hXBXQhZBXh6AAQh7AAhXhXQhXhXAAh8g");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(249,243,244,0)").ss(0.1,1,1).p("AExAAQAAB/hZBZQhbBZh9AAQh+AAhZhZQhZhZAAh/QAAh8BZhZQBZhbB+AAQB9AABbBbQBZBZAAB8g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBF8F8").ss(2,1,1).p("AAeAdIgeApAgdAdIAdApAAAhFIAACL");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(-4,-8,8,16), null);


// stage content:
(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:29,End:56});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var that = this;
		window.onArrowHover = function() {
			that.play();
		}
		window.startArrowAnimation = function() {
			if (window.arrowIsVisible) {
				that.play();
			} else {
				window.onArrowAnimationComplete();
				that.gotoAndStop("Start");
			}
		};
		window.setArrowVisibility = function(visibility) {
			window.arrowIsVisible = visibility;
		};
		window.onArrowInit();
	}
	this.frame_28 = function() {
		window.onArrowAnimationComplete();
		this.gotoAndPlay("End");
	}
	this.frame_56 = function() {
		if (window.arrowIsHover) {
			this.gotoAndPlay("Start");
		}
	}
	this.frame_82 = function() {
		if (window.arrowIsHover) {
			this.gotoAndPlay("Start");
		} else {
			this.gotoAndStop("Start");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(28).call(this.frame_56).wait(26).call(this.frame_82).wait(1));

	// ring
	this.instance = new lib.ring("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.5,32.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(46).to({mode:"single",startPosition:18},0).to({regX:0.3,regY:0.3,scaleX:1.15,scaleY:1.15,x:32.9,y:32.9},7).to({regX:0,regY:0,scaleX:1,scaleY:1,x:32.5,y:32.5},9).wait(1));

	// ring
	this.instance_1 = new lib.ring("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.5,32.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},55).wait(17));

	// ring
	this.instance_2 = new lib.ring("single",17);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.5,32.5);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).wait(1).to({alpha:0.301,startPosition:16},0).wait(1).to({alpha:0.398,startPosition:15},0).wait(1).to({alpha:0.5,startPosition:14},0).wait(1).to({alpha:0.602,startPosition:13},0).wait(1).to({alpha:0.699,startPosition:12},0).wait(1).to({alpha:0.801,startPosition:11},0).wait(1).to({alpha:0.898,startPosition:10},0).wait(1).to({alpha:1,startPosition:9},0).to({regX:0.4,regY:0.4,scaleX:0.72,scaleY:0.72,x:32.8,y:32.8},7).to({regX:0,regY:0,scaleX:1,scaleY:1,x:32.5,y:32.5},9).wait(1));

	// ring
	this.instance_3 = new lib.ring("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(32.5,32.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(56).to({startPosition:0},0).to({alpha:0,startPosition:9},9).to({_off:true},1).wait(16));

	// arrow
	this.instance_4 = new lib.arrow_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(32.5,32.5,0.15,0.15);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1},13).to({regX:0.1,regY:0.1,scaleX:1.43,scaleY:1.43,x:32.7,y:32.7},14).to({regX:0,regY:0,scaleX:1,scaleY:1,x:32.5,y:32.5},13).to({scaleX:1.54,scaleY:1.54},11).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 65,
	height: 65,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	manifest: [],
	preloads: []
};




})(lib_arrow = lib_arrow||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_arrow, images, createjs, ss, AdobeAn;





















/**/

function arrowInit() {
	var arrow_canvas = document.getElementById("arrow_canvas");
		
	var arrow_exportRoot = new lib_arrow.arrow();
	var arrow_stage = new createjs.Stage(arrow_canvas);
	arrow_stage.addChild(arrow_exportRoot);


	createjs.Ticker.setFPS(lib_arrow.properties.fps);
	createjs.Ticker.addEventListener("tick", arrow_stage);


	

}
/**/


/*
window.onArrowInit = function() {
	window.arrowIsVisible = true;
//	window.arrowIsHover = true;
	window.startArrowAnimation();

};
/**/

