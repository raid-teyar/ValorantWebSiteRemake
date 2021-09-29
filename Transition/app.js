var $loader = document.querySelector('.loader')

window.onload = function() {
    $loader.classList.remove('loader--active')
};


window.setTimeout(function() {
    $loader.classList.remove('loader--active')
}, 5000)