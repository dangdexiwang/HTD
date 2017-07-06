$(function()
{

	console.log(document.cookie);	 	
var TpArr=[];		 		var	tp="http://m.neihanshequ.com/pic/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=1497847534.8100002&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
//var vido="http://m.neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&min_time=1497758177&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
	var y=0;
	var my=0;
	var top=0;
	var lh=0;
	var js=document.getElementsByClassName("jz");
	var hd=0;
	var pm=document.getElementsByClassName("pm");
	var tpo=document.getElementsByClassName("top");
	var ultwo;
	var listtwo;
	var mda=0;
	var dza=document.getElementsByClassName("dza");
	var kk=0;
	var xrlist;
	var juli=0;
	var fpl=document.getElementsByClassName("fpl");
	var ldw=document.getElementsByClassName("plul");
	var txt=document.getElementById("txt");
	var fsla=document.getElementsByClassName("fsla");
	var userkong=document.getElementsByClassName("userkong");
	var arr=[];
	var idx=0;
	var lili=[];
	var pl=document.getElementsByClassName("pl");
	var pllogo=document.getElementsByClassName("pllogo");
	var cimg=pllogo[0].getElementsByTagName("img");
	var plul=document.getElementsByClassName("plul");
	var yy=true;
	//渲染替代区域
	function xr(t,i,c)
	{
			ul.innerHTML+="<li><h1><img src='img/huaji.jpg'><span>"+c+"</span></h1><p>"+t[i].group.content+"</p><div class='gif'><img src="+t[i].group.large_image.url_list[0].url+"></div><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span id='like'></span><p>"+0+"</p></li></ul></div></li>";
	}
	
	function td(t,i,c)
	{
		$("#ul>li").eq(i).html("<h1><img src='img/huaji.jpg'><span>"+c+"</span></h1><p>"+t[i].group.content+"</p><div class='gif'><img src="+t[i].group.large_image.url_list[0].url+"></div><div class='dv'><ul><li><span></span><p>"+0+"</p></li><li><span></span><p>"+0+"</p></li><li><span id='like'></span><p>"+0+"</p></li></ul></div>")
	}
	
	
//	------------------------------------

	//刷新界面
	function sxjson(sxattr,t,c)
	{
		$.ajax({
			type:"get",
			url:sxattr,
			dataType:"jsonp",
			jsonpCallback:"callback",
			success:function(data)
			{
				t.splice(0,t.length);
				for(var i=0;i<data.data.data.length;i++)
				{
					t.push(data.data.data[i]);
				}
				for(var i=0;i<$("#ul>li").length;i++)
				{
					td(t,i,c);
				}
			}
		});
	}
//	----------------------------------------
	//执行ajax
function ajax(attr,t,c)
{
	$.ajax({
		url:attr,
		type:"get",
		dataType:"jsonp",
		jsonpCallback:"callback",
		success:function(data)
		{
				var ul=document.getElementById("ul");
				var list=ul.children;
				var s=document.getElementById("s");
				var ultop=ul.offsetTop;
				var lh2=0;
				var lw=0;
				var dv;
				var djlist;
				var sl=0;
				for(var i=0;i<data.data.data.length;i++)
				{
					t.push(data.data.data[i]);
				}
				for(var i=0;i<t.length;i++)
				{
					xr(t,i,c);
				}
				$(".pmjz").remove();
				for(var i=0;i<list.length;i++)
				{	
						arr.push(["",""]);
				}
				s.addEventListener("touchstart",function(ev)
				{
					y=ev.changedTouches[0].pageY;
					top=ul.offsetTop;
				})
				ul.addEventListener("touchmove",function(ev)
				{
					lw=0;
					for(var i=0;i<list.length;i++)
					{	
						lw+=parseInt(getComputedStyle(list[i],null)["height"]+getComputedStyle(list[i],null)["padding"]);
					}
					if(s.scrollTop>s.clientHeight)
					{
						tpo[0].style.bottom="4rem";
					}
					else
					{
						tpo[0].style.bottom="-4rem";
					}
					hd=lw-s.clientHeight;
					my=ev.changedTouches[0].pageY;
					if(s.scrollTop==0 && my-y>150)
					{
						$(".sxl").css("top",my-y+"px");
						return;
					}
					if(s.scrollTop>=hd)
					{
						if(yy)
						{
						yy=false;
						$("#s").append("<div class='pm'></div>");
						$.ajax({
								type:"get",
								url:attr,
								dataType:"jsonp",
								jsonpCallback:"callback",
								success:function(data)
								{
									
										t.splice(0,t.length);
										for(var i=0;i<data.data.data.length;i++)
										{
											t.push(data.data.data[i]);
										}
										for(var i=0;i<5;i++)
										{	
											xr(t,i,c);
										}
										$(".pm").remove();
										yy=true;
								}
							});
						}
						return;
					}
					if(ul.offsetTop<=0)
					{
						$("#ul").css("top",(my-y)+top+"px");
					}
					var dvtwo=document.getElementsByClassName("dv");
					dianzhan(dvtwo);
				})
				var deg=0;
				var f=true;
				$(".ts").fadeOut();
				s.addEventListener("touchend",function(ev)
				{
					if(top>0)
					{
						$("#ul").css("top",0+"px");
					}
					if(ul.offsetTop<=-hd)
					{
						$("#ul").css("top",-hd+"px");
					}
					if((s.scrollTop==0 && f) && my-y>150)
					{
						f=false;
						var time=setInterval(function()
						{
							deg=deg+30;
							$(".sxl").css({transform:"rotate("+deg+"deg)",transformOrigin:"center center"})
							if(deg>=1000 && my-y>150)
							{
								clearInterval(time);
								deg=0;
								$(".sxl").css("top","-25%");
								$(".sxl").css({transform:"rotate(0deg)"});
								f=true;
								sxjson(attr,t,c,m);
								for(var i=0;i<list.length;i++)
								{	
									arr[i][1]="";
								}
								$(".ts").fadeIn();
								$("#ul").css("top",0+"px");
								my=0;
								y=0;
								setTimeout(function()
								{
									$(".ts").fadeOut();
								},1000)
							}
						},30)
					}
					dianzhan(dv);
				$(".gif img").on("tap",function()
				{
					$(".ckdt").html($(this).parent().html());
					$(".ckdt").css("display","block");
					$(".ckdt img").on("touchstart",function(ev)
					{
						if(ev.changedTouches.length==2)
						{
							$(".ckdt img").on("touchmove",function(ev)
							{
								a=ev.changedTouches[0].pageX;
								b=ev.changedTouches[1].pageX;
								aw=b-a;
								c=ev.changedTouches[0].pageY;
								d=ev.changedTouches[1].pageY;
								ch=d-c;
								ev.preventDefault();
								$(".ckdt img").css({width:ch,height:ch});
							})
						}
						
					})
				});
				$(".ckdt").on("tap",function()
				{
					$(".ckdt").css("display","none");
					$(".ckdt img").css({width:"100%",height:"100%"});
				})
					$("#ul>li>p").on("tap",function()
					{
						idx=$(this).parent().index();
						xrlist=$(this).parent().html();
						arr[idx][0]="<li>"+xrlist+"</li>";
						
						for(var i=0;i<arr.length;i++)
						{
							$(".plul").html(arr[idx][0]);
							$(".fpl").html(arr[idx][1]);
						}
						
						$(".pl").css("display","block");
						$(".pllogo img:eq(0)").on("tap",function()
					{
						sl=0;
						$(".fpl").html("");
						$(".pl").css("display","none");
					})
					})
				})
			var dv=document.getElementsByClassName("dv");
			for(var i=0;i<list.length;i++)
				{	
					lili.push(list[i].children[1]);
				}
			dianzhan(dv);
			fsla[0].addEventListener("tap",function()
			{
				if(txt.value=="")
				{
					userkong[0].innerHTML="内容不能为空";
					userkong[0].style.display="block";
					setTimeout(function()
					{
						userkong[0].style.display="none";
					},1000);
				}
				else
				{	
					fpl[0].innerHTML+="<li>"+txt.value+"</li>";
					arr[idx][1]+="<li>"+txt.value+"</li>";
					txt.value="";
				}
			})
		}
	})
}

//调用函数渲染
ajax(tp,TpArr,"爆笑GIF");

function dianzhan(dv)
{
	for(var i=0;i<dv.length;i++)
	{
		ultwo=dv[i].getElementsByTagName("ul");
	 listtwo=dv[i].getElementsByTagName("li");
	for(var j=0;j<listtwo.length;j++)
		{
			listtwo[j].index=j;
			listtwo[j].addEventListener("tap",function()
		{
			this.dx=0;
				if(this.index==0)
				{
					if(this.nextElementSibling.count==1)
					{
						dza[0].innerHTML="您已经踩过了";
						dza[0].style.display="block";
						setTimeout(function()
						{
							dza[0].style.display="none";
						},1000)
						return;
					}
					this.count=1;
					this.getElementsByTagName("span")[0].style.background="url(img/haha.png) no-repeat";
					this.getElementsByTagName("span")[0].style.backgroundSize="100% 100%";
					if(this.getElementsByTagName("span")[0].nextElementSibling.innerHTML>=1)
					{
						return;
					}
					this.getElementsByTagName("span")[0].nextElementSibling.innerHTML++;
				}
				if(this.index==1)
				{
					
					if(this.previousSibling.count==1)
					{
						dza[0].innerHTML="您已经赞过了";
						dza[0].style.display="block";
						setTimeout(function()
						{
							dza[0].style.display="none";
						},1000)
						return;
					}
					this.count=1;
					this.getElementsByTagName("span")[0].style.background="url(img/caiw.png) no-repeat 100% 100%"
					this.getElementsByTagName("span")[0].style.backgroundSize="100% 100%";
					if(this.getElementsByTagName("span")[0].nextElementSibling.innerHTML>=1)
					{
						return;
					}
					this.getElementsByTagName("span")[0].nextElementSibling.innerHTML++
				}
				if(this.index==2)
				{
					this.getElementsByTagName("span")[0].style.background="url(img/socaw.png) no-repeat 100% 100%"
					this.getElementsByTagName("span")[0].style.backgroundSize="100% 100%";
					if(this.getElementsByTagName("span")[0].nextElementSibling.innerHTML>=1)
					{
						return;
					}
					this.getElementsByTagName("span")[0].nextElementSibling.innerHTML++
				}
		})
		}
	}
	
}
});