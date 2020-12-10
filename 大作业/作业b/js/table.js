$(function () {
    //需求1：点击按钮显示遮罩层和添加数据表格
    //需求2：点击里面的关闭按钮隐藏遮罩层和添加数据表格
    //需求3：点击get所在的标签，删除所在的tr
    //需求4：点击里面的添加内容，全部能容这个成tr嵌套td的形式添加到tbody中

    $("#j_mask").hide();
    $("#j_formAdd").hide();


    //需求1：点击按钮显示遮罩层和添加数据表格
    $("#j_btnAddData").click(function () {
        //显示遮罩层和j_formAdd这个盒子
        $("#j_mask").show();
        $("#j_formAdd").show();
    });

    //需求2：点击里面的关闭按钮隐藏遮罩层和添加数据表格
    $("#j_hideFormAdd").click(function () {
        //显示遮罩层和j_formAdd这个盒子
        $("#j_mask").hide();
        $("#j_formAdd").hide();
    });

    //需求3：点击get所在的标签，删除所在的tr
    $("a.get").click(function () {
        //删除的是所在的tr。
        $(this).parent("td").parent("tr").remove();
    });

    //需求4：点击里面的添加内容，全部能容这个成tr嵌套td的形式添加到tbody中
    $("#j_btnAdd").click(function () {
        //bug1： 内容不能为空
        if ($("#j_txtLesson").val() === "") {
            alert("内容不能为空！");
            return;
        }

        //全部能容这个成tr嵌套td的形式添加到tbody中
        //获取tr，然后为tr赋值。
        var tr = $("<tr></tr>");
        //赋值
        tr.html('<td>' + $("#j_txtLesson").val() + '</td><td>' + $("#j_txtBelSch").val() + '</td><td><a href="javascrip:;" class="get">GET</a></td>');
        //在房间tbody中
        $("#j_tb").append(tr);


        //bug3：新产生的tr没有时间绑定
        tr.find("a").click(function () {
            //删除的是所在的tr。
            tr.remove();
        });

        //显示遮罩层和j_formAdd这个盒子
        $("#j_mask").hide();
        $("#j_formAdd").hide();
        //bug2:设置完毕，清空内容
        $("#j_txtLesson").val("");
    });
});
