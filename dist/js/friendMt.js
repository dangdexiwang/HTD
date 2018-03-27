define(["rendering","url","pagination","active","articleRd","delete","active"],function(Rd,url,pn,active,articleRd,Delete,active){
    var a = window.location.href.lastIndexOf("?");
    var webIndex = window.location.href.substring(a+1,window.location.href.length);
    function friendXzRd(){
         $.ajax({
            url: url.URL_SEP_FRIEND_XZ,
            type: "POST",
            data:{
                id:webIndex,
                website_id:sessionStorage.getItem("webId"),
                station_name:$(".modular-friendBj-xz").val(),
                weburl:$(".modular-urlBj-input").val(),
                remarks:$(".modular-bzBj-input").val(),
            },
            datType: "JSON",
            }).done(function(json){
                if(json.code == "0"){
                    window.location.href="friend.html";
                 }
            })
    }
    function friendRd(){
        $.ajax({
            url: url.URL_SEP_FRIEND_MT,
            type: "POST",
            data:{
               id:webIndex
            },
            datType: "JSON",
            }).done(function(json){
                if(JSON.stringify(json) != "{}" ){
                    Rd.init({
                        tplContainer:".modular-content",
                        tplName:"friendMt/friendMt",
                        tplData:{
                            data:json
                        }
                    })
                }
            })
    }
    return {
		init:function(setting){
            active.init();
            friendRd();
            $(".modular-content").on("click",".friendMtButton",function(){
                friendXzRd();
            })
		}	
	}
})