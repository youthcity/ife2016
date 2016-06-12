$(document).ready(function(){
	$(window).on('load',function(){
		waterfall();
		var dataInt = {"data":[{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'}]};
		$(window).on('scroll', function(){
			if(checkScrollSlide()){
				$.each(dataInt.data, function(key,value){
					// console.log(value);
				var oBox = 	$('<div>').addClass('box').appendTo($('#main'));
				// console.log(oBox);
				var oPic = $('<div>').addClass('pic').appendTo(oBox);
				var oImg =  $('<img>').attr('src', 'img/'+value.src);
				// console.log(value.src);
				oImg.appendTo(oPic);
				});
				waterfall();
			}
	});
	});
});


function waterfall(){
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin', '0 auto');
	var hArr = [];
	$boxs.each(function(index, value) {
		var h = $boxs.eq(index).outerHeight();
		if (index < cols) {
			hArr[index] = h;
		}else {
			var minH = Math.min.apply(null, hArr);
			var minIndex = $.inArray(minH, hArr);
			// console.log(value);  DOM对象
			$(value).css({
				'position': 'absolute',
				'top': minH+'px',
				'left': minIndex*w+'px'
			});
			hArr[minIndex]= minH+$(value).outerHeight();
			// hArr[minIndex] = minH+ $boxs.eq(index).outerHeight();
		}
	});
	console.log(hArr);
}

function checkScrollSlide(){
	var $lastBox  = $('#main>div').last();
	var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH =$(window).height();

	return lastBoxDis < scrollTop  + documentH;

}