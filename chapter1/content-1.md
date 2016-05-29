#掌握JavScript的关键
弄清它的本质，历史和局限性。

#简史

Netscape --- 为实现客户端表单验证 --- LiveScript（搭Java顺风车更名为JavasCript）--- JaveScript

MicroSoft --- 为让IE有足够的实力与Navigator竞争 --- JScript

Nombas --- 可嵌入网页的脚本语言(不详...) --- ScriptEase

三个版本促使JavaScript标准化。

由ECMA(欧洲计算机制造商协会)制定了ECMA-262(名为ECMAScript)标准。

#JavaScript实现

JavaScript和ECMAScript关系：

JavaScript
    |--- ECMAScript 核心，提供核心语言功能。
    |--- DOM 文档对象模型，提供访问和操作网页内容的方法和接口。
    |--- BOM 浏览器对象模型，提供与浏览器交互的方法和接口。

#ECMAScript

ES与web浏览器没有依赖关系，web浏览器只是es实现的宿主环境，不仅提供es的实现，也包含了一些扩展，比如dom和bom，便于语言和环境之间对接。
它的实现有JavaScript，JScript和ActionScript等，在这些脚本中声明变量，操作数组等语法完全一样，因为它们都是ECMAScript。
但是在操作浏览器对象等方面又有各自独特的方法，这些都是各自语言的扩展。

它规定了这些内容：

语法 | 类型 | 语句 | 关键字 | 保留字 | 操作符 | 对象






























































