define(["rendering","url","moudalJs"],function(Rd,url,moudalJs){
    var ldw = null;
    var bjId = null;
     function xzClick (){
        $.ajax({
            url: url.URL_SEO_ZD,
            type: "POST",
            datType: "JSON",
        }).done(function(json){
            if(json.length){
                 Rd.init({
                    tplContainer:".modal-content",
                    tplName:"web/webZd",
                    tplData:{
                        data:json
                    }
                })
            }
                    
        }).always(function(){
           
        });
    }

        function edit(bjId,br){
        if(br){
           $.ajax({
            url: url.URL_SEO_EDIT_WEBSITE,
            type: "POST",
            data:{
                id:bjId,
                website:$("#zdmc").val(),
                remarks:$("#bz").val(),
            },
            datType: "JSON",
            success:function(json){
                if(json.code == "0" ){
                    xzClick();
                }
            }
        })  
       }else{
            $.ajax({
            url: url.URL_SEO_EDIT_WEBSITE,
            type: "POST",
            data:{
                website:$("#xzZdmc").val(),
                remarks:$("#xzBz").val(),
            },
            datType: "JSON",
            success:function(json){
                if(json.code == "0" ){
                    xzClick();
                }
            }
            }) 
       }
        
    }


    //新增
    function  xz (){
        $(".modal-content").on("click",".web-list-xz",function(){
             Rd.init({
                tplContainer:".modal-content",
                tplName:"web/webXin",
                tplData:{}
            })
             $(".web-xz-button").on("click",function(){
                if($.trim($("#xzZdmc").val()).length && $.trim($("#xzBz").val()).length){
                    edit(false);
                }else{
                    alert("请填写内容");
                }
            })
        })
    }

    //编辑
    function bj(){
        $(".modal-content").on("click",".web-list-bj",function(){
            bjId = $(".web-radio:checked").attr("data-id");
           if($(".web-radio:checked").length){
            $.ajax({
                    url: url.URL_SEO_SELECT_WEBSITE,
                    type: "POST",
                    data:{
                        id:bjId,
                    },
                    datType: "JSON",
                }).done(function(json){
                    console.log(json);
                    if(JSON.stringify(json) != "{}"){
                        Rd.init({
                            tplContainer:".modal-content",
                            tplName:"web/webBianji",
                            tplData:{
                                data:json
                            }
                        })
                        $(".web-bj-button").on("click",function(){
                           edit(bjId,true);
                        })
                    }
                })
           };
        })
    }

    //删除
     function weBdelete (){
        $(".modal-content").on("click",".web-list-delete",function(){
            bjId = $(".web-radio:checked").attr("data-id");
           if($(".web-radio:checked").length){
                $.ajax({
                    url: url.URL_SEO_DELETE_WEBSITE,
                    type: "POST",
                    data:{
                        ids:bjId
                    },
                    datType: "JSON",
                }).done(function(json){
                    if(json.code == "0" ){
                        xzClick();
                    }
                })
           }
       })
    }
    return{
		init:function(){
            xzClick();
            //编辑
            bj();
            //新增
            xz();
            //删除
            weBdelete();
            $(".modal-content").on("click",".web-list-queding",function(){
                bjId = $(".web-radio:checked").attr("data-id");
                sessionStorage.setItem("webId",bjId);
                if($(".web-radio:checked").length){
                    moudalJs.init({
                        id:bjId
                    });
                }
            })

            $(".modal-content").on("click",".modal-list-queding",function(){
                if($(".modal-radio:checked").length){
                    sessionStorage.setItem("moudalId",$(".modal-radio:checked").attr("data-id"));
                    window.location.href="article.html";
                }
            })
        }
	}
})