  $(document).ready(function() {

  $('.text1').mouseenter(function() {
    $('.Smiley').addClass('showme');

  });

  $('.text1').mouseleave(function() {
  $('.Smiley').removeClass('showme');
  });

  $('.inlineimage').mouseenter(function() {
    $('.popup').removeClass('showme');
    $('.inlineimage').removeClass('enlarge');
    $(this).toggleClass('enlarge');
  });


  $('.SmileyEmojiImg').mouseenter(function() {
    $('.SmileyEmojiTxt').addClass('showme');
  });

  $('.MellonImg').mouseenter(function() {
    $('.MellonImgTxt').addClass('showme');
  });




  $('.RickAstley').mouseenter(function() {
      $(this).toggleClass('enlarge');
  });

  // $('.MellonImg').mouseenter(function() {
  //   $('.MellonImgTxt').toggleClass('showme');
  //   $('.SmileyEmojiTxt').removeClass('showme');
  //    $('.SmileyEmojiImg').removeClass('enlarge');
  //     $(this).toggleClass('enlarge');
  //
  // });
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
