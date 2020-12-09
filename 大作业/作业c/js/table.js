$(function () {
    $("#myTable").tablesorter({
        sortList: [
            [0, 0]
        ], //默认排序
        headers: {}, //指定不允许排序的列
        widgets: ['zebra'] //奇偶数行不同颜色
    });
})
