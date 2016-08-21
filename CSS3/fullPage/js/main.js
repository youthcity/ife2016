requirejs.config({
	paths:{
		jquery : 'jquery-1.12.3.min'
	}
});

requirejs(['jquery'],function($){
	var $element =  $("#container");
	var $sections = $element.find('.sections'),
		$section = $sections.find('.section');

	var index = 0; //次序

	//生成侧边导航
	var ul_html = "<ul class='pages vertical'>";
	for(var i = 0 ; i < $section.length ; i++){
		ul_html += "<li></li>";
	}
	$element.append(ul_html);
	$pageItems = $element.find('.pages');
	$li = $pageItems.find('li');
	$li.eq(index).addClass('active');

	//监听滚轮
	$element.on("mousewheel DOMMouseScroll",function(e){
		console.log(e);
		e.preventDefault();
		var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
		if(delta > 0 ){
			prve();
		}else if(delta < 0){
			next();
		}

	});

	//向前翻页
	function prve(){
		if(index > 0) {
			index--;
		}else {
			index = 0;
		}
		scrollPage();
	}
	//向后翻页
	function next(){
		if(index < $section.length ){
			index++;
		}else{
			index= $section.length;
		}
		scrollPage()
	}
	//渲染 翻页
	function scrollPage(){
		var dest = $section.eq(index).position();
		console.log($section);
		console.log(dest);
		if(!dest) return;
		//更改偏移
		var translate = "translateY(-"+dest.top+"px)" ;
		$sections.css("transition", "all 1s ease-in-out");
		$sections.css("transform" , translate);
		//增加激活
		$li.removeClass('active').eq(index).addClass('active');
	}

});