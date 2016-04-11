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


## chapter6
1. 构造函数始终都应该以一个大写字母开头，而非构造函数则应该一个小写字母开头；
2. 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法；
3. 原型模式
可以通过对象实例访问保存在原型中的值，但却不能通过对象实例重写原型中的值。
4. `hasOwnProperty`方法可以检测一个属性是存在于实例中，还是存在于原型中。
当给定的属性存在于对象实例中时，才会返回true；
5. 组合使用构造函数模式和原型模式

## chapter8
1. 窗口位置
获取窗口相对于屏幕左边和上边的位置`screenLeft`和`screenTop`(chrome、IE、 Safari、 Oper) 
`screenX`和`screenY`(Firefox、 Safari、 chrome)
> var leftPos = (typeof window.screenLeft == "number")?
						window.screenLeft : window.screenX;
	alert(leftPos);
	var topPos = (typeof window.screenTop == "number")?
						window.screenTop : window.screenY;
	console.log(topPos);
2. 窗口大小
`resizeTo()`和`resizeBy()`方法可以调整窗口大小
`resizeTo()` 接收浏览器窗口的新宽度和新高度
`resizeBy()` 接收新窗口与原窗口的宽度和高度之差
3. 间歇调用和超时调用
`setInterval()`和`setTimeout()`
4. 超时调用
> 	var num = 0;
	var max = 10;
	var intervalId = null;

	function incrementNumber(){
		num++;
		alert("hello");
		if (num == max) {
			clearInterval(intervalId);
			alert("Done");
		}
	}
	intervalId  = setInterval(incrementNumber ,300);	
> 	var num = 0;
	var max = 10;

	function incrementNumber(){
		num++;
		
		if(num <max){
			alert("hello");
			setTimeout(incrementNumber,300);
		}else{
			alert("Done");
		}
	}	
	setTimeout(incrementNumber,300);

5. 系统对话框 `confirm()` 、 `prompt()`
```
confirm()函数 ，会返回布尔值
	if(confirm("Are you sure?")){
		alert("yes");
	}else {
		alert("no");
	}

prompt()   传入两个参数，第一个为提示文本，第二个为文本输入域的默认值
var str =  prompt("What's your name ?" ,"youthcity");
	alert(str);
```
6. 查询字符串参数

```
	function getQueryStringArgs(){
		// location.search  返回从问号到URL末尾的所有内容
		// var temp ="?q=javascript&num=10";
		var qs = (location.search.length > 0 ?  location.search.substring(1) :""),
		//保存数据的对象
		args = [],

		items = qs.length ? qs.split("&") :[],
		item = null,
		name = null,
		value = null,
		i = 0,
		len = items.length;

		for(i = 0 ;i<len ; i++){
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			
			if(name.length){
				args[name] = value;
			}
		}

		return args;
	}
	var a =  getQueryStringArgs();
	for( key in a ){
		alert(a[key]);
	}
```	
## chapter10
1. 动态脚本
2. 动态样式
3. 操作表格


## chapter13
1. 事件流 
IE的事件流是 **事件冒泡流**  Netscape 是 **事件捕获流**
2. 事件处理程序
 - `element.onclick = function(){}; `
 - `element.addEventListener("click", function(){},flase);`  当为true 时，表示在捕获阶段调用事件处理程序；
 当为false时，表示在冒泡阶段调用事件处理程序；
3. 跨浏览器的事件处理程序
```
var EventUtil = {
		addHandler : function(element, type, handler){
			if(element.addEventLister){
				element.addEventLister(type, handler, false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type,handler);
			}else {
				element["on"+type] = handler;
			}
		},
		removeHandler : function(element, type, handler){
			if(element.removeEventListener){
				element.removeEventListener(type, handler, false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type,handler);
			}else {
				element["on"+type]  = null;
			}
		}
	};
``` 

 4. 时间委托
 ```
 	var list = document.getElementById('myLinks');

	EventUtil.addHandler(list,"click",function(event){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		switch(target.id){
			case "doSomething":
			document.title = "I change the document's title";
			break;
			case "goSomeWhere":
			location.href = "http://www.baidu.com";
			break;
			case "sayHi":
			alert("Hi");
			break;
		}
	});
 ```

 ## chapter14 
 1. 获取表单字段
 `elements['name']`和`elements[0]`
 2. 禁止重复提交
```
EventUtil.addHandler(form, "submit", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
//取得提交按钮
var btn = target.elements['submit'];

btn.disabled = true;
});
```	

## chapter15 使用Canvas绘图
1. 要在这画布(canvas)上绘图，需要取得绘图上下文。需要调用getContext()方法,传入"2d",就可以取得2D上下文对象。
2. 填充和描边
`content.strokeStyle = "颜色名、十六进制码、rgb、rgba、hsl、hsla"`  和
`content.fillStyle = "#ff0000"`
3. 绘制矩形
`fillRect(0,0,10,10)` 和 `strokeRect(0,0,10,10)`   参数前两个是坐标，后两个是宽和高。
4. `clearRect()`清楚画布矩形区域
```
var drawing = document.getElementById('drawing');
//确定浏览器支持<canvas>
if (drawing.getContext) {
	// 获得上下文
	var content = drawing.getContext("2d");
	//绘制红色矩形
	content.fillStyle = "#ff0000";
	content.fillRect(10,10,50,50);
	//绘制半透明的蓝色描边矩形
	content.strokeStyle = "rgba(0,0,255,0.5)";
	content.strokeRect(30,30,50,50);
	// clearRect() 方法可以清除画布的矩形区域
	content.clearRect(40,40,10,10);
}
```
5. 绘制路径
要绘制路径，首先必须调用beginPath(),表示开始绘制路径。
```
var drawing = document.getElementById('drawing');
// 确定浏览器支持
if (drawing.getContext) {
	// statement
	var context = drawing.getContext("2d");
	//开始绘路径
	context.beginPath();

	//绘制外圆
	context.arc(100,100,99,0,2*Math.PI,false);
	
	//绘制内圆
	context.moveTo(194, 100);
	context.arc(100, 100, 94, 0 , 2*Math.PI, false);		

	//绘制分针
	context.moveTo(100, 100);
	context.lineTo(100,15);

	//绘制时针
	context.moveTo(100, 100);
	context.lineTo(35,100);
	//描边
	context.stroke();
}
```
6. 设置阴影
```
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 4;
context.shadowColor = "rgba(0,0,0, 0.5)";
```
7. 渐变
```
//创建渐变对象
var gradient = context.createLinearGradient(10,10,80,80);
//设置色标
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "black");
//绘制渐变矩形
//将 gradient对象赋值给fillStyle
context.fillStyle = gradient;
context.fillRect(10,10,50,50);
```