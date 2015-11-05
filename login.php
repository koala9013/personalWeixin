<?php
require 'dbconfig.php';

$link = mysql_connect($hostname, $dbuser, $dbpassword);

if (!$link) {
    die('Could not connect to MySQL: ' . mysql_error());
} else {
    $db_selected = mysql_select_db($dbname, $link);
    if (!$db_selected){
        die('Could not connect to yuxing: '. mysql_error());
    }else {
        if ($_POST){
            $loginName = $_POST["loginName"];
            $pwd = $_POST["password"];

            $sql = "select * from user where login = '".$loginName."' and pwd = '".$pwd."'";
            $result = mysql_query($sql);
            if ($result) {
                echo "<script>location.href='backstage/index.php';</script>";
            } else {
                $message = '用户名密码不匹配!';
            }
        }
    }

    mysql_close($link);
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="js/jquery.js"></script>
<script src="js/cloud.js" type="text/javascript"></script>
<script src="js/validate.js" type="text/javascript"></script>

<script language="javascript">
	$(function(){
    $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
	$(window).resize(function(){  
    $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
    })  
});  

	function checkForm(){
		if(!checkCnString("loginName",1,32)){
			alert("请输入正确用户名");
			return false;
		}
	
		if(!checkCnString("password",1,32)){
			alert("请输入正确密码");
			return false;
		}
		return true;
	}
</script>

</head>

<body
	style="background-color: #1c77ac; background-image: url(images/light.png); background-repeat: no-repeat; background-position: center top; overflow: hidden;">

	<form action="login.php" method="post" id="form1" onsubmit="return checkForm();">
		<div id="mainBody">
			<div id="cloud1" class="cloud"></div>
			<div id="cloud2" class="cloud"></div>
		</div>


		<div class="logintop">
			<span>欢迎登录后台管理界面平台</span>
		</div>

		<div class="loginbody">

			<span class="systemlogo"></span>

			<div class="loginbox">

				<ul>
					<li><input type="text" class="loginuser" name="loginName"
						id="loginName" onclick="JavaScript:this.value=''" /></li>
					<li><input type="password" class="loginpwd" name="password"
						value="" id="password" onclick="JavaScript:this.value=''" /></li>
					<li><span><?php if ($_POST) echo $message;?></span></li>
					<li><input type="submit" class="loginbtn" value="登录" /></li>
				</ul>


			</div>

		</div>
	</form>
</body>
</html>