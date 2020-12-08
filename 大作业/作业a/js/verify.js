$(function () {
    $(".tip").hide();
})

function checkpas1() { //当第一个密码框失去焦点时，触发checkpas1事件
    var pas1 = document.getElementById("password").value;
    var pas2 = document.getElementById("repassword").value; //获取两个密码框的值
    
    if (pas1 != pas2 && pas2 != "") //此事件当两个密码不相等且第二个密码是空的时候会显示错误信息
        $(".tip").show();
    else
        $(".tip").hide(); //若两次输入的密码相等且都不为空时，不显示错误信息。
}

function checkpas() { //当第一个密码框失去焦点时，触发checkpas2件
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
