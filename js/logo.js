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
	while(cur != logo_exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != logo_exportRoot) {		
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
		while(cur != logo_exportRoot) {		
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



// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		that.stop();
		window.startLogoAnimation = function() {
			that.play();
		};
		window.onLogoInit();
	}
	this.frame_2 = function() {
		this.stop();
		window.onLogoAnimationComplete();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// image
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],-25.6,30.7,0,-25.6,30.7,39.6).s().p("AhNALQA2ALAggDQAggCAAgRIgHgPQgHgKgUgHQgCgHAnAPQAlANgDAXQgDAUgqADIgPAAQgyAAgtgYg");
	this.shape.setTransform(130.9,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],23.6,30.6,0,23.6,30.6,39.6).s().p("AhBAkQgVgFACgVQADgQAdgRQAPgIAOgFQgJAFgHAHQgNAOAHAJQAJALAbgWQAJgHAagNQAJgDAHAAQATACANAEQAEABADADQAEADAAADQABADgCAFIgEAGQgNAMgKAFQgIADgJAAIgSABQgGABgOAGQgQAHgIACQgRAFgOAAIgMgBg");
	this.shape_1.setTransform(81.7,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],-14.3,-19.8,0,-14.3,-19.8,39.6).s().p("AARANQgGgCgTAGQgKADgQgHQgJgEgOgNQgHgHABgHQABgDADgDQAEgEADgBQAPgEARgBQAJgBAIAEQAXALATALQAIAFAHAIQAJALABALIgjAJQgDgTgJgDg");
	this.shape_2.setTransform(119.6,61.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],2.8,-29.7,0,2.8,-29.7,39.6).s().p("AgTATQgTgHgdgPIgZgOIAJAAQAMgBAGgCIAVgGIAKAIQAPAKATAJQAnATA2gFQglAKgUACIgKAAQgXAAgWgIg");
	this.shape_3.setTransform(102.4,71.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],26.4,-10.6,0,26.4,-10.6,39.6).s().p("AgEASQgGgDgGgHQgFgGAAgDQgBgQAVgHQAKgDALAAIgJAIQgKAKgBAGQgBAKALAMQAGAGAGADQgOgCgMgIg");
	this.shape_4.setTransform(78.8,52.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],30.8,3.4,0,30.8,3.4,39.6).s().p("AgegBQgCgRAUgJQAKgGAJgBQgKANACAOQACAWAeAUQg7gQgCgUg");
	this.shape_5.setTransform(74.4,38.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],33,18.3,0,33,18.3,39.6).s().p("AgJAYQgPgIAAgLQAAgTAYgMQAggPgJAKQgPAHgFAQQgGAVAaAXQgXgHgJgFg");
	this.shape_6.setTransform(72.2,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],-28.2,-10.7,0,-28.2,-10.7,39.6).s().p("AgEgDQgGgPgQgGQgBgDAbAGQAcAGgBAMQAAAHgKAIQgIAEgVAKQAPgNgHgQg");
	this.shape_7.setTransform(133.4,52.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],-0.7,4.8,0,-0.7,4.8,39.6).s().p("ABiFJQgegEgtgZIglgYQgSANgYALQgwAXgagEQgcgEgagVIgUgVIAQAJQATAKAVACQAbACAZgOIAugiIgggaQgWgRgKgKQhDAagmgFQgkgGggglQAGAHAPAEQAPAEASABQAfACA+gYQgngcgZgIQgjgLgWACQgXADgSARQAAgXAYgNQARgKAagCQArgFA2AaQAbANARAOIA7gnIhIg3QgcAOgPAGQg5AYg8gKQgYgFgWgMQgXgOgIgRIAYALQAeAMAUAAQAfgBAdgKQAUgIAlgUQgpgZgcgKQgogQglAEQgYADgPAIQgIAFgJAKQAKgeAagNQAOgHAMgBQgNgFgPgJQgggTgPgXQAmAYA2gCQA0gBAsgWQAVgKAKgLQgNgMgVgMQgqgYgogBQg/gCglAdQAXgdAWgMQAdgPAugBQAygCA0AZQAZANAPAMIBEg4QgPgWgcgXQg5guhEgBQgbgBgeAJIgZAIIAWgPQAfgQAngCQBNgFBDAsQAiAWARAXIA7gtQBJgsBFAEQAiACAeARQAQAIAIAIIgcgHQgggIgRABQhHAFg/ApIgxAoIBFA5IAWgLQAZgMAMgFQApgQAsgCQA0gBAjAWQAaARAJATQgIgHgPgGQgVgJgXgCQgtgFglALQgeAIgrAZQAsAbAUAJQAkARAcABQAgACAkgKQARgEAMgFQgOANgWAPQgOAJgMAFIgJAEIAMAGQAPAHAHAFQAOAKAIAPQADAIAAAFQgEgGgKgGQgUgNgZgBQg1gDgsATQgWAIgkAZIAVALQAaAMAWAFQAfAGAbgBQAfgBAogLQgsAagjAJQggAIgsgIQgugJgjgYIguAiIgdAVIA5ArIAigVQArgXApgHQAWgEAWAGQAUAFAOALQATAPADALQgHgGgSgEQgRgDgPAAQguAAg/AnQAAAEAWAKQAaAMAcACQAbACAdgJQAPgFAJgFQgJALgQALQggAXghACQgXABgtgOIgngOIhEA1QAxAdAOAGQAhAOAggFQAZgFASgHQgXAXgZAOQgaAOgVAAIgIgBgAg5CrIA5AvIA2gvQglgbgSgNgAhBAXIBBA1IBAg3IhAgxIhBAzgAAig4IA7AqIAKAJIAggWQAlgXAdgHQgcgIgXgMQgOgIghgXgAiYhNQgZANgfAJQAlAJAlAWQARAKAMAJIBGgzIhFgzIgwAegAhCiKIBCAzIBBgzIhBg4gAlZAhIABABIgBgBg");
	this.shape_8.setTransform(106,36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],15.6,-21.1,0,15.6,-21.1,39.6).s().p("AgMAVIgQgIQgKgGgEgEQgIgHgBgJQgCgKAKgDQAagHAgAYQAWAOAQAUQgHACgMABIgHAAQgUAAgTgHg");
	this.shape_9.setTransform(89.6,62.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],-32.4,3.6,0,-32.4,3.6,39.6).s().p("AgDAAQABgSgSgPQgEgGAdAPQAaAMgDAPQgCANgLAHQgMAHgfAGQAYgOABgWg");
	this.shape_10.setTransform(137.7,38);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFBE5B","#F3A644","#E69330","#DF8824","#DC8420","#B48E72"],[0.188,0.302,0.427,0.553,0.69,1],-33.6,18.3,0,-33.6,18.3,39.6).s().p("AABAAQgBgUgjgSIAjAJQAjANAAAWQABANgMAIQgNAIggAEQAWgWAAgRg");
	this.shape_11.setTransform(138.8,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7950F").s().p("AAUA6IAAgvQAAgLgFgFQgDgFgIAAIgHACIgHADIgFAGQgEAEAAAEIAAAxIgSAAIAAh0IASAAIAAAzQAFgJAIgFQAHgEAKAAQAHgBAGADQAFAEADADQADAFABAGQACAGAAAHIAAAyg");
	this.shape_12.setTransform(205.4,100.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7950F").s().p("AgCA3QgDgBgDgCQgEgCgBgEQgBgEgBgFIAAgzIgKAAIAAgOIAKAAIAAgbIARAAIAAAbIASAAIAAAOIgSAAIAAAtQAAAFADACQACACAEAAIAHgBIAFgCIAEANQgCACgHACQgIACgGAAg");
	this.shape_13.setTransform(196.1,100.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7950F").s().p("AgXAqIAAhSIARAAIAAASQAFgJAFgFQAHgFAIAAIAFAAIAAAQQgLABgIAEQgHAEgDAIIAAAyg");
	this.shape_14.setTransform(188.9,101.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7950F").s().p("AgWApQgFgBgEgEQgDgDgDgFQgCgFAAgGQAAgFADgGQACgFAFgCQAGgEAFgBQAGgCAJAAIAKABIALADIAAgGQAAgJgGgGQgFgFgJAAQgIAAgFADQgGACgHAFIgGgLQAQgLASAAQAQAAAKAIQAJAJAAARIAAAdQAAAGAFAAIAAAPIgIABQgFAAgDgDQgDgEgBgDIAAgFQgFAHgJAEQgGAEgLAAQgGAAgFgCgAgQAFQgGAEAAAHQAAAGAEAEQAFAEAHAAQAHAAAEgCQAGgCADgEQAEgEAAgCIAAgMIgKgCIgJgBQgJAAgGAEg");
	this.shape_15.setTransform(179.3,101.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7950F").s().p("AgQAoQgJgDgFgGQgGgGgDgIQgDgIAAgJQAAgHADgJQADgHAGgGQAGgHAIgDQAHgDAKAAQAKAAAHADQAJAEAEAGQAGAEADAJQADAIAAAIIAAADIgBADIhBAAIACAKQACAEAEAEIAIAFQAEABAEAAIAHAAIAGgDIAGgEIADgFIAPAEQgEAJgLAGQgJAGgOAAQgJAAgHgDgAgIgcIgIAFQgEAEgCAEIgCAKIAxAAQAAgFgCgFQgCgEgDgEIgIgFQgFgBgFAAIgIABg");
	this.shape_16.setTransform(168.6,101.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7950F").s().p("AgGAKIAAgTIANAAIAAATg");
	this.shape_17.setTransform(160.4,105);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#674E40").s().p("AgKA5IAAgoIgphJIAYAAIAbA3IAcg3IAYAAIgpBJIAAAog");
	this.shape_18.setTransform(151.8,100.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#674E40").s().p("AgnA5IAAhxIBNAAIAAAUIg2AAIAAAbIAvAAIAAARIgvAAIAAAdIA4AAIAAAUg");
	this.shape_19.setTransform(140.5,100.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#674E40").s().p("AAfA5Ig5hIIAABIIgWAAIAAhxIARAAIA6BKIAAhKIAWAAIAABxg");
	this.shape_20.setTransform(127.6,100.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#674E40").s().p("AAVA5IgWgmIgWAAIAAAmIgWAAIAAhxIAxAAQAIAAAHADQAFADAGAGQAFAGADAGQACAGAAAIQAAALgFAIQgFAJgKAEIAaArgAgXAAIAbAAQADAAACgBIAFgEIADgGIABgHQAAgEgBgDQgBgDgDgDIgFgEIgFgBIgaAAg");
	this.shape_21.setTransform(115.1,100.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#674E40").s().p("AgWA0QgJgEgGgIQgHgIgCgKQgDgKAAgLIAAg5IAWAAIAAA5QAAAHACAGQABAHADAFQAEAFAFADQAFAEAHAAQAHAAAGgEQAFgDAEgFQAEgFAAgHQACgGAAgHIAAg5IAWAAIAAA5QAAALgDALQgCAJgHAIQgGAIgJAFQgKAEgNAAQgNAAgJgFg");
	this.shape_22.setTransform(101.7,100.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#674E40").s().p("AgWA1QgLgGgGgHQgIgKgEgJQgDgLgBgKQABgKADgLQAFgKAIgIQAHgIAKgFQAKgFALAAQAMAAALAFQAKAGAHAIQAHAHAFALQADALAAAJQABAMgFAKQgEAJgHAJQgJAJgJAEQgKAFgMAAQgKAAgMgFgAgNgiQgHAFgEAEQgEAFgCAHQgCAGAAAHQAAAIACAGQACAHAEAFQAGAGAFADQAHADAGAAQAHAAAHgDQAFgDAGgGQADgFADgHQACgGAAgIQAAgIgCgFQgDgHgEgFQgEgGgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_23.setTransform(88.1,100.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#674E40").s().p("AggAyIAEgRIAIADQAHACAFAAQAGAAAEgCQADgCADgFQACgGAAgGIAChKIAWAAIAAA5QgBANgBALQgCAKgEAIQgEAHgIAEQgJAFgNAAQgOAAgKgIg");
	this.shape_24.setTransform(76,100.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7950F").s().p("AguA5IAAhxIAnAAQAOAAAJAFQAKAEAHAIQAHAHADALQADAKAAALQABANgEAKQgDAKgIAIQgHAHgKAFQgLAEgLAAgAgiAvIAbAAQAKAAAIgEQAJgEAFgGQAFgHADgIQACgIAAgKQAAgJgCgJQgDgJgGgGQgGgGgIgDQgGgEgLAAIgbAAg");
	this.shape_25.setTransform(65.6,100.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7950F").s().p("AglA5IAAhxIBJAAIAAAKIg+AAIAAApIA2AAIAAAIIg2AAIAAAsIBAAAIAAAKg");
	this.shape_26.setTransform(53.4,100.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7950F").s().p("AAdA5IgagqIghAAIAAAqIgLAAIAAhxIAvAAQAHAAAHADQAEADAGAFQAFAGACAGQADAHgBAGQAAAGgBAGIgGAJQgCAEgGAEQgFADgFABIAcAsgAgeAFIAkAAQAGAAADgCQADgCAEgDIAFgIQABgFAAgFQAAgFgBgFIgGgIQgCgDgFgDQgEgCgFAAIgjAAg");
	this.shape_27.setTransform(41.8,100.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7950F").s().p("AgRA1QgJgFgHgJQgHgIgEgLQgEgKAAgKQAAgLADgJQAEgLAHgHQAHgJAKgFQAKgEAMAAQAQgBAKAHQAMAIAEAKIgJAFQgCgEgEgFQgEgEgFgCQgEgCgFgBIgJgBQgJAAgJADQgJAGgEAFQgFAGgDAJQgDAJAAAIQAAAIADAJQAEAJAFAHQAHAIAHADQAIADAIAAQAFAAAFgBQADAAAHgDIAIgHIAHgJIAJAEQgCAGgFAGIgLAIQgFADgJABQgFACgIAAQgLAAgKgEg");
	this.shape_28.setTransform(29.1,100.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7950F").s().p("AAoA5IgOgkIgyAAIgPAkIgMAAIAwhxIAIAAIAvBxgAgWAMIAtAAIgXg3g");
	this.shape_29.setTransform(16.9,100.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7950F").s().p("AgrApIAGgJIAIAGIAJAFIALAEIALABQAPAAAHgFQAIgFAAgKQAAgEgDgFQgBgDgFgDIgLgFIgegIIgLgEIgHgIQgCgFAAgHQAAgIADgGQADgHAFgDQAIgFAFgBQAJgDAGAAQAKAAALAEQAJAEAGAFIgEAJQgHgGgHgCQgHgEgLAAQgOAAgGAGQgIAFAAAKQAAAGACADQABADAFACIAKAFIAdAHIANAFQAFAFADAEQACAGABAHQgBAIgCAGQgGAHgDACQgHAFgGABQgHACgKAAQgZAAgUgRg");
	this.shape_30.setTransform(5.3,100.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 210,
	height: 110,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib_logo = lib_logo||{}, images_logo = images_logo||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_logo, images_logo, createjs, ss, AdobeAn;




/**/
var logo_canvas, logo_stage, logo_exportRoot, logo_anim_container, logo_dom_overlay_container;//, fnStartAnimation;
function logoInit() {
	logo_canvas = document.getElementById("logo_canvas");
	logo_anim_container = document.getElementById("logo_animation_container");
	logo_dom_overlay_container = document.getElementById("logo_dom_overlay_container");
	logoHandleComplete();
}
function logoHandleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	logo_exportRoot = new lib_logo.logo();
	logo_stage = new createjs.Stage(logo_canvas);
	logo_stage.addChild(logo_exportRoot);	
	//Registers the "tick" event listener.
	var fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib_logo.properties.fps);
		createjs.Ticker.addEventListener("tick", logo_stage);
	};
	fnStartAnimation();
}
/**/