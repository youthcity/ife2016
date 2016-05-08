#问答收集

###在Javascript中什么是伪数组？如何将伪数组转化为标准数组？
答案：
伪数组（类数组）：无法直接调用数组方法或期望`length`属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的`argument`参数，还有像调用`getElementsByTagName`,`document.childNodes`之类的,它们都返回NodeList对象都属于伪数组。可以使用`Array.prototype.slice.call(fakeArray)`将数组转化为真正的Array对象。