/**
 * Created by Administrator on 2016/6/2.
 */
var person = new Object();
function Dog(){
	console.log('Dog is running');
};
var dog = new Dog();
console.log(dog instanceof Object);//true С���Ƕ���
console.log(dog instanceof Dog);//true С����Dog���Ͷ���
console.log(Dog instanceof Function);//true Dog�Ǻ���
Dog();//Dog is ru������ ���Dog��һ�������Ļ�����ִ����
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