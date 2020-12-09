<html>
<head>
<title>提交成功</title>
<link rel="stylesheet" href="style.css">
</head>

<body>
	<form action="http://localhost/Server/server.php" method="post"
		name="form2">
		<div>
			<p>
				<span>用户名：</span> <?php echo $_POST['user']?>
			</p>
			<p>
				<span>密码：</span> <?php echo $_POST['password']?>
			</p>
		</div>
		<div class="area">
			<p>
				<span class="locate">地址:</span> <span>省份:</span> <?php echo $_POST['s_province']?>
				<span>城市:</span> <?php echo $_POST['s_city']?>
			</p>
		</div>
		<div>
			爱好： 
<?php
error_reporting(E_ALL ^ E_WARNING);
$result = "";
foreach ($_POST['hobby'] as $i) {
    $result .= $i . "&nbsp;&nbsp;";
}
if($result == "")
	echo "无";
else
echo $result;
?>
		</div>
		<div class="message">
			<p>
				<span>
					留言：
				</span>
				<?php echo $_POST['message']?>
			</p>
		</div>
	</form>
</body>
</html>