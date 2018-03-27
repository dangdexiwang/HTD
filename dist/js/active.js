define([],function(){
    var index = window.location.href.lastIndexOf("/");
    var wUrl = window.location.href.slice((index+1),window.location.href.length);
	return {
		init:function(setting){
            console.log(wUrl[0]);
            if(wUrl[0] == "a"){
                $(".modular-left>ul>li").eq(0).addClass("activeList");
            }
            if(wUrl[0] == "f"){
            	$(".modular-left>ul>li").eq(1).addClass("activeList");
            }
		}	
	}
})