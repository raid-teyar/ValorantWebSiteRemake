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


var audio = document.getElementById("guns-page-theme");
audio.volume = 0.2;