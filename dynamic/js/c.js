define(function(require, exports, module){
	function C(){
		this.c = 'c';
	}
	window.C = C;
	exports = module.exports = C;
});