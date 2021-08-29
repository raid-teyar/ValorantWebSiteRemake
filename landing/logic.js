$(window).on("scroll", function(){
    var scrolling = window.scrollY;
    $(".home-pattern").css("top", (scrolling + 300)* 0.5 + 'px');
});

$(window).on("scroll",function() {
	if ($(window).scrollTop()) {
		$("header").addClass("black");
    	$("a").addClass("black");
		$(".logo").css("visibility","collapse")
		$("header").css("padding","10px 29% 10px 25%");
		}
	else{
		$("header").removeClass("black");
    	$("a").removeClass("black");
		$(".logo").css("visibility","visible")
		$("header").css("padding","10px 300px");
		}
	});