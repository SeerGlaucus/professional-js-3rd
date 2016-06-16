# 单体内置对象 

由ECMAScript实现提供的，不依赖于宿主环境的对象，这些对象在ECMAScript程序执行之前就已经存在了  

包括：Object，Global, Array, Math, Json, Boolean, String, RegExp, Function, Date, Number和Error对象。  

# Global对象  

兜底儿对象，不属于任何其他对象的属性和方法，所有全局作用域中定义的属性和函数都是Global对象的属性(描述的全局对象的实现，浏览器环境下global即是window)  

编码、解码方法：encodeURI(),encodeURIComponent() 前者不会对本属于URI的特殊字符进行编码，后者会编码所有非字母数字字符。类比于decodeURI(),decodeURIComponent()  

# eval方法

当解析器发现代码中调用eval方法时，它会将eval中的参数当做实际的ECMAScript语句来解析，然后把执行结果插入到原位置。  
通过eval执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链。  
