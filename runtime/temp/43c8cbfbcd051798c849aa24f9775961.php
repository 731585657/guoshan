<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:69:"D:\phpStudy\WWW\tp5\public/../application/admin\view\index\index.html";i:1515464797;}*/ ?>

<!DOCTYPE HTML>
<html>
<head>
    <title>后台管理系统</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="/admin/static//assets/css/dpl-min.css" rel="stylesheet" type="text/css" />
    <link href="/admin/static//assets/css/bui-min.css" rel="stylesheet" type="text/css" />
    <link href="/admin/static//assets/css/main-min.css" rel="stylesheet" type="text/css" />
</head>
<body>

<div class="header">

    <div class="dl-title">
        <!--<img src="/chinapost/Public/assets/img/top.png">-->
    </div>

    <div class="dl-log">欢迎您，<span class="dl-log-user">root</span><a href="/chinapost/index.php?m=Public&a=logout" title="退出系统" class="dl-log-quit">[退出]</a>
    </div>
</div>
<div class="content">
    <div class="dl-main-nav">
        <div class="dl-inform"><div class="dl-inform-title"><s class="dl-inform-icon dl-up"></s></div></div>
        <ul id="J_Nav"  class="nav-list ks-clear">
            <li class="nav-item dl-selected"><div class="nav-item-inner nav-home">系统管理</div></li>		<li class="nav-item dl-selected"><div class="nav-item-inner nav-order">业务管理</div></li>

        </ul>
    </div>
    <ul id="J_NavContent" class="dl-tab-conten">

    </ul>
</div>
<script type="text/javascript" src="/admin/static//assets/js/jquery-1.8.1.min.js"></script>
<script type="text/javascript" src="/admin/static//assets/js/bui-min.js"></script>
<script type="text/javascript" src="/admin/static//assets/js/common/main-min.js"></script>
<script type="text/javascript" src="/admin/static//assets/js/config-min.js"></script>
<script>
    BUI.use('common/main',function(){
        var config = [{id:'1',menu:[{text:'系统管理',items:[{id:'12',text:'活动管理',href:'<?php echo url("Activity/index"); ?>'},{id:'3',text:'成长',href:'<?php echo url("Growing/index"); ?>'},{id:'4',text:'研发',href:'<?php echo url("research/index"); ?>'},{id:'6',text:'社区秀场',href:'<?php echo url("Community/index"); ?>'}]}]}];
        new PageUtil.MainPage({
            modulesConfig : config
        });
    });
</script>
<div style="text-align:center;">
<p>来源：<a href="http://www.mycodes.net/" target="_blank">源码之家</a></p>
</div>
</body>
</html>