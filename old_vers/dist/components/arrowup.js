// ===== Scroll to Top ==== 
/*$(document).ready(function(){
	$(window).scroll(function() {
		  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
		    $('#return-to-top').fadeIn(200); // Fade in the arrow
		  } else {
		    $('#return-to-top').fadeOut(200); // Else fade out the arrow
		  }
	});
	$('#return-to-top').click(function() { // When arrow is clicked
		  $('body,html').animate({
		    scrollTop: 0 // Scroll to top of body
		  }, 500);
		  return false;
	});
});*/
$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

  var amountScrolled = 300;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('.back-to-top').fadeIn(150);
  } else {
    $('.back-to-top').fadeOut(150);
  }
});
$('.back-to-top').click(function() { // When arrow is clicked
	  $('body,html').animate({
	    scrollTop: 0 // Scroll to top of body
	  }, 500);
	  return false;
});