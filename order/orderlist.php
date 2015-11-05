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
<body>
	<!-- <div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="">首页</a></li>
    <li><a href="#">权限管理</a></li>
    <li><a href="">用户管理</a></li>
    </ul>
    <span class="red">&nbsp;&nbsp;&nbsp;$!message&nbsp;&nbsp;&nbsp;</span>
    </div>
     -->

	<div class="rightinfo">

		<!-- 		<div class="tools"> -->
		<!-- 			<ul class="toolbar"> -->
		<!-- 				<li class="click"><span><img src="../images/t01.png" /></span><a -->
		<!-- 					href="">添加订单</a></li> -->
		<!-- 			</ul> -->
		<!-- 		</div> -->
		<ul class="seachform">
			<li><label>开始时间</label> <input id="starttime" name="starttime"
				type="text" class="Wdate" onFocus="WdatePicker()" readonly="true" />
			</li>
			<li><label>结束时间</label> <input id="endtime" name="endtime"
				type="text" class="Wdate" onFocus="WdatePicker()" readonly="true" />
			</li>
			<li>
				<input type="button" class="scbtn" onclick="" value="查询" />
			</li>
		</ul>
		<form action="" id="pageform" method="post" enctype="multipart/form-data">
			<table class="tablelist">
				<thead>
					<tr>
						<th>合同号</th>
						<th>款号</th>
						<th>品名</th>
						<th>总数量</th>
						<th>创建时间</th>
						<th>交付时间</th>
						<th>操作</th>
					</tr>
				</thead>
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
                	$sql = "select * from y_order";
                	$count_sql = "select count(*) from y_order";
                	if ($_POST){
						$pageId = $_POST["pageId"];
						$start = ($pageId - 1) * $pageSize;
						$sql = $sql.' limit '.$start.', '.$pageSize;
					}
					
					$count = mysql_query($count_sql);//统计数据
                	$result = mysql_query($sql);//分页查询结果
					if ($result) {
						while ( $row = mysql_fetch_array ( $result ) ) {
							echo '<tbody>';
							echo '<tr>';
							echo '<td>' . $row [1] . '</td>';
							echo '<td>' . $row [2] . '</td>';
							echo '<td>' . $row [3] . '</td>';
							echo '<td>' . $row [4] . '</td>';
							echo '<td>' . $row [6] . '</td>';
							echo '<td>' . $row [7] . '</td>';
							echo '<td><a class="tablelink" onclick="">修改</a></td>';
							echo '</tr>';
							echo '</tbody>';
						}
						
						$count_result = mysql_fetch_array($count);
						
						echo  '</table>';
						echo '<div class="pagin">';
						echo '<input type="hidden" id="pageId" name="pageId" value="'.$pageId.'" size="7" />';
						echo '<div class="message">共';
						echo '<i class="blue">'.$count_result[0].'</i>条记录，当前显示第&nbsp;';
						echo '<i class="blue">'.$pageId.'&nbsp;</i>页';
						echo '</div>';
						echo '<ul class="paginList">';
						echo '<li class="paginItem"><a href="javascript:prev()"><span	class="pagepre"></span></a></li>';
						echo '<li class="paginItem"><a href="javascript:next()"><span	class="pagenxt"></span></a></li>';
						echo '</ul>';
						echo '</div>';
					}
				}
			}
       ?>
		
		
		
		
		</form>
	</div>

	<script type="text/javascript">
	
</script>

</body>
</html>
