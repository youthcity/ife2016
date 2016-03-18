# 百度前端学院学习

## task01



## task02
### Html整体结构
	> header
      main
      footer

### 导航栏	
   nav 元素去掉前面黑点 使用 `list-style:none`
   使用绝对定位固定 `图标` 和 `导航条`
     `display: flex;`  容器内对象水平对齐
   	 `justify-content` 在当灵活容器内的各项没有占用主轴上所有可用的空间时对齐容器内的各项（水平）。

### Markdown
 Alt+M 快速预览
 [makedown](http://baike.baidu.com/link?url=sOi_N0N5fhYV1nk5qfYG40-I7B3c-unI0pYQD4YemhC6UFB8yfm8pF79ywODdm7xKKQamkJi63AlKDula4bd9K)

## task03

## task04
**task04_02 task04_01 垂直居中未完成 **
###`border-radius` 边框半径
例,border-radius:50px;这条语句同时将每个圆角的"水平半径"和"垂直半径"都设置为50px
>  border-radius可以同时设置1到4个值。（想想我们之前的margin与padding）如果设置1个值，表示4个圆角都使用这个值。如果设置两个值，表示左上角和右下角使用第一个值，右上角和左下角使用第二个值。如果设置三个值，表示左上角使用第一个值，右上角和左下角使用第二个值，右下角使用第三个值。如果设置四个值，则依次对应左上角、右上角、右下角、左下角（顺时针顺序）。
### `overflow` 属性规定当内容溢出元素框时发生的事情。
这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。

值		  | 描述 
----------|------------------------------------------------------------
visible   | 默认值。内容不会被修剪，会呈现在元素框之外。
hidden    | 内容会被修剪，并且其余内容是不可见的。   
scroll    | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。   
auto	  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
inherit	  | 规定应该从父元素继承 overflow 属性的值。

###Flex布局

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
`justify-content` 在当灵活容器内的各项没有占用主轴上所有可用的空间时对齐容器内的各项（水平）。
> 提示：使用 align-content 属性对齐交叉轴上的各项（垂直）。
  center	项目位于容器的中心。

### transform 
`transform: translate(-50%,-50%)`
根据当前元素的高度和宽度的50%分别向上和向左移动


## task05
`border-collapse: collapse;`  合并边框线
