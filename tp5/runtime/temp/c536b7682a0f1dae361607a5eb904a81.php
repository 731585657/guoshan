<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:70:"D:\phpStudy\WWW\tp5\public/../application/admin\view\activity\add.html";i:1516155065;}*/ ?>
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
<form action="<?php echo url(); ?>" method="post" enctype="multipart/form-data">
<table class="table table-bordered table-hover definewidth m10">
    <input type="hidden" name="id" value="<?php echo (isset($info['id']) && ($info['id'] !== '')?$info['id']:''); ?>"/>
    <tr>
        <td width="10%" class="tableleft">活动标题</td>
        <td><input type="text" name="title" value="<?php echo (isset($info['title']) && ($info['title'] !== '')?$info['title']:''); ?>" style="width:600px;height:30px" /></td>
    </tr>
    <tr>
        <td class="tableleft">活动内容</td>
        <td>
            <textarea name="content" id="content" ><?php echo (isset($info['content']) && ($info['content'] !== '')?$info['content']:''); ?></textarea>
            <script type="text/javascript" src="/ueditor/ueditor.config.js"></script>

            <script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>



            <script type="text/javascript" src="/ueditor/lang/zh-cn/zh-cn.js"></script>

            <script type="text/javascript">

                UE.getEditor('content',{    //content为要编辑的textarea的id

                    initialFrameWidth: 700,   //初始化宽度

                    initialFrameHeight: 500,   //初始化高度

                });

            </script>
        </td>
    </tr>
    <tr>
        <td width="10%" class="tableleft">简介</td>
        <td><input type="text" name="overview" value="<?php echo (isset($info['Overview']) && ($info['Overview'] !== '')?$info['Overview']:''); ?>" style="width:600px;height:30px" /></td>
    </tr>

    <tr>
        <td width="10%" class="tableleft">图片</td>
        <td>
            <input type="file" name="image" />
               <?php if(isset($info)): ?>
                    <img src="<?php echo (isset($info['image']) && ($info['image'] !== '')?$info['image']:''); ?>"  style="width:200px;height:200px;" />

                <?php else: ?>
                    <img src="<?php echo (isset($info['image']) && ($info['image'] !== '')?$info['image']:''); ?>"  style="width:200px;height:200px; display:none;" />
                <?php endif; ?>
        </td>



    </tr>



    <tr>
        <td width="10%" class="tableleft">权重:(必须是整数)</td>
        <td><input type="text" name="weight" value="<?php echo (isset($info['weight']) && ($info['weight'] !== '')?$info['weight']:''); ?>" placeholder="0" style="width: 100px;height:30px" /></td>
    </tr>

    <tr>
        <td class="tableleft">状态</td>
        <td>
            <input type="radio" name="status" value="1" checked="checked"/> 启用
            <input type="radio" name="status" value="0" /> 禁用
        </td>
    </tr>


    <tr>
        <td class="tableleft"></td>
        <td>
            <button type="submit" class="btn btn-primary" type="button">保存</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-success" name="backid" id="backid">返回列表</button>
        </td>
    </tr>
</table>
</form>
</body>
</html>

<script>
    $(function () {
		$('#backid').click(function(){
				window.location.href="index.html";
		 });

    });
    $(function () {

        $("#img")
    })
</script>