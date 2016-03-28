# JavaScript学习
## task01
[JSHint 配置浅析](http://www.tuicool.com/articles/AzIRviR)

##task04
[JavaScript中神奇的call()方法](http://www.jb51.net/article/62086.htm)

##task05
### `getFullYear()`方法可返回一个表示年份的 4 位数字。
语法  `dateObject.getFullYear()`
```
<script type="text/javascript">
var d = new Date()
document.write(d.getFullYear())
</script>


输出
2016
```
### `getMonth()`方法可返回表示月份的数字。
返回值
dateObject 的月份字段，使用本地时间。返回值是 0（一月） 到 11（十二月） 之间的一个整数。

### `getDate()` 方法可返回月份的某一天。
**返回值**
dateObject 所指的月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数。

### `ceil()`方法 ceil() 方法可对一个数进行上舍入。
```
<script type="text/javascript">
document.write(Math.ceil(0.60) + "<br />")
document.write(Math.ceil(0.40) + "<br />")
document.write(Math.ceil(5) + "<br />")
document.write(Math.ceil(5.1) + "<br />")
document.write(Math.ceil(-5.1) + "<br />")
document.write(Math.ceil(-5.9))
</script>
```
输出：
```
1
1
5
6
-5
-5
```

### `JavaScript for...in 语句`
for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。**遍历包含键值对的对象**
```
for (变量 in 对象)
{
    在此执行代码
}
```

### ` for ... of 语句`
[深入浅出ES6（二）：迭代器和for-of循环](http://www.infoq.com/cn/articles/es6-in-depth-iterators-and-the-for-of-loop)
[for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

### `let`
let 允许把变量的作用域限制在块级域中。与 var 不同处是：var 申明变量要么是全局的，要么是函数级的，而无法是块级的。
[MDN_let](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)


## task07
### Chrome开发工具 调试学习
[面板Sources](http://www.cnblogs.com/constantince/p/4579121.html)
ctrl+p 快速打开文件
ctrl+g 快速定位到文件某一行

![chrome 调试图标](image/readme/01.png)
> 1、停止断点调试
2、不跳入函数中去，继续执行下一行代码（F10）
3、跳入函数中去（F11）
4、从执行的函数中跳出
5、禁用所有的断点，不做任何调试
6、程序运行时遇到异常时是否中断的开关

## 重新学习 JavaScript
JavaScript 不区分整数值和浮点数值，所有数字在 JavaScript 中均用浮点数值表示
```
0.1 + 0.2 = 0.300000000000000041
```
`parseInt() `将字符串转换为整型。该函数的第二个参数表示字符串所表示数字的基（进制）：
> parseInt("123", 10); // 123
parseInt("010", 10); //10
parseInt("11", 2); // 3  把一个二进制数字字符串转换成整数值，只要把第二个参数设置为 2 

单元运算符 + 也可以把数字字符串转换成数值：
> + "42";   // 42
+ "010";  // 10
+ "0x10"; // 16

JavaScript 还有两个特殊值：Infinity（正无穷）和 -Infinity（负无穷）：
>1 / 0; //  Infinity
-1 / 0; // -Infinity

&& 和 || 运算符使用短路逻辑（short-circuit logic），是否会执行第二个语句（操作数）取决于第一个操作数的结果。在需要访问某个对象的属性时，使用这个特性可以事先检测该对象是否为空：
> var name = o && o.getName();
或运算可以用来设置默认值：
var name = otherName || "default";

有两种简单方法可以创建一个空对象：
`var obj = new Object();` 和	`var obj = {};`   
第二种称为对象字面量（object literal）法

创建数组
> var a = ["dog", "cat", "hen"];
a.length; // 3




