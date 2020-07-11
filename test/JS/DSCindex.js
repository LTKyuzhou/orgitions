$(function(){
	//点击差号广告消失
	$(".chahao").on("click",function(){
		$(".advertise").fadeOut()
	})
	//头部滚动到一定高度下拉
	$(window).scroll(function(){
		var oScrollTop=$(window).scrollTop();
		if(oScrollTop>=300){
			$("#header").slideDown()
		}else{
			$("#header").slideUp()
		}	
	})
	
//  点全部商品,出现商品导航栏
	$(".box1").hover(function(){
		$("#headnav").show();
	},function(){
		$("#headnav").hide();
	})

//  点商品栏的li,颜色会改变
    function  BgColorfn(name1,name2){
    	name1.hover(function(){
	    	name1.eq($(this).index()).addClass("active2")
	    },function(){
	    	name1.eq($(this).index()).removeClass("active2")
	    })
	     name2.hover(function(){
	    	name1.eq($(this).index()).addClass("active2")
	    },function(){
	    	name1.eq($(this).index()).removeClass("active2")
	    })
    }
    BgColorfn($("#headnav li"),$("#pox1 ul"))
    BgColorfn($("#headnav2 li"),$("#pox2 ul"))
    
    
    
    
	//地址hover事件
	$("#add").hover(function(){
		$("#adds").css("display","block")
	},function(){
		$("#adds").css("display","none")
	})
	
	//	点上去具体商品信息导航出现
//	   悬浮上边的效果
	$("#headnav li").mouseenter(function(){
		$("#pox1 ul").eq($(this).index()).addClass("active").siblings("ul").removeClass("active");
	})
	$(".box1").mouseleave(function(){
		$("#pox1 ul").removeClass("active")
	})
//	内容效果
	$("#headnav2 li").mouseenter(function(){
		$("#pox2 ul").eq($(this).index()).addClass("active").siblings("ul").removeClass("active");
	})
	$(".box2").mouseleave(function(){
		$("#pox2 ul").removeClass("active")
	})
	
	
//	网站导航点上去  下边那根线出来
    $("#navinner").hover(function(){
    	$(".line2").show()
    },function(){
    	$(".line2").hide()
    })
	
//	鼠标放在我的购物车,出现下边一栏
    $(".gwc2").hover(function(){
    	 $(".gwc1").addClass("active")
    },function(){
    	$(".gwc1").removeClass("active")
    })
	
//	动态创建容器导航栏
   var arrcontainernav=["首页","服装城","食品特产","奢侈品","鞋靴箱包","品牌专区","聚划算","店铺街","积分商城","预售"]
   var oContainernav=document.getElementById("containernav")
   for (var i=0;i<arrcontainernav.length;i++) {
   	   var oDiv=document.createElement("div");
   	   oContainernav.appendChild(oDiv);
   	   oDiv.innerHTML=arrcontainernav[i]
   }
	
// banenr图淡入淡出      注意jq中banner写法
   $(".containerbannerbtn li").on("click",function(){
   	  $(".containerbanner img").eq($(this).index()).fadeIn().siblings("img").fadeOut();
   	  $(".containerbannerbtn li").eq($(this).index()).addClass("active3").siblings("li").removeClass("active3")
   })
    
// var oContainerbanner=document.getElementById("containerbanner")
// var bannerNum=0;
//
// window.onload=function(){
// 	bannerNum++;
// 	if(bannerNum==3){
// 		bannerNum=0;
// 	}
// 	timer=setInterval()
// }
   
//  鼠标经过内容变换
   $(".news").find("div").mouseover(function(){
   	 $(".news").find("div").eq($(this).index()).css("color","red").siblings("div").css("color","darkslategrey")
   	 $(".news").find("li").eq($(this).index()).addClass("active").siblings("li").removeClass("active");
   })
   
// 侧边栏部分
   var screenH=document.documentElement.clientHeight+"px"|| document.body.clientHeight+"px"
   var oSider=document.getElementById("sider");
   var oShopcar=document.getElementById("shopcar");
   oSider.style.height=screenH;
   oShopcar.style.height=screenH;
	
// 侧边栏的动画            注意jq封装的格式
   function aniFn(siderx,optionsx,arrowx){
   	siderx.mouseenter(function(){
	   	 optionsx.css("right","70px");
	   	 optionsx.animate({"right":"40px"},280);
	   	 arrowx.css({"right":"58px","display":"block"});
	   	 arrowx.animate({"right":"28px"},280);
	   })
   }
    aniFn($("#sider3"),$(".options3"),$(".arrow3"))
    aniFn($("#sider4"),$(".options4"),$(".arrow4"))
    aniFn($("#sider5"),$(".options5"),$(".arrow5"))
    aniFn($("#sider6"),$(".options6"),$(".arrow6"))
    aniFn($("#sider7"),$(".options7"),$(".arrow7"))
    aniFn($("#sider8"),$(".options8"),$(".arrow8"))
    aniFn($("#sider9"),$(".options9"),$(".arrow9"))
	
//	滚动超过多少出现返回顶部
	$(window).scroll(function(){
		oScrollTop=$(window).scrollTop();
		if(oScrollTop>100){
			$("#sider9").css("bottom","40px")
			$("#sider10").css("bottom","0px")
		}else if(oScrollTop<100){
			$("#sider9").css("bottom","0px")
			$("#sider10").css("bottom","-35px")
		}
	})
	
//	点击返回顶部,回到顶部           !!!!需要复习
    $("#sider10").click(function(){
    	$("html").animate({"scrollTop":0},500)
    })
	
//	购物车侧边栏
    var flag=1
    $(".sidersecond").click(function(){
        if(flag){	
	    	$(".sider").animate({"right":"280px"},360);
	    	$(".shopcar").animate({"right":"0px"},360)
	    	$(".sidersecond").parent().css("background","red")
	    	 flag=0;
	    }else{
	    	$(".sider").animate({"right":"0px"},360);
	    	$(".shopcar").animate({"right":"-280px"},360)
	    	$(".sidersecond").parent().css("background","black")
	    	flag=1;
		}
    })
    
    $("#carclose").click(function(){
    	$(".sider").animate({"right":"0px"},360);
	    $(".shopcar").animate({"right":"-280px"},360)
	    $(".sidersecond").parent().css("background","black")
    })





	
	
	
	
})

