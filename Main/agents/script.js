$(function() {
    $("#ability1").click(function q() {
        /*texts*/
        $('#invisible1').addClass("show");
        $('#invisible2').addClass("hide");
        $('#invisible3').addClass("hide");
        $('#invisible4').addClass("hide");
        $('#invisible1').removeClass("hide");
        $('#invisible2').removeClass("show");
        $('#invisible3').removeClass("show");
        $('#invisible4').removeClass("show");
        /* videos*/
        $('#invisible-v1').addClass("show");
        $('#invisible-v2').addClass("hide");
        $('#invisible-v3').addClass("hide");
        $('#invisible-v4').addClass("hide");

        $('#invisible-v1').removeClass("hide");
        $('#invisible-v4').removeClass("show");
        $('#invisible-v2').removeClass("show");
        $('#invisible-v3').removeClass("show");
    });

    $("#ability2").click(function e() {
        /*texts*/
        $('#invisible2').addClass("show");
        $('#invisible3').addClass("hide");
        $('#invisible4').addClass("hide");
        $('#invisible1').addClass("hide");
        $('#invisible2').removeClass("hide");
        $('#invisible3').removeClass("show");
        $('#invisible4').removeClass("show");
        $('#invisible1').removeClass("show");
        /* videos*/
        $('#invisible-v2').addClass("show");
        $('#invisible-v1').addClass("hide");
        $('#invisible-v3').addClass("hide");
        $('#invisible-v4').addClass("hide");
        $('#invisible-v2').removeClass("hide");
        $('#invisible-v4').removeClass("show");
        $('#invisible-v1').removeClass("show");
        $('#invisible-v3').removeClass("show");
    });
    $("#ability3").click(function c() {
        /*texts*/
        $('#invisible3').addClass("show");
        $('#invisible1').addClass("hide");
        $('#invisible2').addClass("hide");
        $('#invisible4').addClass("hide");
        $('#invisible3').removeClass("hide");
        $('#invisible1').removeClass("show");
        $('#invisible2').removeClass("show");
        $('#invisible4').removeClass("show");
        /* videos*/
        $('#invisible-v3').addClass("show");
        $('#invisible-v2').addClass("hide");
        $('#invisible-v1').addClass("hide");
        $('#invisible-v4').addClass("hide");
        $('#invisible-v3').removeClass("hide");
        $('#invisible-v4').removeClass("show");
        $('#invisible-v2').removeClass("show");
        $('#invisible-v1').removeClass("show");
    });
    $("#ability4").click(function x() {
        /*texts*/
        $('#invisible4').addClass("show");
        $('#invisible1').addClass("hide");
        $('#invisible2').addClass("hide");
        $('#invisible3').addClass("hide");
        $('#invisible4').removeClass("hide");
        $('#invisible1').removeClass("show");
        $('#invisible2').removeClass("show");
        $('#invisible3').removeClass("show");
        /* videos*/
        $('#invisible-v4').addClass("show");
        $('#invisible-v2').addClass("hide");
        $('#invisible-v3').addClass("hide");
        $('#invisible-v1').addClass("hide");
        $('#invisible-v4').removeClass("hide");
        $('#invisible-v1').removeClass("show");
        $('#invisible-v2').removeClass("show");
        $('#invisible-v3').removeClass("show");
    });


});