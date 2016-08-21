# Learn CSS3 | 常用属性总结
##浏览器前缀类型
| 前缀 |    浏览器 |
|------|-------:|
| -webkit|  chrome和safari  |
| -moz| firefox  |
| -ms|  IE  |
| -o|  opera |

##border-radius
 border-radius可以同时设置1到4个值。（想想我们之前的margin与padding）如果设置1个值，表示4个圆角都使用这个值。如果设置两个值，表示左上角和右下角使用第一个值，右上角和左下角使用第二个值。如果设置三个值，表示左上角使用第一个值，右上角和左下角使用第二个值，右下角使用第三个值。如果设置四个值，则依次对应左上角、右上角、右下角、左下角（顺时针顺序）。
```
border-radius:50px;
```
这条语句同时将每个圆角的"水平半径"和"垂直半径"都设置为50px([参考资料](http://blog.sina.com.cn/s/blog_61671b520101gelr.html))
![border-radius](./img/1.jpg)

###实心上半圆和实心圆
实心上半圆：
方法：把高度(height)设为宽度（width）的一半，并且只设置左上角和右上角的半径与元素的高度一致（大于也是可以的）。

```
div{
    height:50px;/*是width的一半*/
    width:100px;
    background:#9da;
    border-radius:50px 50px 0 0;/*半径至少设置为height的值*/
    }
```
实心圆：
 方法：把宽度（width）与高度(height)值设置为一致（也就是正方形），并且四个圆角值都设置为它们值的一半。如下代码：
```
div{
    height:100px;/*与width设置一致*/
    width:100px;
    background:#9da;
    border-radius:50px;/*四个圆角值都设置为宽度或高度值的一半*/
    }
```
##box-shadow
box-shadow: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色] [投影方式];
![阴影参数详解](./img/2.jpg)
**阴影模糊半径：**此参数可选，其值只能是为正值，如果其值为0时，表示阴影不具有模糊效果，其值越大阴影的边缘就越模糊；
**阴影扩展半径：**此参数可选，其值可以是正负值，如果值为正，则整个阴影都延展扩大，反之值为负值时，则缩小；

inset(投影方式) 可以写在参数的第一个或最后一个，其它位置是无效的。
box-shadow是向盒子添加阴影。支持添加一个或者多个
```
.box_shadow{
    box-shadow:4px 2px 6px #f00, -4px -2px 6px #000, 0px 0px 12px 5px #33CC00 inset;
}
```
##text-overflow
text-overflow用来设置是否使用一个省略标记（...）标示对象内文本的溢出。
`text-overflow:ellipsis;`
text-overflow只是用来说明文字溢出时用什么方式显示，要实现溢出时产生省略号的效果，还须定义强制文本在一行内显示（white-space:nowrap）及溢出内容为隐藏（overflow:hidden），只有这样才能实现溢出文本显示省略号的效果，代码如下：
```
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
```
##word-wrap
[break-word和break-all比较](http://www.cnblogs.com/2050/archive/2012/08/10/2632256.html)
word-wrap:break-word与word-break:break-all共同点是都能把长单词强行断句，不同点是word-wrap:break-word会首先起一个新行来放置长单词，新的行还是放不下这个长单词则会对长单词进行强制断句；而word-break:break-all则不会把长单词放在一个新行里，当这一行放不下的时候就直接强制断句了。

##嵌入字体@font-face
语法
```
@font-face {
    font-family : 字体名称;
    src : 字体文件在服务器上的相对或绝对路径;
}
```
使用
```
p {
    font-size :12px;
    font-family : 字体名称;
    /*必须项，设置@font-face中font-family同样的值*/
}
```

##文本阴影text-shadow
`text-shadow: X-Offset Y-Offset blur color;`
X-Offset：表示阴影的水平偏移距离，其值为正值时阴影向右偏移，反之向左偏移；

Y-Offset：是指阴影的垂直偏移距离，如果其值是正值时，阴影向下偏移，反之向上偏移；

Blur：是指阴影的模糊程度，其值不能是负值，如果值越大，阴影越模糊，反之阴影越清晰，如果不需要阴影模糊可以将Blur值设置为0；

Color：是指阴影的颜色，其可以使用rgba色。

##background-origin
设置元素背景图片的原始起始位置。
语法
```
background-origin ： border-box | padding-box | content-box;
```
需要注意的是，如果背景不是no-repeat，这个属性无效，它会从边框开始显示。
即
```
    background:#ccc url(http://static.mukewang.com/static/img/logo_index.png) no-repeat;
```
##background-size
设置背景图片的大小，以长度值或百分比显示，还可以通过cover和contain来对图片进行伸缩。
语法：
```
background-size: auto | <长度值> | <百分比> | cover | contain
```
取值说明：

1、auto：默认值，不改变背景图片的原始高度和宽度；

2、<长度值>：成对出现如200px 50px，将背景图片宽高依次设置为前面两个值，当设置一个值时，将其作为图片宽度值来等比缩放；

3、<百分比>：0％~100％之间的任何值，将背景图片宽高依次设置为所在元素宽高乘以前面百分比得出的数值，当设置一个值时同上；

4、cover：顾名思义为覆盖，即将背景图片等比缩放以填满整个容器；

5、contain：容纳，即将背景图片等比缩放至某一边紧贴容器边缘为止。

##属性选择器
![属性选择器](./img/3.jpg)

##结构性伪类选择器—root
:root选择器，从字面上我们就可以很清楚的理解是根选择器，他的意思就是匹配元素E所在文档的根元素。在HTML文档中，根元素始终是<html>。
```
:root{background:orange}
//等价于
html {background:orange;}
```

##结构性伪类选择器—not
语法:
```
input:not([type="submit"]){
  border:1px solid red;
}
```
##结构性伪类选择器—empty
`:empty`选择器表示的就是空。用来选择没有任何内容的元素，这里没有内容指的是一点内容都没有，哪怕是一个空格。
```
div:empty {
  border: 1px solid green;
}
```

##结构性伪类选择器—target
:target选择器称为目标选择器，用来匹配文档(页面)的url的某个标志符的目标元素。
```
  <div class="menuSection" id="brand">
        <h2><a href="#brand">Brand</a></h2>
        <p>content for Brand</p>
    </div>

    //css
    #brand:target p {
  background: orange;
  color: #fff;
}
```
##结构性伪类选择器—nth-child(n)
“:nth-child(n)”选择器用来定位某个父元素的一个或多个特定的子元素。其中“n”是其参数，而且可以是整数值(1,2,3,4)，也可以是表达式(2n+1、-n+5)和关键词(odd、even)，但参数n的起始值始终是1，而不是0。也就是说，参数n的值为0时，选择器将选择不到任何匹配的元素。
经验与技巧:当“:nth-child(n)”选择器中的n为**一个表达式**时，其中n是从0开始计算，当表达式的值为0或小于0的时候，不选择任何匹配的元素。

##CSS3动画
###变形--旋转 rotate()
旋转rotate()函数通过指定的角度参数使元素相对原点进行旋转。它主要在二维空间内进行操作，设置一个角度值，用来指定旋转的幅度。如果这个值为正值，元素相对原点中心顺时针旋转；如果这个值为负值，元素相对原点中心逆时针旋转。
```
transform:rotate(20deg);
```
###变形--扭曲 skew()
扭曲skew()函数能够让元素倾斜显示。它可以将一个对象以其中心位置围绕着X轴和Y轴按照一定的角度倾斜。这与rotate()函数的旋转不同，rotate()函数只是旋转，而不会改变元素的形状。skew()函数不会旋转，而只会改变元素的形状。
```
  -webkit-transform: skew(45deg);
  -moz-transform:skew(45deg) 
  transform:skew(45deg);
```
###变形--缩放 scale()
缩放 scale()函数 让元素根据中心原点对对象进行缩放。
```
div:hover {
  -webkit-transform: scale(1.5,0.5);
  -moz-transform:scale(1.5,0.5)
  transform: scale(1.5,0.5);
}
```
注意：Y是一个可选参数，如果没有设置Y值，则表示X，Y两个方向的缩放倍数是一样的。
###变形--位移 translate() **居中常用**
translate()函数可以将元素向指定的方向移动，类似于position中的relative。或以简单的理解为，使用translate()函数，可以把元素从原来的位置移动，而不影响在X、Y轴上的任何Web组件。
###变形--矩阵 matrix()
matrix() 是一个含六个值的(a,b,c,d,e,f)变换矩阵，用来指定一个2D变换，相当于直接应用一个[a b c d e f]变换矩阵。就是基于水平方向（X轴）和垂直方向（Y轴）重新定位元素.

- a为元素的水平伸缩量，1为原始大小；
- b为纵向扭曲，0为不变；
- c为横向扭曲，0不变；
- d为垂直伸缩量，1为原始大小；
- e为水平偏移量，0是初始位置；
- f为垂直偏移量，0是初始位置

###变形--原点 transform-origin
改变原点位置，默认在(50%，50%)位置
###动画--过渡属性 transition
transition: all 3s ease-in-out .8s;(所有属性，持续3秒，先加速再减速变化，延迟0.8秒再执行变化，对于零可以省略)

transition-timing-function属性指的是过渡的“缓动函数”。主要用来指定浏览器的过渡速度，以及过渡期间的操作进展情况，其中要包括以下几种函数：
![缓动函数](./img/4.jpg)

###keyframes介绍   （好喜欢这效果）
keyframes被称为关键帧，其类似于Flash中的关键帧。在CSS3中其主要以“@keyframes”开头，后面紧跟着是动画名称加上一对花括号“{…}”，括号中就是一些不同时间段样式规则。
```
@keyframes changecolor{
  0%{
    background: red;
  }
  20%{
    background:blue;
  }
  40%{
    background:orange;
  }
  60%{
    background:green;
  }
  80%{
    background:yellow;
  }
  100%{
    background: red;
  }
}
div {
  width: 300px;
  height: 200px;
  background: red;
  color:#fff;
  margin: 20px auto;
}
div:hover {
  animation: changecolor 5s ease-out .2s;
}
```
在一个“@keyframes”中的样式规则可以由多个百分比构成的，如在“0%”到“100%”之间创建更多个百分比，分别给每个百分比中给需要有动画效果的元素加上不同的样式，从而达到一种在不断变化的效果。

经验与技巧：在@keyframes中定义动画名称时，其中0%和100%还可以使用关键词from和to来代表，其中0%对应的是from，100%对应的是to。
###调用动画animation-name
`animation-name: none | IDENT[,none|DENT]*;`
1、IDENT是由 @keyframes 创建的动画名，上面已经讲过了（animation-name 调用的动画名需要和“@keyframes”定义的动画名称完全一致）；

2、none为默认值，当值为 none 时，将没有任何动画效果,这可以用于覆盖任何动画。

###设置动画播放时间animation-duration
animation-duration主要用来设置CSS3动画播放时间，其使用方法和transition-duration类似，是用来指定元素播放动画所持续的时间长，也就是完成从0%到100%一次动画所需时间。单位：S秒
取值<time>为数值，单位为秒，其默认值为“0”，这意味着动画周期为“0”，也就是没有动画效果（如果值为负值会被视为“0”）。

###设置动画播放方式animation-timing-function
animation-timing-function属性主要用来设置动画播放方式。主要让元素根据时间的推进来改变属性值的变换速率，简单点说就是动画的播放方式。
语法规则：
`animation-timing-function:ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) [, ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)]*`
![动画播放方式](./img/5.jpg)
###设置动画播放次数animation-iteration-count
animation-iteration-count属性主要用来定义动画的播放次数。
语法规则:
`animation-iteration-count: infinite | <number> [, infinite | <number>]*
`
1、其值通常为整数，但也可以使用带有小数的数字，其默认值为1，这意味着动画将从开始到结束只播放一次。

2、如果取值为infinite，动画将会无限次的播放。
###设置动画播放方向
animation-direction属性主要用来设置动画播放方向，其语法规则如下：
其主要有两个值：normal、alternate
1、normal是默认值，如果设置为normal时，动画的每次循环都是向前播放；

2、另一个值是alternate，他的作用是，动画播放在第偶数次向前播放，第奇数次向反方向播放。(偶次逆着动画顺序运行)
###设置动画的播放状态(有用)
animation-play-state属性主要用来控制元素动画的播放状态。
其主要有两个值：running和paused。
animation-play-state:paused;

###设置动画时间外属性
animation-fill-mode属性定义在动画开始之前和结束之后发生的操作。主要具有四个属性值：none、forwards、backwords和both。其四个属性值对应效果如下：

none
 
默认值，表示动画将按预期进行和结束，在动画完成其最后一帧时，动画会反转到初始帧处
 

forwards
 
表示动画在结束后继续应用最后的关键帧的位置
 

backwards
 
会在向元素应用动画样式时迅速应用动画的初始帧
 

both
 
元素动画同时具有forwards和backwards效果
 


