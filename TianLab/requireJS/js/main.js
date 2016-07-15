require.config({
	paths:{
		jquery:'jquery-1.12.3.min'
	}
});

require(['jquery'],function(){
	alert($().jquery);
});