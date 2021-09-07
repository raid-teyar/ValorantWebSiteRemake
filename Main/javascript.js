var particles = document.getElementById('particles');
window.addEventListener('scroll', function() {
    var scrolling = window.scrollY;
    particles.style.top = (scrolling + 300) * 0.5 + 'px';
});

var progerssbar = document.getElementById('progressbar');
var totalhight = document.body.scrollHeight - window.innerHeight;

$(window).scroll(function() {
    if ($(window).scrollTop()) {
        $("header").addClass("black");
        $("a").addClass("black");
    } else {
        $("header").removeClass("black");
        $("a").removeClass("black");
    }
    var progresshight = (window.pageYOffset / totalhight) * 78;
    progerssbar.style.height = progresshight + "%";
});

