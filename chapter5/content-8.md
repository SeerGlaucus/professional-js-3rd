# Date����

Date.parse(��ʾ���ڵ��ַ���) --- �����ַ�������ʾ�����ڵľ�1970.01.01�ĺ�����  

Date.UTC(�꣬�£�0-11�����գ�1-31����Сʱ��0-23�����֣��룬����) -- ���ز�����ʾ��ʱ���1970.01.01�ĺ�����  

new Date(x) == new Date(Date.parse(x)) == new Date(Date.UTC(x))  

# ��ʹ��Date�����������

var start = Date.now();//�������ڵ�ms��  
doSomething();  
var stop = Date.now();  
console.log(stop-start);  
�ڲ�֧�ֵ�������п����� var start = +new Date() ��ʵ�֡�  

# �̳еķ���  

toLocalString��toString��valueOf  
��������������õĵ�������Ӧ�ĸ�ʽ�������ں�ʱ��  
���ش���ʱ����Ϣ�����ں�ʱ��  
�������ַ��������غ���ֵ(�Ƚϴ�С��)  

# ��ʽ��  

new Date().toDateString() -- Sun Jun 05 2016  
new Date().toTimeString() -- 23:36:20 GMT+0800  
new Date().toLocaleDateString() -- 2016/6/5  
new Date().toLocaleTimeString() -- ����11:36:20  

# ����/ʱ�䷽��

ֱ��ȡ�ú������������ض�����  
getTime
setTime
...

103/122/749






























