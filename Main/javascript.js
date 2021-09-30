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

document.querySelector('.btn').addEventListener('click', function() {
    $loader.classList.add('loader--active')
    window.setTimeout(function() {
        $loader.classList.remove('loader--active')
    }, 5000)
});




/* #################################    PARTICLES */

var particles = document.getElementById('particles');
var goToStartBtn = document.getElementById('goToStartButton');
window.addEventListener('scroll', function() {
    var scrolling = window.scrollY;
    particles.style.top = (scrolling + 300) * 0.5 + 'px';
});





$(window).scroll(function() {
    var progresshight = (window.pageYOffset / totalhight) * 100;
    progerssbar.style.height = progresshight + "%";
});

/* #################################    NAV BAR */

var navbtn = document.querySelector('.menu-btn');
let menuOpen = false;
var header = document.getElementById('header');
var navitems = document.getElementById('navitems');
navbtn.addEventListener('click', function() {
    if (!menuOpen) {
        header.style.width = '25%'
        navitems.style.visibility = 'visible';
        navbtn.style.position = 'fixed';
        navbtn.classList.add('open');
        menuOpen = true;
    } else {
        header.style.width = '0%';
        navitems.style.visibility = 'collapse';
        navbtn.style.position = 'absolute';
        navbtn.classList.remove('open');
        menuOpen = false;
    }
});