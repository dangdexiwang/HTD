define(["jquery","template"],function(jQuery,template){
	return {
		init:function(setting){
			setting.tplData = setting.tplData || {};
			$(setting.tplContainer).html(template(setting.tplName,setting.tplData));
		},
		// 弹窗渲染
		modal: function(setting) {
			setting.tplData = setting.tplData || {};
			setting.modalClass = setting.modalClass || "";
			setting.tplContainer = setting.tplContainer || ".js-modal-container";
				this.normal({
		                tplContainer: setting.tplContainer,
		                tplName: "common/modal",
		                tplData: {
		                	modalClass: setting.modalClass
		                }
		            });
		            this.normal({
		                tplContainer: ".js-modal-content",
		                tplName: setting.tplName,
		                tplData: setting.tplData
		            });
		            $(".js-modal").modal({
		                backdrop: "static"
		            });
		            $(".js-modal-close").click(function() {
		            	$(".js-modal").modal("hide");
		            });
		},
		// 普通渲染
		normal: function(setting) {
			setting.tplData = setting.tplData || {};
			$(setting.tplContainer).html(template(setting.tplName, setting.tplData));
		},
	}
})