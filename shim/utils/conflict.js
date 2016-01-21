(function(window) {
	//保存之前全局变量
    var _$E = window.$E;
	
	var myplugin = {
		'name': 'aty'
	};
	myplugin.noConflict = function(){
		window.$E = _$E;
		
		return myplugin;
	};
	
	//向全局对象注册$E
	window.$E = myplugin;
	
})(window);
