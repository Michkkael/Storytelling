$(document).ready(init);
var pi = Math.PI;

function init() {
    // $('#start').addClass('fadeIn');
    $('.wrapper').addClass('fadeIn');
    $('#start').addClass('fadeIn');
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath", {
        scrollSpeed: 10, // Default is 50
        rotationSpeed: Math.PI / 100 // Default is Math.PI / 15
    })
    .moveTo(1900, 150, {name: "start"})
	.lineTo(1900, 1000, {name: "intro"})
	.lineTo(1900, 1400)
	.arc(2500, 1400, 600, pi, 0, true, {rotate: pi})
	.lineTo(3100, 1000, {name: "part1"})
	.lineTo(3100, -900)
	.arc(2500, -900, 600, 0, -pi/2, true, {rotate: 3*pi/2})
	.lineTo(1900, -1500, {name: "part2"})
	.lineTo(1300, -1500)
	.arc(1300, -900, 600, -pi/2, pi, true, {rotate: 2*pi})
	.lineTo(700, -600, {rotate: 5*pi/2, name: "part3"})
	.lineTo(700, 1400, {rotate: 3*pi/2, name: "part4"})
	.lineTo(700, 2500)
	.arc(1300, 2500, 600, pi, pi/2, true, {rotate: 5*pi/2})
	.lineTo(2300, 3100, {name: "part5"})
	.lineTo(3500, 3100)
	.arc(3500, 2500, 600, pi/2, 0, true, {rotate: 6*pi/2})
	.lineTo(4100, 1500, {name: "conclusion"})

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: false});

	// Add scrollTo on click on the navigation anchors
	$("body").find("a").not(".choice").not(".portfolio").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1500, "easeInOutSine");
		});
	});

	/* ===================================================================== */
}
jQuery(document).ready(function ($) {
	$('aside.info .fa-stack').click(function() {
		$('aside.info').fadeOut('slow');
	});
});