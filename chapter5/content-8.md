# Date类型

Date.parse(表示日期的字符串) --- 返回字符串所表示的日期的距1970.01.01的毫秒数  

Date.UTC(年，月（0-11），日（1-31），小时（0-23），分，秒，毫秒) -- 返回参数表示的时间距1970.01.01的毫秒数  

new Date(x) == new Date(Date.parse(x)) == new Date(Date.UTC(x))  

# 简化使用Date对象分析代码

var start = Date.now();//返回现在的ms数  
doSomething();  
var stop = Date.now();  
console.log(stop-start);  
在不支持的浏览器中可以用 var start = +new Date() 来实现。  

# 继承的方法  

toLocalString、toString、valueOf  
按照与浏览器设置的地区相适应的格式返回日期和时间  
返回带有时区信息的日期和时间  
不返回字符串，返回毫秒值(比较大小用)  

# 格式化  

new Date().toDateString() -- Sun Jun 05 2016  
new Date().toTimeString() -- 23:36:20 GMT+0800  
new Date().toLocaleDateString() -- 2016/6/5  
new Date().toLocaleTimeString() -- 下午11:36:20  

# 日期/时间方法

直接取得和设置日期中特定部分  
getTime
setTime
...

103/122/749






























