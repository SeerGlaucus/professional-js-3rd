# RegExp 类型

创建正则表达式： var expression = / pattern / flags ;(等价于new RegExp(pattern, flags);)  

其中的pattern部分可以是任何简单或复杂的正则表达式，可以包含字符类，限定符，分组，向前查找和反向引用。每个正则表达式都可包含一个或多个flags，  
用以表明正则表达式的行为：g 表示全局模式，即模式可被应用于所有字符串，而非在发现第一个匹配项是立即停止；i 忽略大小写；m 多行匹配  

必须转义的字符：()[]{}*.+\^$|?   转义字符：\  

# RegExp实例属性  

global g标志 ； ignoreCase i标志 ； multiline m标志  
lastIndex 开始搜索下一个匹配项的字符位置，0起  source 正则表达式的字符串表示（字面量形式，而非传入参数）  

# 实例方法  

详见 test-javascript-2.js  

test()方法经常被用于if语句中，适合只想知道目标字符串与某个模式是否匹配，但不需要知道其文本内容的情况。  

toStirng()和toLocalString()都返回正则表达式的字面量，与创建正则表达式的方式无关  































