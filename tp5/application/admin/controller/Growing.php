<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/1/4
 * Time: 10:22
 */
namespace app\admin\controller;
use think\Controller;
use think\Db;
use think\Request;

class Growing extends Controller{
    //成长首页
    public function index(){
        $list = Db::name('growing')->paginate(10,true);
        $this->assign('list',$list);
        return $this->fetch('growing/index');
    }

    //添加
    public function add()
    {
        if ($this->request->isPost()) {
            $growing = model('Growing');
            //接收数据
            $file = $this->request->file("image");
            $data = Request::instance()->post();


            //var_dump($data);exit;
            $validate = $this->validate($data, 'Growing');
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
                    $data = db('growing')->insert($data);;
                    //判断是否添加成功
                    if ($data) {
                        //成功
                        $this->success('添加成功', url('index'));
                    } else {
                        //失败返回错误信息
                        $this->success($growing->getError());

                    }

                } else {
                    // 上传失败获取错误信息
                    echo $file->getError();
                }
            } else {
                //得到时间戳
                $data['create_time'] = time();
                //保存到数据库
                $data = db('growing')->insert($data);;
                //判断是否添加成功
                if ($data) {
                    //成功
                    $this->success('添加成功', url('index'));
                } else {
                    //失败返回错误信息
                    $this->success($growing->getError());
                }
            }

        }
        //显示添加视图
        return $this->fetch('growing/add');
    }

    //修改
    public function edit($id){
        if($this->request->isPost()){
            $growing = model('Growing');
            //接收数据
            $file = $this->request->file("image");
            $data=Request::instance()->post();
            //验证
            $validate= $this->validate($data,'Growing');
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
                    $data = db('growing')->update($data);;
                    //判断是否添加成功
                    if ($data) {
                        //成功
                        $this->success('添加成功', url('index'));
                    } else {
                        //失败返回错误信息
                        $this->success($growing->getError());

                    }

                } else {
                    // 上传失败获取错误信息
                    echo $file->getError();
                }
            } else {
                //得到时间戳
                /* $data['create_time'] = time();*/
                //保存到数据库
                $data = db('growing')->update($data);;
                //判断是否添加成功
                if ($data) {
                    //成功
                    $this->success('修改成功', url('index'));
                } else {
                    //失败返回错误信息
                    $this->success($growing->getError());
                }
            }

        }
        ///////////回显
       //根据id查数据
        $info = Db::name('growing')->find($id);
        $this->assign('info',$info);
        return $this->fetch('growing/add');
    }

    //删除
    public function del(){
        $id = array_unique((array)input('id/a',0));
        if ( empty($id) ) {
            $this->error('请选择要操作的数据!');
        }
        $map = array('id' => array('in', $id) );
        if(Db::name('growing')->where($map)->delete()){
            $this->success('删除成功');
        } else {
            $this->error('删除失败！');
        }
    }
}