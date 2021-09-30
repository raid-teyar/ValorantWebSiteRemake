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



/* ##### settings ##### */

var settingsBtn = document.getElementById('goToStartButton');
var settingsMenu = document.getElementById('setings');
var visible = false;
settingsBtn.addEventListener("click", function () {
    if (visible) {
        settingsMenu.style.opacity = 0;
        settingsMenu.style.height = 0;
        settingsBtn.style.transform  = 'rotate(80deg)';
        visible = false;
    }else{
        settingsMenu.style.opacity = 1;
        settingsMenu.style.height = '200px';
        settingsBtn.style.transform  = 'rotate(-80deg)';
        visible = true;
    }
});

/* theme */
var isBlack = true;
var root = document.querySelector(':root');
var rs = getComputedStyle(root);
var themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click',function(){
    if (isBlack) {
        document.documentElement.style.setProperty('--base-color','#ece8e1')
        document.documentElement.style.setProperty('--white-color','#0f1923')
        document.documentElement.style.setProperty('--secondbase-color','#ece8e1')
        isBlack = false;
    }else{
        document.documentElement.style.setProperty('--base-color','#0f1923')
        document.documentElement.style.setProperty('--white-color','#ece8e1')
        document.documentElement.style.setProperty('--secondbase-color','#101822')
        isBlack = true;
    }
});


/* audio */
var musicOn = true;
var music = document.getElementById('audio');
var musicBtn = document.getElementById('musicBtn');
music.volume = '0.5';
musicBtn.addEventListener('click', function () {
    if (musicOn) {
        music.volume = 0;
        musicOn = false;
    }else{
        music.volume = '0.5';
        musicOn = true;
    }
});



/* #################################    PARTICLES */

var particles = document.getElementById('particles');
window.addEventListener('scroll', function() {
    var scrolling = window.scrollY;
    particles.style.top = (scrolling + 300) * 0.5 + 'px';
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