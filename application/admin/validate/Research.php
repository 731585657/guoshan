<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/1/4
 * Time: 11:27
 */
namespace app\admin\validate;
use think\Validate;

class Research extends Validate{
    // 验证规则
    protected $rule = [
        ['content', 'require', '内容不能为空'],
        ['title', 'require', '标题不能为空'],
        ['weight','number','权重必须是数字'],
        ['overview','require','简介不能为空']
    ];
}