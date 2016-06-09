window.onload = function(){
	waterfall('main', 'box');
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
			
		}
	}
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
