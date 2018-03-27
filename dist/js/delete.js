define(["rendering","url"],function(Rd,url){
	return{
		init:function(section){
                var that = section.that;
				var id = that.parent().parent().siblings(".modular-td-input").children("input").attr("data-id");
				console.log(section.mid,section.cid);
                console.log(id);
                if(that.parent().parent().siblings(".modular-td-input").children("input").prop("checked")){
				$.ajax({
            		url: url[section.initUrl],
            		type: "POST",
            		data:{
                		ids:id
            		},		
            		datType: "JSON",
            		}).done(function(json){
                		if(json.code == "0"){
                			section.fn({
                				mid:section.mid,
                        		cid:section.cid,
                                rdUrl:section.rdUrl,
                                uil:section.uil,
                			});
                		};
            		})
            	}

		},
        batch:function(section){
            var len = $(":checkbox:gt(0):checked").length;
            var str = "";
            if(len){
                for(var i = 0;i<len;i++){
                    if(str.length){
                        str = str.toString()+","+$(":checkbox:gt(0):checked").eq(i).attr("data-id").toString();
                    }else{
                        str = $(":checkbox:gt(0):checked").eq(i).attr("data-id").toString();
                    }
                }
                $.ajax({
                    url: url[section.batchUrl],
                    type: "POST",
                    data:{
                        ids:str
                    },      
                    datType: "JSON",
                    }).done(function(json){
                        if(json.code == "0"){
                            section.fn({
                                mid:section.mid,
                                cid:section.cid,
                                rdUrl:section.rdUrl,
                                uil:section.uil,
                            });
                        };
                    })
            }
        }
	}
})