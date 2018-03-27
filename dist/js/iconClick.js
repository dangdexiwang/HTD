define(["jquery"],function($){
	function iconCLick() {
		$(".family-icon-box").on("click",function(){
			window.history.back(-1);
		})
	}
	return {
		init:function(setting){
			iconCLick();
		}	
	}
})