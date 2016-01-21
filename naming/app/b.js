//define()中的相对模块名:
/**
 * 为了在define()内部使用require('./a')加载相对模块，
 * 调用时能正确解析相对路径，务必将'require'本身作为一个依赖注入到模块中
 * 
 * 只能在define内部使用形如"./module/name"的相对路径
 */
define('app/b',
	   [
			//'require','exports', 'module',
			'./a'
		], 
	   function(/*require, exports, module, */A){
	//var A = require('./a');
	var B = {
		'name' : 'moduleB',
		getName: function(){
			var self = this;
			return A.getName.call(self);	
		},
		toString : function(){
			console.log(A.getName() + '-' + this.getName());
		}
	};
	//module.exports = B;
	
	return B;
});