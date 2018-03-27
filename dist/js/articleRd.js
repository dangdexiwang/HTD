define(["rendering","url"],function(Rd,url){
    var mid = null;
    var cid = null;
    var pageNumAll = "";
    var pageNum = null;
    var rdUrl = "";
    var uil = "";
    var list = "";
    function articleRd(mid,cid,rdUrl,uil,list){
        $.ajax({
            url: url[uil],
            type: "POST",
            data:{
                module_id:mid,
                website_id:cid,
                pageNumber:list,
                pageSize:8,
            },
            datType: "JSON",
            }).done(function(json){
                console.log(json);
                if(json.list){
                  if(json.list.length){
                    Rd.init({
                            tplContainer:".modular-content-center",
                            tplName:rdUrl,
                            tplData:{
                                data:json.list
                            }
                    })
                }  
                }else{
                    if(json.length){
                        Rd.init({
                            tplContainer:".modular-content-center",
                            tplName:rdUrl,
                            tplData:{
                                data:json
                            }
                        })
                    }
                }
                
            })
    }
	return{
		init:function(section){
           mid = section.mid;
           cid = section.cid;
           rdUrl = section.rdUrl;
           uil = section.uil;
           list = section.list;
           articleRd(mid,cid,rdUrl,uil,list);
		}
	}
})