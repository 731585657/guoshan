/**
 * Created by 4399-1091 on 2016/11/4.
 */
$(function(){
    /**
     * 图片延迟加载
     */
    ue.lazyimg({
        target : $(".lazyimg"),
        type : "scroll"
    });
    /**
     * 百度分享
     */
    window._bd_share_config={
        "common":{
            "bdSnsKey":{},
            "bdText":"找儿歌视频大全，到4399儿歌故事，儿童歌曲大全，儿童故事大全，应有尽有！",
			'bdComment':'我发现了#4399儿歌故事大全#这个神奇版块！儿歌和故事，应有尽有，版面简洁， 我的朋友们都可喜欢了，你也来看看吧！' + window.location.href,
			'bdDesc':'我发现了#4399儿歌故事大全#这个神奇版块！儿歌和故事，应有尽有，版面简洁， 我的朋友们都可喜欢了，你也来看看吧！',
            "bdMini":"2",
            "bdMiniList":false,
            "bdPic":"http://zjimg.5054399.com/allimg/170615/15_170615152643_1.jpg",
            "bdStyle":"0",
            "bdSize":"16"
        },
        "share":{}
    };
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

    function sharePop(jbtn,jpop){
        $(jbtn).hover(function(event){
            $(jpop).show();
        },function(){
            $(jpop).hide();
        });
    }
    sharePop("#j-share","#j-m_share1");
    /**
     * 搜索框处理
     */
	
    var searchVal = rand_search_val[Math.floor(Math.random() * rand_search_val.length)];
	$(".m-search .seh_t").val(searchVal);
    $(".m-search .seh_t").focus(function(){
        $(".m-search-tip").show();
        if($(this).attr("data-defalut") == "1" || $(this).val() == searchVal){
            $(this).val("");
        }
    });
    $(".m-search .seh_t").blur(function(){
        if($(this).val()!= searchVal && $(this).val() != "" && $(this).attr("data-defalut") == "1"){
            $(this).attr("data-defalut","0");
        }else if($(this).val() == ""){
            $(this).attr("data-defalut","1");
            $(this).val(searchVal);
        }
        setTimeout(function(){
            $(".m-search-tip").hide();
        },100);
    });
    SecList(".m-search .sec-area","#themelist");
    $(document).bind("click", function () {
        $(".m-search .sec-area").removeClass("sec-area_sec");
    });
    /**
     * 头部微信hover
     */
    $(".link-weixin").hover(function(){
        $(this).find(".img").show();
        $("#j-m_share1").hide();
    },function(){
        $(this).find(".img").hide();
    });
    /**
     *返回顶部
     */
    ue.gototop({
        relative : $(".fixed_wrapper"),//相对定位的对象
        target : $("#j-fixed_menu"),//gototop对象
        top : 293,//距离底部的位置
        left : 20,//距离相对定位对象的水平位置
        fade : false,
        btn : $("#j-fixed_menu .gototop"),
        mini_width : 1024,
        mini : "mini_fixed_menu"
    });
    $(".fixed_wrapper .go-phone").click(function(e){
        //e.preventDefault();
    });
    /**
     *返回顶部
     */
    ue.gototop({
        relative : $(".fixed_wrapper"),//相对定位的对象
        target : $("#j-fixed_menu2"),//gototop对象
        top : 250,//距离底部的位置
        right : 20,//距离相对定位对象的水平位置
        fade : false,
        btn : $("#j-fixed_menu .gototop")
    });
    /**
     * 侧边导航栏手机二维码显示
     */
    $("#j-fixed_menu .phone").hover(function(){
        $(this).find(".img").show();
    },function(){
        $(this).find(".img").hide();
    });
    /**
     * 锚点定位
     */
    $(".j-anchor").click(function(e){
        e.preventDefault();
        var gotodiv = $(this).attr("href");
        var ot = $(gotodiv).offset().top;
        if($.browser.webkit){
            $("body").stop().animate({"scrollTop":ot},500);
        }
        else{
            $(document.documentElement || document.body).stop().animate({"scrollTop":ot},500);
        }
    });
    /**
     * ie6
     */
    var ie6 = $.browser.msie && $.browser.version == "6.0";
    if (ie6) {
        $("button").hover(function(){
            $(this).addClass("hover");
        },function(){
            $(this).removeClass("hover");
        });
    }
    /**
     * 关闭左侧导航
     */
    $(".j-close-fmenu").click(function(e){
        e.preventDefault();
        $(".fixed_menu2").hide();
    })
});

function addfav(title,url){
    title = title || "4399儿歌故事-www.4399er.com";
	url = url || "http://www.4399er.com";
    try{
        window.external.AddFavorite(url, title);
    }catch(e){
        try{
            window.sidebar.addPanel(title, url, '');
        }catch(e){
            alert("您的浏览器不支持该功能,请使用Ctrl+D收藏本页");
        }
    }
    return false;
} 

function setSlideTitle(tit){
    var _href = this.current.find("a").attr("href"),
        title = this.current.find("a").attr("title");
    var $slideA = $(tit);
    $slideA.attr('href',_href);
    $slideA.html(title);
    $(tit).fadeIn(200);
}

function SecList(item,list){
    $(item).click(function(e){
        var e = e || window.event;
        if($(list).is(":hidden")){
            $(list).show();
            $(this).addClass("sec-area_sec");
        }else{
            $(list).hide();
            $(this).removeClass("sec-area_sec");
        }
        e.stopPropagation();
    });
    var liItem = $(list).find("a");
    $(liItem).click(function(e){
        e.preventDefault();
        $("#sec-label").text($(this).text());
		$("#ipt_type").val($(this).attr("value"));
    });
}

 function vote($num, $addOne, bottomNUm1, bottomNUm2) {
    $addOne.show();
    $addOne.animate({"bottom": bottomNUm1 + "px"}, 300, function () {
        $addOne.fadeOut(function () {
            $addOne.css({"bottom": bottomNUm2 + "px"});
        });
        $num.text(Number($num.text()) + 1);
    });
};
var page = page || {};
page.indexPage = {
    init:function(){
        var This = this;
        /**
         * 轮播图
         */
        This.slide();
        /**
         * 排行榜hover
         */
        This.liHover();
        /**
         * 点赞
         */
        This.addPraize();
        /**
         * 观看历史记录
         */
        This.lookHistory();
        /**
         * 查看子菜单
         */
        This.lookMenu();
        /**
         * 查看子菜单
         */
        This.changeSkin();
    },
    slide:function(){
        /**
         * 轮播图1（图+标题）
         */
        ue.marquee({
            hovertarget : "#j_slide_of1",
            target : '#j_slide_of1 .slide_ofinside ul',
            items : '#j_slide_of1 .slide_ofinside li',
            gotobtn : "#j_slide_of1 .slidefocus li",
            delay : 2000,
            speed : 500,
            visiblenum : 1,
            scrollnull : 1,
            currentclass : "cur",
            autoplay : true,
            trigger:"mouseover",
            afterSlide : function(){
                setSlideTitle.call(this,"#j-title1");
            },
            beforeSlide : function(){
                $("#j-title1").fadeOut(300);
            },
            mode : 1,
            direction : 0
        });
        ue.marquee({
            hovertarget : "#j_slide_of2",
            target : '#j_slide_of2 .slide_ofinside .slide_list',
            items : '#j_slide_of2 .slide_ofinside .list-img-txt',
            gotobtn : "#j_slide_of2 .slidefocus li",
            prevbtn : "#prev2",
            nextbtn : "#next2",
            delay : 2400,
            speed : 600,
            visiblenum : 1,
            scrollnull : 1,
            currentclass : "cur",
            autoplay : false,
            afterSlide : function(){
                var that = this;
                ue.lazyimg({
                    target:that.items
                });
            },
            mode : 1,
            direction : 0
        });
        ue.marquee({
            hovertarget : "#j_slide_of3",
            target : '#j_slide_of3 .slide_ofinside .slide_list',
            items : '#j_slide_of3 .slide_ofinside .list-img-txt',
            gotobtn : "#j_slide_of3 .slidefocus li",
            prevbtn : "#next3",
            delay : 2000,
            speed : 500,
            visiblenum : 1,
            scrollnull : 1,
            currentclass : "cur",
            autoplay : false,
            afterSlide : function(){
                var that = this;
                ue.lazyimg({
                    target:that.items
                });
            },
            mode : 0,
            direction : 1,
            fade:1
        });
        $("#next3").click(function(){
            var $this = this;
            $($this).addClass("next-cur");
            setTimeout(function(){
                $($this).removeClass("next-cur");
            },500);
        });
        for(var i = 4; i < 7; i++){
            ue.marquee({
                hovertarget : "#j_slide_of" + i,
                target : '#j_slide_of' + i  + ' .slide_ofinside .slide_list',
                items : '#j_slide_of' + i  + '  .slide_ofinside .list-img-txt',
                gotobtn : '#j_slide_of' + i  + ' .slidefocus span',
                prevbtn : "#prev" + i,
                nextbtn : "#next" + i,
                delay : 2000,
                speed : 500,
                visiblenum : 1,
                scrollnull : 1,
                currentclass : "cur",
                autoplay : false,
                afterSlide : function(){
                    var that = this;
                    var imgs = $(that.current).find("img");
                    for( var i = 0, len = imgs.length; i < len; i++ ){
                        var  img = $(imgs[i]);
                        if (!!img.attr('lazy-src')){
                            img.attr("src", img.attr('lazy-src')).removeAttr("lazy-src");
                        }
                    }
                },
                mode : 1,
                direction : 0
            });
        }
        ue.marquee({
            hovertarget : "#j_slide_of7",
            target : '#j_slide_of7 #slide_list',
            items : '#j_slide_of7 #slide_list .slide-item',
            gotobtn : "#j_slide_of7 .slidefocus li",
            visiblenum : 1,
            scrollnull : 1,
            currentclass : "cur",
            autoplay : false,
            trigger:"click",
            afterSlide : function(){
                var that = this;
                ue.lazyimg({
                    target:that.items
                });
            },
            mode : 1,
            direction : 0
        });
    },
    liHover:function(){
        $(".j-rank li").hover(function(){
            if(!$(this).hasClass("top")){
                $(this).addClass("cur").siblings("li").removeClass("cur");
            }
        });
    },
    addPraize:function(){
		//获取票数
		var ids = '';
		$(".list-txt-img4 li").each(function(i){
			ids += $(this).attr("zid") + ',';
		});
		//ajax请求数据
		$.ajax({
			type:'get',
			url:'/cookie/ajax_4399er_xzt.php?r='+ Math.random(),
			data:'action=pc2017_live&ids=' + ids,
			success:function(msg){
				$("#liulancishu").text(msg);
				var arr = msg.split("|");
				$(".list-txt-img4 li").each(function(i){
					$(this).find(".txt").text(arr[i + 1]);
				});
			}
		});

        $(".j-praize").click(function(e){
            e.preventDefault();
            if($(this).hasClass("btn-gray")){
                return false;
            }
			var _this = $(this);
			var id = _this.parent().attr("zid");
			//提交数据
			$.ajax({
				type:'get',
				url:'/cookie/ajax_4399er_xzt.php?r='+ Math.random(),
				data:'action=pc2017_live_up&id=' + id,
				success:function(msg){ }
			});
            $(this).addClass("btn-gray");
            var $num = $(this).find(".txt");
            var $addOne = $(this).find(".add-one");
            vote($num,$addOne, 50, 20);
        });
    },
    lookHistory:function(){
		//读取历史记录
		function read_history(){
			var str = $.cookie('haizicookie');
			if(str){
				var html = '';
				var arr = str.split(";");
				$.each(arr, function(key, val){
					var v = val.split("|");
					if(v.length >= 4){
						v.splice(0, 1);
					}
					html += '<li> <a target="_blank" href="' + v[1] + '" class="name">' + v[0] + '</a> <span class="special">' + v[2] + '</span> </li>';
				});
				$(".b-look-history .list-txt").html(html);
				$(".b-look-history").show();
				$(".no-history").hide();
			}else{
				$(".b-look-history").hide();
				$(".no-history").show();
			}
		}
		
		//鼠标滑过显示历史记录
        $(".j-look-history").hover(function(){
            if(!($.browser.msie && $.browser.version == "6.0")){
				read_history();
                $(".m-look-history").show();
            }
        },function(){
            if(!($.browser.msie && $.browser.version == "6.0")){
                $(".m-look-history").hide();
            }
        });
        $(".j-look-history .txt").click(function(e){
            e.preventDefault();
        });
        $(".m-look-history").on("click",".name",function(e){
            setTimeout(function(){
                $(".m-look-history").hide();
            },300);
        });
        $(".j-look-history").click(function(e){
			read_history();
            if($.browser.msie && $.browser.version == "6.0") {
                e.stopPropagation();
                $(".m-look-history").toggle();
            }
        });
        $("body").on("click",function(){
            if($.browser.msie && $.browser.version == "6.0") {
                $(".m-look-history").hide();
            }
        });
		//清空历史记录
		$(".btn-clear").click( function(e){
            e.preventDefault();
            e.stopPropagation();
			$.cookie('haizicookie', null, {expires: 30, path: '/', domain: 'www.4399er.com'});
			$(".b-look-history .list-txt").html("");
			$(".b-look-history").hide();
			$(".no-history").show();
		});
    },
    lookMenu:function(){
        $(".j-sub-menu").hover(function(){
            $(this).find(".m-sub-menu").show();
        },function(){
            $(this).find(".m-sub-menu").hide();
        });
    },
    changeSkin:function(){
		//头部换白天黑夜背景
		var now = new Date();
		var cur_skin = 0;
		if($.cookie('cur_skin') != null){//用户设置的皮肤
			cur_skin = $.cookie('cur_skin');
		}else{
			if(now.getHours() > 6 && now.getHours() < 18){//6点至18点白天皮肤
				cur_skin = 0;
			}else{//夜晚皮肤
				cur_skin = 1;
			}
		}
		$("#m-wrap").addClass("skin-style" + cur_skin);
		
		//点击切换皮肤
        $(".j-skin").click(function(e){
            e.preventDefault();
			$("#m-wrap").removeClass("skin-style" + cur_skin);
			if(cur_skin == 0){
				cur_skin = 1;
			}else{
				cur_skin = 0;
			}
			$.cookie('cur_skin', cur_skin, {expires: 30, path: '/', domain: '.4399er.com'});
            $("#m-wrap").addClass("skin-style" + cur_skin);
        });
    }
};
function tab(tid, tidtag, bid, bidtag) {
    var td = document.getElementById(tid);
    var tdli = td.getElementsByTagName(tidtag);
    var bd = document.getElementById(bid);
    //var bdli = bd.getElementsByTagName(bidtag);
    var bdli = $(bidtag);
    var cur = "cur";
    var indexValue = function(self, obj) {
        for (i = 0; i < obj.length; i++) {
            if (obj[i] == self) {
                return i
            }
        }
    };
    var index;
    tdli[0].className = "cur";
    for (l = 0; l < tdli.length; l++) {
        tdli[l].onmouseover = function() {
            index = indexValue(this, tdli);
            for (m = 0; m < tdli.length; m++) {
                tdli[m].className = (m == index) ? cur: "";
                bdli[m].style.display = (m == index) ? "block": "none"
            }
        }
    }
};

/*点击切换*/
function cktab(Tagid, Tsubid, Listid, Lsubid) {
    var tag = document.getElementById(Tagid);
    var tagli = tag.getElementsByTagName(Tsubid);
    //var tagli = $(Tsubid);
    var list = document.getElementById(Listid);
    //var listli = list.getElementsByTagName(Lsubid);
    var listli = $(Lsubid);
    var current = "current";
    var indexValue = function(self, obj) {
        for (j = 0; j < obj.length; j++) {
            if (obj[j] == self) {
                return j
            }
        }
    };
    var indexN;
    tagli[0].className = "current";
    for (p = 0; p < tagli.length; p++) {
        tagli[p].onclick = function() {
            indexN = indexValue(this, tagli);
            for (n = 0; n < tagli.length; n++) {
                tagli[n].className = (n == indexN) ? current: "";
                listli[n].style.display = (n == indexN) ? "block": "none"
            }
        }
    }
};

$(".original").attr("href", "http://huodong.4399.com/zaojiao/mmychz/");