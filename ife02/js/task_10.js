//事件兼容
function addHandler(element, type, handler){
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	}else if (element.attachEvent) {
		element.attachEvent(type, handler);
	}else{
		element["on"+type] = handler;
	}
}

function getTarget(event){
	return event ? event : window.event;
}

function preventDefault(event){
	if (event.preventDefault) {
		event.preventDefault();
	} else{
		event.returnValue = false;
	}
}

//匿名函数初始化
(function(){
	var treeWalker =new TreeWalker(),
	btns = document.querySelectorAll("input"),
	preBtn = btns[0],
	inBtn = btns[1],
	postBtn = btns[2],
	root = document.querySelector(".root");

	addHandler(preBtn, "click", function(){
		treeWalker.preOrder(root);
		// console.log(treeWalker);
		treeWalker.animation();
	});

	addHandler(inBtn, "click", function(){
		treeWalker.inOrder(root);
		treeWalker.animation();
	});

	addHandler(postBtn, "click", function(){
		treeWalker.postOrder(root);
		treeWalker.animation();
	});
})();

// 声明一棵树
function TreeWalker(){
	// console.log(this);
	this.stack = [];
	this.isWalking = false;
}


//前序遍历
TreeWalker.prototype.preOrder = function(node){
	this.stack.push(node);
	if (node.firstElementChild) {
		this.preOrder(node.firstElementChild);
	}
	if (node.lastElementChild) {
		this.preOrder(node.lastElementChild);
	}
};

//中序
TreeWalker.prototype.inOrder = function(node){
	if (node.firstElementChild) {
		this.inOrder(node.firstElementChild);
	}
	this.stack.push(node);
	if (node.lastElementChild) {
		this.inOrder(node.lastElementChild);
	}
};

//后序
TreeWalker.prototype.postOrder = function(node){
	if (node.firstElementChild) {
		this.postOrder(node.firstElementChild);
	}
	if (node.lastElementChild) {
		this.postOrder(node.lastElementChild);
	}
	this.stack.push(node);
};

//动画
//isWalking 很重避免冲突,形成排队
TreeWalker.prototype.animation = function(){
	var stack = this.stack,
		speeder = document.getElementById("speeder"),
		iter = 0,
		self = this,
		timer;
		// console.log(self);
		self.stack = [];
	if (!self.isWalking) {
		self.isWalking = true;
		// console.log(self.stack);
		// console.log(stack);
		stack[iter].style.background = "#448AFC";
		timer = setInterval(function(){
			if (iter == stack.length-1) {
				stack[iter].style.background = "#fff";
				self.isWalking = false;
				clearInterval(timer);
			}else{
				++iter;
				stack[iter-1].style.background = "#fff";
				stack[iter].style.background = "#448AFC";
			}	
		},speeder.value);
	}
};