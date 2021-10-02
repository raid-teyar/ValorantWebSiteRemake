const spaceHolder = document.querySelector('.space-holder');
const spaceHolder2 = document.querySelector('.space-holder2');
const spaceHolder3 = document.querySelector('.space-holder3');
const spaceHolder4 = document.querySelector('.space-holder4');
const spaceHolder5 = document.querySelector('.space-holder5');
const spaceHolder6 = document.querySelector('.space-holder6');

/*
 */
const horizontal = document.querySelector('.horizontal');
const horizontal2 = document.querySelector('.horizontal2');
const horizontal3 = document.querySelector('.horizontal3');
const horizontal4 = document.querySelector('.horizontal4');
const horizontal5 = document.querySelector('.horizontal5');
const horizontal6 = document.querySelector('.horizontal6');

/*
 */

spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
spaceHolder2.style.height = `${calcDynamicHeight(horizontal2)}px`;
spaceHolder3.style.height = `${calcDynamicHeight(horizontal3)}px`;
spaceHolder4.style.height = `${calcDynamicHeight(horizontal4)}px`;
spaceHolder5.style.height = `${calcDynamicHeight(horizontal5)}px`;
spaceHolder6.style.height = `${calcDynamicHeight(horizontal6)}px`;

/*
 */

function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    const sticky2 = document.querySelector('.sticky2');
    const sticky3 = document.querySelector('.sticky3');
    const sticky4 = document.querySelector('.sticky4');
    const sticky5 = document.querySelector('.sticky5');
    const sticky6 = document.querySelector('.sticky6');

    /*
     */
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    horizontal2.style.transform = `translateX(-${sticky2.offsetTop}px)`;
    horizontal3.style.transform = `translateX(-${sticky3.offsetTop}px)`;
    horizontal4.style.transform = `translateX(-${sticky4.offsetTop}px)`;
    horizontal5.style.transform = `translateX(-${sticky5.offsetTop}px)`;
    horizontal6.style.transform = `translateX(-${sticky6.offsetTop}px)`;

    /*
     */
});

window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    spaceHolder2.style.height = `${calcDynamicHeight(horizontal2)}px`;
    spaceHolder3.style.height = `${calcDynamicHeight(horizontal3)}px`;
    spaceHolder4.style.height = `${calcDynamicHeight(horizontal4)}px`;
    spaceHolder5.style.height = `${calcDynamicHeight(horizontal5)}px`;
    spaceHolder6.style.height = `${calcDynamicHeight(horizontal6)}px`;

    /*
     */

});



/* ##### settings ##### */

var settingsBtn = document.getElementById('goToStartButton');
var settingsMenu = document.getElementById('setings');
var visible = false;
settingsBtn.addEventListener("click", function() {
    if (visible) {
        settingsMenu.style.opacity = 0;
        settingsMenu.style.height = 0;
        settingsBtn.style.transform = 'rotate(80deg)';
        visible = false;
    } else {
        settingsMenu.style.opacity = 1;
        settingsMenu.style.height = '200px';
        settingsBtn.style.transform = 'rotate(-80deg)';
        visible = true;
    }
});

/* theme */
var isBlack = true;
var root = document.querySelector(':root');
var rs = getComputedStyle(root);
var themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', function() {
    if (isBlack) {
        document.documentElement.style.setProperty('--base-color', '#ece8e1')
        document.documentElement.style.setProperty('--white-color', '#0f1923')
        document.documentElement.style.setProperty('--secondbase-color', '#ece8e1')
        isBlack = false;
    } else {
        document.documentElement.style.setProperty('--base-color', '#0f1923')
        document.documentElement.style.setProperty('--white-color', '#ece8e1')
        document.documentElement.style.setProperty('--secondbase-color', '#101822')
        isBlack = true;
    }
});


/* audio */
var musicOn = true;
var music = document.getElementById('audio');
var musicBtn = document.getElementById('musicBtn');
music.volume = '0.5';
musicBtn.addEventListener('click', function() {
    if (musicOn) {
        music.volume = 0;
        musicOn = false;
    } else {
        music.volume = '0.5';
        musicOn = true;
    }
});



/* #################################### TRANSITION SECTION */
var $loader = document.querySelector('.loader')

window.onload = function() {
    $loader.classList.add('loader--active')
};
window.setTimeout(function() {
    $loader.classList.remove('loader--active')
}, 2000);


/* #################################    TRANSITION & ProgressBar */
var $loader = document.querySelector('.loader')
var totalhight = document.body.scrollHeight - window.innerHeight;
window.onload = function() {
    $loader.classList.remove('loader--active')
};