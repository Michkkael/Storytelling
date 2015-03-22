$(document).ready(init);
var pi = Math.PI;
function init() {
    // $('#start').addClass('fadeIn');
    $('.wrapper').addClass('fadeIn');
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath", {
        scrollSpeed: 40, // Default is 50
        rotationSpeed: Math.PI / 15 // Default is Math.PI / 15
    })
    	
    	.moveTo(400, 150, {name: "start"})
    	.lineTo(400, 1000, {name: "intro"})
    	.lineTo(400, 1400)
    	.arc(1000, 1400, 600, pi, 0, true, {rotate: pi})
    	.lineTo(1600, 1000, {name: "part1"})
    	.lineTo(1600, -900)
    	.arc(1000, -900, 600, 0, -pi/2, true, {rotate: 3*pi/2})
    	.lineTo(400, -1500, {name: "part2"})
    	.lineTo(-200, -1500)
    	.arc(-200, -900, 600, -pi/2, pi, true, {rotate: 2*pi})
    	.lineTo(-800, -600, {name: "part3"})
    	.lineTo(-800, 1400, {name: "part4"})
    	.lineTo(-800, 2500)
    	.arc(-200, 2500, 600, pi, pi/2, true, {rotate: 5*pi/2})
    	.lineTo(800, 3100, {name: "part5"})
    	.lineTo(2000, 3100)
    	.arc(2000, 2500, 600, pi/2, 0, true, {rotate: 6*pi/2})
    	.lineTo(2600, 1500, {name: "conclusion"})

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: false});

	// Add scrollTo on click on the navigation anchors
	$("body").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

//	$(".settings .show-path").click(function(e) {
//		e.preventDefault();
//		$(".sp-canvas").toggle();
//	}).toggle(function() {
//		$(this).text("Hide Path");
//	}, function() {
//		$(this).text("Show Path");
//	});

	}