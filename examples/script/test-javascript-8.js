/**
 * Created by Administrator on 2016/6/15.
 */
function AAA(){}
function BBB(name){this.name = name}
BBB.prototype.sayName = function(){console.log(this.name)}
var b = new BBB();
b.name = "123";
AAA.prototype = b;
var a = new AAA();
a.sayName();

function Aaa(name){
	this.name = name;
	this.colors = ["red","blue"];
}
Aaa.prototype.sayName = function(){
	console.log('aaa:'+this.name);
}
function Bbb(name, age){
	Aaa.call(this,name);
	this.age = age;
}
Bbb.prototype = new Aaa();//搜索实例属性>搜索原型属性>向上搜索---》能够继承实例属性和原型方法
Bbb.prototype.sayAge = function(){
	console.log('bbb:'+this.age);
}
var b = new Bbb('niclos',22);
var b1 = new Bbb('niclos3',222);
b.colors.push('white');
console.log(b.colors);
console.log(b1.colors);
