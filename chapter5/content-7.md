# 引用类型
基础类：Object（这个*类*不用定义就能用）新建它的实例的两种方式：  
var person = new Object();//构造函数  
var person = {  
    name:Liy,  
    age:18  
}//对象字面量表示法，推荐  

# 碉堡的用法，js可用通过变量来访问属性    
其他语言用.访问属性，不能实现，而js的person[propertyName]实现了此功能。例如这种：person["first name"],用.访问一个试试？  

# 数组Array  
创建方法:  
var arr = new Array();//new可省略，可传一个参数，number类型的为创建初始大小，其他为一个长度的数组，传多个参数为初始化数据。  
var arr = ["red","blue"]//字面量表示法  
数组length属性的玩法：  
length属性不是只读的，通过设置这个属性可以从数组的末尾移除项或向数组中添加新项  
arr[arr.length] = "123"//扩展一个位置，设置为123  
设置一个超范围的索引位置的值时，数组自动扩充长度为此索引位置+1，中间的值全部为undefined  
检测数组：Array.isArray(value);//确定它是不是数组，不管它在哪个全局环境中创建的（instanceof可能有兼容问题）
数组可以作为栈（LIFO），提供了push（）入栈，和pop（）出栈的操作  
也可以作为队列（FIFO），提供了shift（）出队方法，结合push（）完成队列操作，利用pop（）和unshift（）可以模拟反向操作的队列  
数组排序：arr.reverse(),反转，arr.sort(comparefucnton),根据比较函数排序  
数组方法：concat() 基于当前数组的副本创建新数组，连接参数。  
    slice() 截取当前数组的一部分返回，截取部分为当前数组的副本，对当前数组没有影响  
    强大的splice():  
        splice(2,2):从2的位置删除两项  
        splice(2,0,"123"):从2的位置删除0项，新增"123",相当于在2的位置插入项  
        splice(2,2,"123"):从2的位置删除2项，增加一项，相当于半替换半插入  
    位置方法：  
        indexOf/lastIndexOf：两个参数，查照项和查找起点位置的索引  
    迭代方法：ECMAScript提供了5个数组迭代方法
    boolean every(function(item, index, array){return boolean}, this);//每一项都返回true，则返回true  
     boolean some(function(item, index, array){return boolean}, this);//有一项返回true，则返回true  
      Array filter(function(item, index, array){return boolean}, this);//返回符合条件的项组成的数组  
      Array map(function(item, index, array){return item}, this);//返回每项操作结果组成的数组  
      forEach(function(item, index, array){}, this);//相当于for循环迭代
      
     98/117/749


