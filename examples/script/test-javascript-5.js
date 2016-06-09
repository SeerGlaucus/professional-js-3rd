var str = "some";
console.log(typeof str);
var str1 = String(str);
console.log(typeof str1);
console.log(str1 instanceof String);
var str2 = new String(str1);
console.log(typeof str2);
console.log(str2 instanceof String);
