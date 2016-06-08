$("#target").css('background','#eee');
$("#target span").text("change parent");
$("#target span").clone().insertAfter("#target span");
$('div.target').eq(1).css('background','red');
$('div.target button').attr('disabled','true');
$('.target input').removeAttr('checked');   /*难	*/
$("#child").appendTo('#parent2');
$('#target textbox').attr('readonly','readonly');
$('#target select  option').eq(1).attr('selected','selected'); /*selected */
T 10
$target = $('#target');
$target.css({
	width: $target.width()*2,
	height: $target.height()*2
});

T11
$('#target').remove(".child").text('');
原答案 
$('#target').empty();

T12
不会
A:
setTimeout(function(){
	alert("夏天好~");
},1000);

T13
不会
A：
alert($('#target').find('.child').size());

T14
var $target=$('#target');
$target.animate({width:$target.width()*2,
	height:$target.height()*2
},"slow");

T15
$('#target option').filter(":odd").css('background', 'red');

T16
$target =$('#target');
$target.html($target.html().replace(/h2/g,'h3'));

T17
$('#target').html($('#target').html().replace(/cat/g,'dog'));

T18
$('#target').children().not('h2').remove();

T19
$('.target').not(':parent').remove();

T20
var options = {};
$('#target option').each(function(i){
	var option = $(this);
	options[option.text()]= option;
});
console.log(Object.keys(options));
var keys = Object.keys(options).sort();

var select = $('#target select').empty();
$.each(keys,function(i,key){

	select.append(options[key]);
});

T21
var showDialog = function(){
	if (confirm("确定这对话")) {
		showDialog();
	}
}

showDialog();