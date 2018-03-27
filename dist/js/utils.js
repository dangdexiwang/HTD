/**
 * 工具包
 * @author                         	欧阳宇帆（1014466231@qq.com）
 * @createTime                     	2017-09-21
 */
define(["jquery", "template","rendering"],
	function($, template, Config,Rd) {
		return {
	       	 showMsg: function(mes,callback,speed){
		        	var message_html = '<div class="modal fade" tabindex="-1" role="dialog" id="msgModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">提示</h5></div><div class="modal-body"><span class="text-danger"></span></div></div></div></div>';

		        	if(!speed){
				speed = 2000;
			}
			
			var $alert = $("#msgModal") ;
			if($alert.length <=0){
				$(document.body).append(message_html);
				$alert = $("#msgModal") ;
			}
			$alert.find(".modal-body span").html(mes);
			$alert.modal('show');
			
			setTimeout(function(){
				$alert.modal('hide');
				if(callback){
					callback();
				}
			},speed);
			
			$alert.on("hidden.bs.modal", function () {
				var index = 0;
				$(".modal").each(function(){
					if($(this).css("display") !== "none") index += 1;
				});
				if(index > 0){
					$("body").addClass("modal-open");
				}else{
					$("body").removeClass("modal-open");
				}
				$alert.off("hidden.bs.modal");
			});
		        },		
	        // 格式化日期
	       	 formatDate: function(date, formate) {
		        	formate = formate || "yyyy-mm-dd";
		        	var year = date.getFullYear();
		        	var month = date.getMonth() + 1;
		        	month = month < 10 ? "0" + month : month;
		        	var d = date.getDate();
		        	d = d < 10 ? "0" + d : d;
		        	var newDate;
		        	switch(formate) {
		        		default:
		        			newDate = year + "-" + month + "-" + d;
		        			break;
		        	}
		        	return newDate;
		        },
	       	 family_loading:function(){
			var _loading = $("#family_loading");
			var load_html ='<div class="family-loading-wrap"  id="family_loading"><div class="family-loading"><div class="family-loading-container"><img src="images/loading.svg"></div></div></div>';


			if(_loading.length <=0){
				_loading = $(load_html);
				$(document.body).append(_loading);
			}else{
				_loading.toggle();
			}
		},
	        //确认提示框
	        	confirmDialog: function(options) {
		        	var _options;
		        	var dialogStr = '<div class="modal fade js-dialog-modal" taindex="-1" role="dialog"><div class="modal-dialog modal-sm js-dialog" role="document"><div class="js-dialog-content"><div class="modal-header js-dialog-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="js-dialog-title">提示</div></div><div class="modal-body js-dialog-body"><p></p></div><div class="modal-footer js-dialog-footer"><button type="button" class="btn btn-default js-dialog-confirm">确认</button><button type="button" class="btn btn-default js-dialog-cancel" data-dismiss="modal">取消</button></div></div></div></div>';
		        	var $dialog = $(".js-dialog-modal");
		        	var defaultOptions = {
		        	    title: '提示',	
		        		message: '是否确认删除?',
		        		resize: "modal-sm"       //模态框的三种大小，默认为小尺寸   小尺寸不传resize参数默认为小尺寸,中尺寸传空字符串 "",大尺寸传字符串 "modal-lg"
		        	}
		        	
		        	_options = $.extend(true, defaultOptions, options)
		        	
		        	if($dialog.length <= 0){
		        		$("body").append(dialogStr);
		        		$dialog = $(".js-dialog-modal");
		        	}
		        	//为确定按钮绑定点击事件
		        	$(".js-dialog-footer .js-dialog-confirm").off('click').click(dialog_btn_func);
		        	
		        	//显示提示框
		        	$(".js-dialog-title",$dialog).html(_options.title);
		        	$(".modal-body p").addClass("text-center");
		        	$(".modal-body p",$dialog).html(_options.message);
		        	$dialog.modal("show");
		        	
		        	if(_options.resize == ''){
		        		$('.modal-dialog',$dialog).removeClass('modal-lg').removeClass('modal-sm');
		        	}
		        	if(_options.resize == 'modal-lg'){
		        		$('.modal-dialog',$dialog).removeClass('modal-sm').addClass('modal-lg');
		        	}
		        	//确定按钮回调函数
		        	function dialog_btn_func() {
		        		$dialog.modal("hide");
		        		$dialog.on("hidden.bs.modal",function(){
		        			if(_options.callback){
		        				_options.callback();
		        				$dialog.off("hidden.bs.modal");
		        			};
		        		})
		        	}
		        },
		GetQueryString:function(name)
			{
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)return  unescape(r[2]); return null;
			}
	}
});