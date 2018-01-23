<?php
namespace app\admin\controller;

use think\Controller;

class Index extends Controller
{
    //后台首页
    public function index()
    {
        return $this->fetch('index/index');
    }
    //活动首页
    /*public function activity(){
        return $this->fetch('activity/index');
    }*/
    //成长首页
    public function growing(){
        return $this->fetch('growing/index');
    }

    //研发
    public function research(){
        return $this->fetch('research/index');
    }
    //社区秀场
    public function community(){
        return $this->fetch('community/index');
    }

}
