<?php
date_default_timezone_set('Etc/UTC');

if (isset($_COOKIE["IsSendInfo"])) {
    echo '请勿在短时间内重复提交';
} else {

    if(isset($_POST['company']) && $_POST['company'] != '' && isset($_POST['name']) && $_POST['name'] != '' && isset($_POST['phone']) && $_POST['phone'] != '') {

        if (!preg_match('/^([\xe4-\xe9][\x80-\xbf]{2}){2,4}$/', $_POST['name'])) {
            echo "请输入正确的姓名";
            return;
        }

        if(!preg_match("/^1[34578]{1}\d{9}$/", $_POST['phone'])){
            echo "请输入正确的手机号码";
            return;
        }

        require 'PHPMailer/PHPMailerAutoload.php';

        $mail = new PHPMailer;
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.exmail.qq.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'tech@chengdiankeji.com';                 // SMTP username
        $mail->Password = 'Chengdian123';                           // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                    // TCP port to connect to

        $mail->setFrom('tech@chengdiankeji.com', 'Tech');
        $mail->addAddress('info@chengdiankeji.com', 'Info');     // Add a recipient
        $mail->addReplyTo('info@chengdiankeji.com', 'Info');

        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = '用户信息';
        $mail->Body    = '公司名称: '.$_POST['company'].'<br/>'.'姓名: '.$_POST['name'].'<br/>'.'电话: '.$_POST['phone'].'<br/>'.'意向: '.$_POST['idea'];
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            setcookie("IsSendInfo", 'true', time()+60);
            echo '信息提交成功';
        }
    } else {
        echo "请确认提交信息的完整";
    }
}