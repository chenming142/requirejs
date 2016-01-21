//shim: 依赖的模块本身是非AMD规范的需shim.exports
//var Plugin = {};
//Plugin.add = function(a, b){return a + b;};

(function(global, factory){
	
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = global.document 
			? factory(global, true)
			: function( w ){
				if(!w.document){
					throw new Error( "Server requires a window with a document" );
				}
				return factory(w);
			};
	}else{
		factory(global);
	};
	
})(typeof window !== 'undefined' ? window : this, function(window, noGlobal){
	console.info("---noGlobal: [ " +noGlobal+ " ]---");
	
	function add(a, b){return a + b;}
	
	var Plugin = {add: add};
	window['Plugin'] = Plugin;
	
	return Plugin;
});