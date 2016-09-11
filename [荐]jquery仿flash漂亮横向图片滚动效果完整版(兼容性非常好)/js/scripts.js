$(function(){
	//先将数字排列出来
	var index=0;
	var len=$("img.slide").length;
	var divNav="<div id='top1'><div id='nav1'><ul>";
	for(var i=0;i<len;i++){
		var ii=i+1;
		divNav+="<li><a  href='#'>"+ii+"</li></a>";
	}
	divNav+="</ul></div></div>";
	$("#slide-nav").append(divNav);
	
	//给每个li标签绑定点击事件
	$("#nav1 ul li a").click(function(){
		 index=$(this).text();
		 $("#nav1 ul li a").removeClass("on");
		
		 showPic(index);
	}).eq(0).trigger("click");
	
	function showPic(ind){
		var length=$("#slide-runner").width();
		if(index>len){
			index=1;	
		}else if(index<0){
			index=len;
		}
		$("#nav1 ul li a").removeClass("on").eq(index-1).attr("class","on");
		$("#slide-runner img").css("display","none");
		$("#slide-img-"+index).css("display","block");
		
	}
	
	//鼠标放上和移开
	$("#slide-runner").hover(function(){
		clearInterval(setIn);
	},function(){
		setIn=setInterval(function(){
		index++;
		showPic(index);
		
	},1000)
	})
    //设置定时器
	setIn=setInterval(function(){
		index++;
		showPic(index);
		
	},1500)
})