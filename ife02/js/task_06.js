var list = document.getElementById('list'),
	input = document.getElementById('input'),
	btns = document.querySelector('list');

	//数学验证
	var numReg = /^[0-9]+$/;

	//工具
	var domUtil = {
		// 左侧入
		appendFirst : function (parent,childNodes){
			list.insertBefore(childNodes, list.firstChild);
		},
		//右侧入
		appendLast : function (parent,childNodes){
			list.insertBefore(childNodes,null);
		},
		//移出
		remove : function (parent,childNodes){
			list.removeChild(childNodes);
		},
		//创建li
		create : function(innerText){
			var ele = document.createElement('li');
			ele.innerText = innerText;
			return ele ;
		}
		
	}


	// 验证数据
	var validate = {
		if(numReg.test(input.value)){
			return true;
		}
		return false;
	}