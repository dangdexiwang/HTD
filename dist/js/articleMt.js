define(["rendering","url","summernote","summernoteZhCN","moment","daterangepicker","active"],function(Rd,url,summernote,summernoteZhCN,moment,daterangepicker,active){
	var a = window.location.href.lastIndexOf("?");
    var webIndex = window.location.href.substring(a+1,window.location.href.length);
    function time(){
        $('.ranges_1 ul').remove();
        $('.modular-time-input').daterangepicker({
            ranges: {
                '全部': [moment(), moment().subtract(-1, 'days')],
                '今天': [moment(), moment()],
                '明天': [moment().subtract(-1, 'days'), moment().subtract(-1, 'days')],
                '未来七天': [moment(),moment().subtract(-6, 'days')],
                '未来30天': [moment(),moment().subtract(-29, 'days')],
                '未来60天': [moment(),moment().subtract(-59, 'days'), ]
            },
            startDate: moment(),
            endDate: moment()
        },
          function(start, end,label) {
        //label:通过它来知道用户选择的是什么，传给后台进行相应的展示
//      console.log(label)
            if(label=='全部'){
                $('.modular-time-input').html('全部');
            }else if(label=='今天'){
                $('.modular-time-input').html(end.format('YYYY-MM-DD'));
            }else if(label=='明天'){
                $('.modular-time-input').html(start.format('YYYY-MM-DD'));
            }else if(label=='未来七天'){
                $('.modular-time-input').html(start.format('YYYY-MM-DD')+'-'+end.format('YYYY-MM-DD'));
            }else if(label=='未来30天'){
                $('.modular-time-input').html(start.format('YYYY-MM-DD')+'-'+end.format('YYYY-MM-DD'));
            }else if(label=='未来60天'){
                $('.modular-time-input').html(start.format('YYYY-MM-DD')+'-'+end.format('YYYY-MM-DD'));
            }
        
        }
        );
    }
    function editRd(){
        active.init();
        $.ajax({
            url: url.URL_SEP_ARTICLE_CONTENT,
            type: "POST",
            data:{
                id:webIndex,
            },
            datType: "JSON",
        }).done(function(json){
            console.log(json);
            if(JSON.stringify(json) != "{}"){
                Rd.init({
                    tplContainer:".modular-content",
                    tplName:"acrticleMT/acrticleMT",
                    tplData:{
                        data:json
                    }
                })
                time();
                $('#summernote').summernote({
                    height: 200,
                    tabsize: 2,
                    lang: 'zh-CN',
                });
                $("#summernote").summernote('code',json.content);
                $(".acrtucleMtButton").on("click",function(){
                    var title  = $.trim($(".modular-bt-input").val());//标题
                    var release_date = $.trim($(".modular-time-input").text());//时间
                    var keyword = $.trim($(".modular-key-input").val());//关键词
                    var abstract = $.trim($(".modular-zy-input").val());//摘要
                    var content  = $.trim($("#summernote").summernote('code'));
                    $.ajax({
                        url: url.URL_SEO_ARTICLE_EDIT,
                        type: "POST",
                        data:{
                            id:webIndex,
                            module_id:sessionStorage.getItem("moudalId"),
                            website_id:sessionStorage.getItem("webId"),
                            title:title,
                            release_date:release_date,
                            keyword:keyword,
                            abstracts:abstract,
                            content_id:$("#summernote").attr("data-id"),
                            content:content,
                        },
                        datType: "JSON",
                    }).done(function(json){
                        if(json.code == "0"){
                            window.location.href="article.html";
                        }
                    })
                })
            }
        })
    }
    return{
		init:function(){
            editRd();
        }
	}
})