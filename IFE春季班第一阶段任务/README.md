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

## task06
'inherit'含义是指定继承父元素的相应属性
> div#menu{
  border:2px solid black;
  padding:5px;
  background-color:#909090;
}
div#menu div{
  border:inherit;
  padding:inherit;
  background-color:#dedede;
}

`box-shadow`属性向框添加一个或多个阴影

### CSS中的`background`和`background-color`的区别
> background可以定义图片 定位 颜色；如果你定义背景的话直接写background-color:可以准确的定位；那些图片 定位就不在考虑范畴之内；所以更加准确并且还增加了加载速度；在优化方面建议用background-color准确定位；

### `opacity` 指定一个元素的透明度

### 文字处理中的css
`text-decoration: underline;`
> 这个 CSS 属性是用于设置文本排版（下划线、顶划线、删除线或者闪烁）。下划线和顶划线修饰于文本的下部，删除线位于文本之上。
[text-decoration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)

`text-transform: capitalize;`
> 语法：`text-transform : none | capitalize | uppercase | lowercase`
参数：none : 　无转换发生 
	  capitalize : 　将每个单词的第一个字母转换成大写，其余无转换发生 
	  uppercase : 　转换成大写 
	  lowercase : 　转换成小写

`font-variant: small-caps;`设置为小型大写字母字体
`font-style: italic;` 字体倾斜
`text-indent`
> text-indent 属性规定文本块中首行文本的缩进。
注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。
**希望一段文字第一行缩进2个汉字，这段文本字体大小为12px**
例如：
p {text-indent: 1cm}
### rgba(0,0,0,.5);可以设置颜色和透明度

## task07
PS切图学习 
取消选区快捷键CTRL+D

### HTML中文字体的英文名称
> 宋体	SimSun
黑体	SimHei
微软雅黑	Microsoft YaHei
微软正黑体	Microsoft JhengHei
新宋体	NSimSun
新细明体	PMingLiU
细明体	MingLiU
标楷体	DFKai-SB
仿宋	FangSong
楷体	KaiTi
仿宋_GB2312	FangSong_GB2312
楷体_GB2312	KaiTi_GB2312

### CSS属性学习
`background-size:`规定背景图像的尺寸
> 属性值
 cover:把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
 背景图像的某些部分也许无法显示在背景定位区域中。
 contain: 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。	
 length:(eg:10px 150px;200px;100% 100%;50%;...)
 设置背景图像的高度和宽度。
第一个值设置宽度，第二个值设置高度。
如果只设置一个值，则第二个值会被设置为 "auto"。