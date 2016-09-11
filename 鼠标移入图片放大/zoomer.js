;(function(w,d,u,$){
	$.fn.Zoomer=function(params){
		var defaults={
			speedView:200,  //放大的时间
			speedRemove:400,  //缩小的时间
			widthBig:200,  //放大的长宽
			heightBig:200,
			altText:true,
			speedText:400  //文字移动的速度
		};
		//合并
		params=$.extend({},defaults,params);
		$(this).hover(function(){
			$(this).find("img").css("z-index",100);
			$(this).find("img").stop().animate({
				top:"-50%",
				left:"-50%",
				width:params.widthBig+"px",
				height:params.heightBig+"px"
			},params.speedView);
			
			if( params.altText){
				var altText=$(this).find("img").attr("alt");
				$(this).prepend("<span class='title'>"+ altText +"</span>");
				$(".title").animate({
					marginLeft:'-50px',
					marginTop:'100px'
				},params.speedText).css({
					'z-index':101,
					'position':'absolute'
				});
			}
		}, function(){
			$(this).find("img").css("z-index",0);
			$(this).find("img").stop().animate({
				top:"0%",
				left:"0%",
				width:"100px",
				height:"100px"
			},params.speedRemove);
			$(this).find(".title").remove();
		})
	}
})(window,document,undefined,$)