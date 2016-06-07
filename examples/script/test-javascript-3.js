/**
 * Created by Administrator on 2016/6/7.
 */
var color = "red";
var o = {};
function say(){
	alert(this.color);
}
say();//red 函数在最外层执行环境，this指向全局对象window
o.say = say;
o.say();//blue 函数的执行环境是对象o,this指向对象o
alert(sum(1, 3));//函数声明提升
function sum(num1, num2) {
	return num1 + num2;
}
console.log(jiecheng(5));//相比于普通阶乘的写法，解除了执行函数与函数名的紧密耦合
function jiecheng(n) {
	if (n > 1)
		return n * arguments.callee(n - 1);
	else {
		return 1;
	}
}
alert(sum1(1, 3));//此时sum1还未指向函数
var sum1 = function (num1, num2) {
	return num1 + num2;
}
