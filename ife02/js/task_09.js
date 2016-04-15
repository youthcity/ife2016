//事件绑定兼容	
function addEventHandler(element,type,handler){
	if (element.addEventHandler) {
		// statement
		element.addEventHandler(type, handler, false);
	}else if (element.attachEvent) {
		// statement
		element.attachEvent("on"+type,handler);
	}else{
		element['on'+type] = handler;
	}
}

//获取对象
var tagInput = document.getElementById('tag_input');
	tagList = document.getElementById('tag_list');
	hobbyInput = document.getElementById('hobby_input')	;
	hobbyList = document.getElementById('hobby_list');
	hobbyBtn = document.getElementById('btn');

window.onload = function(){
	//事件绑定
	addEventHandler(tagInput,'keyup',showTag);
	addEventHandler(hobbyBtn,'click', showHobby);

	addEventHandler(tagList, 'mouseover', function(e){
		if (e.target &&  e.target.nodeName == "SPAN") {
			// statement
			console.log(e.target);
			console.log(e.target.firstChild);
			e.target.firstChild.insertData(0,'点击删除');
			e.target.style.background = 'red';
		}
	});
	addEventHandler(tagList, 'mouseout', function(e){
		if (e.target && e.target.nodeName == "SPAN") {
			// statement
			e.target.firstChild.deleteData(0,4);
			e.target.style.background = '#8ecdff';
		}
	});
	addEventHandler(tagList, 'click', function(e){
		if (e.target && e.target.nodeName == "SPAN") {
				tagList.removeChild(e.target);
		}
	});
}

//构造函数与原型模式结合
function CreatList(divList){
	this.queue = [];
	this.render = function (e){
		var str = "";
		this.queue.forEach(function(e){
			str +=	'<span>'+ e +'</span>';
		});
		divList.innerHTML = str;
	};
}

CreatList.prototype.rightPush = function(str){
	 // body... 
	 this.queue.push(str);
	 this.render();
};

CreatList.prototype.leftShift = function (){
	this.queue.shift();
};

// 实例化对象
var tagObj = new CreatList(tagList);
	hobbyObj = new CreatList(hobbyList);


function splitInput(str){
	var inputArray = str.trim().split(/[,，;；、。.\s\n]+/);
	return inputArray;
}

function showTag(){
	if (/[,，;；、\s\n]+/.test(tagInput.value) || event.keyCode == 13) {
		// statement
		var data = splitInput(tagInput.value),
			newTag = data[0];
	if (tagObj.queue.indexOf(newTag) === -1) {
		// statement
		tagObj.rightPush(newTag);
		if (tagObj.queue.length > 10) {
			// statement
			tagObj.leftShift();
		}
	}
	tagObj.render();
	tagInput.value = "";
	}
}


function showHobby(){
	var data = splitInput(hobbyInput.value);
	data.forEach(function(e){
		if (hobbyObj.queue.indexOf(e) === -1) {
			hobbyObj.rightPush(e);
			if (hobbyObj.queue.length > 10) {
				hobbyObj.leftShift();
			}
		}
	});
	hobbyObj.render();
	hobbyInput.value = "";
}