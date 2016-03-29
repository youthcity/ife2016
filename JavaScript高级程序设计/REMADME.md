#JavaScript高级程序设计学习总结
##chapter 3
1. 在函数中用var声明变量，该变量将成为局部变量；若不加var则成全局变量。最佳实践，不要在局部作用域定义全局变量。

2. `typeof`检测给定变量的数据类型
 `typeof`是个操作符不是一个函数，因此使用时可以不带()。最佳实践，带上括弧。
3. `undefined`值派生自null值得，因此ECMA-262规定它们的相等性测试要返回true;
`alert(null == undefined)`
4. Boolean类型 `Boolean(0 || NaN)` 返回值为false;
5. 正无穷`Infinity`与负无穷`-Infinity`
确定一个数值是不是有穷(是不是位于最大数与最小数之间)的可以用isFinite()函数
> var result = Number.MAX_VALUE+ Number.MAX_VALUE 
alert(isFinite(result));

6. NaN
  - 任何数值除以0会返回NaN
  - NaN与任何数值都不相等，包括NaN本身
  - isNaN(testValue)  确定testValue这个参数是否"不是数值" 
   > alert(isNaN(NaN));  //true
   alert(isNaN(10));    //false
alert(isNaN("10"));     //false
alert(isNaN(true));   //true   true会被转换为1

