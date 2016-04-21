# 《JavaScript忍者秘籍》书例代码

## chapter 2 
断言
```
function assert(value , desc){
		var li = document.createElement("li");
		li.className = value? "pass": "fail";
		li.appendChild(document.createTextNode(desc));
		document.getElementById("results").appendChild(li);
	}
```

## chapter 4 挥舞函数
#### 检测回文
```
/*
回文特性：1. 单个和零个字符都是一个回文; 2. 如果字符串的第一个字符和最后一个字符相同，并且除了两个字符以外剩余的其他字符也是一个回文的话，我们称原字符串是一个回文.
 */
function isPalindrome(text){
	if (text.length <= 1)  return true;
	if (text.charAt(0) != text.charAt(text.length-1)) return false;
	return isPalindrome(text.substring(1,text.length-1));
}
```
#### 