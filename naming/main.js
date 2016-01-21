requirejs.config({
	baseUrl:'./'
});

require(['app/a', 'app/b'], function(A, B){
	console.log("---------naming----------")
	A.toString();
	B.toString();
	console.log('\n')
});