requirejs.config({
	baseUrl: 'utils',
	paths: {
		plugin: 'plugin/plugin',
		aplugin: 'plugin/aplugin',
		bplugin: 'plugin/bplugin'
	},
	shim: {
		dateUtil: {
			deps: [],
			exports: 'DateUtils'
		},
		stringUtil: {
			deps: [],
			exports: 'StringUtils'
		},
		
		//'plugin': {exports: 'Plugin'},
		'aplugin': {
			deps: ['plugin'],
			exports: 'a'
		},
		'bplugin': {
			deps: ['plugin'],
			exports: 'b'
		},
		
		conflict: {
			deps: [],
			exports: "$E",
			//init : function(){return $E.noConflict();}
		}
	}
});

//当加载 stringUtil.js和dateUtil.js都不符合AMD规范时
//stringUtil.js和dateUtil.js都被正确加载，当回调函数获取模块返回值为 undefined.
/**
 * requirejs加载不符合AMD规范的JS文件，跟直接在HTML通过<script>标签加载，没有太大的差别。
 * JS文件中引入的全局变量，依然会存在，依然能够正常使用
 */
//shim 本身不会触发代码的加载
//shim参数能够使那些不符合AMD规范的模块，以AMD模块的方式进行加载和使用
//shim.exports: 模块的返回值，必须与加载模块的暴露出的全局变量名称一致
//RequireJS将这些全局变量的值返回，作为模块的返回结果
require(['dateUtil', 'stringUtil'], function(DateUtils, StringUtils){
	console.log('-----------utils--------------');
	console.log(DateUtils === undefined);
	DateUtils.toString();
	StringUtils.toUpperCase();
	console.log('\n');
});

//仅使用其他"shim"模块作为shim脚本的依赖，或那些没有依赖关系，并且在调用define()之前定义了全局变量(如jQuery或lodash)的AMD库(否则，如果你使用了一个AMD模块作为一个shim配置模块的依赖，在build之后，AMD模块可能在shim托管代码执行之前都不会被执行，这会导致错误。终极的解决方案是将所有shim托管代码都升级为含有可选的AMD define()调用)
//如果A模块依赖于B模块（A ---> B），A模块不符合AMD规范（使用的是全局变量），那么B模块也必须是使用全局变量，否则保错
require(['plugin', 'aplugin', 'bplugin'], function(){
	console.log('----------plugin---------------');
	var aPL = require('aplugin');
	console.log(aPL);
	var bPL = require('bplugin');
	console.log(bPL);
	
	aPL.toString();
	bPL.toString();
	console.log('\n');
});

//shim.init指定一个函数主要是用来避免类库之间的冲突（因为加载不符合AMD规范的js文件时，会引入全局变量，故加载多个模块时存在名字冲突）
//conflict.js能够与之前定义的全局变量$E共存
require(['conflict'], function(conflict){
	console.log('-----------conflict--------------');
	console.log(conflict);
	
	console.log("window.$E = "+window.$E);
	console.log('\n');
});