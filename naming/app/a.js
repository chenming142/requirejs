define('app/a', function(){
	var a = {
		'name': 'moduleA',
		getName: function(){
			return this.name;	
		},
		toString : function(){
			console.log(this.getName());
		}
	};
	return a;
});