$(document).ready(function () {
    $("#nowPlaying").hide();

    $(".nav-link").click(function () {
        $("section").hide();
        $("#" + $(this).attr("data")).show();

        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
});