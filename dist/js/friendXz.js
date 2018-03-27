define(["rendering","url","pagination","active","articleRd","delete","active"],function(Rd,url,pn,active,articleRd,Delete,active){
    function friendXzRd(){
         $.ajax({
            url: url.URL_SEP_FRIEND_XZ,
            type: "POST",
            data:{
                website_id:sessionStorage.getItem("webId"),
                station_name:$(".modular-friend-xz").val(),
                weburl:$(".modular-url-input").val(),
                remarks:$(".modular-bz-input").val(),
            },
            datType: "JSON",
            }).done(function(json){
                if(json.code == "0"){
                    window.location.href="friend.html";
                 }
            })
    }
    return {
		init:function(setting){
            active.init();
            Rd.init({
                tplContainer:".modular-content",
                tplName:"friendXz/friendXz",
                tplData:{}
            })
            $(".modular-content").on("click",".friendXzButton",function(){
                friendXzRd();
            })
		}	
	}
})