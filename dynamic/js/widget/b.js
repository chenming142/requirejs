define(function(require, exports, module){
	function Person(name, age){
		this.name = name;
		this.age = age;
	}
	Person.prototype.toString = function(){
		return "This gay name is "+this.name+", age is "+ this.age;
	}
	return Person;
});