$(document).ready(function() {


// Add jQuery here


$(document).ready(function() {
  $('.rowRed').addClass('startPosRed');
  $('.rowBlue').addClass('startPosBlue');
  $('.rowBlack').addClass('startPosBlack');
  $('.txtTitle').addClass('startSizeTxt');
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

  $("block").click(function(){

    $('.diamond').addClass('txtChange');
    $('.txtTitle').removeClass('endSizeTxt');
      $('.txtTitle').addClass('startSizeTxt');

  });












  });
