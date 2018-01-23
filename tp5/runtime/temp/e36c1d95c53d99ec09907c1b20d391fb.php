<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:69:"D:\phpStudy\WWW\tp5\public/../application/index\view\index\index.html";i:1515395144;}*/ ?>
﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>智慧少儿</title>
  <base href="" />
  <link rel="stylesheet" type="text/css" href="/admin/style/css/zhihui.css" />
  <link rel="stylesheet" type="text/css" href="/admin/style/css/index.css">
  <link rel="stylesheet" type="text/css" href="/admin/style/css/style.css">

</head>

<body>

<!--头部s-->
<div class="banner"></div>
<div id="hd">
  <div class="wp">

  </div>

  <div id="nv">
    <ul>
      <li class="xnv_2"id="mn_forum" ><a href="http://www.youth.cn/" target="_blank">中国青年网</a></li>
      <li class="xnv_2"id="mn_forum" ><a href="http://qnzs.youth.cn/" target="_blank">青年之声</a></li>
      <li class="xnv_2"id="mn_forum" ><a href="<?php echo url('index'); ?>">智慧少儿</a></li>
      <li class="xnv_2"id="mn_forum" ><a href="<?php echo url('shequ'); ?>">少儿社区</a></li>
      <li class="xnv_2"id="mn_forum" ><a href="http://qnzs.youth.cn/hsll/" target="_blank">回声嘹亮</a></li>
      <li class="xnv_2"id="mn_forum" ><a href="http://qnzs.youth.cn/fwlm/" target="_blank">服务联盟</a></li>
      <li class="xnv_2"id="mn_forum" ><a href="http://qnzs.youth.cn/mdm/" target="_blank">面对面</a></li>
      <li class="xnv_2"id="mn_forum" ><a href="http://sns.qnzs.youth.cn/" target="_blank">心互动</a></li>

    </ul>

  </div>
  <div class="p_pop h_pop" id="mn_userapp_menu" style="display: none"></div>
  <div id="mu" class="cl"> </div>
</div>

<!--头部e--> 
<div class="bottombg"> 
  <div id="wp" class="wp">
   
    <div class="wp"> 
      
      <!--视频s-->
      <div id="diy1" class="area">
     
        <div id="frameuwwfuf" class=" frame move-span cl frame-1">
          <div id="frameuwwfuf_left" class="column frame-1-c">
            <div id="frameuwwfuf_left_temp" class="move-span temp"></div>
            <div id="portal_block_312" class="syhdpright block move-span">
      <div id="portal_block_312_content" class="dxb_bc">
        <div style="width:1204px;"class="module cl ml">
          <ul>
            <?php if(is_array($activity) || $activity instanceof \think\Collection || $activity instanceof \think\Paginator): $i = 0; $__LIST__ = $activity;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$row): $mod = ($i % 2 );++$i;?>
            <li class="rr1"> 
            <a href="<?php echo url('activity?id='.$row['id']); ?>" target="_blank">
            <img src="<?php echo $row['image']; ?>" width="288" height="216"  /></a>
              <p><a class="aa" href="<?php echo url('activity?id='.$row['id']); ?>" title="<?php echo $row['title']; ?>" target="_blank"><?php echo $row['title']; ?></a>
                <em><a href="" target="_blank"></a></em>
              </p>
            </li>

         <?php endforeach; endif; else: echo "" ;endif; ?>

          </ul>
        </div>
      </div>
            </div>
          </div>
        </div>
<!--视频e-->

       
        <div id="framejhHCBm" class="sytop3 frame move-span cl frame-1-1-1">
          <div class="title frame-title">
          <span class="titletext">成长资讯</span>
          <!-- <span class="subtitle">Growth consulting</span> --></div>


          <!--左边新闻s-->
          <div id="framejhHCBm_left" class="column frame-1-1-1-l">
            <div id="framejhHCBm_left_temp" class="move-span temp"></div>
            <div id="portal_block_320" class="rdzxleft block move-span">
              <div id="portal_block_320_content" class="dxb_bc">
                <div class="module cl xld">
                  <?php if(is_array($growing) || $growing instanceof \think\Collection || $growing instanceof \think\Paginator): $k = 0; $__LIST__ = $growing;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$gleft): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"1,3");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):if($k == '1'): ?>
                  <dl class="cl cc1">
                    <dd class="m">
                      <a href="<?php echo url('growing?id='.$gleft['id']); ?>" target="_blank"><img src="<?php echo $gleft['image']; ?>" width="340" height="237" /></a></dd>
                  </dl>
                  <?php else: ?>
                  <dl class="cl ssd cc2">
                    <dt ><a href="<?php echo url('growing?id='.$gleft['id']); ?>"  target="_blank"><?php echo $gleft['title']; ?></a></dt>
                    <a href="<?php echo url('growing?id='.$gleft['id']); ?>"  target="_blank"> <dd >  <?php echo msubstr($gleft['overview'],0,30); ?><span>[详情]</span></a>
                    </dd>
                  </dl>
                  <?php endif; endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>
              </div>
            </div>
          </div>
          <!--左边新闻e-->


          <!--中间新闻s-->
          <div id="framejhHCBm_center" class="column frame-1-1-1-c">
            <div id="framejhHCBm_center_temp" class="move-span temp"></div>
            <div id="portal_block_321" class="rdzxcenter block move-span">
              <div id="portal_block_321_content" class="dxb_bc">
                <div class="module cl xld">
                  <?php if(is_array($growing) || $growing instanceof \think\Collection || $growing instanceof \think\Paginator): $k = 0; $__LIST__ = $growing;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$gleft): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"4,7");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):?>
                  <dl class="cl cc1">
                    <dd class="m"><a href="" target="_blank">
                    <img src="<?php echo $gleft['image']; ?>" width="95" height="95"/></a></dd>
                    <dt><a href="<?php echo url('growing?id='.$gleft['id']); ?>"  target="_blank"><?php echo $gleft['title']; ?></a></dt>

                    <a href="<?php echo url('growing?id='.$gleft['id']); ?>" target="_blank"> <dd class="contan"> <?php echo msubstr($gleft['overview'],0,30); ?><span>
                    [详情]</span></dd></a>
                  </dl>
                  <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>
              </div>
            </div>
          </div>
          <!--中间新闻e-->

        <!--右边新闻s-->
          <div id="framejhHCBm_left" class="column frame-1-1-1-l">
            <div id="framejhHCBm_left_temp" class="move-span temp"></div>
            <div id="portal_block_320" class="rdzxleft block move-span">
              <div id="portal_block_320_content" class="dxb_bc">
                <div class="module cl xld">
                  <?php if(is_array($growing) || $growing instanceof \think\Collection || $growing instanceof \think\Paginator): $k = 0; $__LIST__ = $growing;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$gleft): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"8,10");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):if($k == '8'): ?>
                  <dl class="cl cc1">
                    <dd class="m">
                      <a href="<?php echo url('growing?id='.$gleft['id']); ?>" target="_blank"><img src="<?php echo $gleft['image']; ?>" width="340" height="237" /></a></dd>
                  </dl>
                  <?php else: ?>
                  <dl class="cl ssd cc2">
                    <a href="<?php echo url('growing?id='.$gleft['id']); ?>"  target="_blank"><dd > <?php echo msubstr($gleft['overview'],0,30); ?><span>[详情]</span></dd></a>


                  </dl>
                  <?php endif; endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>
              </div>
            </div>
          </div>
          <!--右边新闻e-->
         


        </div>
       
            <div id="frameYL8dtL" class="sytop4 frame move-span cl frame-2-1">
              <div id="frameYL8dtL_left" class="column frame-2-1-l">
                <div id="frameYL8dtL_left_temp" class="move-span temp"></div>
                <div id="framer4jsJV" class="sqlttop frame move-span cl frame-1">
                  <div class="title frame-title"><span class="titletext">研学联盟</span>
                  <!-- <span class="subtitle">studies</span> --></div>
                  <div id="framer4jsJV_left" class="column frame-1-c">
                    <div id="framer4jsJV_left_temp" class="move-span temp"></div>
                    <div id="portal_block_324" class="sysqlttp block move-span">
                      <div id="portal_block_324_content" class="dxb_bc">
                        <div class="module cl ml">
                          <ul>
                            <?php if(is_array($research) || $research instanceof \think\Collection || $research instanceof \think\Paginator): $k = 0; $__LIST__ = $research;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$rese): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"0,3");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):?>
                              <li class="rr1" style="width: 270px;">
                              <a href="<?php echo url('research?id='.$rese['id']); ?>" target="_blank">
                              <img src="<?php echo $rese['image']; ?>" width="270" height="326"/></a>
                             <p><a href="<?php echo url('research?id='.$rese['id']); ?>" target="_blank"><?php echo $rese['title']; ?></a></p>
                              </li>
                            <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="framefk6LLI" class="syrttjtop frame move-span cl frame-1-1">
                      <div id="framefk6LLI_left" class="column frame-1-1-l">
                        <div id="framefk6LLI_left_temp" class="move-span temp"></div>
                        <div id="portal_block_325" class="rettjian block move-span">
                          <div class="blocktitle title"><span class="titletext" style="float:;margin-left:px;font-size:;color: !important;">热点推荐</span><span class="subtitle" style="float:;margin-left:px;font-size:;color: !important;">hot</span></div>
                          <div id="portal_block_325_content" class="dxb_bc">
                            <div class="module cl xl xl1">
                              <ul>
                                <?php if(is_array($research) || $research instanceof \think\Collection || $research instanceof \think\Paginator): $k = 0; $__LIST__ = $research;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$rese): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"4,8");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):?>
                                  <li><em><a href="" target="_blank"></a></em>
                                  <a class="aa" href="<?php echo url('research?id='.$rese['id']); ?>" target="_blank"><?php echo $rese['title']; ?></a>
                                  </li>
                                <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="framefk6LLI_center" class="column frame-1-1-r">
                        <div id="framefk6LLI_center_temp" class="move-span temp"></div>
                        <div id="portal_block_326" class="rettjian zuixfb block move-span">
                          <div class="blocktitle title">
                          <span class="titletext" style="float:;margin-left:px;font-size:;color: !important;">最新发表</span>
                          <span class="subtitle" style="float:;margin-left:px;font-size:;color: !important;">new</span></div>
                          <div id="portal_block_326_content" class="dxb_bc">
                            <div class="module cl xl xl1">
                              <ul>
                                <?php if(is_array($research) || $research instanceof \think\Collection || $research instanceof \think\Paginator): $k = 0; $__LIST__ = $research;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$rese): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"9,13");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):?>
                                  <li><em><a href="" target="_blank"></a></em>
                                  <a class="aa" href="<?php echo url('research?id='.$rese['id']); ?>" target="_blank"><?php echo $rese['title']; ?></a>
                                  </li>
                                <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="frameYL8dtL_center" class="column frame-2-1-r">
                <div id="frameYL8dtL_center_temp" class="move-span temp"></div>
                <div id="framesxKoK4" class="remhttop frame move-span cl frame-1">
                  <div class="title frame-title"><span class="titletext">教育聚焦</span>
                  <!-- <span class="subtitle">focus</span> --></div>
                  <div id="framesxKoK4_left" class="column frame-1-c">
                    <div id="framesxKoK4_left_temp" class="move-span temp"></div>
                    <div id="portal_block_327" class="syrmhti block move-span">
                      <div id="portal_block_327_content" class="dxb_bc">
                        <div class="module cl xld">
                          <?php if(is_array($research) || $research instanceof \think\Collection || $research instanceof \think\Paginator): $k = 0; $__LIST__ = $research;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$rese): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"14,16");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):?>
                            <dl class="cl">
                              <dt><a href="<?php echo url('research?id='.$rese['id']); ?>" target="_blank"><?php echo $rese['title']; ?></a></dt>
                              <dd> <em class="sanbg"></em>
                                <p class="contan"> <?php echo msubstr($rese['overview'],0,40); ?>
                                  ...</p>
                              </dd>
                            </dl>
                          <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--社区秀场s-->
        <div id="frameRHe4tC" class="sytop5 frame move-span cl frame-2-1">
          <div class="title frame-title"><span class="titletext">社区秀场</span>
          <!-- <span class="subtitle">photo</span> --></div>
          <div id="frameRHe4tC_left" class="column frame-2-1-l">
            <div id="frameRHe4tC_left_temp" class="move-span temp"></div>
            <div id="portal_block_328" class="mtxcleft block move-span">
              <div id="portal_block_328_content" class="dxb_bc">
                <div class="module cl ml">
                  <ul>
                  <?php if(is_array($community) || $community instanceof \think\Collection || $community instanceof \think\Paginator): $k = 0; $__LIST__ = $community;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$comm): $mod = ($k % 2 );++$k;$_RANGE_VAR_=explode(',',"1,5");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):if($k == '1'): ?>
                      <li class="rr1" style="width: 428px;">
                      <a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank">
                      <img src="<?php echo $comm['image']; ?>" width="428" height="232" /></a>
                        <p><a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank"><?php echo $comm['title']; ?></a></p>
                      </li>
                    <?php else: if($k == '2'): ?>
                        <li class="rr2" style="width: 428px;">
                          <a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank">
                            <img src="<?php echo $comm['image']; ?>" width="428" height="232" /></a>
                          <p><a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank"><?php echo $comm['title']; ?></a></p>
                        </li>
                      <?php else: $_RANGE_VAR_=explode(',',"3,4");if($k>= $_RANGE_VAR_[0] && $k<= $_RANGE_VAR_[1]):?>
                            <li class="rr3" style="width: 428px;">
                              <a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank">
                                <img src="<?php echo $comm['image']; ?>" width="428" height="232"/></a>
                              <p><a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank"><?php echo $comm['title']; ?></a></p>
                            </li>
                        <?php endif; if($k == '5'): ?>
                            <li class="rr5" style="width: 428px;">
                              <a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank">
                                <img src="<?php echo $comm['image']; ?>" width="428" height="232"  /></a>
                              <p><a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank"><?php echo $comm['title']; ?></a></p>
                            </li>
                          <?php endif; endif; endif; endif; endforeach; endif; else: echo "" ;endif; ?>





                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="frameRHe4tC_center" class="column frame-2-1-r">
            <div id="frameRHe4tC_center_temp" class="move-span temp"></div>
            <div id="portal_block_329" class="mtxcright block move-span">
              <div id="portal_block_329_content" class="dxb_bc">
                <div style="margin-top:-20px;"class="module cl ml">
                  <ul>
                    <?php if(is_array($community) || $community instanceof \think\Collection || $community instanceof \think\Paginator): $k = 0; $__LIST__ = $community;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$comm): $mod = ($k % 2 );++$k;if($k == '6'): ?>
                    <li  style="width: 390px;"> 
                    <a href="<?php echo url('community?id='.$comm['id']); ?>" target="_blank">
                    <img src="<?php echo $comm['image']; ?>" width="390" height="442"  /></a>
                      <p><a href="<?php echo url('community?id='.$comm['id']); ?>"  target="_blank"><?php echo $comm['title']; ?></a></p>
                    </li>
                    <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--社区秀场e-->
        <div id="frameia707H" class="frame move-span cl frame-1">
          <div id="frameia707H_left" class="column frame-1-c">
            <div id="frameia707H_left_temp" class="move-span temp"></div>
            <div id="portal_block_330" class="syyqljie block move-span">
              <div class="blocktitle title">
              <span class="titletext" style="float:;margin-left:px;font-size:;color: !important;">友情链接</span>
              <!-- <span class="subtitle" style="float:;margin-left:px;font-size:;color: !important;">Links</span> --></div>
              <div id="portal_block_330_content" class="dxb_bc">
                <div class="x cl">
                  <ul class="cl mbm">
                    <li><a href="http://www.youth.cn/"  target="_blank">中国青年网</a></li>
                    <li><a href="http://www.youth.cn/"  target="_blank">中国青年网</a></li>
                    <li><a href="http://www.youth.cn/"  target="_blank">中国青年网</a></li>
                    <li><a href="http://www.youth.cn/"  target="_blank">中国青年网</a></li>
                    <li><a href="http://www.youth.cn/"  target="_blank">中国青年网</a></li>
                    <li><a href="http://www.youth.cn/"  target="_blank">中国青年网</a></li>
                    <li><a href="http://www.youth.cn/"  target="_blank">中国青年网</a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

<!--底部s-->
<div class="ft_wp">
  <div class="zjdba">
    <div id="zjdb" class="wp">
      <div id="gll">
        <div id="gzwm">
          <ul>
            <p class="t1" id="listtitle"></p>

          </ul>
        </div>
        <div id="sj2wm">
          <ul>
            <p class="t2" id="listtitle" >关注我们</p>
            <li class="t1"><a href="#"><i></i></a></li>
          </ul>
        </div>
        <div id="ftcc" class=" cl">
          <div class="fzdy">
            <p>

              <a href="http://news.youth.cn/ggl/201405/t20140505_5142879.htm" target="_blank">关于我们</a><span class="pipe">|</span>
              <a href="http://news.youth.cn/ggl/201405/t20140505_5142879.htm" target="_blank">联系我们</a><span class="pipe">|</span>
              <a href="http://news.youth.cn/ggl/201405/t20140505_5142879.htm" target="_blank">广告服务</a><span class="pipe">|</span>
              <a href="http://news.youth.cn/gn/201202/t20120229_1987294.htm" target="_blank">人才招聘</a><span class="pipe">|</span>
              <a href="http://www.12377.cn/" target="_blank">违法和不良信息举报 </a>
              <br>
              <a href="#">共青团中央主办 共青团中央网络影视中心承办</a>
            </p>
          </div>
          <div id="flk" >
            <p><a href="">京ICP备11020872号-17</a>
            </p>
          </div>

          <div id="frt" >
            <div class="wp"> </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>

</div>

<!--底部e-->




</body>
</html>
