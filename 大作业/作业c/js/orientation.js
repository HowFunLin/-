$(document).on("pageinit", function (event) {
    $(window).on("orientationchange", function (event) {
        if (event.orientation == "landscape")
            $("#orientation").text("水平阅览模式");
        if (event.orientation == "portrait")
            $("#orientation").text("垂直阅览模式");
    });
})