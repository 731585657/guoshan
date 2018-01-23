<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/1/3
 * Time: 10:41
 */
namespace app\admin\controller;
use think\Controller;
use think\Db;
use think\Request;
use think\Validate;

class Activity extends  Controller{

    //活动首页
    public function index(){
        $list=Db::name('activity')->paginate(10,true);

        //var_dump($list);exit;
        $this->assign('list',$list);
        return $this->fetch('activity/index');
    }

    //添加活动
    public function add()
    {
        if ($this->request->isPost()) {
            $activity = model('activity');
            //接收数据
            $file = $this->request->file("image");
            $data = Request::instance()->post();


            //var_dump($data);exit;
            $validate = $this->validate($data, 'Activity');
            //验证
            if (true !== $validate) {
                return $this->error($validate);
            }
            //判断是否上传图片
            if (!empty($file)) {
                $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
                if ($info) {
                    //得到图片的相对路径
                    $image = "/uploads/" . $info->getSaveName();
                    //将路径写入data
                    $data['image'] = $image;
                    //var_dump($image);exit;
                    //得到时间戳
                    $data['create_time'] = time();

                    //保存到数据库
                    $data = db('activity')->insert($data);;
                    //判断是否添加成功
                    if ($data) {
                        //成功
                        $this->success('添加成功', url('index'));
                    } else {
                        //失败返回错误信息
                        $this->success($activity->getError());

                    }

                } else {
                    // 上传失败获取错误信息
                    echo $file->getError();
                }
            } else {
                //得到时间戳
                $data['create_time'] = time();
                //保存到数据库
                $data = db('activity')->insert($data);;
                //判断是否添加成功
                if ($data) {
                    //成功
                    $this->success('添加成功', url('index'));
                } else {
                    //失败返回错误信息
                    $this->success($activity->getError());
                }
            }

        }
        //显示添加视图
        return $this->fetch('activity/add');
    }

    public function edit($id){
        if($this->request->isPost()){
            $activity = model('Activity');
            //接收数据
            $file = $this->request->file("image");
            $data=Request::instance()->post();
            //验证
            $validate= $this->validate($data,'Activity');
            if(true !== $validate){
                return $this->error($validate);
            }
            //判断是否上传图片
            if (!empty($file)) {
                $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
                if ($info) {
                    //得到图片的相对路径
                    $image = "/uploads/" . $info->getSaveName();
                    //将路径写入data
                    $data['image'] = $image;
                    //var_dump($image);exit;
                    //得到时间戳
                   /* $data['create_time'] = time();*/

                    //保存到数据库
                    $data = db('activity')->update($data);;
                    //判断是否添加成功
                    if ($data) {
                        //成功
                        $this->success('添加成功', url('index'));
                    } else {
                        //失败返回错误信息
                        $this->success($activity->getError());

                    }

                } else {
                    // 上传失败获取错误信息
                    echo $file->getError();
                }
            } else {
                //得到时间戳
               /* $data['create_time'] = time();*/
                //保存到数据库
                $data = db('activity')->update($data);;
                //判断是否添加成功
                if ($data) {
                    //成功
                    $this->success('修改成功', url('index'));
                } else {
                    //失败返回错误信息
                    $this->success($activity->getError());
                }
            }

        }


        /////////////回显//////
        //根据id查询数据
        $info=Db::name('activity')->find($id);
        //var_dump($info);exit;
        //分配数据
        $this->assign('info',$info);
        return $this->fetch('add');
    }

    //删除
    public function del(){
        $id = array_unique((array)input('id/a',0));
        if ( empty($id) ) {
            $this->error('请选择要操作的数据!');
        }
        $map = array('id' => array('in', $id) );
        if(\think\Db::name('activity')->where($map)->delete()){
            $this->success('删除成功');
        } else {
		
            $this->error('删除失败！');
        }
    }
}