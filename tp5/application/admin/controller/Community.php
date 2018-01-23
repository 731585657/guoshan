<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/1/4
 * Time: 13:02
 */
namespace app\admin\controller;
use think\Controller;
use think\Db;
use think\Request;

class Community extends Controller{
    public function index(){
        $list = Db::name('community')->paginate(10,true);
        $this->assign('list',$list);
        return $this->fetch('community/index');
    }

    //添加
    public function add(){
        if($this->request->isPost()) {
            $community = model('Community');
            //接收数据
            $data = Request::instance()->post();
            $file = $this->request->file('image');
            //验证
            $validate = $this->validate($data, 'Community');
            if (true !== $validate) {
                return $this->error($validate);
            }

            //判断是否上传图片
            if (!empty($file)) {
                //移动文件
                $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
                $data['image'] = "/uploads/" . $info->getSaveName();
                //得到时间
                $data['create_time'] = time();
                //写入数据库
                $data = Db::name('community')->insert($data);
                //判断是否成功
                if ($data) {
                    $this->success('添加成功', url('index'));
                } else {
                    $this->success($community->getError());
                }
            } else {
                //得到时间
                $data['create_time'] = time();
                //写入数据库
                $data = Db::name('community')->insert($data);
                //判断是否成功
                if ($data) {
                    $this->success('添加成功', url('index'));
                } else {
                    $this->success($community->getError());
                }
            }
        }

        //显示添加表单
        return $this->fetch('community/add');
    }

    //修改
    public function edit($id){
        if($this->request->isPost()){
            $community = model('Community');
            //接收数据
            $data = Request::instance()->post();
            $file = $this->request->file('image');
            //验证
            $validate = $this->validate($data,'Community');
            if(true !== $validate){
                return $this->error($validate);
            }
            //判断是否上传图片
            if(!empty($file)){
                //移动文件
                $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
                $data['image'] = "/uploads/" . $info->getSaveName();
                //写入数据库
                $data = Db::name('community')->update($data);
                //判断是否成功
                if ($data){
                    $this->success('修改成功',url('index'));
                }else{
                    $this->success($community->getError());
                }
            }else{
                $data = Db::name('community')->update($data);
                //判断是否成功
                if ($data){
                    $this->success('修改成功',url('index'));
                }else {
                    $this->success($community->getError());
                }
            }
        }

        //////////////回显
        //查数据
        $info = Db::name('community')->find($id);
        $this->assign('info',$info);
        return $this->fetch('community/add');
    }

    //删除
    public function del(){
        $id = array_unique((array)input('id/a',0));
        if ( empty($id) ) {
            $this->error('请选择要操作的数据!');
        }
        $map = array('id' => array('in', $id) );
        if(Db::name('community')->where($map)->delete()){
            $this->success('删除成功');
        } else {
            $this->error('删除失败！');
        }
    }
}