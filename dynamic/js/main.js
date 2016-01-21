requirejs.config({
	paths: {
		'jquery': '../lib/jquery/jquery-1.9.1.min',
		'widget': './widget'
	}
});

define(['./c'], function(C){
	var loaded = false;
	if(loaded){
		require(["./a"], function(a){
			a.sayhi();
		});
	}else{
		require(["./b"], function(b){
			b.sayhi();
		});
	}
});
