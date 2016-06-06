# Function 类型 

js中的函数实际上是对象，每个函数都是Function实例的类型，都与其他引用类型一样具有属性和方法。  

由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。  

函数通常是使用函数声明语法定义的:  
function sum(num1, num2){  
    return num1+num2;  
}  
这与下述函数表达式定义函数的方式几乎相差无几：  
var sum = function(num1, num2){  
    return num1+num2;  
};//function后不必加函数名，因为sum就可以引用函数，函数表达式和定义其他变量一样，括号后加分号。  

还有一种定义函数的方式是使用Function构造函数，Function可以接受任意数量的参数，但最后一个参数是忠都被看做是函数体，而前面的参数则枚举出了新函数的参数  
var sum = new Function("num1","num2","return num1+num2");//不推荐  

111/130/749

