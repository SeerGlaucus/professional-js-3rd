# ��������
�����ࣺObject�����*��*���ö�������ã��½�����ʵ�������ַ�ʽ��  
var person = new Object();//���캯��  
var person = {  
    name:Liy,  
    age:18  
}//������������ʾ�����Ƽ�  

# �ﱤ���÷���js����ͨ����������������    
����������.�������ԣ�����ʵ�֣���js��person[propertyName]ʵ���˴˹��ܡ��������֣�person["first name"],��.����һ�����ԣ�  

# ����Array  
��������:  
var arr = new Array();//new��ʡ�ԣ��ɴ�һ��������number���͵�Ϊ������ʼ��С������Ϊһ�����ȵ����飬���������Ϊ��ʼ�����ݡ�  
var arr = ["red","blue"]//��������ʾ��  
����length���Ե��淨��  
length���Բ���ֻ���ģ�ͨ������������Կ��Դ������ĩβ�Ƴ�������������������  
arr[arr.length] = "123"//��չһ��λ�ã�����Ϊ123  
����һ������Χ������λ�õ�ֵʱ�������Զ����䳤��Ϊ������λ��+1���м��ֵȫ��Ϊundefined  
������飺Array.isArray(value);//ȷ�����ǲ������飬���������ĸ�ȫ�ֻ����д����ģ�instanceof�����м������⣩
���������Ϊջ��LIFO�����ṩ��push������ջ����pop������ջ�Ĳ���  
Ҳ������Ϊ���У�FIFO�����ṩ��shift�������ӷ��������push������ɶ��в���������pop������unshift��������ģ�ⷴ������Ķ���  
��������arr.reverse(),��ת��arr.sort(comparefucnton),���ݱȽϺ�������  
���鷽����concat() ���ڵ�ǰ����ĸ������������飬���Ӳ�����  
    slice() ��ȡ��ǰ�����һ���ַ��أ���ȡ����Ϊ��ǰ����ĸ������Ե�ǰ����û��Ӱ��  
    ǿ���splice():  
        splice(2,2):��2��λ��ɾ������  
        splice(2,0,"123"):��2��λ��ɾ��0�����"123",�൱����2��λ�ò�����  
        splice(2,2,"123"):��2��λ��ɾ��2�����һ��൱�ڰ��滻�����  
    λ�÷�����  
        indexOf/lastIndexOf������������������Ͳ������λ�õ�����  
    ����������ECMAScript�ṩ��5�������������
    boolean every(function(item, index, array){return boolean}, this);//ÿһ�����true���򷵻�true  
     boolean some(function(item, index, array){return boolean}, this);//��һ���true���򷵻�true  
      Array filter(function(item, index, array){return boolean}, this);//���ط�������������ɵ�����  
      Array map(function(item, index, array){return item}, this);//����ÿ����������ɵ�����  
      forEach(function(item, index, array){}, this);//�൱��forѭ������
      
     98/117/749


