/**
 * Created by 4399-1091 on 2017/6/27.
 */
$(function(){
	//加载样式
	//var css = '/css/index_with_mxs/ffl.css';
	//$("head").append('<link rel="stylesheet" type="text/css" href="' + css + '">');
	
    var data,level = 1,correctNum = 0,curTime = 0;
    var timmer;
    var countTime = function(){
        timmer = setInterval(function(){
            curTime++;
            var minute = Math.floor(curTime/60) < 10 ? '0' + Math.floor(curTime/60) : Math.floor(curTime/60);
            var second = Math.floor(curTime%60) < 10 ? '0' + Math.floor(curTime%60) : Math.floor(curTime%60);
            var time = minute + ':' + second;
            $(".m-game-card .time").text(time);
            if(curTime >= 1800){
                clearInterval(timmer);
            }
        },1000);
    };
	
	
	
    var addLi = function(level){
        /**
         * 模拟数据
         */
		var arr_random = [];
		var length = fanfanle.length;
		for(var i = 0; i < length; i ++){
			arr_random[i] = i;
		}
		arr_random.sort(function(){
			return Math.random() > 0.5 ? -1 : 1;
		});
		function rand_data(num){
			var data = [];
			for(var i= 0; i < num; i ++){
				data[i] = fanfanle[arr_random[i]];
			}
			return data;
		}
		 
        if(level == 1){
            data = rand_data(3);
        }else if(level == 2){
            data = rand_data(4);
        }else{
            data = rand_data(5);
        }
        data = data.concat(data);
        var cards = "";
        correctNum = 0;
        curTime = 0;
        $(".m-game-card .btn-next").addClass("btn-next-gray");
        $(".m-game-card .m-game").removeClass("m-game-success");
        $(".m-game-card .time").text("00:00");
        $(".m-game-card .m-success").hide();
        switch (level){
            case 1:
                $(".m-game-card .notice .txt").text("快来点击卡片翻牌，找出相同的卡片吧~");
                break;
            case 2:
                $(".m-game-card .notice .txt").text("难度加大了哦，快来翻牌吧~");
                break;
            case 3:
                $(".m-game-card .notice .txt").text("这可是最高难度，小帅知道你一定能完成的~");
                break;
        }


        for(var i = 0; i < 4 + level *2 ; i++){
            var n = Math.floor(Math.random() * (4 + level *2 - i));
            var imgFont = '/images/index_with_mxs/ffl/card'+ level +'.png';
            cards += '<li class="j-card" data-id='+ data[n].id
                +'><div class="f-card"> <img src="'+ imgFont
                +'" alt="'+ data[n].tit
                +'"> </div> <div class="b-card"> <a title="'+ data[n].tit+'" href="'+ data[n].url
                +'"> <img src="'+ data[n].imgSrc
                +'" alt="'+ data[n].tit
                +'"> </a> </div> </li>';
            data.splice(n,1);
        }
        $(".m-game-card .list-card").html(cards).attr("class","list-card level" + level);
        countTime();
    };
    $(".m-game-card .j-card-start").click(function(e){
        e.preventDefault();
        $(".m-game-card .m-start").hide();
        $(".m-game-card .m-going").show();
        addLi(1);
    });
    $(".m-game-card .btn-next").click(function(e){
        e.preventDefault();
        if($(".m-game-card .btn-next").hasClass("btn-next-gray")){
            return false;
        }
        level++;
        if(level == 4){
            level = 1;
            $(".m-game-card .btn-next").html("下一关");
        }
        addLi(level);
    });
    var cardId = -1,cardIndex = -1,playing = false;
    $(document).on("click",".m-game-card .j-card",function(){
        var $this = this;
        if(playing){
            return false;
        }
        if( !$($this).hasClass("active") && !playing){
            $($this).addClass("active");
            if(cardId != -1){
                if($($this).attr("data-id") != cardId){
                    playing = true;
                    setTimeout(function(){
                        $($this).removeClass("active");
                        $(".m-game-card .j-card").eq(cardIndex).removeClass("active");
                        cardId = -1;
                        cardIndex = -1;
                        playing = false;
                    },1000);
                }else{
                    cardId = -1;
                    cardIndex = -1;
                    playing = false;
                    correctNum++;
                    if(correctNum == 2 + level){
                        $(".m-game-card .btn-next").removeClass("btn-next-gray");
                        $(".m-game-card .m-game").addClass("m-game-success");
                        $(".m-game-card .notice .txt").text("恭喜找对所有卡组，点击图片观看精彩内容~");
                        setTimeout(function(){
                            $(".m-game-card .m-success").show();
                            $(".m-game-card .m-success img").attr("src","/images/index_with_mxs/ffl/success.gif");
                        },400)
                        setTimeout(function(){
                            $(".m-game-card .m-success").hide();
                            $(".m-game-card .m-success img").attr("src","");
                        },2100);
                        clearInterval(timmer);
                        if(level == 3){
                            $(".m-game-card .btn-next").text("再玩一次");
                        }
                    }
                }
            }else{
                cardId = $($this).attr("data-id");
                cardIndex = $($this).index();
            }
        }
    })
});