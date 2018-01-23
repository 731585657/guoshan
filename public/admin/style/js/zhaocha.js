/**
 * 猫小帅来找茬
 */
 
//随机获取三组数据
function rand_arr(arr){
	var arr_num = [],
		arr_tmp = [],
		arr_res = [];
	
	for(var i = 0; i < 6; i ++){
		arr_num[i] = i;
	}
	
	var len = arr_num.length;
	for(var i = 0; i < 6; i ++){
		var randIndex = Math.floor(Math.random() * len);
		arr_tmp[i] = arr_num.splice(randIndex, 1);
		len --;
	}

	for(var i in arr_tmp){
		var id = parseInt(arr_tmp[i]);
		arr_res[i] = arr[id];
	}
	
	return arr_res;
}

var zhaocha_tmp = rand_arr(zhaocha);

(function($) {
	var arrDiff = [];
	var arrScenes = [];
	
	for(var i in zhaocha_tmp){
		//初始化三张图
		//alert(i);
		if(i < 3){
			//alert($(".entry-item").eq(i).find("img"));
			//alert(zhaocha_tmp[i][0].replace("/uploads", "http://zjimg.5054399.com"));
			//$(".entry-item").eq(i).find("img").attr("src", zhaocha_tmp[i][0].replace("/uploads", "http://zjimg.5054399.com"));
			$(".entry-item").eq(i).html('<a href="" class="png_img"> <img src="' + zhaocha_tmp[i][0].replace("/uploads", "http://zjimg.5054399.com") + '" alt="" class="png_img"> </a>');
		}
		
		//转换数据结构
		arrDiff[i] = {
			errorIndex: [zhaocha_tmp[i][1], zhaocha_tmp[i][2], zhaocha_tmp[i][3]],
			src: [
				zhaocha_tmp[i][4].replace("/uploads", "http://zjimg.5054399.com"), 
				zhaocha_tmp[i][5].replace("/uploads", "http://zjimg.5054399.com")
			]
		}
		
		arrScenes[i] = {
			text: zhaocha_tmp[i][6],
			src: zhaocha_tmp[i][7].replace("/uploads", "http://zjimg.5054399.com"),
			alt: zhaocha_tmp[i][8],
			href: zhaocha_tmp[i][9]
		}
	}
	
  var diffEle = {
    game: $('#game_diff'),
    start: $('.m-start', '#game_diff'),
    going: $('.m-going', '#game_diff'),
    end: $('.m-end', '#game_diff'),
    entry: $('.entry', '#game_diff'),
    imgGroup: $('.img-group', '#game_diff'),
    btnChange: $('#btn_change'),
    btnNext: $('#btn_next'),
    chooseList: $('.choose-list', '#game_diff'),
    iconComplete: $('.i-complete', '#game_diff')
  };
  // 随机数
  var random = function(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
  };

  var minNum = 0,
      maxNum = 5,
      num = 0; // 选中累加器
	var newIndex = 0;
	var changeAction = function() {
		newIndex ++;
		if(newIndex >= 6){
			newIndex = 0;
		}
    var imgs = diffEle.imgGroup.find('.img-game'),
        chooseItems = diffEle.chooseList.find('.choose-item');
    diffEle.start.hide();
    diffEle.end.hide();

    // 添加图片
    imgs.each(function(i, e) {
      $(e).attr('src', arrDiff[newIndex].src[i])
    });
	
	$("#game_diff .choose-list a").attr("target", "_self");

    // 复位找茬位置
    chooseItems.each(function() {
      $(this).find('.i-hook').hide();
      if ($(this).hasClass('err')) {
        $(this).removeClass('err');
      }
    });
    diffEle.iconComplete.hide();

    // 复位num
    num = 0;

    // 标记错误块
    var arrErrorIndex = arrDiff[newIndex].errorIndex;
    var len = arrErrorIndex.length;
    for (var i = 0; i < len; i++) {
      chooseItems.eq(arrErrorIndex[i]).addClass('err');
    }
    // 出现游戏画面
    diffEle.going.show({
      duration: 400,
      easing: 'swing'
    });
  };
  // 点击三个入口其中一个，进入找茬页面
  diffEle.start.on('click', '.entry-item', function(e) {
    e.preventDefault();
	newIndex = $(this).attr("index");
	newIndex --;//拟补changeAction中的++增加的编号
    changeAction(arrDiff);
  });
  // 点击换一换随机转换
  diffEle.btnChange.on('click', function(e) {
    e.preventDefault();
    changeAction(arrDiff);
  });
  // 点击下一关随机转换
  diffEle.btnNext.on('click', function(e) {
    e.preventDefault();
    changeAction(arrDiff);
  });

  // 隐藏游戏画面，出现转场
  var showTransition = function() {
    var index = newIndex;//random(minNum, maxNum);
    diffEle.start.hide();
    diffEle.going.hide();
    diffEle.end.find('.scenes-bg').attr('src', arrScenes[index].src);
    diffEle.end.find('.tip').text(arrScenes[index].text);
    diffEle.end.find('.scenes').attr('href', arrScenes[index].href);

    diffEle.end.show({
      duration: 400,
      easing: 'linear'
    })
  };

	// 点击开始挑选不同处
	diffEle.chooseList.on('click', '.choose-item', function(e) {
		e.preventDefault();
		var $this = $(this);
		if ($this.hasClass('err')) {
		  $this.find('.i-hook').show({
			duration: 400,
			easing: 'linear'
		  });
		  $this.removeClass('err');
		  num++;
		}
		if (num >= 3) {
			diffEle.btnChange.off('click');
			diffEle.iconComplete
				.show({
					duration: 400,
					easing: 'swing',
					complete: function() {
						var timer = setTimeout(function() {
							// 复位找茬位置
							diffEle.chooseList.find('.choose-item').each(function() {
								$(this).find('.i-hook').hide();
							});
							diffEle.iconComplete.hide();
							showTransition();
							// 恢复换一换绑定
							diffEle.btnChange.on('click', function(e) {
								e.preventDefault();
								changeAction();
							});
						}, 800)
					}
				});
			num = 0;
		}
	})
})(jQuery);