# JS能力测评经典题

## 学习汇总
1. map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。[Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
2. forEach() 方法让数组的每一项都执行一次给定的函数。(Array.prototype.forEach())[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach]
3.在Javascript语言中，声明变量使用的都是关键字var，如果不使用var而直接声明变量，则该变量为全局变量。 
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
4.
### 找出元素 item 在给定数组 arr 中的位置 
> 题目描述

> 找出元素 item 在给定数组 arr 中的位置 
输出描述:
如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

> 输入例子:
indexOf([ 1, 2, 3, 4 ], 3)

> 输出例子:
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
> 题目描述

> 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组 

> 输入例子:
truncate([1, 2, 3, 4])

> 输出例子:
[1, 2, 3]


###删除数组第一个元素
> 题目描述
删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组 
输入例子:
curtail([1, 2, 3, 4])
输出例子:
[2, 3, 4]


###找出数组 arr 中重复出现过的元素 
> 输入例子:
duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()

> 输出例子:
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
###
题目描述

请修复给定的 js 代码中，函数定义存在的问题 

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

