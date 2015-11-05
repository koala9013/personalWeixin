<?php
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link href="../css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="../js/jquery.js"></script>
<script type="text/javascript">
$(function(){	
	$(".nav li a").click(function(){
		$(".nav li a.selected").removeClass("selected")
		$(this).addClass("selected");
	})	
})	
</script>
</head>

<body style="background:url(../images/topbg.gif) repeat-x;">
<div class="topleft"> <a href="index.php" target="_parent"><img src="../images/logo.png" title="系统首页" /></a> </div>
<ul class="nav">
  <li>
    <h2>今日待审核:</h2>
</li>
  <li><a href="" target="rightFrame">
    <h2 id="showdev">订单:</h2>
  </a></li>
  <li><a href=""  target="rightFrame">
    <h2 id="showcha">原料:</h2>
  </a></li>
</ul>
<div class="topright">
  <ul>
  
    <li><a href="#"></a></li>
    <li><a href="" target="_parent">退出</a></li>
  </ul>
  <div class="user"> <span></span> </div>
</div>
</body>
</html>
