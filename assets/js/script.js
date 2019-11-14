$(document).ready(function () {
    $("#nowPlaying").hide();

    $(".nav-link").click(function () {
        $("section").hide();
        $("#" + $(this).attr("data")).show();

        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    //Idea: to make this automatic
    // $("#autoUpdate").text("Last updated 1 hour ago");
});