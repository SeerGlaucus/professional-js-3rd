/**
 * Created by Administrator on 2016/6/14.
 */
function Person(name, age){
	this.name = name;
	this.age = age;
	this.sayName = function(){
		console.log(this.name);
	}
}
var p1 = new Person('lily',12);
p1.sayName();
Person('hanmei',15);
window.sayName();
var o = new Object();
Person.call(o, 'hanbing', 10);
o.sayName();