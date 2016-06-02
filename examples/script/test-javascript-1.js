/**
 * Created by Administrator on 2016/6/2.
 */
var person = new Object();
function Dog(){
	console.log('Dog is running');
};
var dog = new Dog();
console.log(dog instanceof Object);//true 小狗是对象
console.log(dog instanceof Dog);//true 小狗是Dog类型对象
console.log(Dog instanceof Function);//true Dog是函数
Dog();//Dog is ru。。。 如果Dog是一个函数的话，它执行了
console.log(Dog instanceof Object);//true
console.log(dog instanceof Function);//false
console.log(person instanceof Dog);
var body = document.getElementsByTagName('body');
for(attr in window){
	var dev = document.createElement('div');
	var text = document.createTextNode(attr);
	dev.appendChild(text);
	body[0].appendChild(dev);
}
console.log(Object instanceof Object);
console.log(Object instanceof Function);