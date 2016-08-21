requirejs.config({
	paths:{
		jquery : 'jquery-1.12.3.min',
		fullpage:'jquery.fullpage'
	},
		shim: {
		'fullpage':{
			deps:['jquery']
		}
	}
});

requirejs(['jquery','fullpage'],function($,fullpage){
	$(document).ready(function() {
		$('#fullpage').fullpage({
		sectionsColor:['#93e6d9','#22cac3','#fdc74d','#fae4b3','#93d6e9','#d7c2ad'],
		navigation:true,
		navigationPosition:'right',
		navigationTooltips:['首页','擅长技术','教育背景','实习经历','作品','了解更多'],
		verticalCentered:true,



	});
	});

});

