<?php
date_default_timezone_set('Etc/UTC');
require 'vendor/autoload.php';

class model extends \Medoo\Medoo {
    public function __construct()
    {
        $option = [
            'database_type' => 'mysql',
            'database_name' => 'test',
            'server' => 'localhost',
            'username' => 'root',
            'password' => 'Cheng12345!',
            'charset' => 'utf8'
        ];
        parent::__construct($option);
    }
}

class database extends model {
    public $table = 'sign';

    public function insertInfo($data) {
        return $this->insert($this->table, $data);
    }
}

if (isset($_COOKIE["IsSendInfo"])) {
    echo '已经签到成功';
} else {
    if(isset($_POST['name']) && $_POST['name'] != '' && isset($_POST['phone']) && $_POST['phone'] != '' && isset($_POST['company']) && $_POST['company'] != '') {

        if (!preg_match('/^([\xe4-\xe9][\x80-\xbf]{2}){2,4}$/', $_POST['name'])) {
            echo "请输入正确的姓名";
            return;
        }

        if(!preg_match("/^1[34578]{1}\d{9}$/", $_POST['phone'])){
            echo "请输入正确的手机号码";
            return;
        }
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $company = $_POST['company'];
        $data = array(
            'name'      => $name,
            'phone'     => $phone,
            'company'   => $company
        );
        $sign = new database();
        $sign->insertInfo($data);
        echo "签到成功";

    } else {
        echo "请确认提交信息的完整";
    }
}