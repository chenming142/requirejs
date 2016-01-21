define(function(require){
	var b = require("./b");
	return {
		a : function(){
			var p = new b("Kelvin", 31);
			return p.toString();
		}
	};
});