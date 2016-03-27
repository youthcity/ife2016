var list = document.getElementById('list'),
	input = document.getElementById('input'),
	btns = document.querySelectorAll('#btn');

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
		inputNotNull : function (){
			return numReg.test(input.value);
		},
		hasChild : function (parentNode){
			return parentNode.children.length>0;
		}
	}


	//给btn增加点击事件
	btns[0].addEventListener('click', function (){
			var validate_result = validate.inputNotNull();
			var msg = "输入数字无效";
			if(!validate_result){
				alert(msg);
				return ;
			}
			domUtil.appendFirst(list,domUtil.create(input.value));
	});

	btns[1].addEventListener('click',function(){
			var validate_result = validate.inputNotNull();
			var msg = "输入数字无效";
			if (!validate_result) {
				// statement
				alert(msg);
				return ;
			}
			domUtil.appendLast(list,domUtil.create(input.value));
	});

	btns[2].addEventListener('click',function(){
			domUtil.remove(list,list.children[0]);
	});

	btns[3].addEventListener('click',function(){
			domUtil.remove(list,list.children[list.children.length-1]); //数组长度-1等于最后一个
	});