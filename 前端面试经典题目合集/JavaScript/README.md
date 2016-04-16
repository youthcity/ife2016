# JS能力测评经典题

## 学习汇总
1. map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。[Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
2. forEach() 方法让数组的每一项都执行一次给定的函数。(Array.prototype.forEach())[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach]
3. 在Javascript语言中，声明变量使用的都是关键字var，如果不使用var而直接声明变量，则该变量为全局变量。 
```
//Bad
function globals() {
    //只需要在声明myObject时加上var就行了
     myObject = {
      name : 'Jory'
    };
 
    return myObject;
}
```
4. parseInt(string, radix) 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
5. setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
[HTML DOM setInterval() 方法](http://www.w3school.com.cn/jsref/met_win_setinterval.asp)
6. 调用函数可以使用call或者apply这两个方法，区别在于call需要将传递给函数的参数明确写出来，是多少参数就需要写多少参数。而apply则将传递给函数的参数放入一个数组中，传入参数数组即可。
7. 在JavaScript中，函数是一种对象，其上下文是可以变化的，对应的，函数内的this也是可以变化的，函数可以作为一个对象的方法，也可以同时作为另一个对象的方法，可以通过Function对象中的call或者apply方法来修改函数的上下文，函数中的this指针将被替换为call或者apply的第一个参数。将函数 fn 的执行上下文改为 obj 对象，只需要将obj作为call或者apply的第一个参数传入即可。
8. 简单的描述闭包：如果在函数func内部声明函数inner，然后在函数外部调用inner，这个过程即产生了一个闭包。闭包允许你引用存在于外部函数中的变量。
`function(num){return function(){return fn(arr[num]); }; }(i)`
9. arguments能获得函数对象传入的参数组，类似与一个数组，能够通过length获取参数个数，能通过下标获取该位置的参数，但是它不能使用forEach等方法.
10.  num.toString(2)能直接将num转换为2进制数格式的字符串
11. 声明对象有两种常见的方式：var obj = {};和var obj = new Object();。前面一种可以直接在括号中以key:value的方式定义属性，后一种采用点运算符给对象添加属性。 
12. [parseInt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 函数将给定的字符串以指定基数解析成整数
如果第一个字符不能被转换成数字，parseInt返回NaN。
算术上， NaN 不是任何一个进制下的数。 你可以调用isNaN 来判断 parseInt 是否返回 NaN。NaN 参与的数学运算其结果总是 NaN。将整型数值以特定基数转换成它的字符串值可以使用 `intValue.toString(radix).`
13. [String所有方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
14. 在JavaScript中，函数是一种对象，其上下文是可以变化的，对应的，函数内的this也是可以变化的，函数可以作为一个对象的方法，也可以同时作为另一个对象的方法，可以通过Function对象中的call或者apply方法来修改函数的上下文，函数中的this指针将被替换为call或者apply的第一个参数。将函数 fn 的执行上下文改为 obj 对象，只需要将obj作为call或者apply的第一个参数传入即可。
15. 可以使用for-in来遍历对象中的属性，hasOwnproperty方法能返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性，该属性必须为对象本身的属性。
16. 判断字符串中是否含有数字，可以用正则表达式。/\d/可以匹配字符串中的数字字符，用test方法可以检测。`test()`可以对字符串检测
<hr>

### 找出元素 item 在给定数组 arr 中的位置 
题目描述

找出元素 item 在给定数组 arr 中的位置 
输出描述:
如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

输入例子:
indexOf([ 1, 2, 3, 4 ], 3)

输出例子:
2
```
function indexOf(arr, item) {
	var i ,len;
    for(i = 0,len = arr.length; i< len; i++){
        if(arr[i] === item){
            return i;
        }
    }
    return -1;
}
```
###删除数组最后一个元素
题目描述

删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组 

输入例子:
truncate([1, 2, 3, 4])

输出例子:
[1, 2, 3]


###删除数组第一个元素
题目描述
删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组 
输入例子:
curtail([1, 2, 3, 4])
输出例子:
[2, 3, 4]


###找出数组 arr 中重复出现过的元素 
输入例子:
duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()

输出例子:
[1, 3, 4]
```
function duplicates(arr) {
     //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
     var a = [],b = [];
     //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
     for(var i = 0; i < arr.length; i++){
         if(!b[arr[i]]){
             b[arr[i]] = 1;
             continue;
         }
         b[arr[i]]++;
     }
     //遍历b数组，将其中元素值大于1的元素下标存入a数组中
     for(var i = 0; i < b.length; i++){
         if(b[i] > 1){
             a.push(i);
         }
     }
     return a;
 }
```
方法二:
```
function duplicates(arr) {
 var result = [];
    arr.forEach(function(elem){
       if(arr.indexOf(elem) !=arr.lastIndexOf(elem) && result.indexOf(elem) == -1){
           result.push(elem);
       } 
    });
    return result;
}
```
###请修复给定的 js 代码中，函数定义存在的问题 

输入例子:
functions(true)


输出例子:
a
```
function functions(flag) {
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }
    return getValue();
}

```

###正确的使用 parseInt
题目描述

修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例 
输入例子:
parse2Int('12'); parse2Int('12px'); parse2Int('0x12')

输出例子:
12; 12; 0
```
function parse2Int(num) {
    return parseInt(num,10);
}
```

###计时器
题目描述

实现一个打点计时器，要求
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
3、第一个数需要立即输出
```
function count(start, end) {
	var timer ;
    //立即输出第一个数
    console.log(start++);
    //setInterval() 会返回一个id，clearInterval 可以用这个id终止setInterval
    timer = setInterval(function (){
        if(start <= end ){
            console.log(start++);
        }else {
            clearInterval(timer)
        }
    },100);
    return {
        cancel  : function(){
            clearInterval(timer);
        }
    }
    
}
```
###函数传参
将数组 arr 中的元素作为调用函数 fn 的参数 
输入例子:
argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!'])

输出例子:
Hello, Ellie!
```
function argsAsArray(fn, arr) {
	return fn.apply(this, arr);
}
```
###函数的上下文
将函数 fn 的执行上下文改为 obj 对象 
输入例子:
speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'})

输出例子:
Hello, Rebecca!!!
```
function speak(fn, obj) {
	return fn.apply(obj,obj);
}
```

###使用闭包  **重点**
实现函数 makeClosures，调用之后满足如下条件：
1、返回一个函数数组 result，长度与 arr 相同
2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同 
输入例子:
var arr = [1, 2, 3]; var square = function (x) { return x * x; }; var funcs = makeClosures(arr, square); funcs[1]();

输出例子:
4

//简单的描述闭包：如果在函数func内部声明函数inner，然后在函数外部调用inner，这个过程即产生了一个闭包。
题目要求的是返回一个函数数组，如果在循环中直接写result[i] = function(){return fn(arr[i]);}或者result.push(function(){return fn(arr[i]);})，最终的结果是不正确的，因为在每次迭代的时候，那样的语句后面的方法并没有执行，只是创建了一个函数体为“return fn(arr[i]);”的函数对象而已，当迭代停止时，i为最终迭代停止的值，在函数被调用时，i依旧为最终迭代停止的值，因此无法返回正确的结果。
为了解决这个问题，需要声明一个匿名函数，并立即执行它。
function(num){return function(){return fn(arr[num]); }; }(i)，函数执行后，i立即传入并被内部函数访问到，因此就能得到正确的结果。闭包允许你引用存在于外部函数中的变量。
下面的代码使用的是forEach循环
```
function makeClosures(arr, fn) {
  var result = [];
     arr.forEach(function(e){
         result.push(function(num){
             return function(){
                 return fn(num);
             };
         }(e));
     });
     return result;
 }
```
方法二 匿名函数
```
function makeClosures(arr, fn) {
    var funcs = [];
    for(var i=0; i<arr.length; ++i){
        (function(v){
            funcs[v] = function(){
                return fn.call(null,arr[v]);
            }
        })(i);
    }
    return funcs;
}
```
###使用 arguments
函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。 

输入例子:
useArguments(1, 2, 3, 4)


输出例子:
10
```
function useArguments() {
    var sum = 0;
	for(var i = 0,len = arguments.length; i < len ; i++){
        sum += arguments[i];
    }
    return sum;
}
```

###二次封装函数
实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数 

输入例子:
var a = 1; var b = 2; var c = 3; var d = 4;var test = function (first, second, third, forth) {return first + second + third + forth;};partialUsingArguments(test, a, b)(c, d);


输出例子:
10
```
//方法一
function partialUsingArguments(fn) {
	var argus = Array.prototype.slice.call(arguments,1);
    return function(c,d){
       	for(var i =0 ,len = arguments.length;i < len ; i++){
            argus.push(arguments[i]);
        }
       return  fn.apply(null,argus);
    }
}
//方法二
//arguments不能用slice方法直接截取，需要先转换为数组，var args = Array.prototype.slice.call(arguments);
//合并参数可以使用concat方法，并且也需要将arguments先转换为数组才能使用concat进行合并。
//最后用使用apply执行传入的函数即可。 
function partialUsingArguments(fn) {
     //先获取p函数第一个参数之后的全部参数
     var args = Array.prototype.slice.call(arguments,1);
     //声明result函数
     var result = function(){
         //使用concat合并两个或多个数组中的元素
         return fn.apply(null, args.concat([].slice.call(arguments)));
     }
     return result;
 }
``` 
###属性遍历
找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
1、返回数组，格式为 key: value
2、结果数组不要求顺序 
输入例子:
var C = function() {this.foo = 'bar'; this.baz = 'bim';}; C.prototype.bop = 'bip'; iterate(new C());

输出例子:
["foo: bar", "baz: bim"]
```
function iterate(obj) {
     var arr = [];
     //使用for-in遍历对象属性
     for(var key in obj){
         //判断key是否为对象本身的属性
         if(obj.hasOwnProperty(key)){
             //将属性和值按格式存入数组
             arr.push(key+": "+obj[key]);
         }
     }
     return arr;
 }
```