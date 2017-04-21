(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.SJE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SJE (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#51283B","#081015","#000000"],[0,0.741,1],0,0,0,0,0,505).s().p("Eg3OA3PUgW5gW3AAAggYUAAAggXAW5gW4UAW4gW4AgWAAAUAgXAAAAW4AW4UAW5AW4AAAAgXUAAAAgYgW5AW3UgW4AW5ggXAAAUggWAAAgW4gW5g");
	this.shape.setTransform(0,70);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-454.3,-45,908.6,90);


(lib.y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkHGQIAAsfIIPAAIAAMfg");
	mask.setTransform(167.2,9.7);

	// y
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.9,-30.3,52.7,75.4);


(lib.u = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkPE7IAAp1IIfAAIAAJ1g");
	mask.setTransform(-40.6,-0.9);

	// u
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-32.4,54.5,63);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjLFjIAArFIGXAAIAALFg");
	mask.setTransform(384.1,-5.2);

	// t
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.7,-40.7,40.8,71.1);


(lib.S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask  (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjdF/IAAr9IG7AAIAAL9g");
	mask.setTransform(-432.1,-6.7);

	// S
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-454.3,-45,44.4,76.5);


(lib.r3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjLE2IAAprIGXAAIAAJrg");
	mask.setTransform(341.3,-1.7);

	// r
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321,-32.7,40.8,62);


(lib.r2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjCFFIAAqJIGFAAIAAKJg");
	mask.setTransform(11.6,-0.4);

	// Слой 1
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-32.9,39,65);


(lib.r1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai7E4IAApwIF3AAIAAJwg");
	mask.setTransform(-285.7,-0.2);

	// r
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.4,-31.5,37.5,62.5);


(lib.o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkQEiIAApDIIhAAIAAJDg");
	mask.setTransform(-97.6,-1.4);

	// Слой 1
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.9,-30.4,54.5,58);


(lib.n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkGExIAAphIINAAIAAJhg");
	mask.setTransform(60.4,0.1);

	// n
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.1,-30.4,52.6,61);


(lib.J = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai3GyIAAtjIFvAAIAANjg");
	mask.setTransform(-145.6,0.2);

	// J
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.9,-43.2,36.7,86.8);


(lib.h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkXGGIAAsLIIvAAIAAMLg");
	mask.setTransform(433,-10);

	// h
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405,-45,49.4,74);


(lib.e3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjpFjIAArFIHTAAIAALFg");
	mask.setTransform(242.8,-7.7);

	// E
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(219.4,-43.2,46.7,71.1);


(lib.e2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjvEiIAApDIHfAAIAAJDg");
	mask.setTransform(115.7,-0.4);

	// Слой 1
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.7,-29.4,48,58);


(lib.e1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjxE4IAApvIHkAAIAAJvg");
	mask.setTransform(-240.2,-1.2);

	// Слой 1
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-32.5,48.5,62.5);


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj8GLIAAsVIH5AAIAAMVg");
	mask.setTransform(-185.7,-12.5);

	// Слой 1
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-45,50.5,72);


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnEfIAAo+IHQAAIAAI+g");
	mask.setTransform(-329.2,-0.7);

	// c
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.4,-29.5,46.5,57.5);


(lib.a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkLErIAApVIIXAAIAAJVg");
	mask.setTransform(293.5,-0.4);

	// a
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.7,-30.2,53.5,59.8);


(lib.a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkBEiIAApDIIDAAIAAJDg");
	mask.setTransform(-383.7,-2);

	// a
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409.5,-31,51.6,58);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8ByIAAjjID5AAIAADjg");
	mask.setTransform(202.4,18.4);

	// .
	this.instance = new lib.SJE("single",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189.9,7,25,22.8);


// stage content:
(lib.sje = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0,End:49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.sje.visible = false;
		var that = this;
		window.startSJEAnimation = function() {
			if (window.sjeIsVisible) {
				that.sje.visible = true;
				that.play();
			} else {
				that.gotoAndStop("End");
			}
		};
		window.setSJEVisibility = function(visibility) {
			window.sjeIsVisible = visibility;
			that.sje.visible = visibility;
		};
		window.onSJEInit();
	}
	this.frame_49 = function() {
		this.stop();
		window.onSJEAnimationComplete();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// SJE
	this.sje = new lib.SJE();
	this.sje.parent = this;
	this.sje.setTransform(455,45);
	this.sje._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sje).wait(49).to({_off:false},0).wait(1));

	// S
	this.instance = new lib.S("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.9,40,1,1,0,0,0,-431.1,-5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:23.9,alpha:1},11).to({_off:true},37).wait(1));

	// a
	this.instance_1 = new lib.a1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.9,42.4,1,1,0,0,0,-375.1,-2.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:79.9,alpha:1},11).to({_off:true},35).wait(1));

	// c
	this.instance_2 = new lib.c("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(160.9,43,1,1,0,0,0,-329.1,-2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:125.9,alpha:1},11).to({_off:true},33).wait(1));

	// r
	this.instance_3 = new lib.r1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(199.9,44.4,1,1,0,0,0,-285.1,-0.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({x:169.9,alpha:1},11).to({_off:true},31).wait(1));

	// e
	this.instance_4 = new lib.e1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(239.8,43.7,1,1,0,0,0,-240.2,-1.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:214.8,alpha:1},11).to({_off:true},29).wait(1));

	// d
	this.instance_5 = new lib.d("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(289.9,42,1,1,0,0,0,-185.1,-3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({x:269.9,alpha:1},11).to({_off:true},27).wait(1));

	// J
	this.instance_6 = new lib.J("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(324.4,45.1,1,1,0,0,0,-145.6,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({x:309.4,alpha:1},11).to({_off:true},25).wait(1));

	// o
	this.instance_7 = new lib.o("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(366.5,45,1,1,0,0,0,-98.5,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({x:356.5,alpha:1},11).to({_off:true},23).wait(1));

	// u
	this.instance_8 = new lib.u("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(419.5,40,1,1,0,0,0,-40.5,-5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({x:414.5,alpha:1},11).to({_off:true},21).wait(1));

	// r
	this.instance_9 = new lib.r2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(465,46,1,1,0,0,0,10,1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({alpha:1},11).to({_off:true},19).wait(1));

	// n
	this.instance_10 = new lib.n("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(507,48.5,1,1,0,0,0,57,3.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({_off:false},0).to({x:512,alpha:1},11).to({_off:true},17).wait(1));

	// e
	this.instance_11 = new lib.e2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(560.7,44.5,1,1,0,0,0,115.7,-0.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).to({x:570.7,alpha:1},11).to({_off:true},15).wait(1));

	// y
	this.instance_12 = new lib.y("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(608.6,46.5,1,1,0,0,0,168.6,1.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({_off:false},0).to({x:623.6,alpha:1},11).to({_off:true},13).wait(1));

	// .
	this.instance_13 = new lib.Symbol("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(637.6,62,1,1,0,0,0,202.6,17);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off:false},0).to({x:657.6,alpha:1},11).to({_off:true},11).wait(1));

	// E
	this.instance_14 = new lib.e3("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(670.6,34.5,1,1,0,0,0,240.6,-10.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).to({x:695.6,alpha:1},11).to({_off:true},9).wait(1));

	// a
	this.instance_15 = new lib.a2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(728.1,41.7,1,1,0,0,0,300.1,-3.3);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({_off:false},0).to({x:755.1,alpha:1},11).to({_off:true},7).wait(1));

	// r
	this.instance_16 = new lib.r3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(764.6,46.5,1,1,0,0,0,340.6,1.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({_off:false},0).to({x:795.6,alpha:1},11).to({_off:true},5).wait(1));

	// t
	this.instance_17 = new lib.t("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(806.1,38.5,1,1,0,0,0,379.1,-6.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({_off:false},0).to({x:834.1,alpha:1},11).to({_off:true},3).wait(1));


	// h
	this.instance_18 = new lib.h("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(858.9,34.7,1,1,0,0,0,430.9,-10.3);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(37).to({_off:false},0).to({x:885.9,alpha:1},11).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 910,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;

































/**/
//var sje_canvas, sje_stage, sje_exportRoot;//, anim_container, dom_overlay_container, fnStartAnimation;
 window.sjeInit = function() {
	var sje_canvas = document.getElementById("sje_canvas");

	var sje_exportRoot = new lib.sje();
	var sje_stage = new createjs.Stage(sje_canvas);
	sje_stage.addChild(sje_exportRoot);	

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", sje_stage);

};









/*
window.onSJEInit = function() {
	window.sjeIsVisible = true;
	window.startSJEAnimation();
};
/**/

