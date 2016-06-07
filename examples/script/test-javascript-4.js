/**
 * Created by Administrator on 2016/6/7.
 */
var s = 1;
function add(n){
	return this.s + n;
}
console.log(add(2));
var o = {s:0};
o.add = add;
function add1(n){
	console.log(o.add(n));
	console.log(o.add.apply(window,[n]));
}
add1(4);

var color = "red";
var o1 = {color:"blue"};
function showColor(){
	console.log(this.color);
}
showColor();
var sc = showColor.bind(o1);
sc();