/**
 * Created by Administrator on 2016/6/15.
 */
//创建对象
//1.工厂方法模式
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	}
	return o;
}
var p1 = createPerson('lily',15,'ygg');
var p2 = createPerson('hmm',19,'y88');
p1.sayName();
p2.sayName();
//缺点：无法知道对象的确切类型
//2.构造函数模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	}
}
var p3 = new Person('lily',15,'ygg');
var p4 = new Person('hmm',19,'y88');
//new对象经过的步骤；1.创建新对象，2。将构造函数的作用域赋给新对象，3.执行构造函数中的代码，4.返回新对象
//升级的地方：可通过instanceOf来判断此对象的类型
//缺点：每个对象实例都包含相同逻辑的方法的一个新实例（方法应该是类级而不应该是实例级）
//3.原型模式
//解决了对象方法实例有多个的问题，使不同对象调用的方法都为同一个方法。
//问题：当原型对象的属性为引用类型时，会发生对象属性间相互影响的问题。
//4.构造函数和原型模式混合使用
//构造函数模式用于定义实例属性
//原型模式用于