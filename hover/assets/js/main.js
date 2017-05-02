$(document).ready(function() {

  $('.text1').mouseenter(function() {
    $('.Smiley').addClass('showme');

  });

  $('.text1').mouseleave(function() {
  $('.Smiley').removeClass('showme');
  });

  $('.SmileyEmojiImg').mouseenter(function() {
    $('.SmileyEmojiTxt').toggleClass('showme');
    $('.MellonImgTxt').removeClass('showme');
     $('.MellonImg').removeClass('enlarge');
      $(this).toggleClass('enlarge');
  });
  $('.RickAstley').mouseenter(function() {
      $(this).toggleClass('enlarge');
  });
  
  $('.MellonImg').mouseenter(function() {
    $('.MellonImgTxt').toggleClass('showme');
    $('.SmileyEmojiTxt').removeClass('showme');
     $('.SmileyEmojiImg').removeClass('enlarge');
      $(this).toggleClass('enlarge');

  });
  $('.MellonImgTxt').mouseenter(function() {
      $('.SubTitle').toggleClass('showme');
  });
  $('.MellonImgTxt').mouseleave(function() {
      $('.SubTitle').toggleClass('showme');
  });

  $('.thumbnail').click(function() {
     $(this).toggleClass('enlarge');
   });


 $('.SmileyEmojiImg').mouseenter(function() {

   });

  $('.MellonImg').mouseenter(function() {

     });



});
