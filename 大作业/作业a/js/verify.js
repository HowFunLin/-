$(function () {
    $(".tip").hide(); //初始值为隐藏
})

function checkpas1() { //当第一个密码框失去焦点时，触发checkpas1事件
    var pas1 = document.getElementById("password").value;
    var pas2 = document.getElementById("repassword").value; //获取两个密码框的值
    
    if (pas1 != pas2 && pas2 != "") //此事件当两个密码不相等且第二个密码是空的时候会显示错误信息
        $(".tip").show();
    else
        $(".tip").hide(); //若两次输入的密码相等且都不为空时，不显示错误信息。
}

function checkpas() { //当第二个密码框发生改变时，触发checkpas事件
    var pas1 = document.getElementById("password").value;
    var pas2 = document.getElementById("repassword").value; //获取两个密码框的值
    
    if (pas1 != pas2) {
        $(".tip").show(); //当两个密码不相等时则显示错误信息
    } else {
        $(".tip").hide();
    }
}

function checkpas2() { //点击提交按钮时，触发checkpas2事件，会进行弹框提醒以防无视错误信息提交
    var pas3 = document.getElementById("password").value;
    var pas4 = document.getElementById("repassword").value;
    
    if (pas3 != pas4) {
        alert("两次输入的密码不一致！");
        return false;
    }
}

function checkArea() //点击提交按钮时，触发checkArea事件，会进行弹框提醒以防未选择地址信息
{
	var province = document.getElementById("s_province").value;
	var city = document.getElementById("s_city").value;
	
	if (province == "==省份==" || city == "==城市==") {
        alert("请选择你所在的地址！");
        return false;
    }
}