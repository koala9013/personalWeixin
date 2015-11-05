<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="../css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="../js/jquery.js"></script>
<script src="../js/cloud.js" type="text/javascript"></script>
<script src="../js/validate.js" type="text/javascript"></script>
<script language="javascript">
$(function(){
	$(".menuson li").click(function(){
		$(".menuson li.active").removeClass("active")
		$(this).addClass("active");
	});
	
	$('.title').click(function(){
		var $ul = $(this).next('ul');
		$('dd').find('ul').slideUp();
		if($ul.is(':visible')){
			$(this).next('ul').slideUp();
		}else{
			$(this).next('ul').slideDown();
		}
	});
})
</script>
</head>
<body style="background:#f0f9fd">
	<div class="lefttop"><span></span>系统设置
	</div>
	<dl class="leftmenu">
	   <?php
           require '../dbconfig.php';

           $link = mysql_connect($hostname, $dbuser, $dbpassword);
           if (!$link) {
               die('Could not connect to MySQL: ' . mysql_error());
           } else {
               $db_selected = mysql_select_db($dbname, $link);
               if (!$db_selected){
                   die('Could not connect to yuxing: '. mysql_error());
               }else {
                   $sql = "select * from menu where sub_id = 0";
                   $result=mysql_query($sql);
                   while ($row = mysql_fetch_array($result)) {
                       echo '<dd>';
                       echo '<div class="title">';
                       echo '<span><img src="../images/leftico01.png" /></span>'.$row[1];
                       echo '</div>';
                       echo '</dd>';

                       $sub_sql = "select * from menu where sub_id = ".$row[0];
                       $sub_result=mysql_query($sub_sql);
                       while ($sub_row = mysql_fetch_array($sub_result)) {
                           echo '<ul class="menuson">';
                           echo '<li ><cite></cite><a href="'.$sub_row[2].'" target="rightFrame">'.$sub_row[1].'</a><i></i></li>';
                           echo '</ul>';
                       }
                   }
               }
           }
       ?>
    </dl>
    
</body>
</html>