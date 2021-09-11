var particles = document.getElementById('particles');
var goToStartBtn = document.getElementById('goToStartButton');
window.addEventListener('scroll', function() {
    var scrolling = window.scrollY;
    particles.style.top = (scrolling + 300) * 0.5 + 'px';
    if(this.scrollY == 0 || this.scrollY < 300){
        goToStartBtn.style.visibility = 'collapse';
    }else{
        goToStartBtn.style.visibility = 'visible';
    }
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
    var progresshight = (window.pageYOffset / totalhight) * 100;
    progerssbar.style.height = progresshight + "%";
});

var navbtn = document.querySelector('.menu-btn');
let menuOpen = false;
var header = document.getElementById('header');
var navitems = document.getElementById('navitems');
navbtn.addEventListener('click', function () {
    if (!menuOpen) {
        header.style.width = '25%'
        navitems.style.visibility = 'visible';
        navbtn.style.position = 'fixed';
        navbtn.classList.add('open');
        menuOpen = true;
    }else{
        header.style.width = '0%';
        navitems.style.visibility = 'collapse';
        navbtn.style.position = 'absolute';
        navbtn.classList.remove('open');
        menuOpen = false;
    }
});




