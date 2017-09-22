$(document).ready(function(){

  $('.nav_all').click(function(){
    $('.item').removeClass('hide');
    $('.item').addClass('show');
  });

  $('.nav_blue').click(function(){
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.blue').removeClass('hide');
    $('.item.blue').addClass('show')
  });

  $('.nav_green').click(function(){
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.green').removeClass('hide');
    $('.item.green').addClass('show')
  });

  $('.nav_brown').click(function(){
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.brown').removeClass('hide');
    $('.item.brown').addClass('show')
  });

  $('.nav_red').click(function(){
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.red').removeClass('hide');
    $('.item.red').addClass('show')
  });


  $('.nav_grey').click(function(){
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.grey').removeClass('hide');
    $('.item.grey').addClass('show')
  });





});
