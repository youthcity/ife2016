#Angualr学习
##参数学习
###`ng-model-options`

#####在input触发了onblur事件的时候再更新ng-model
`ng-model-options="{ updateOn: 'blur' }"`
```
<input
      type="text"
      ng-model="name"
      ng-model-options="{ updateOn: 'blur' }"/>
<p>Hello {{name}}!</p>
```
#####保留默认的更新模型事件,并且当input失去焦点的时候,也更新模型
`ng-model-options="{ updateOn: 'default blur' }`
```
<input
      type="text"
      ng-model="name"
      ng-model-options="{ updateOn: 'default blur' }"/>
<p>Hello {{name}}!</p>
```
#####延迟模型更新
`ng-model-options="{debounce:1000}`
```
<input type="search" ng-model="searchQuery" ng-model-options="{debounce:1000}">
<p>Search results for: {{searchQuery}}</p>
```
-----
###运行块`.run`
运行块在注入器创建之后被执行，它是所有AngularJS应用中第一个被执行
的方法。
运行块是AngularJS中与main方法最接近的概念。运行块中的代码块通常很难进行单元测试，
它是和应用本身高度耦合的。
运行块通常用来注册全局的事件监听器。例如，我们会在.run()块中设置路由事件的监听器
以及过滤未经授权的请求。
```
angular.module('numfmt-error-module', [])
.run(function($rootScope) {
  $rootScope.typeOf = function(value) {
    return typeof value;
  };
```

###`link`
相关资料：1. 《Angular权威》pdf P110
2. [AngularJs玩转DOM-directive](https://segmentfault.com/a/1190000000417406)


###`$parsers`
$parsers的值是一个由函数组成的数组，其中的函数会以流水线的形式被逐一调用。
ngModel从DOM中读取的值会被传入$parsers中的函数，并依次被其中的解析器处理。
这是为了对值进行处理和修饰。

###`$watch`


###Angular动画
引用了Angular自身之后，需要在HTML中引用这个动画库。
```
<script src="js/vendor/angular.js"></script>
<script src="js/vendor/angular-animate.js"></script>
```
最后，需要在我们的应用模块中把ngAnimate模块当作依赖项来引用：
`angular.module('myApp', ['ngAnimate']);`
至此，就已经准备好使用AngularJS来呈现动画了

$animate服务默认给动画元素的每个动画事件（参见后面的列表）添加了两个CSS类:
$animate服务基于指令发出的事件来添加特定的样式类。对于结构性的动画（比如进入、移
动和离开），添加上去的CSS类是ng-[EVENT]和ng-[EVENT]-active这样的形式
对于基于样式类的动画（比如ngClass），动画样式类的形式是[CLASS]-add、 [CLASS]-addactdive、 [CLASS]-remove、 [CLASS]-remove-active。
最后，对于ngShow和ngHide，只有.ng-hide类会被添加和移除，它的形式跟ngClass一
样： .ng-hide-add、 .ng-hide-add-active、 .ng-hide-remove、 .ng-hide-remove-active。

###document 和$document
document属性作为window对象的一个子对象被创建，是用于访问页面中所有元素的对象。其主要具有以下一些应用[特性](http://www.jb51.net/article/31618.htm)

###jQuery off() 方法
off() 方法通常用于移除通过 on() 方法添加的事件处理程序。
```
$("button").click(function(){
$("p").off("click");
});
```

###`event.screenX`和`event.screenY`
`screenX` 事件属性可返回事件发生时鼠标指针相对于屏幕的水平坐标。
`screenY` 事件属性可返回事件发生时鼠标指针相对于屏幕的垂直坐标。

###[Angular 'Controller As'用法](http://www.coolskill.net/article/angularjs-controller-as.htm)
$ctrl为`ControllerAs`的一个默认值。

###[指令学习](https://segmentfault.com/a/1190000005851663)
####参数
#####`template`字符串或者函数，可选参数。
```
app.directive('hello', function() {
  return {
    template: '<div><h3>Hello, world!</h3></div>'
  }
})
```
```
.directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    templateUrl: 'my-customer-iso.html'
  };
});
```
```
.directive('myCustomer', function() {
  return {
    templateUrl: function(elem, attr){
      return 'customer-'+attr.type+'.html';
    }
  };
});
```
也可以是一个函数，可接受两个参数Element与Attrs
其中Element是指使用此指令的元素，而Attrs则是实例的属性，它是由一个元素上所有属性组成的集合，形如
```
{
  title: 'test',
  id: 'testDiv',
  class: 'demo',
  input: 'text',
  ...
}
```

####scope
改变scope的值为false, true, {}，结果发现

false：儿子继承父亲的值，改变父亲的值，儿子的值也随着改变，反之亦然，这就是继承且不隔离
true：儿子继承父亲的值，改变父亲的值，儿子的值也随着改变，但是改变儿子的值，父亲的值并没有改变，这就是继承但是隔离
{}：没有继承父亲的值，所以儿子的值为空，改变任何一方的值都不会影响另一方，这就是不继承且隔离

让隔离作用域能够读取父级作用域的属性，这个方法就是绑定策略。
方法一 使用@来进行单向文本（字符串）绑定
方法二、使用'='进行双向绑定
方法三、使用'&'调用父作用域中的函数
***Best Practice: Use the scope option to create isolate scopes when making components that you want to reuse throughout your app.***

####[directive的transclude](http://sentsin.com/web/494.html)
todo,不太懂

####
