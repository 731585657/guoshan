<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:71:"D:\phpStudy\WWW\tp5\public/../application/index\view\index\content.html";i:1515463857;}*/ ?>
﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>文章内容</title>
    <base href="" />
    <link rel="stylesheet" type="text/css" href="/admin/style/css/zhihui.css" />
    <link rel="stylesheet" type="text/css" href="/admin/style/css/index.css">
    <link rel="stylesheet" href="/admin/style/css/details_new.css"/>

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

<!--内容s-->
<div id=fullscreenad style="display:none">&nbsp;</div>


<div style="background-color:#F1F1F1;class="">
<div class="area" id="contentA">
  <div class="left">
      
       
        <div class="new-article">
        
        
<div class="news-view">

        <div class="header page-nav">

        
                        <span class="this">
               <div class="title"><?php echo $data['title']; ?></div>
               <span style="color:#797979; margin-left:400px; margin-top:20px;"><?php echo date("Y-m-d ",$data['create_time']); ?></span>
               <span style="color:#797979; margin-left:30px;">来源：新公益网</span>
              
            </span>
                    </div>
        <div class="content">
           
            
<span style="font-size:16px;">&nbsp; &nbsp; &nbsp;<?php echo $data['content']; ?>
</span>

            <div style="clear:both; height:5px;"></div>
        </div>
        
    </div>
        
       
            
      
            
           
            <div class="clear"></div>

        </div>
    </div>

</div>
</div>

<!--内容e-->

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
