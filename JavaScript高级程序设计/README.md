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

## chapter5
1. 访问对象属性时，可以使用点表示法，也可是方括号语法。
使用方括号语法时，应将要访问的属性以字符串的形式放在方括号中，如下：
> var name = "Nicholas" 
alert(person["name"])     //"Nicholas"
alert(person.name)    // "Nicholas"
2. 创建Object实例方法:
	- 使用new操作符后跟Object构造函数   `var person = new Object()`
	- 使用对象字面量语法   `var person = {}`        **推荐**
3. Array 类型   
属性 ：  `length`   不是只读的，可以修改，通过修改它改变数组长度。 
方法 ： 检查是否是数组   `Array.isArray()`
4. 数组转换字符串方法
  `toLocaleString()` `toString()` `valueOf()`
5. `join()`方法可以使数组以字符串的形式返回数组项
6.对数组的操作  **栈方法**和**队列方法**
  - `push()` 添加到数组末尾                  <span style="color:red">**加数据**</span>
  - `pop()` 从数组末尾移除最后一项，减少数组的length值，并返回移除项
  - `shift` 能将移除数组的第一项并返回该项，同时数组长度减1
  - `unshift` 能在数组前端增加任意个项并返回新数组的长度   <span style="color:red">**加数据**</span>
7. 迭代方法
8.Math   取某个整数范围内随机选择一个值
   公式： 值 = Math.floor(Math.random()*可能值的总数+第一个可能的值)
```
	function selectFrom(lowerValue, upperValue){
		var choices = upperValue - lowerValue + 1;
		return Math.floor(Math.random()*choices+lowerValue);
	}
```


