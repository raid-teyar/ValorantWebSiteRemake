var particles = document.getElementById('particles');
window.addEventListener('scroll', function(){
    var scrolling = window.scrollY;
    particles.style.top = (scrolling + 300)* 0.5 + 'px';
    
    particles.style.transform = "rotate(-"+scrolling * 0.01+"deg)";
});