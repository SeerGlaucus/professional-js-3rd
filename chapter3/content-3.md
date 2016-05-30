#语法

1.ECMAScript中的一切(变量、函数名、操作符)都区分大小写。

2.标识符：首字符为字母、$、_ ,其他可含数字，驼峰命名，不能把关键字，保留字、true、false、null用作标识符。

3.注释，单行// 多行/*  */

4.严格模式：ES5引入的概念，定义了一种不同于ES3的解析与执行模型，文件中启用严格模式：
        文件顶部加：“use strict”
        也可以在函数内部的上方包含这条编译指示，指定此函数启用严格模式。

5.语句：以分号结尾。

#关键字和保留字

ES5的关键字：break       do      instanceof      typeof      case        else        new     var
        catch       finally     return      void        continue        for     switch      while       debugger
        function        this        with        default     if      throw       delete      in      try

ECMAScript第三版的保留字:abstract      int     short       enum        boolean     export      interface       static
        byte        extends     long        super       char        final       native      synchronized
        class       float       package     throws      const       private     goto        transient
        debugger        implements      protected       volatile        double      import      public

第五版非严格模式下的保留字：class     enum        extends     super       const       export      import

第五版严格模式下的保留字：implements     public      package     interface       private     static      protected
    let     yield

#变量

变量作用域销毁问题
代码块一：function test(){  
var message = "hello!";  
}  
test();  
alert(message);//错误，message为局部变量，方法执行完即被销毁。
代码块二：function test(){  
message = "hello!";  
}  
test();  
alert(message);//Hello!,省略了var操作符message为全局变量，定义一次在任意地方均可引用。(严格模式下抛出ReferenceError错误)

#数据类型

1.ES有5种简单数据类型：Undefined、Null、Boolean、Number和String，和一种复杂数据类型Object。

2.typeof。对一个值使用typeof返回下列字符串：
"undefined"--未定义/"boolean"--布尔/"string"--字符串/"number"--数值/"object"--对象或null/"function"--函数

3.typeof声明未初始化变量和未声明变量均返回undefined值，声明并初始为null的变量返回null。

4.没有必要把一个变量显式的设置为undefined，但对null却不适用，只要意在保存变量的对象还没有真正保存对象，就应该明确的让变量保存null值，
这样做不仅体现null作为空指针引用对象的惯例，而且有助于进一步区分null和undefined。

5.NaN特殊数值，用来表示本来要返回一个数值的操作数未返回数值的情况，任何涉及NaN的操作都返回NaN，NaN与任何值都不相等，包括NaN，ES的函数  
isNaN(expression)可用来检测表达式是否不是数值。

6.数值转换:三个函数：Number() 可用于任何数据类型, parseInt(),parseFloat() 只能转换字符串  
Number()    Boolean true-0,false-1/null-0/undefined-NaN/""-0/非数字.的字符串-NaN/对象-valueof、tostring  
parseInt()      ""-NaN      如果第一个字符不是数字或者负号-NaN     转换截止到非数字字符  
parseInt(number, base)      第二个参数可传入转换字符的进制数(2,8,10,16)  
parseFloat()        只解析10进制值，对于16进制始终返回0

7.字符串转换：数值、布尔、对象、字符串有toString()方法，null和undefined没有此方法。数值的tostring可以穿一个参数即基数，返回不同进制下的值。  
在不知道转换的是不是null或undefined情况下，可以使用string()函数，这个函数能够将任何类型的值转为字符串，转换规则：  
有tostring调用tostring方法，返回值。  
null返回"null"  
undefined返回"undefined"

此处不懂，留待以后看  
/**************************************************************************************************  
8.Object类型，所有它的实例的基础，Object的每个实例都具有 下列属性和方法：  
Constructor：保存着用于创建当前对象的函数。  
hasOwnProperty(propertyName):用于检查给定的属性在当前对象实例中是否存在。  
isPropertyOf(object):用于检查传入的对象是否是另一个对象的原型。  
propertyIsEnumeration(propertyName):用于检查给定的属性是否能用for-in来枚举。  
toLocalString() 返回对象的字符串表示，该字符串与执行环境的地区对应。  
toString():返回对象的字符串表示。  
valueOf():返回对象的字符串、数值或布尔值表示。  
**************************************************************************************************/


36/55/749



































































