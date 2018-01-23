<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:71:"D:\phpStudy\WWW\tp5\public/../application/admin\view\growing\index.html";i:1515477260;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/admin/static/Css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="/admin/static/Css/bootstrap-responsive.css" />
    <link rel="stylesheet" type="text/css" href="/admin/static/Css/style.css" />
    <script type="text/javascript" src="/admin/static/Js/jquery.js"></script>
    <script type="text/javascript" src="/admin/static/Js/jquery.sorted.js"></script>
    <script type="text/javascript" src="/admin/static/Js/bootstrap.js"></script>
    <script type="text/javascript" src="/admin/static/Js/ckform.js"></script>
    <script type="text/javascript" src="/admin/static/Js/common.js"></script>

    <style type="text/css">
        body {
            padding-bottom: 40px;
        }
        .sidebar-nav {
            padding: 9px 0;
        }

        @media (max-width: 980px) {
            /* Enable use of floated navbar text */
            .navbar-text.pull-right {
                float: none;
                padding-left: 5px;
                padding-right: 5px;
            }
        }


    </style>
</head>
<body>
<form class="form-inline definewidth m20" action="index.html" method="get">  
   &nbsp; <a href="<?php echo url('growing/add'); ?>"><button type="button" class="btn btn-success" id="addnew">新增文章</button></a>
</form>
<table class="table table-bordered table-hover definewidth m10" >
    <thead>
    <tr>
        <th>ID</th>
        <th>文章标题</th>
        <!--<th>文章内容</th>-->
        <th>状态</th>
        <th>权重</th>
        <th>时间</th>
        <th>操作</th>
    </tr>
    </thead>
    <?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$growing): $mod = ($i % 2 );++$i;?>
	     <tr>
            <td><?php echo $growing['id']; ?></td>
            <td><?php echo $growing['title']; ?></td>
          <!--  <td><?php echo $growing['content']; ?></td>-->
             <td><?php echo $growing['status']==1?"正常":"失效"; ?></td>
             <td><?php echo $growing['weight']; ?></td>
             <td><?php echo date("Y-m-d H:i:s",$growing['create_time']); ?></td>
            <td>
                <a href="<?php echo url('edit?id='.$growing['id']); ?>">编辑</a>
                <a href="<?php echo url('del?id='.$growing['id']); ?>">删除</a>
                  
            </td>
        </tr>
    <?php endforeach; endif; else: echo "" ;endif; ?>

    </table>
<div>
    <ul>
        <?php echo $list->render(); ?>
    </ul>
</div>
		</body>
		</html>

<script>
    $(function () {
        
		$('#addnew').click(function(){

				window.location.href="add.html";
		 });


    });

	function del(id)
	{
		
		
		if(confirm("确定要删除吗？"))
		{
		
			var url = "index.html";
			
			window.location.href=url;		
		
		}
	
	
	
	
	}
</script>