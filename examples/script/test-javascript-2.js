/**
 * Created by Administrator on 2016/6/2.
 */
var reg = null,
	i;
reg = /cat/g;
var c = reg;
reg = /cat/g;
console.log(c == reg);//false reg创建了两次对象
for(i=0; i<10; i++){
	console.log(reg.test("catasdejrjfla"));
}//结果true、false交替，第一次查找到了cat，第二次从第三个字符开始查找，发现没有，第三次又从头开始查找
for(i=0; i<10; i++){
	reg = new RegExp("cat");
	console.log(reg.test("catasdejrjfla"));
}// 始终返回true，每个reg都是单独对象

//在不设置全局标志的情况下，在同一个字符串上多次调用exec()将始终返回第一个匹配项的信息，而在设置全局标志的情况下，每次调用exec()都会在
//字符串中继续查找新匹配项
var reg1 = /.at/;
var t1 = 'lat,bat,eat,cat,sat,uat';
var matches1 = reg1.exec(t1);
console.log(matches1.index);
console.log(matches1[0]);
console.log(matches1.lastIndex);
var matches2 = reg1.exec(t1);
console.log(matches2.index);
console.log(matches2[0]);
console.log(matches2.lastIndex);
var reg2 = /.at/g;
var t2 = 'lat,bat,eat,cat,sat,uat';
matches1 = reg2.exec(t2);
console.log(matches1.index);
console.log(matches1[0]);
console.log(matches1.lastIndex);
matches2 = reg2.exec(t2);
console.log(matches2.index);
console.log(matches2[0]);
console.log(matches2.lastIndex);//没有加g的始终返回第一个，加g的接着向后查找


























