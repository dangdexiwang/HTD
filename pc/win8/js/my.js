$(function(){
	function mb(){
		$("section").find("div").animate({
			"opacity":0.5
		},700);
	}
	var t=true;
	$(".big").hover(function(){
		if(t){
			mb();
			t=false;
		}
		
		$(this).addClass("op")
	},function(){
		$(this).removeClass("op");
		
	})
	$(".middle").hover(function(){
		if(t){
			mb();
			t=false;
		}
		$(this).addClass("op")
	},function(){
		$(this).removeClass("op");
		
	})
	$(".small").hover(function(){
		if(t){
			mb();
			t=false;
		}
		$(this).addClass("op")
	},function(){
		$(this).removeClass("op");
		
	});
	$("section").mouseleave(function(){
		$("section").find("div").animate({
			"opacity":1
		},1000);
		t=true;
	});
	$("nav a").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find("ul").slideDown()
	},function(){
		$(this).find("ul").slideUp()
	});
	$("nav").mouseout(function(){
		$("nav a").eq(0).trigger("mouseover")
	})
	$(".top-extend>span").click(function(){
		$(".top-extend>div").slideToggle();
		
	})
	var timer;
	var index=2;
	function lb(){
		timer=setInterval(function(){
		if(index>2){
			index=0;
		}
		if(index==2){
			$(".fyq i").eq(0).addClass("xz").siblings().removeClass("xz");
			$(".banner img").eq(2).fadeOut();
			$(".banner img").eq(0).fadeIn();
		} else{
			$(".fyq i").eq(index+1).addClass("xz").siblings().removeClass("xz");
			$(".banner img").eq(index).fadeOut().next().fadeIn();
		}
		
		index++
	},3000)
	}
	lb()
	$(".fyq i").click(function(){
		clearInterval(timer);
		$(this).addClass("xz").siblings().removeClass("xz");
		$(".banner img").eq($(this).index()).fadeIn().siblings().fadeOut();
		
	})
})
