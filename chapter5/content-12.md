# JS中的基本包装类型 吓死宝宝了，还有基本包装类型。。

ECMAScript提供了3个特殊的引用类型，Boolean，Numnber、String  

`var s1 = "hello world";`
`var s2 = s1.substring(0,3);`  

第二句执行的时候，后台会完成下列过程:  
1.创建string类型的一个实例  
2.在实例上调用指定的方法  
3.销毁这个实例  

上述操作也适用于Number和Boolean所对应的数值和布尔值。  

引用类型和基本包装类型的主要区别就是对象的生存期，使用new操作符创建的引用类型的实例，  
在执行流离开当前作用域之前都一直保存在内存中，而自动创建的基本包装类型的对象，则只存在  
于一行代码的执行瞬间，然后立即被销毁，这意味着我们不能在运行时为基本类型值添加属性和方法  

`var s1 = "some text"`  
`s1.color = "red"`  
`alert(s1.color)`  

执行结果为undefined，因为第二行创建的对象在第二行执行结束已被销毁，第三行又创建的对象没有color属性  

对基本包装类型使用typeof返回object  

Object构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型的实例  (test-javascript-5.js)

`var object = new Object("some")`  
`alert(object instanceOf String)`  //true  

String基本包装类型的方法  

1.字符方法，两个用于访问字符串中特定字符的方法：charAt/返回字符、charCodeAt/返回字符编码  
2.字符串操作方法，concat/连接，  
    slice(a, b):返回a-b位置的子串，如传入负值，则把字符串长度与参数值相加作为参数  
    substring(a, b):返回a-b位置的子串，如传入负值，则把负值转为0，返回从0到另一个位置的子串  
    substr(a, b):返回a位置开始的b个字符组成的字符串，如传入负值，如第一个是负值，则把第一个参数加上字符串长度，第二个是负值，则把第二个转为0  
3.字符串位置方法：indexOf、lastIndexOf  
4.trim方法，返回去除前后空格的字符串副本  
5.大小写转换：toLowerCase、toUpperCase  
6.模式匹配：str.match(pattern):返回一个数组等价于RegExp.exec(str)。  
        str.search(pattern):返回第一次匹配的索引，永远返回第一次匹配。  
        str.replace(str|RegExp, str):替换第一个参数中的字符串，如果第一个参数为regexp并且有g标志，则替换所有匹配。  
        

126/145/749





















































