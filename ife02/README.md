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

