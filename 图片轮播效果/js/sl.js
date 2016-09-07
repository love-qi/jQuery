$(function(){
	$.focus=function(id){
		//取出层的宽度
		var sWidth=$(id).width();
		//取出li的个数->生成数字按钮
		var liCount=$(id+" ul li").length;
		//图片的索引
		var index=0;
		//添加数字按钮
		var btn="<div class='btnBg'></div><div class='btn'>";
		for(var i=0;i<liCount;i++){
			var ii=i+1;
			btn+="<span>"+ii+"</span>";
		}
		btn+="</div><div class='preNext pre'></div><div class='preNext next'></div>"; //添加左右图片按钮
		$(id).append(btn);
		$(id+" .btn").css("opacity",0.5);

		//控制上下页  鼠标放在数字上，页面跟着移动
		$(id+" .btn span").mouseenter(function(){
		    index=$(this).index();
			//显示这张图
			showPic(index);
		}).eq(0).trigger("mouseenter");  //.trigger("mouseenter")  可以用mouseenter（）代替就是每刷新一次触发一次
		//控制上下页 的点
		$(id+" .preNext").css("opacity",0.3);
		$(id+" .preNext").hover(function(){
			$(this).stop(true,false).animate({"opacity":0.8},300);
		},function(){
			$(this).stop(true,false).animate({"opacity":0.3},300);
		});
		$(id+" .next").click(function(){
			if(index==liCount-1){
				index=0;
				showPic(index);
			}else{
				index++;
				showPic(index);
			}
		});
		$(id+" .pre").click(function(){
			if(index<1){
				index=liCount-1;
				showPic(index);
			}else{
				index--;
				showPic(index);
			}
		});
		
		picTimer=setInterval(function(){
				showPic(index);
				index++;
				if(index==liCount){
					index=0;
				}
			},1000);
		//定时器
		$(id).hover(function(){
			clearInterval(picTimer);
		},function(){
		   picTimer=setInterval(function(){
				showPic(index);
				index++;
				if(index==liCount){
					index=0;
				}
			},1000);
		});
		//定义一个私有函数， showPic就能访问到  sWith
		//显示图片（showPIc）
		function showPic(index){
			//要偏移的距离
			var nowLeft=-index* sWidth;//sWith:800px正好是一张图片的宽
			$(id+" ul").stop(true,false ).animate({"left":nowLeft},300);
			//数字按钮上改样式
			$(id+" .btn span").stop(true,false).animate({"opacity":0.3},300)    //先让span停止动画效果并且透明度都为0.5
			                  .eq(index).stop(true,false).animate({"opacity":1},300); //再让索引为index的透明度为1
		}
	}
});