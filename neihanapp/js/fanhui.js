$(function()
{
	$(".top").on("touchstart",function()
	{
		$("#s").scrollTop(0);
		$(".top").css({bottom:"-4rem"});
	})

})
