# 原型模式  

我们创建的每一个函数都有一个prototype属性，这个属性是一个指针，指向一个对象，而这个对象的用途是  
包含可以由特定类型的所有实例共享的属性和方法。  

这个对象又叫做函数的原型对象，默认情况下，原型对象自动获得一个constructor属性，这个属性包含一个  
指向prototype属性所在函数的指针，即 Person = Person.prototype.constructor  

函数Person                                
属性prototype : 指针 --->指向------------> 函数Person的原型对象  
-----------------------------------------属性constructor : 函数Person  
函数实例的原型对象特性也指向函数的原型对象,如下：  
Person.prototype.isPrototypeOf(person1)

原型对象的属性无法重写，但会被实例属性屏蔽  

使用[  delete 对象.属性  ]  可重新在实例上获得原型对象的属性  

使用[  对象.hasOwnProperty(属性名)  ] 可判断属性是实例属性还是原型属性，只有实例属性才返回true  

Object.getOwnPropertyDescriptor()也只能取得实例属性描述符，需要通过传入

159
