$(document).ready(function() {


// Add jQuery here

/* posterd*/
$(document).ready(function() {
  $('.blockBlue').addClass('size');
  $('.blockBlack').addClass('size');
  $('.blockYellow').addClass('size');
  $('.blockClear').addClass('size');
  $('.blockGrey').addClass('size');
  $('.blockRed').addClass('size');
});

$('.blockGrey').click(function(){

  $('.vertical').toggleClass('oscillate');

});
$('.blockRed').click(function(){
  $('.vertical .block').toggleClass('shrink');
  $('.vertical .block').toggleClass('size');

});
$('.blockGrey').click(function(){
  $('.vertical').toggleClass('shiftdown');

});

$('.blockBlack').click(function(){
  $('.horizon .blockBlack').toggleClass('shiftDown');

});
$('.blockYellow').click(function(){
  $('.horizon .blockYellow').toggleClass('shiftUp');

});
$('.blockClear').click(function(){
    $('.blockClear').toggleClass('size');
  $('.blockClear').toggleClass('grow');

});
$('.blockBlue').click(function(){
  $('.horizon').toggleClass('shiftLeft');
});

/* postere*/
var audioBell = document.createElement('audio');

audioBell.setAttribute('src', 'http://freesound.org/data/previews/56/56076_692375-lq.mp3');
$.get();

audioBell.addEventListener("load", function() {
  audioBell.play();
}, true);

var audioHorn = document.createElement('audio');

audioHorn.setAttribute('src', 'https://www.soundjay.com/misc/hohner-melodica-1.mp3');
$.get();

audioHorn.addEventListener("load", function() {
  audioHorn.play();
}, true);

$('.soundA').mouseenter(function() {
  audioBell.play();
  $('.circle.soundA').addClass('shake');
});
$('.soundA').mouseleave(function() {
  audioBell.pause();
    audioBell.currentTime = 0;
  $('.circle.soundA').removeClass('shake');
});
$('.soundB').click(function() {
  audioBell.pause();
});
$(".soundC").hover(
  function() {
    audioHorn.play();
      $('.circle.soundC').addClass('moveLeft');
  },
  function() {
    audioHorn.pause();
    audioHorn.currentTime = 0;
      $('.circle.soundC').removeClass('moveLeft');
  }
);
/*Poster C */
$(document).ready(function() {
  $('.rowRed').addClass('startPosRed');
  $('.rowBlue').addClass('startPosBlue');
  $('.rowBlack').addClass('startPosBlack');

});

setTimeout(function(){
    $('.txtTitle').addClass('endSizeTxt');
    $('.txtBody').removeClass('startSizeTxt');
  }

  ,4000);
setTimeout(function(){
    $('.rowBlue').removeClass('startPosBlue');
    $('.rowBlue').addClass('slideLeftBlue');
  }

  ,2950);
setTimeout(function(){
  $('.rowBlack').removeClass('startPosBlack');
    $('.rowBlack').addClass('slideLeft');
  }

  ,2500);

setTimeout(function(){
  $('.rowRed').removeClass('startPosRed');
    $('.rowRed').addClass('slideLeft');
  }

  ,2000);

  $(".block").click(function(){
    $('.diamond').addClass('round')
    $('.txtBlock').addClass('round');
    $('.txtBlock .txtTitle').addClass('txtChange');

  });


  });
