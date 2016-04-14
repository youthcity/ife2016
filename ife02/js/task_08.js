var $ = function (el){
	return document.querySelector(el);
};

var arrData =[];
$("#insert").onclick = function(){
	var str = $("#textarea").value.trim();
	var arrWord =str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e){
		if (e !=null && e.length > 0) {
			return true;
		}else {
			return false;
		}
	});
	console.log("输出过滤后的结果");
	console.log(arrWord);
	arrData = arrWord;
	console.log("赋值后");
	console.log(arrData);

	render(null);

};

$("#search").onclick = function(){

	var str = $("#input").value.trim();
	render(str);
};

function render(str){
	$("#result").innerHTML = arrData.map(function(d) {
		var r = d;
		if(str != null && str.length>0){
			r =r.replace(new RegExp(str, "g"), "<span style='background-color:red'>"+str+"</span>");
		}
		return "<div>"+r +"</div>";
	}).join("");
}