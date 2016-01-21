(function(window, Plugin){
	var a = {};
	
	a.toString = function(){
		console.log(" a = "+ Plugin.add(1, 2));
	};
	
	window['a'] = a;
})(window, Plugin);