//躲猫猫---------------------------------------------------------------
(function(){
	if(typeof(duomaomao) == "undefined"){
		return ;
	}
	var arr_random = [];
	var str_tmp = '';
	var duomaomao_length = duomaomao.length;
	for(var i = 0; i < duomaomao_length; i ++){
		arr_random[i] = i;
	}
	arr_random.sort(function(){
		return Math.random() > 0.5 ? -1 : 1;
	});

	for(var i in arr_random){
		str_tmp += '<li>\
			<a href="'+duomaomao[arr_random[i]][1]+'">\
				<span class="scene-box"></span>\
				<span class="box-in" style="display: none">\
					<img class="png_img" src="'+duomaomao[arr_random[i]][2]+'" alt="'+duomaomao[arr_random[i]][0]+'" >\
				</span>\
			</a>\
		</li>';
	}
	$("#j-scene").append(str_tmp);
	
	var items = $("#j-scene li").clone();
	var gift_n = 0;
	var num=0;

	$("#j-scene li a").live("hover", function () {
		$(this).find('.box-in').stop(true,true).animate({height: 'toggle'}, "slow");
	});

	/***背景图场景切换***/
	var senseBg = [
		"/images/pc2017/m-cat/scene1.jpg",
		"/images/pc2017/m-cat/scene2.jpg",
		"/images/pc2017/m-cat/scene3.jpg",
		"/images/pc2017/m-cat/scene4.jpg",
		"/images/pc2017/m-cat/scene5.jpg"
	]
	/***场景盒子***/
	var senceBox =[
		'0 -470px',
		'0 -190px',
		'0 -50px',
		'0 -590px',
		'0 -330px'
	]

	//点击切换场景
	$('#j-change-btn').click(function(){ randomSence();});

	randomSence();

	function ChangeGift_dmm(){
		var target = $("#j-scene");
		target.html("");
		for (var i = 0; i < 4; i++){
			if(gift_n >= items.length){
				gift_n = 0;
			}
			$(items[gift_n]).clone().appendTo(target).show();
			gift_n ++;
		}
	}

	function randomSence() {
		ChangeGift_dmm();
		var index;
		do{
			index =  Math.floor((Math.random()*5));
		}while (num ==index);
		num=index;
		$('.mod_boxcot').css("background-image", "url(" + senseBg[num] + ")");
		$('.scene-box').css("background-position", senceBox[num]);
		$('.scene-box').css("_background-position", senceBox[num]);
	}
})();

//测一测-------------------------------------------------------------------------------
if(typeof(ceyice) != "undefined"){
	var arr_random = [];
	ceyice_length = ceyice.length;
	for(var i = 0; i < ceyice_length; i ++){
		arr_random[i] = i;
	}
	arr_random.sort(function(){
		return Math.random() > 0.5 ? -1 : 1;
	});

	var index_cyc = Math.floor(Math.random() * arr_random.length);//随机抽取一条
	var res_cyc = [];//存放测一测结果

	function get_res(){
		index_cyc ++;
		if(index_cyc >= arr_random.length){
			index_cyc = 0;
		}
		
		res_cyc[res_cyc.length] = ceyice[arr_random[index_cyc]];
		if(res_cyc.length > 3){
			res_cyc.shift();
		}
		
		var str_tmp = '', li_tmp = '';
		for(var i = res_cyc.length - 1; i >= 0; i --){
			str_tmp += '<div class="m-iner_con" style="display: none;">\
					  <a href="'+res_cyc[i][1]+'" title="'+res_cyc[i][0]+'" class="m-img por">\
						 <img src="'+res_cyc[i][2]+'" alt="'+res_cyc[i][0]+'">\
						 <span class="slide_cover"></span>\
						 <span class="slide_title">'+res_cyc[i][3]+'</span>\
						 <span class="icon_look png_img">去看看</span>\
					  </a>\
				   </div>';
			li_tmp += '<li>结果'+(i + 1)+'</li>';
		}
		$("#j-test_con").html(str_tmp);
		$("#j-test_tit").html(li_tmp);
		$("#j-test_con div").eq(0).show();
		$("#j-test_tit li").eq(0).addClass("cur");
		tab("j-test_tit","li","j-test_con",".m-iner_con");
	}

	var $mtest1 = $(".m-game_test .m-in_step1"),
		$mload = $(".m-game_test .m-in_load"),
		$mtest2 = $(".m-game_test .m-in_step2");
		
	function testEvn(){
	   setTimeout(function(){
		  $mload.fadeOut(500); 
		  $mtest2.fadeIn(500);
		},2200); 
	}

	$("#j-test").bind("click",function(){
		get_res();
		$mtest1.fadeOut(500);
		$mload.fadeIn();
		testEvn();
	});
	//console.log(1);
	$("#j-test1").bind("click",function(){
		get_res();
		$mload.fadeIn(500);
		testEvn();
	});
}

//拆礼盒---------------------------------------------------------------------
if(typeof(chailihe) != "undefined"){
	var arr_random = [];
	var str_tmp = '';
	var chailihe_length = chailihe.length;
	for(var i = 0; i < chailihe_length; i ++){
		arr_random[i] = i;
	}
	arr_random.sort(function(){
		return Math.random() > 0.5 ? -1 : 1;
	});

	var n = 1;
	for(var i in arr_random){
		if(Math.ceil(Math.random() * 6) == 6){//空盒子，随机6个里面一个空盒子
			str_tmp += '<li onclick="chouliwu.call(this,'+n+');return false;">\
						  <a target="_self" href="javasript:void(0);" class="g'+n+'"></a>\
					</li>';
		}else{
			str_tmp += '<li onclick="chouliwu.call(this,'+n+',\''+ceyice[i][1]+'\',\''+ceyice[i][0]+'\',\''+ceyice[i][2]+'\',\''+ceyice[i][3]+'\');return false;"><a target="_self" href="javasript:void(0);" class="g'+n+'"></a></li>';
		}
		
		n ++;
		if(n > 6){
			n = 1;
		}
	}
	$("#j-mod_gamelist").append(str_tmp);
						
	var timer,
		items = $("#j-mod_gamelist li").clone(),
		$gbox = $(".j-gamebox"),
		$gp = $(".j-gamepop");

	$(".j-changebtn").bind("click", function(){
		ChangeGift();
		return false;
	});
	  
	$("#j-mod_gamelist li").die("click").live("click",function(){
		$(this).addClass("active");
	});

	$gp.delegate(".j-playbtn", "click",function(){
		$gp.hide();
		$gbox.fadeIn(800);
		return false;
	});	

	ChangeGift();

	var gift_n = 0;
	function ChangeGift(){
		if (this.isChanging) 
			return false;
		this.isChanging = true;
		var _this = this;
		var target = $("#j-mod_gamelist");

		target.animate({opacity : 0}, 300, function(){
			$("#j-mod_gamelist").html("");

			for (var i = 0; i < 4; i++){
				if(gift_n >= items.length){
					gift_n = 0;
				}
				$(items[gift_n]).clone().appendTo(target).show();
				gift_n ++;
			}

			target.animate({opacity : 1}, 600, function(){
				clearInterval(timer);

				timer = setInterval(function(){
					var list = $("#j-mod_gamelist li:[class!='active']");
					var cur = Math.floor(Math.random() * list.length);
					var $cur = list.eq(cur);

					$cur.stop().animate({
						"top" : -5
					}, 300, function(){
						$cur.animate({
							"top" : 0
						}, 300)
					})
				},1000);
				_this.isChanging = false;
			});
		});
	}

	function getRandomArray(arr){
		var new_arr = [];
		for (var i = 0, l = arr.length; i < l; i++){
			new_arr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
		}
		return new_arr;
	}

	function chouliwu(id,url,text,imgurl,desp){
		if($(this).hasClass("active")){
			return;
		}
		
		$gbox.hide();
		var html = '';
		  
		if(url){
			html += '<div class="tc j-game">';
			html +=   '<a href="'+ url +'" title="'+ text +'" class="mod_pin pr" target="_blank">';
			html +=      '<img src="'+ imgurl +'" alt="'+ text +'"/>';
			html +=      '<span class="m-txt pa">'+ desp +'</span>';
			html +=      '<span class="m-cover pa"></span>';
			html +=   '</a>';
			html += '</div><div class="tc">';
			html +=   '<a target="_self" href="javascript:void(0);" class="playbtn j-playbtn">再玩一次</a>';
			html +=   '<a href="'+ url +'" class="lookbtn" target="_blank">去看看</a>';
			html += '</div>';
		}else{
			var  t_sj = Math.floor(Math.random()*4+1);

			html += '<div class="tc j-game">';
			html +=   '<div  class="mod_pin">';
			html +=      '<img src="/images/index_with_mm_5_giftgame/k'+ t_sj +'.jpg" alt="空礼盒"/>';
			html +=   '</div>';
			html += '</div><div class="tc">';
			html +=   '<a target="_self" href="javascript:void(0);" class="playbtn j-playbtn">再玩一次</a>';
			html += '</div>';
		}

		$gp.fadeIn(800).html(html);
	}
}

//card 卡牌分页--------------------------------------------
ue.marquee({
	hovertarget : "#j_slide_of",
	target : '#j_slide_ofinside ul',
	items : '#j_slide_ofinside li',
	nextbtn : "#btn-card",

	speed : 300,
	visiblenum : 2,
	scrollnum : 2,
	autoplay : false,
	loop : 1,
	mode : 1,
	direction : 0,
	afterSlide : function(){
		var t_num = $("#j-page").find(".total").html(),
		   $p_num = $("#j-page").find(".num"),
			 pnum = $p_num.html();
		if (pnum<t_num) {
			pnum++;
			$p_num.html(pnum);
		}else{
			pnum = 1;
			$p_num.html(pnum);
		}
	}
}); 
// 判断浏览器
var low_ver = $.browser.msie && ( $.browser.version == '6.0' || $.browser.version == '7.0' );
if(low_ver){
	$(".m-card .slide_list li").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
}
//绑定事件
$(document).delegate("li[href]","click", function(){
	window.open($(this).attr("href"));
});