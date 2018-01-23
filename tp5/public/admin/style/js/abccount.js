$(document).ready(function(){
	if(location.href.indexOf("4399.com") >= 0){
		var beianhao = "ICP证闽B2-20040099";
	}else{
		var beianhao = "闽ICP备14017048号-7";
	}
    $(".footer").html('<a target="_blank" rel="external nofollow" href="http://www.4399er.com/contact.html">联系我们</a> | <a target="_blank" rel="external nofollow" href="http://www.4399er.com/disclaimer.html">免责声明</a> | <a target="_blank" href="http://www.4399er.com/map.html">网站地图</a> | <a target="_blank" rel="external nofollow" href="http://www.4399er.com/copyright.html">版权保护投诉声明</a> | <a target="_blank" rel="external nofollow" href="http://www.4399er.com/uploadinfo.html">儿歌故事作品上传须知</a><br />\n\
    本站儿歌、故事等相关内容均来自网友分享和上传，作品版权归作者所有，如果无意之中侵犯了您的版权，请来信告知，本站将在3个工作日内删除<br />\n\
    <a target="_blank" href="http://www.miitbeian.gov.cn/" rel="external nofollow">'+beianhao+'</a> 如果有意见和建议， 请点击至<a target="_blank" href="http://huodong.4399.com/zaojiao/faq_suggestion/" rel="external nofollow">（反馈报错箱）</a>或E-mail至<a target="_blank" href="mailto:4399er@4399inc.com" rel="external nofollow">4399er@4399inc.com</a><br />\n\
    Copyright © 2004 - 2018 4399er.com All Rights Reserved. 厦门纯游互动科技有限公司 版权所有<br />');
	
	$(".dm-footer, .m-footer").html('<div class="dm-bottombar">\
		<div class="link">\
		<a target="_blank" href="http://www.4399er.com/contact.html" rel="external nofollow">联系我们</a> | <a target="_blank" href="http://www.4399er.com/disclaimer.html" rel="external nofollow">免责声明</a> | <a target="_blank" href="http://www.4399er.com/map.html">网站地图</a> | <a target="_blank" href="http://www.4399er.com/copyright.html" rel="external nofollow">版权保护投诉声明</a> | <a target="_blank" href="http://www.4399er.com/uploadinfo.html" rel="external nofollow">儿歌故事作品上传须知</a>\
		</div>\
		<p>本站儿歌、故事等相关内容均来自网友分享和上传，作品版权归作者所有，如果无意之中侵犯了您的版权，请来信告知，本站将在3个工作日内删除</p>\
		<p><a target="_blank" href="http://www.miitbeian.gov.cn/" rel="external nofollow">'+beianhao+'</a> 如果有意见和建议， 请点击至<a target="_blank" href="http://huodong.4399.com/faq_suggestion/" rel="external nofollow">（反馈报错箱）</a>或E-mail至<a target="_blank" href="mailto:4399er@4399inc.com" rel="external nofollow">4399er@4399inc.com</a>\
		</p>\
		<p>Copyright © 2004 - 2018 4399er.com All Rights Reserved.</p>\
	</div>');
	
	//替换左侧边栏
	function change_left_dialog(){
		$(".chat-area .area .bg").css("background", "url(/images/c_bg.png) no-repeat");
		if($(window).width() > 1152){
			$(".chat-area .area .bg").css("background-position", "0 0");
		}else{
			$(".chat-area .area .bg").css("background-position", "0 -312px");
		}
		$(".chat-area .area .bg-i").css("background", "url(/images/c_bg.png) no-repeat");
		$(".chat-area .area .bg-i").css("background-position", "0 -176px");
		$(".chat-area .yc_enter").css("background", "url(/images/enter_yc.png)");
		$(".chat-area .img").attr("src", "http://zjimg.5054399.com/allimg/170712/15_170712151258_1.png");
	}
	change_left_dialog();
	$(window).resize(change_left_dialog);
});

document.writeln('<script src="http://s25.cnzz.com/stat.php?id=4381083&web_id=4381083" language="JavaScript"></script>');
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F2eb9199e975e2f2a842a69f2ebf1e274' type='text/javascript'%3E%3C/script%3E"));
