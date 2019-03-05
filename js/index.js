$(document).ready(function() {
	// marked size of slider
var windh=$(window).height(),
    upph=$(".upper-bar").innerHeight(),
    navh=$(".navbar").innerHeight();
    // $(".slider,carousel-item").height(windh-(upph+navh));
    // feature work suffle images
    $(".featured-work ul li").on("click",function() {
    	$(this).addClass("active").siblings().removeClass("active");
    	if($(this).data("class")=="all"){
    	$(".shuffle-imgs .col-md").css("opacity","1");}
    	else{
    		$(".shuffle-imgs .col-md").css("opacity","0.08");
    		$($(this).data("class")).parent().css("opacity","1");
    	}
    })


})