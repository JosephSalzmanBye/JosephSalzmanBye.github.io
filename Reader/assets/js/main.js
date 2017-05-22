  $(document).ready(function() {

/* create base function for expanding images */
  $('.inlineImg').mouseenter(function() {
    $('.responseBox').removeClass('show');
    $('.inlineImg').removeClass('enlarge');
    $(this).toggleClass('enlarge');
  });

/* Reading A prompts for responses */

  $('.insert1').mouseenter(function() {
    $('.insert1Response').addClass('show');
  });








});
