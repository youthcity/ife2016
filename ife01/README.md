# 百度前端学院学习

## 待解决问题合集
1. 居中问题()
方案1 左右侧浮动，中间margin的方法”来实现左右固定中间自适应
2. 待看文章
[CSS3的calc()使用](http://www.w3cplus.com/css3/how-to-use-css3-calc-function.html)
[纯CSS3轮播图](http://www.lxway.com/41625691.htm)
[CSS3轮播图](http://codepen.io/lucifier/pen/DicEn)
## task01



## task02
### Html整体结构
	> header
	  main
	  footer
	`font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;`  

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

### `nth-child` 选择器
> :nth-child(2)选取第几个标签，“2可以是你想要的数字”
:nth-child(n+4)选取大于等于4标签，“n”表示从整数，下同
:nth-child(-n+4)选取小于等于4标签
:nth-child(2n)选取偶数标签，2n也可以是even
:nth-child(2n-1)选取奇数标签，2n-1可以是odd
:nth-child(3n+1)自定义选取标签，3n+1表示“隔二取一”
:last-child选取最后一个标签
:nth-last-child(3)选取倒数第几个标签,3表示选取第3个

## task08 
#### [如何在Git上创建demo](http://ife.baidu.com/note/detail?noteId=58)
#### [1em = 16px](http://www.uml.org.cn/html/201207311.asp)
#### [网页字体排印](http://ife.baidu.com/note/detail?noteId=47)
>	`label`标签优化点击
label用两种用于优化点击的用法： 1、label的for属性指向对应input的id； 2、lable标签包裹input标签，这就能省去for属性
#### 利用<link>标签的 rel 属性给网页添加 icon
在网页的地址栏显示icon
`<link rel="Shortcut Icon" href="favicon.ico">`
在收藏夹中显示icon
`<link rel="Bookmark" href="favicon.ico">`
#### 链接的状态
> a:link {color: #FF0000}    /* 未访问的链接 */
a:visited {color: #00FF00}    /* 已访问的链接 */
a:hover {color: #FF00FF}    /* 鼠标移动到链接上 */
a:active {color: #0000FF}    /* 选定的链接 */
/*
tips:
1.a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
2.a:active 必须被置于 a:hover 之后，才是有效的。
*/
#### [Web语义化](http://ife.baidu.com/note/detail?noteId=221)
#### [4种方式实现左右定宽中间自适应的三栏布局](http://ife.baidu.com/note/detail?noteId=218)   <span style="color:red">重点</span> 
#### [CSS样式-居中设置](http://ife.baidu.com/note/detail?noteId=103)
#### [三栏式布局及引申](http://ife.baidu.com/note/detail?noteId=77)
#### [三栏式布局经典之圣杯布局与双飞翼布局的相同点与不同点](http://ife.baidu.com/note/detail?noteId=76)
#### [关于布局](http://ife.baidu.com/note/detail?noteId=397)
#### [响应式布局](http://ife.baidu.com/note/detail?noteId=400)
#### [CSS布局奇淫巧计之-强大的负边距](http://www.cnblogs.com/2050/archive/2012/08/13/2636467.html)
#### [关于布局 —— Position、Float、Flexbox、负边距](http://ife.baidu.com/note/detail?noteId=397)
#### [CSS媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)

#### 大名鼎鼎的双飞翼布局代码
```html
 <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>sd</title>
	<link rel="stylesheet" type="text/css" href="1.css">
</head>
<body>
 <div class="main">
        <div class="main-warp"> 
        中间自适应
        </div>
    </div>
    <div class="left">左边定宽</div>
    <div class="right">右边定宽</div>
</body>
</html>
```

```css
 .main {
  width:100%;
  float:left;
}
/*在双飞翼布局里，中间栏的边框、背景色要在`main-warp`里设置*/
.main-warp {
  background-color: red;
  height:300px;
  margin: 0 120px 0 200px; /*设置main的位置*/
}
.left {
  float: left;
  background-color: blue;
  height: 200px;
  width: 200px;
  margin-left: -100%;
}
.right {
  float: left;
  background-color: yellow;
  height: 400px;
  width: 120px;
  margin-left: -120px;
}
```

#### `-moz` ` -ms` `-webkit` `-o`
> -moz代表firefox浏览器私有属性
-ms代表IE浏览器私有属性
-webkit代表chrome、safari私有属性
-o 代表opera

#### 清除浮动的三种方法及各自弊端
> 1.在容器的结束标签前加一个空标签，在空标签上设置样式“clear:both;”
缺点：不适合语义化，造成页面上空标签迅速堆积。
2.用“overflow”属性，设置为“overflow:auto;”当然，为了兼容IE最好用“overflow:hidden;”
缺点：如果想给元素添加一个盒子阴影或制作一个下来菜单，阴影和菜单将被切断在父元素之内。
3.clearfix技巧。在父元素上使用‘:before’,':after'两个伪类，“:before”用来防止子元素顶部外边距塌陷，“:after”用来防止子元素的底部外边距塌陷以及清除浮动。“zoom”用来在IE6和IE7中触发父元素的hasLayout机制。示例为：
```css
.box-set:before,.box-set:after{
content:"";
display:table;
}
.box-set:after{
clear:both;
}
.box-set{
*zoom:1;
}
```


## task10
#### [媒体查询]()
#### [Flexbox——快速布局神器](http://www.w3cplus.com/css3/flexbox-basics.html)

`order` 默认值为0；
```
弹性容器的写法： 
.flex-container{
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items:center;
}
```

## task12
#### [CSS3 @keyframes 规则](http://www.w3school.com.cn/cssref/pr_keyframes.asp)
#### [CSS3 animation 属性](http://www.w3school.com.cn/cssref/pr_animation.asp)
#### [CSS3 transition 属性](http://www.w3school.com.cn/cssref/pr_transition.asp)
#### [單純使用CSS3及HTML製作圖片輪播效果](http://blog.shihshih.com/pure-css-slider/)
Chrome浏览器撤销关闭页面的快捷键`Crtl+Shift+T`