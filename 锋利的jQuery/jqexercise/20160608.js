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

T22

var countUp = function(){
	var count = parseInt($('#target input').val());
	console.log($('#target input').val());
	$('#target input').val(++count);
	setTimeout(countUp,1000 );
}; 
countUp();


T23
$&	与 regexp 相匹配的子串。
var target = $('#target');
target.html(target.html().replace(/red/,"<span style='color:red'>$&</span>").replace(/blue/,"<span style='color:blue'>$&</span>").replace(/green/,"<span style='color:green'>$&</span>"));

T24
$('#target :text').each(function() {
	var $textbox = $(this);
	if ($textbox.val().match(/^[0-9]/)) {
	    $textbox.css('border-color','red');
	}else{
		$textbox.css('border-color','green');
	}
});

T25
var  tr = $('#target table tr');
tr.eq(0).insertAfter(tr.eq(1));

T26
var $tr = $('#target table tr');
$tr.each(function(i){
	if(i == 0) return;
	// console.log($(this).children('td'));
	var num1 = $(this).children('td').eq(0);
	var num2 = $(this).children('td').eq(2);
	var result = $(this).children('td').eq(4);
	result.text(parseInt(num1.text())+parseInt(num2.text()));
});

T27
my answer:
var $trs = $('#target tbody tr');
$trs.each(function(){
	var $tr = $(this);
	$tr.children().each(function(){	
		if ($(this).text()>10) {
			$(this).css('background','red');
		}
	});
});

A:
$('#target td').each(function(i){
	var td = $(this);
	if (parseInt(td.text())>10) {
		td.css('background','red');
	}
});

T28
var i = 0;
var changeColor = function(){
	var color = ((++i)%2 ==0) ? '#eee':'#ffb6c1';
	$('#target').css('background', color);
	setTimeout(changeColor,400);
}
changeColor();

T29
var target = $('#target');
var html = target.html();
html = html.replace('blink',"$&".blink());
html = html.replace('bold',"$&".bold());
html = html.replace('strike',"$&".strike());
target.html(html);

T30
var table = $('#target table');
var rows = [];
$('tr', table).each(function(){
  var tr = $(this);
var cells = [];
$('td,th', tr).each(function(){
	console.log($(this));
  cells.push($(this));
});
console.log(rows);
rows.push(cells);
});

for(var colNum=0;
colNum<rows[0].length;
colNum++){
  var tr = $('<tr/>').appendTo(table);
$.each(rows,function(i, row){
  row[colNum].appendTo(tr);
});
};
$('tr:empty', table).remove();

T31

var before =  $('#target input').val();
var after = '';
console.log(before.length);
for(var i = before.length; i>=0;i--){
	 var s = before.substring(i, i+1);

	if (s.match(/^[0-9]/) && after.match(/^[0-9]{3}/)) {
	   after = s +','+after;
	}else{
		after =  s + after;
	}
}
$('#target input').val(after);

myanswer:
var str = $('#target input').val();
var arr =  str.split('');
var strnew = "";
var result = [];
for(var i = 0 ; i< arr.length; i++){
	
	strnew += arr[i];
	if(i%3==2){
		result.push(strnew);
		strnew = "";
	}
}
console.log(result);
$('#target input').val(result.join(','));
