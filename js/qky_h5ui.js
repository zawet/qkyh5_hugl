



/******************************************************************************移动端专属区域*************/
//移动端导航点击样式变换
function qkyh5_navclick(){
	$(".qkyh5_barnav a").each(function(i) {
		$(this).click(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
		});
	});

}

//自动变化以头部的距离，i为想离头部有多远，可以负数
function qkyh5_topa_header(i,jq){
	if(jq==1){
	var titHeight = $('.qkyh5_header').height()+i;
	}else{
	var titHeight = $('.qkyh5_header').offset().height+i;}
	//console.log(titHeight);
	$(".qkyh5_main").css({"paddingTop":titHeight+"px"});
}


//滚动下拉交互执行
function qkysel_news(){
	$("#ks_type").click(function(){
		$(this).parent().find(".optionbox").toggleClass("show");
	});
	/***以为区域点击 s**/
	 $(document).not($("#ks_type")).click(function(){
        $("#ks_type").parent().find(".optionbox").removeClass("show");
    });
	$(document).not($(".optionbox")).click(function(){
        $("#ks_type").parent().find(".optionbox").removeClass("show");
    });
	
    /*防止事件冒泡*/
    $("#ks_type").click(function(event){
        event.stopPropagation();
    });
	$(".optionbox").click(function(event){
        event.stopPropagation();
    });
	
	for(var i=2010;i<2021;i++){
		$(".sp_one .swiper-wrapper").append("<div class='swiper-slide'><a class='option'>"+i+"年</a></div>");
	}
	for(var i=1;i<13;i++){
		$(".sp_two .swiper-wrapper").append("<div class='swiper-slide'><a class='option'>"+i+"月</a></div>");
	}
	
	//滚动下拉选择插件赋值（核心，一定要渲染完后再执行）
	var sp_one = new Swiper('.sp_one', {
		direction: 'vertical',
		loop : true,
		slidesPerView :3,
		centeredSlides : true,
		onSlideChangeEnd: function(){
			$(".spone").html($(".sp_one .swiper-slide-active a").html());
		}
	});
	var sp_two = new Swiper('.sp_two', {
		direction: 'vertical',
		loop : true,
		slidesPerView :3,
		centeredSlides : true,
		onSlideChangeEnd: function(){
			$(".sptwo").html($(".sp_two .swiper-slide-active a").html());	
		}
	});
}


function xr_meetli(Mdata,xrMyId,xrAllId){
	var myHtml=allHtml="";
	var m=$("#meetli_mould");
	for(var i=0;i<Mdata.length;i++){
		m.find(".meetName").html(Mdata[i].meetName);
		m.find(".meetStateName").addClass(Mdata[i].meetState.color).html(Mdata[i].meetState.name);
		m.find(".Stime").html(Mdata[i].Stime);
		m.find(".Etime").html(Mdata[i].Etime);
		m.find(".meetAddress").html(Mdata[i].meetAddress);
		m.find(".sendMan").html(Mdata[i].sendMan);
		m.find(".meetType").html(Mdata[i].meetType);
		if(Mdata[i].Button.show){
			m.find(".isok").removeClass("yc").html(Mdata[i].Button.name).attr("id",Mdata[i].Button.id).attr("href",Mdata[i].Button.href)
		}
		if(Mdata[i].meetState.name=="已结束"){
			m.find(".cg_li").addClass("isend").attr("st","_end");
		}
		if(Mdata[i].meetState.name=="进行中"){
			m.find(".cg_li").attr("st","");
		}
		if(Mdata[i].meetState.name=="未开始"){
			if(Mdata[i].Button.show&&Mdata[i].Button.id=="baoming"){
				 m.find(".cg_li").attr("st","_ns_bm");
			}else{
			m.find(".cg_li").attr("st","_ns");
			}
		}
		if(Mdata[i].type=="my"){myHtml+=m.html();}else{allHtml+=m.html();}
		m.find(".meetStateName").removeClass(Mdata[i].meetState.color);
		m.find(".isok").addClass("yc");
		m.find(".cg_li").removeClass("isend");	
	}
	xrMyId.html(myHtml);
	xrAllId.html(allHtml);
}