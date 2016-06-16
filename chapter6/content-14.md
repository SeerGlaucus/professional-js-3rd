# 面向Object的程序设计

# 属性类型

ECMAScript有两种属性：数据属性和访问器属性。  

数据属性：configurable：可否删除修改、enumerable：可否用for in遍历、writable：是否可修改值、value：值  

要修改属性默认的特性，必须使用ES5提供的Object.DefineProperty()方法  
var person = {};  
Object.defineProperty(person, "name", {  
configurable:true,//可配置  
writable:true,//可修改值  
enumerable:false,//不可用for in遍历  
value:'lily'//值  
});  

访问器属性：configurable：可否删除修改、enumerable：可否用for in遍历、get:读取属性时调用的函数，set:写入属性时调用的函数  
访问器属性不能直接定义，必须使用Object.defineProperty()来定义。  
var book = {  
_year:2004,  
edition:1  
}  
Object.defineProperty(book, "year",{  
get:function(){  
return this._year;  
},  
set:function(newValue){  
if(newValue > 2004){  
this._year = newValue;  
this.edition += newValue-2004;  
}  
}  
}); 

# 创建对象，函数和构造函数  

js中普通函数和构造函数并无区别，区分它们是从：  
程序运行时，调用了new xxx(),那么它就是构造函数，没有用new那就是普通函数  

通过new创建的对象可用instanceOf来判断类型  

147/166/749








































































