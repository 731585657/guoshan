<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

class Index extends  Controller
{
    public function index()
    {
        //查询活动
        $activity = Db::name('activity')->where('status','=',1)->order('weight','desc')->order('create_time','desc')->limit(4)->select();

        ///////////////////成长模块的数据
        $growing = Db::name('growing')->where('status','=',1)->order('weight','desc')->order('create_time','desc')->limit(10)->select();

        //////////////////研发联盟的数据
        $research = Db::name('research')->where('status','=',1)->order('weight','desc')->order('create_time','desc')->limit(16)->select();

        /////////////////社区秀场
        $community = Db::name('community')->where('status','=',1)->order('weight','desc')->order('create_time','desc')->limit(6)->select();
        //var_dump($community);exit;
        //////////分配数据到视图
        $this->assign('activity',$activity);
        $this->assign('growing',$growing);
        $this->assign('research',$research);
        $this->assign('community',$community);


      return $this->fetch('index/index');
    }

    //显示少儿社区页面
    public function shequ(){
        return $this->fetch('index/shequ');
    }


    //查看活动详情
    public function activity($id){

        $data = Db::name('activity')->find($id);
        //var_dump($data);exit;
        $this->assign('data',$data);
        return $this->fetch('index/content');
    }

    //查看成长新闻详情
    public function growing($id){

        $data = Db::name('growing')->find($id);
        //var_dump($data);exit;
            $this->assign('data',$data);
        return $this->fetch('index/content');
    }

    //查看研发联盟新闻详情
    public function research($id){
        $data = Db::name('research')->find($id);
        //var_dump($data);exit;
        $this->assign('data',$data);
        return $this->fetch('index/content');
    }

    //查看社区秀场新闻详情
    public function community($id){
        $data = Db::name('community')->find($id);
        //var_dump($data);exit;
        $this->assign('data',$data);
        return $this->fetch('index/content');
    }



}
