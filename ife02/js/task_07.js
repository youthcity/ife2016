	var queueView = document.getElementById('queueView'),
	input = document.getElementById('input'),
	btns = document.querySelectorAll('#btn'),
	container=document.getElementById("container");
	//数学验证
	var numReg = /^([1-9][0-9]|100)$/;
	//初始状态
	var btnClick =false;

	var arr=[]; //初始化数组

	var list ={
		queue:arr,
		//左侧入
		push :function(num){
			if (btnClick) {
				// statement
				alert("正在排序");
				return false;
			}
			if (this.queue.length>=60) {
				// statement
				alert("不能再加了");
				return false;
			}
			this.queue.push(num);
			this.paint();
		} ,
		//右侧入
		unshift : function(num){
			if (btnClick) {
				// statement
				alert("正在排序");
				return false;
			}
			if (this.queue.length>=60) {
				// statement
				alert("不能在加了");
				return false;
			}
			this.queue.unshift(num);
			this.paint();
		},
		//左侧出
		pop : function(){
			if (btnClick) {
				// statement
				alert("正在排序");
				return false;
			}
			if (list.queue.length === 0) {
				// statement
				alert("队列没有数据了额。。。。");
				return false;
			}
			alert(list.queue.pop());
			list.paint();
		},
		// 右侧出
		shift : function (){
			if (btnClick) {
				// statement
				alert("正在排序");
				return false;
			}
			if (list.queue.length === 0) {
				// statement
				alert("队列没有数据了额。。。。");
				return false;
			}
			alert(list.queue.shift());
			list.paint();
		},
		del : function(num){
			if (btnClick) {
				// statement
				alert("正在排序");
				return false;
			}
			this.queue.slice(num,1);
			this.paint();
		},
		paint:function(){   //重绘
			var str=list.queue.reduce(function(s,v){return s+"<div style='height:"+v+"px'></div>"},"");
			container.innerHTML=str;
		
		}

	}

	btns[0].onclick=function(){
		var num=input.value;
		if(/^([1-9][0-9]|100)$/.test(num)){
			list.unshift(num);
		}
		else alert("请输入范围在10-100的整数！");
	};	

	btns[1].onclick=function(){
		var num=input.value;
		if(numReg.test(num)){
			list.push(num);
		}
		else alert("请输入范围在10-100的整数!");
	};

	btns[2].onclick=list.shift;
	btns[3].onclick=function(){list.pop();};
	btns[4].onclick = function(){
			if (list.queue.length >= 50) {
				alert("不能再加了");
				return ;
			}

			for (var i = 0; i < 50; i++) {
			arr.push(parseInt(Math.random()*91+10));
			list.paint();
		}
	};
	btns[5].onclick=function(){
		try {
			quickSort(0,list.queue.length-1)();
		}
		catch(e){
			alert("正在排序呢！");
		}
	};

	// function timing(){
	// 	if(btnClick)return false;
	// 	btnClick=true;
	// 	var i=0,j=1,delay=false;
	// 	return function listTime(){
	// 		// if(list.queue[j]<list.queue[j-1]){
	// 		// 		list.queue[j]=list.queue[j]^list.queue[j-1];//异或交换，当然也可以用个中间数或者加减交换。
	// 		// 		list.queue[j-1]=list.queue[j]^list.queue[j-1];
	// 		// 		list.queue[j]=list.queue[j]^list.queue[j-1];
	// 		// 		list.paint();
	// 		// 	    delay=true;
	// 		// 	}
	// 		// j++;
	// 		// if(j===list.queue.length-i){
	// 		// 	i+=1;
	// 		// 	j=1;
	// 		// 	if(i===list.queue.length-1){
	// 		// 		btnClick=false;
	// 		// 		return false;
	// 		// 	}
	// 		// }

	// 		// if(delay){
	// 		// 	delay=false;
	// 		// 	setTimeout(listTime,20);
	// 		// }

	// 		// else listTime();
			 
			
	// 	}
	// }
//快排
//i为文件第一个，j为文件最后一个
function quickSort(i,j){
		
	if (i<j) {
		var key =list.queue[i];
		var low = i;
		var high = j;
		while(low<high){
			while(low < high && list.queue[high] >= key){
				high--;
			}

			 if(low<high)   {
				list.queue[low] = list.queue[high];
				list.paint();
				setTimeout(function (){},1000);
			}
			while(low <high && list.queue[low] <=key){
				low++;
			}
			if(low<high)   {
				list.queue[high] =list.queue[low];
				list.paint();
				 setTimeout(function (){},1000);
		}
		}

		list.queue[low] =key;
		quickSort(i,low-1);
		quickSort(low+1,j);
	}
}