# 变量、作用域和内存问题
*理解基本类型和引用类型的值
*理解执行环境
*理解垃圾收集

1.动态属性
只能给用类型值添加属性，而不能给基本类引型值廷加属性（Undifined、Null、Boolean、string、Number）  
va a = “strr”；  
a.name = "sss";  
alert(a.name);//undifined  

2.赋值变量值  
var num = 5;
var num1 = num;//num和num1的值都是5，但他们的值是独立的，相互造作没有影响。  
var obj = new Object();
var obj1 = obj;
obj.name = "123";
alert(obj1.name);//123,obj1变量对象中值存储的是obj指向对象的地址，所以他们指向的是同一个对象。  

3.参数传递，值传递，实际就是形参对实参的复制，参考2  
function add(num){  
num += 1 ;  
}  
var a = 1;  
add(a);  
alert(a);//1,num是a的一个复制，他们两个相互独立。  
function setName(psn){  
psn.name = "asd";  
}  
var lily = new Object();  
setName(lily);    
alert(lily.name);//psn复制了lily中存储的对象地址，对psn的操作实际和对lily的操作是操作同一个对象。  

4.检测类型  
检测基本类型：typeof  
var a； typeof a ；//undifined  
var a = null； typeof a； //object  
检测对象的类型：instanceof  
123 instanceof Object //false，基本类型检查是否为对象都为false  
var a = new Object(); a instanceof Object //true, 检查是否为Object 都为true，因为所有引用类型都是Object的实例  

# 执行环境和作用域

1.执行环境定义，执行环境定义了函数或变量有权访问的其他数据，决定了他们各自的行为，每个执行环境都有一个与之关联的变量对象，环境中所保存的  
变量和函数都保存在这个对象中。全局执行环境是最外围的一个执行环境，根据ECMAScript实现所在的宿主环境不同，表示执行环境的对象也不一样，在  
web浏览器中，全局执行环境被认为是window对象，因此所有变量和函数都是作为window对象的属性和方法创建的，某个执行环境中的所有代码执行完毕，  
该环境被销毁，保存在其中的所有变量和函数定义同时被销毁。

2.每个函数都有自己的执行环境，当执行流进入一个函数时，函数的环境就会被推入环境栈中，而在函数执行之后，栈将其环境弹出，把控制权返回给之前  
的执行环境。  

3.作用域链。  
延长作用域链？？  


76/95/749



















