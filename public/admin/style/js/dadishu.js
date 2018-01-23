$(function () {

  var mouseDom = {
    mStart: $('.m-start', '#game_mouse'),
    mGoing: $('.m-going', '#game_mouse'),
    mCase1: $('.m-case1', '#game_mouse'),
    mCase2: $('.m-case2', '#game_mouse'),
    mCase3: $('.m-case3', '#game_mouse'),
    btnStart: $('.btn-start', '#game_mouse'),
    score: $('#mouse_score'),
    second: $('.second', '#mouse_time'),
    boxBoard: $('.box-board', '#game_mouse')
  };

  /**
   * [数组拷贝]
   * @param  {Array} arr [数据源]
   * @return {Array}     [复制数组]
   */
  var copy_array = function(arr) {
    var len = arr.length;
    var ret = [];
    for (var i = 0; i < len; i++) {
      ret.push(arr[i])
    }
    return ret;
  };

  /**
   * [工具：返回（min, max）的随机整数]
   * @param min {number} 最小边界
   * @param max {number} 最大边界
   * @returns {number}
   */
  var random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  /**
   * [工具：产生一个数组，这个数组的里面的元素代表不同的游戏的元素]
   * @param  {object} options [产生数组的配置项，包含总时间、间隔时间、宝箱的数量、炸弹的数量]
   * @return {array}  arr       [返回一个数组，长度为指定时间内能够出现游戏元素的数量]
   */
  var create_hole_elems_info = function (options) {

    var total_num = Math.floor(options.times / options.interval),
        box_num   = options.box_num,
        mine_num  = options.mine_num,
        mouse_num = total_num - box_num - mine_num,

        STAND_FOR_MOUSE_NUM = 1,
        STAND_FOR_BOX_NUM   = 3,
        STAND_FOR_MINE_NUM  = 5;

    var arr_generator = function (len, item) {
      var arr = [];
      for (var i = 0; i < len; i++) {
        arr.push(item)
      }
      return arr;
    };

    var arr_mouse = arr_generator(mouse_num, STAND_FOR_MOUSE_NUM),
        arr_box   = arr_generator(box_num, STAND_FOR_BOX_NUM),
        arr_mine  = arr_generator(mine_num, STAND_FOR_MINE_NUM)

    return arr_mouse.concat(arr_box, arr_mine);
  };


  /**
   * [工具：数组乱序操作]
   * @param  {array} arr [description]
   * @return {array}     [description]
   */
  var shuffle = function (arr) {
    var len = arr.length;
    for(var i = 0; i < len - 1; i++){
      var idx = Math.floor(Math.random() * (len - i));
      var temp = arr[idx];
      arr[idx] = arr[len - i - 1];
      arr[len - i -1] = temp;
    }
    return arr;
  };


  /**
   * [工具：根据类型数字返回类型class，其中
   *       1代表地鼠，返回mouse-item，
   *       3代表宝箱，返回box-item
   *       5代表炸弹，返回mine-item
   *  ]
   * @param  {number} type_num [为1,3,5中的某个数字，其；其来源应该是create_hole_elems_info产生的数组中的某个元素]
   * @return {string}          [类型class]
   */
  var get_type_class = function (type_num) {

    var TYPE_SUFFIX = '-item';

    switch (type_num) {
      case 1:
        return 'mouse' + TYPE_SUFFIX;
      case 3:
        return 'box' + TYPE_SUFFIX;
      case 5:
        return 'mine' + TYPE_SUFFIX;
    }
  };


  /**
   * [工具：根据类型数字和洞的索引返回位置class，其中
   *       1代表地鼠，返回pos1-x，被打中则返回pos2-x,x为1-9中的数字（9个洞的索引）
   *       3代表宝箱，返回pos3-x，被打中则返回pos4-x,x为1-9中的数字
   *       5代表炸弹，返回pos5-x，被打中则返回pos6-x,x为1-9中的数字
   *
   * 为什么有这么坑爹设计方法？
   *
   * 因为默认状态的和打中状态的大小不一致，导致了最后定位也会产生不一致的状况，
   * 所以不同的状态下，要有不同的class去控制游戏元素的位置，再一个也是为了兼容IE6
   * ]
   * @param  {number} type_num [1, 3, 5其中一个]
   * @param  {number} hole_num [1-9其中一个]
   * @return {string}          [包含位置信息的class]
   */
  var get_pos_class = function (type_num, hole_num) {

    var POS_PREFIX = 'pos';
    return POS_PREFIX + type_num + '-' + hole_num
  };


  /**
   * [实时更新分数]
   * @param  {number} type_num [类型数字]
   * @param  {function} box_callback [打中宝箱的回调]
   * @param  {object} score [分数对象]
   * @return {void}
   */
  var update_score = function(type_num, box_callback, score) {

    var $score = mouseDom.score,
        score_num = parseInt($score.text(), 10);

    switch (type_num) {
      case 1:
        score_num = score_num + 2;
        $score.text(score_num);
        break;
      case 3:
        score_num = score_num + 5;
        $score.text(score_num);
        box_callback && box_callback();
        break;
      case 5:
        score_num = score_num - 4;
        $score.text(score_num);
        break;
      default:
        return;
    }

    score.num = score_num;
  };


  /**
   * [盒子激活]
   * @param  {object} box [盒子对象]
   * @return {function}
   */
  var box_handle = function(box) {

    var $box_board = mouseDom.boxBoard;
    var box_num = box.num;
    return function() {
      if (box_num < 3) {
        for (var i = 0; i <= box_num; i++) {
          $box_board.find('.box').eq(i).addClass('active');
        }
        box_num++;
        box.num = box_num;
      }
    };
  };


  /**
   * [生成场景3资源配置]
   * @param  {array}  arr [资源数组]
   * @param  {object}  store [空对象]
   * @param  {number | string} 配置资源存储标记
   * @return {object} [配置信息对象]
   */
  var generator_config = function(arr, store, key) {

    var len = arr.length,
        index = random(0, len - 1),
        item = null;

    item = arr.splice(index, 1)[0]; // 把随机取到配置项拿出数组
    store[key] = item; // 然后保存到store中
    len = arr.length; // 更新数组的长度缓存
    return {arr: arr, store: store, item: item}
  };


  /**
   * [case1（场景1）初始化处理函数]
   * @return {void}
   */
  var case1_handle = function() {

    var $score = mouseDom.mCase1.find('.score');
    var score_num = mouseDom.mGoing.find('.score').text();

    $score.text(score_num)
  };


  /**
   * [case2（场景2）初始化处理函数]
   * @param  {number} box_num [宝箱的数量]
   * @return {void}
   */
  var case2_handle = function(box_num) {

    var $score       = mouseDom.mCase2.find('.score'),
        $box         = mouseDom.mCase2.find('.link-box'),
        $case2_again = mouseDom.mCase2.find('.btn-again'),
        $case3_again = mouseDom.mCase3.find('.btn-again-s'),
        score_num    = mouseDom.mGoing.find('.score').text();

    // case3（场景3资源配置）
	  var config_arr = copy_array(dadishu);

    // 用于保存已经生成的资源配置项
    var store = {};

    // 初始化配置信息对象
    var config_obj = null;

    // 渲染分数
    $score.text(score_num);

    // 渲染宝箱状态
    for (var i = 0; i < box_num; i++) {
      $box.eq(i).addClass('active');
    }

    // events
    $box.off('click').on('click', function(e) {
      e.preventDefault();

      var $this = $(this),
          box_index = $this.index(),
          is_active = $this.hasClass('active'), // 是否是激活状态
          is_click = $this.hasClass('clicked'); // 是否被点击过

      // 如果未点击，则给予配置信息
      if (!is_click) {
        config_obj = generator_config(config_arr, store, box_index);
      }

      if (is_active) {
        // 更新宝箱点击状态
        $this.addClass('clicked');

        // 跳转case3函数
        case3_handle(store[box_index]);
      }
    });

    // events
    $case3_again.off('click.reset').on('click.reset', function(e) {
      e.preventDefault();
      var rest = [];
      for (var key in store) {
        rest.push(store[key])
      }
      config_arr = config_arr.concat(rest);
      store = {};
      config_obj = null;
    });
    $case2_again.off('click.reset').on('click.reset', function(e) {
      e.preventDefault();
      var rest = [];
      for (var key in store) {
        rest.push(store[key])
      }
      config_arr = config_arr.concat(rest);
      store = {};
      config_obj = null
    });
  };


  /**
   * [case3（场景3）初始化渲染处理函数]
   * @param  {object} config [包含场景3的各种资源对象]
   * @return {void}
   */
  var case3_handle = function(config) {

    var $img1 = mouseDom.mCase3.find('.src1'),
        $img2 = mouseDom.mCase3.find('.src2'),
        $link = mouseDom.mCase3.find('.link-img'),
        $text = mouseDom.mCase3.find('.txt');

    try {
      $img1.attr('src', config.src1);
      $img2.attr('src', config.src2);
      $link.attr('href', config.href);
      $text.text(config.text);
    } catch (e) {
      return;
    }

    mouseDom.mCase2.hide();
    mouseDom.mCase3.show({duration: 400});
  };


  /**
   * [生成一个游戏元素对象]
   * @param  {number} type_num [代表类型的数字]
   * @param  {number} hole_num [代表位置信息的数字]
   * @return {object}          [游戏元素对象]
   */
  var Elements = function (type_num, hole_num) {

    var typeClass = get_type_class(type_num);
    var posClass = get_pos_class(type_num, hole_num);

    // 命名：o代表对象，E为element的首字母
    // isBeat 是否被打中
    var oE = {
      typeClass: typeClass,
      posClass: posClass,
      template: '<div class="ele"></div>',
      children: {
        hammer: {
          className: 'icon-hammer',
          template: '<i class="icon-hammer"></i>'
        },
        light: {
          className: 'light',
          template: '<i class="light"></i>'
        }
      },
      isBeat: false,
      destroyed_delay: 500,
      destroyed_timer: null
    };

    /**
     * [游戏元素初始化创建]
     * @return {object} [游戏元素对象，为jQuery对象]
     */
    oE.create = function() {

      var ele_template = this.template,
          hammer_template = this.children.hammer.template;
      hammer = $(hammer_template);

      // 创建元素并插入锤子
      $ele = $(ele_template).append(hammer);

      // 配置类型信息和位置信息
      $ele
          .addClass(this.typeClass)
          .addClass(this.posClass);

      return $ele
    };

    /**
     * [游戏元素挂载]
     * @param {object} [游戏元素对象，为jQuery对象]
     * @return {void}
     */
    oE.mounted = function ($ele) {

      var _this_ = this;

      var $wrap = mouseDom.mGoing.find('.main'),
          hammer_class = _this_.children.hammer.className;

      $wrap.append($ele);

      // 挂载前重置isBeat状态
      _this_.isBeat = false;

      // 挂载前绑定hover事件 （可移到__init__函数中在绑定也可以）
      $ele.hover(function () {
        $(this).find('.' + hammer_class).show();
      }, function () {
        $(this).find('.' + hammer_class).hide();
      });
    };

    /**
     * [游戏元素状态更新]
     * @param  {object} $ele [游戏元素对象，为jQuery对象]
     * @return {void}
     */
    oE.update = function($ele) {

      var _this_ = this;
      var light_template = _this_.children.light.template;
      var $light = $(light_template);

      // 要重新计算相应的分数 （更新分数属于游戏元素对象 而已还要依赖box_num 所以放这里是非常不合适的 暂时注释提醒）
      // update_score(type_num);

      // 移除旧的状态
      $ele.removeClass(_this_.typeClass);
      $ele.removeClass(_this_.posClass);

      // 更新状态
      _this_.typeClass = get_type_class(type_num) + '-beat';
      _this_.posClass = get_pos_class(++type_num, hole_num);

      $ele.addClass(_this_.typeClass);
      $ele.addClass(_this_.posClass);

      // 加入光效
      $ele.append($light)
    }

    /**
     * [游戏元素销毁]
     * @param  {object} $ele [游戏元素，为jQuery对象]
     * @return {void}
     */
    oE.destroyed = function ($ele) {

      var _this_ = this;

      var height = $ele.outerHeight(), // 游戏元素的高度
          top    = $ele.position().top, // 游戏元素top值
          total  = height + top;

      var delay = _this_.destroyed_delay;

      _this_.destroyed_timer = setTimeout(function () {

        // 解绑click事件
        $ele.unbind('click');

        // 清除光效和锤子
        $ele.empty();

        // 动画消失
        $ele.animate({
          height: 0,
          top: total
        }, function () {
          // 清除自身
          $ele.remove()
        });

        clearTimeout(_this_.destroyed_timer);
      }, delay)
    };

    return oE;
  };

  /**
   * [生成一个全局游戏对象]
   * @return {object} [游戏对象]
   */
  var Games = function () {

    var oG = {
      options: {
        times: 60000,
        interval: 1500,
        box_num: 3,
        mine_num: 8
      },
      score: {
        className: 'score',
        num: 0
      },
      box: {
        className1: 'box',
        className2: 'link-box',
        num: 0
      },
      countdown_timer: null,
      game_timer: null
    };

    /**
     * [游戏状态初始化，各项归零重置]
     * @return {void}
     */
    oG.init = function() {
      var _this_ = this;

      // 时间为60s
      mouseDom.second.text(_this_.options.times / 1000);

      // 分数置为0， case1, case2的分数都要为0
      _this_.score.num = 0;
      mouseDom.score.text(_this_.score.num);
      mouseDom.mCase1.find('.' + _this_.score.className);
      mouseDom.mCase2.find('.' + _this_.score.className).text(_this_.score.num);

      // 盒子累加器数量为0，并且右侧模板的盒子数量状态要发生改变
      _this_.box.num = 0;
      mouseDom.boxBoard.find('.' + _this_.box.className1).removeClass('active');
      mouseDom.mCase2.find('.' + _this_.box.className2)
          .removeClass('clicked')
          .removeClass('active');

      // 开始倒计时
      clearInterval(_this_.countdown_timer);
      clearInterval(_this_.game_timer);
      _this_.countdown();
    }

    /**
     * [时钟倒计时]
     * @return {void}
     */
    oG.countdown = function() {

      var _this_ = this;
      var $second = mouseDom.second;
      var account = _this_.options.times / 1000;

      _this_.timer = setInterval(function () {
        account--;
        if (account >=0) {
          $second.text(account)
        } else {
          clearInterval(_this_.timer);
          return;
        }
      }, 1000);
    };

    /**
     * [游戏结束后的页面状态跳转]
     * @param  {num} box_num [0到3]
     * @return {void}
     */
    oG.redirect = function(box_num) {
      switch (box_num) {
        case 0:
          mouseDom.mGoing.hide();
          mouseDom.mCase1.show({duration: 400});
          // 执行跳转到case1的初始化处理函数
          case1_handle();
          break;
        case 1:
        case 2:
        case 3:
          mouseDom.mGoing.hide();
          mouseDom.mCase2.show({duration: 400});
          // 执行跳转到case1的初始化处理函数
          case2_handle(box_num);
          break;
      }
    }

    /**
     * [游戏开始]
     * @return {void}
     */
    oG.start = function() {

      var _this_ = this;

      // 乱序乱序类型数组
      var shuffle_arr = shuffle(create_hole_elems_info(_this_.options));

      var account = 0,
          interval = _this_.options.interval,
          max_num = _this_.options.times / interval;

      // 界面显隐
      mouseDom.mCase1.hide();
      mouseDom.mCase2.hide();
      mouseDom.mCase3.hide();
      mouseDom.mStart.hide();
      mouseDom.mGoing.show({duration: 400});

      // 初始化
      _this_.init();

      // 打中宝箱的回调
      var box_callback = box_handle(_this_.box);

      // 游戏元素的一个完整生命周期展现
      _this_.game_timer = setInterval(function () {

        if (account < max_num) {

          var pos_num = random(1, 9),
              type_num = shuffle_arr[account++];

          // 生成游元素对象
          var ele = Elements(type_num, pos_num),
              $ele = ele.create();

          // events
          $ele.one('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            ele.update($this);
            update_score(type_num, box_callback, _this_.score);
          });

          // 挂载
          ele.mounted($ele);

          // 延迟销毁
          var inner_timer = setTimeout(function () {
            ele.destroyed($ele)
          }, 500);
        } else {

          account = 0;
          clearInterval(_this_.game_timer);
          clearTimeout(inner_timer);

          // 跳转
          _this_ .redirect(_this_.box.num);
        }

      }, interval);
    };

    return oG;
  };


  /**
   * [游戏启动函数]
   */
  var __main__ = function() {

    // 生成游戏对象
    var game = Games();

    // events
    mouseDom.mStart.find('.btn-start').on('click', function(e) {
      e.preventDefault();
      game.start();
    });
    mouseDom.mCase1.find('.btn-again').on('click', function(e) {
      e.preventDefault();
      game.start();
    });
    mouseDom.mCase2.find('.btn-again').on('click', function(e) {
      e.preventDefault();
      game.start();
    });
    mouseDom.mCase3.find('.btn-again-s').on('click', function(e) {
      e.preventDefault();
      game.start();
    });
    mouseDom.mCase3.find('.btn-open').on('click', function(e) {
      e.preventDefault();
      mouseDom.mCase3.hide();
      mouseDom.mCase2.show({duration: 400})
    });
  };

  __main__();
});
