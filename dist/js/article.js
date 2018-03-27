define(["rendering","url","pagination","active","articleRd","sj","xj","delete","active"],function(Rd,url,pn,active,articleRd,sj,xj,Delete,active){
    var listIndex = 1;
    function InputClick(){
        $(".modular-content-center").on("click",".modular-checkbox-click",function(){
            if($(this).prop("checked")){
                console.log($(this).parents().siblings("tr").children(".modular-td-input").children("input"));
                $(this).parents().siblings("tr").children(".modular-td-input").children("input").prop("checked",true);
            }else{
                $(this).parents().siblings("tr").children(".modular-td-input").children("input").prop("checked",false);
            }
        })
        $(".modular-content-center").on("click","input:gt(1)",function(){
            var num = Math.round($("table").outerHeight(true)/$("tr").outerHeight(true));
            console.log(num);
            if($(":checkbox:gt(0):checked").length == (num-1)){
                console.log($(":checkbox:gt(0):checked").length,(num-1));
                $(":checkbox").prop("checked",true);
            }
            if($(":checkbox:gt(0):checked").length != (num-1))
            {
                $(":checkbox:eq(0)").prop("checked",false);
            }
        })
    }

    function pageNum (){
         $.ajax({
            url: url.URL_SEO_ARTICLE_PAGENUM,
            type: "POST",
            data:{
                module_id:sessionStorage.getItem("moudalId"),
                website_id:sessionStorage.getItem("webId"),
            },
            datType: "JSON",
            }).done(function(json){
                var pageNumAll = Math.ceil(json.count/8);
                $('.M-box3').pagination({
                    pageCount: pageNumAll,
                    jump: false,
                    coping: true,
                    homePage: '首页',
                    endPage: '末页',
                    prevContent: '<i class="glyphicon glyphicon-chevron-left"></i>',
                    nextContent: '<i class="glyphicon glyphicon-chevron-right"></i>',
                    callback: function (api) {
                        var listIndex = api.getCurrent();
                        console.log(listIndex);
                        articleRd.init({
                            mid:sessionStorage.getItem("moudalId"),
                            cid:sessionStorage.getItem("webId"),
                            rdUrl:"acrticle/acrticleRda",
                            uil:"URL_SEO_ARTICLE_SELECT",
                            list:listIndex
                        })
                    }
                });
            })
    }

    
	return {
		init:function(setting){
            active.init();
            pageNum();
            InputClick();
            $(".js-modal-xz").on("click",function(){
                window.location.href="articleXz.html";
            })

            articleRd.init({
                mid:sessionStorage.getItem("moudalId"),
                cid:sessionStorage.getItem("webId"),
                rdUrl:"acrticle/acrticleRda",
                uil:"URL_SEO_ARTICLE_SELECT",
                list:1
             })
            //单个单击
            $(".modular-content-center").on("click",".modular-li-sj",function(evet){
                var that = $(this);
                sj.init({
                    mid:sessionStorage.getItem("moudalId"),
                    cid:sessionStorage.getItem("webId"),
                    initUrl:"URL_SEO_ARTICLE_SJ",
                    fn:articleRd.init,
                    rdUrl:"acrticle/acrticleRda",
                    uil:"URL_SEO_ARTICLE_SELECT",
                    that:that
                })
            })
            $(".modular-content-center").on("click",".modular-li-xj",function(evet){
                var that = $(this);
                xj.init({
                    mid:sessionStorage.getItem("moudalId"),
                    cid:sessionStorage.getItem("webId"),
                    initUrl:"URL_SEO_ARTICLE_XJ",
                    fn:articleRd.init,
                    rdUrl:"acrticle/acrticleRda",
                    uil:"URL_SEO_ARTICLE_SELECT",
                    that:that
                })
            })

            $(".modular-content-center").on("click",".modular-li-delete",function(evet){
                var that = $(this);
                Delete.init({
                    mid:sessionStorage.getItem("moudalId"),
                    cid:sessionStorage.getItem("webId"),
                    initUrl:"URL_SEO_ARTICLE_DELETE",
                    fn:articleRd.init,
                    rdUrl:"acrticle/acrticleRda",
                    uil:"URL_SEO_ARTICLE_SELECT",
                    that:that
                })
            })
            //批量
            $(".batch-sj").on("click",function(){
                sj.batch({
                    fn:articleRd.init,
                    mid:sessionStorage.getItem("moudalId"),
                    cid:sessionStorage.getItem("webId"),
                    batchUrl:"URL_SEO_ARTICLE_SJ",
                    rdUrl:"acrticle/acrticleRda",
                    uil:"URL_SEO_ARTICLE_SELECT",
                });
            })

            $(".batch-xj").on("click",function(){
                xj.batch({
                    fn:articleRd.init,
                    mid:sessionStorage.getItem("moudalId"),
                    cid:sessionStorage.getItem("webId"),
                    batchUrl:"URL_SEO_ARTICLE_XJ",
                    rdUrl:"acrticle/acrticleRda",
                    uil:"URL_SEO_ARTICLE_SELECT",
                });
            })

            $(".batch-delete").on("click",function(){
                Delete.batch({
                    fn:articleRd.init,
                    mid:sessionStorage.getItem("moudalId"),
                    cid:sessionStorage.getItem("webId"),
                    batchUrl:"URL_SEO_ARTICLE_DELETE",
                    rdUrl:"acrticle/acrticleRda",
                    uil:"URL_SEO_ARTICLE_SELECT",
                })
            })

		}	
	}
})