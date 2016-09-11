$(function(){
    $("#filter li a").click(function(){
		//更改样式
		$(this).parent().parent().find("li").removeClass("current");
		$(this).parent().addClass("current");
		
		var filterclass=$(this).text().toLowerCase().replace(" ","-"); //toLowerCase()全部替换成小写
		
		if(filterclass=='all'){
			$("ul#portfolio li").fadeIn("slow");
		}else{
			$("ul#portfolio li").each(function(index, element){
				if($(element).hasClass(filterclass)){
					$(element).fadeIn("slow");
				}else{
					$(element).fadeOut("slow");
				}
			
	    });
		}
    })
})