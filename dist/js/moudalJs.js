define(["rendering","url","articleRd"],function(Rd,url,pn,active,articleRd){
	var id = null;
    var moudalId = null;
	function moudalRd(id){
            $.ajax({
                    url: url.URL_SEO_MODULE,
                    type: "POST",
                    data:{
                        website_id:id,
                    },
                    datType: "JSON",
                }).done(function(json){
                	console.log(json);
                    if(json.length){
                        Rd.init({
                            tplContainer:".modal-content",
                            tplName:"module/moudalMk",
                            tplData:{
                                data:json
                            }
                        })
                    }
                })
	}
    function moudalAdd(id){
        $(".modal-content").on("click",".modal-list-xz",function(){
             Rd.init({
                tplContainer:".modal-content",
                tplName:"module/moudalXj",
                tplData:{}
            })
        $(".moudal-xj-button").on("click",function(){
            $.ajax({
                url: url.URL_SEO_MODULE_EDIT,
                type: "POST",
                data:{
                    website_id:id,
                    module_name:$("#moudalZdmc").val(),
                    remarks:$("#moudalBz").val()
                },
                datType: "JSON",
            }).done(function(json){
                console.log(json);
                if(json.code == "0"){
                       moudalRd(id);
                }
            })
        })
               
        })
    }

    function moudalEdit(id){
        $(".modal-content").on("click",".modal-list-bj",function(){
            moudalId = $(".modal-radio:checked").attr("data-id");
            if($(".modal-radio:checked").length){
                $.ajax({
                    url: url.URL_SEO_MODULE_SELECT,
                    type: "POST",
                    data:{
                        id:moudalId,
                    },
                    datType: "JSON",
                    }).done(function(json){
                        console.log(json);
                        Rd.init({
                            tplContainer:".modal-content",
                            tplName:"module/moduleBj",
                            tplData:{
                                data:json
                            }
                        })

                    $(".moudal-bj-button").on("click",function(){
                            $.ajax({
                                url: url.URL_SEO_MODULE_EDIT,
                                type: "POST",
                                data:{
                                    id:moudalId,
                                    website_id:id,
                                    module_name:$("#moudalZdmcBj").val(),
                                    remarks:$("#moudalBzBj").val()
                                },
                                datType: "JSON",
                                }).done(function(json){
                                     console.log(json);
                                    if(json.code == "0"){
                                        moudalRd(id);
                                    }
                                })
                    })
                })
            }
            
        })
    }

    function moudalDelete(id){
        $(".modal-content").on("click",".modal-list-delete",function(){
            moudalId = $(".modal-radio:checked").attr("data-id");
            if($(".modal-radio:checked").length){
                $.ajax({
                    url: url.URL_SEO_MODULE_DELETE,
                    type: "POST",
                    data:{
                        ids:moudalId,
                    },
                    datType: "JSON",
                }).done(function(json){
                    console.log(json);
                    if(json.code == "0"){
                        moudalRd(id);
                    }
                })      
            }
        })
    }
	return{
		init:function(object){
			id = object.id;
			moudalRd(id);
            moudalAdd(id);
            moudalEdit(id);
            moudalDelete(id);
		}
	}
})