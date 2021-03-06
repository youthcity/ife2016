window.onload = function(){
	waterfall('main', 'box');
	var dataInt = {"data":[{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'}]};
	window.onscroll = function(){
		if (checkScrollSlide()) {
			var oParent = document.getElementById('main');
			for (var i = 0; i < dataInt.data.length; i++) {
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src = "img/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main', 'box');
		}

	}
};

function waterfall(parent, box){
	//将main下所有class为box的元素取出来
	var oParent =document.getElementById(parent);
	var oBoxs  = getByClass(oParent,box);
	// console.log(oBoxs.length);
	//计算页面的列数(页面宽/box的宽)
	var oBoxW = oBoxs[0].offsetWidth;
	// console.log(oBoxs);
	var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
	console.log(cols);
	//设置mian的宽度
	oParent.style.cssText = 'width:'+cols*oBoxW+'PX;margin:auto';
	var hArr = []; //存放每一列高度
	for (var i = 0; i < oBoxs.length; i++) {
		if (i<cols) {
			hArr.push(oBoxs[i].offsetHeight);
		}else {
			var minH = Math.min.apply(null,hArr);
			var index =  getMinhIndex(hArr, minH);
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH+'px';
			// oBoxs[i].style.left = oBoxW*index+'px'; //方法一取left值
			oBoxs[i].style.left = oBoxs[index].offsetLeft+'px'; //方法二
			hArr[index] += oBoxs[i].offsetHeight;
			console.log(hArr);
		}
	}
	console.log(hArr);
}

function getByClass(parent, clsName){
 	var boxArr = new Array(), //用来存储clasName元素
 	oElements = parent.getElementsByTagName('*');
 	for (var i = 0; i < oElements.length; i++) {
 		if (oElements[i].className == clsName) {
 			boxArr.push(oElements[i]);
 		}
 	}
 	return boxArr;
}

function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return i;
		}
	}
}

function checkScrollSlide(){
	var oParent =document.getElementById('main');
	var oBoxs =getByClass(oParent, 'box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2); 
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	// console.log(scrollTop);
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	// console.log(height);
	return (lastBoxH < scrollTop + height)?true : false;
}
