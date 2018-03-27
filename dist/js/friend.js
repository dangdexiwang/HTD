define(["rendering","url","pagination","active","articleRd","delete","active","articleRd"],function(Rd,url,pn,active,articleRd,Delete,active,articleRd){
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
            url: url.URL_SEP_FRIEND_CONTENT,
            type: "POST",
            data:{},
            datType: "JSON",
            }).done(function(json){
                var pageNumAll = Math.ceil(json.count/8);
                $('.M-box3').pagination({
                    pageCount: 1,
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
                            rdUrl:"friendXz/friendedit",
                            uil:"URL_SEP_FRIEND_CONTENT",
                            list:listIndex
                        })
                    }
                });
            })
    }
    return {
		init:function(setting){
            active.init();
            InputClick();
            pageNum();
            articleRd.init({
                rdUrl:"friendXz/friendedit",
                uil:"URL_SEP_FRIEND_CONTENT",
                list:1
            })
            //单个点击
            $(".modular-content-center").on("click",".modular-firend-delete",function(evet){
                var that = $(this);
                Delete.init({
                    initUrl:"URL_SEP_FRIEND_DELETE",
                    fn:articleRd.init,
                    rdUrl:"friendXz/friendedit",
                    uil:"URL_SEP_FRIEND_CONTENT",
                    that:that
                })
            })
            //批量点击
            $(".friend-delete").on("click",function(){
                Delete.batch({
                    fn:articleRd.init,
                    batchUrl:"URL_SEP_FRIEND_DELETE",
                    rdUrl:"friendXz/friendedit",
                    uil:"URL_SEP_FRIEND_CONTENT",
                })
            })
		}	
	}
})