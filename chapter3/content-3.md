#�﷨

1.ECMAScript�е�һ��(��������������������)�����ִ�Сд��

2.��ʶ�������ַ�Ϊ��ĸ��$��_ ,�����ɺ����֣��շ����������ܰѹؼ��֣������֡�true��false��null������ʶ����

3.ע�ͣ�����// ����/*  */

4.�ϸ�ģʽ��ES5����ĸ��������һ�ֲ�ͬ��ES3�Ľ�����ִ��ģ�ͣ��ļ��������ϸ�ģʽ��
        �ļ������ӣ���use strict��
        Ҳ�����ں����ڲ����Ϸ�������������ָʾ��ָ���˺��������ϸ�ģʽ��

5.��䣺�ԷֺŽ�β��

#�ؼ��ֺͱ�����

ES5�Ĺؼ��֣�break       do      instanceof      typeof      case        else        new     var
        catch       finally     return      void        continue        for     switch      while       debugger
        function        this        with        default     if      throw       delete      in      try

ECMAScript������ı�����:abstract      int     short       enum        boolean     export      interface       static
        byte        extends     long        super       char        final       native      synchronized
        class       float       package     throws      const       private     goto        transient
        debugger        implements      protected       volatile        double      import      public

�������ϸ�ģʽ�µı����֣�class     enum        extends     super       const       export      import

������ϸ�ģʽ�µı����֣�implements     public      package     interface       private     static      protected
    let     yield

#����

������������������
�����һ��function test(){
    var message = "hello!";
}
test();
alert(message);//����messageΪ�ֲ�����������ִ���꼴�����١�
��������function test(){
    message = "hello!";
}
test();
alert(message);//Hello!,ʡ����var������messageΪȫ�ֱ���������һ��������ط��������á�(�ϸ�ģʽ���׳�ReferenceError����)

#��������

1.ES��5�ּ��������ͣ�Undefined��Null��Boolean��Number��String����һ�ָ�����������Object��

2.typeof����һ��ֵʹ��typeof���������ַ�����
"undefined"--δ����/"boolean"--����/"string"--�ַ���/"number"--��ֵ/"object"--�����null/"function"--����

3.typeof����δ��ʼ��������δ��������������undefinedֵ����������ʼΪnull�ı�������null��

4.û�б�Ҫ��һ��������ʽ������Ϊundefined������nullȴ�����ã�ֻҪ���ڱ�������Ķ���û������������󣬾�Ӧ����ȷ���ñ�������nullֵ��
��������������null��Ϊ��ָ�����ö���Ĺ��������������ڽ�һ������null��undefined��

5.NaN������ֵ��������ʾ����Ҫ����һ����ֵ�Ĳ�����δ������ֵ��������κ��漰NaN�Ĳ���������NaN��NaN���κ�ֵ������ȣ�����NaN��ES�ĺ���
isNaN(expression)�����������ʽ�Ƿ�����ֵ��

6.��ֵת��:����������Number() �������κ���������, parseInt(),parseFloat() ֻ��ת���ַ���
Number()    Boolean true-0,false-1/null-0/undefined-NaN/""-0/������.���ַ���-NaN/����-valueof��tostring
parseInt()      ""-NaN      �����һ���ַ��������ֻ��߸���-NaN     ת����ֹ���������ַ�
parseInt(number, base)      �ڶ��������ɴ���ת���ַ��Ľ�����(2,8,10,16)
parseFloat()        ֻ����10����ֵ������16����ʼ�շ���0

7.�ַ���ת������ֵ�������������ַ�����toString()������null��undefinedû�д˷�������ֵ��tostring���Դ�һ�����������������ز�ͬ�����µ�ֵ��
�ڲ�֪��ת�����ǲ���null��undefined����£�����ʹ��string()��������������ܹ����κ����͵�ֵתΪ�ַ�����ת������
��tostring����tostring����������ֵ��
null����"null"
undefined����"undefined"

�˴������������Ժ�
/**************************************************************************************************
8.Object���ͣ���������ʵ���Ļ�����Object��ÿ��ʵ�������� �������Ժͷ�����
Constructor�����������ڴ�����ǰ����ĺ�����
hasOwnProperty(propertyName):���ڼ������������ڵ�ǰ����ʵ�����Ƿ���ڡ�
isPropertyOf(object):���ڼ�鴫��Ķ����Ƿ�����һ�������ԭ�͡�
propertyIsEnumeration(propertyName):���ڼ������������Ƿ�����for-in��ö�١�
toLocalString() ���ض�����ַ�����ʾ�����ַ�����ִ�л����ĵ�����Ӧ��
toString():���ض�����ַ�����ʾ��
valueOf():���ض�����ַ�������ֵ�򲼶�ֵ��ʾ��
**************************************************************************************************/


36/55/749



































































