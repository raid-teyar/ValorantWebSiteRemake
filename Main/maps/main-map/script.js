/* #################################    TRANSITION & ProgressBar */
var $loader = document.querySelector('.loader')
var progerssbar = document.getElementById('progressbar');
var totalhight = document.body.scrollHeight - window.innerHeight;
window.onload = function() {
    $loader.classList.remove('loader--active')
    progerssbar.style.height = 0;
    $(window).scroll(function() {
        var progresshight = (window.pageYOffset / totalhight) * 100;
        progerssbar.style.height = progresshight + "%";
    });
};