define([],function(){
	var a = window.location.href.lastIndexOf("/");
    var webIndex = window.location.href.substring(a+1,window.location.href.length);
    return {
		init:function(setting){
			alert("1");
		}	
	}
})