# Function -这种js世界里的奇异生物 

Function没有**重载**的方法（所以叫函数？nonono），例如：  
function sum(num1,num2){  
 return num1+num2;  
}  
function sum(num1,num2){  
 return num1+num2+100;  
}  
alert(sum(1,2))// 103,sum指针指向了新的函数对象  
  
# 函数声明与函数表达式  

实际上，解析器在向执行环境中加载数据时，对函数声明和函数表达式的解析并不相同。  

解析器会率先读取函数声明，并使其在执行任何代码之前可用  

至于函数表达式，则必须等到解释器执行到它所在的代码行，才会被真正解释执行  

示例代码：test-javascript-3.js  

# 作为值的函数

因为ECMAScript中的 函数本身就是变量，所以函数也可以作为值来使用，可以像传递普通参  
数一样把一个函数传递给另一个函数，也可以将一个函数作为另一个函数的返回值来使用  

在函数内部有两个有特殊对象：arguments和this  

arguments：类数组对象，包含着传入函数中的所有参数，他有一个特殊的属性，名叫callee，  
是一个特殊的指针，指向拥有这个arguments对象的函数  
解除函数名与执行函数的紧密耦合  

this：this是函数据以执行的环境对象(函数中的this到底指向谁，取决于运行时函数所在的  
运行环境，而不取决于定义时的环境)  
var color = "red";
var o = {color : "blue"};
function say(){  
    alert(this.color);  
}  
say();//red 函数在最外层执行环境，this指向全局对象window  
o.say = say;  
o.say();//blue 函数的执行环境是对象o,this指向对象o  

严格模式下,访问arguments.callee会导致错误，访问arguments.caller也会导致错误，  
非严格模式下访问后者总是null

# 函数的属性和方法 

函数也有属性和方法，每个函数都包含这两个属性，length、prototype，length表示函数  
希望接收的命名参数的个数  

对于ECMAScript中的引用类型而言，prototype是保存他们所有实例方法的真正所在，换句  
话说，诸如toString、valueOf等方法都保存在prototype名下，只不过是通过各自对象的  
实例访问罢了，在创建自定义引用类型以及实现继承时，prototype属性的作用是很重要的  

每个函数都包含两个非继承来的方法，apply()和call(),这两个方法的用途都是在特定的作  
用域中调用函数，实际上等于在函数体内设置this对象的值  

首先，apply方法接受两个参数，一个是**在其中运行函数的作用域**，另一个是参数数组，  
参数数组可以使Array实例，也可以是arguments对象  

call方法与apply方法完全一样，不同的是call传递参数要11列出，不能用数组或arguments  

call和apply扩充作用域的最大好处，就是对象不需要和方法有任何耦合关系  

ECMAScript5中定义了一个方法：bind(),这个方法会创建一个函数的实例，调用bind的函数  
的this值会被设置为bind方法参数值。  

118/137/749













































































