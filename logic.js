var particles = document.getElementById('particles');
window.addEventListener('scroll', function(){
    var scrolling = window.scrollY;
    particles.style.top = (scrolling + 300)* 0.5 + 'px';
});

$(window).scroll(function() {
	if ($(window).scrollTop()) {
		$("header").addClass("black");
    $("a").addClass("black");
		}
	else{
		$("header").removeClass("black");
    $("a").removeClass("black");
		}
	});