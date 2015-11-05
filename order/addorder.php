<?php
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="../css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="../js/jquery.js"></script>
<script src="../js/cloud.js" type="text/javascript"></script>
<script src="../js/validate.js" type="text/javascript"></script>
<script language="javascript" src="../js/My97DatePicker/WdatePicker.js"></script>
</head>
<script type="javascript">
$(document).ready(function(e) {
    $(".select1").uedSelect({
		width : 345			  
	});
	$(".select2").uedSelect({
		width : 167  
	});
	$(".select3").uedSelect({
		width : 100
	});
});
</script>

<body>
<form action="admin_addUser.do" id="pForm" method="post" enctype="multipart/form-data" onsubmit="return checkForm();">
<div class="place"> <span>位置：</span>
  <ul class="placeul">
    <li><a href="welcome.do">首页</a></li>
    <li><a href="#">权限管理</a></li>
    <li><a href="admin_userList.do">用户管理 </a></li>
	<li><a href="#">添加用户 </a></li>
  </ul>
</div>
<div class="formbody">
  <ul class="forminfo">
    <li>
      <label>用户名</label>
      <input id="userName" name="userName" type="text" class="dfinput" /></li>
    <li>
      <label>密码</label><input type="password" id="password" name="password" class="dfinput" /></li>
    <li>
      <label>确认密码</label>
     <input type="password" id="secpassword" name="secpassword" class="dfinput" /></li>
     
        <li><label>所属角色
</label>
    
    <div class="vocation">
    <select class="select1" name="roleid">
    #foreach($role in $roleList)
	<option value=${role.id}>$!{role.name}</option>	
	#end
    </select>
    </div>
    
    
    
    </li>
    <li><li><label>&nbsp;</label><input name="" type="submit" class="btn" value="保存"/></li></li>
     
    </ul>
  


    
    </div>
</form>
</body>
</html>
