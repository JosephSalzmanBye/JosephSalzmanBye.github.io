$(document).ready(function() {


// Add jQuery here



$(".link1").mouseenter(function(){
  $('.rect.orange').addClass('lift')
  $('.preview .image1').addClass('show')
});
$(".link1").mouseleave(function(){
  $('.rect.orange').removeClass('lift')
  $('.preview .image1').removeClass('show')
});
$(".link2").mouseenter(function(){
  $('.rect.blue').addClass('lift')
    $('.preview .image2').addClass('show')
});
$(".link2").mouseleave(function(){
  $('.rect.blue').removeClass('lift')
    $('.preview .image2').removeClass('show')
});
$(".link3").mouseenter(function(){
  $('.rect.green').addClass('lift')
    $('.preview .image3').addClass('show')
});
$(".link3").mouseleave(function(){
  $('.rect.green').removeClass('lift')
    $('.preview .image3').removeClass('show')
});
$(".link4").mouseenter(function(){
  $('.rect.yellow').addClass('lift')
    $('.preview .image4').addClass('show')
});
$(".link4").mouseleave(function(){
  $('.rect.yellow').removeClass('lift')
    $('.preview .image4').removeClass('show')
});
$(".link5").mouseenter(function(){
  $('.rect.red').addClass('lift')
    $('.preview .image5').addClass('show')
});
$(".link5").mouseleave(function(){
  $('.rect.red').removeClass('lift')
    $('.preview .image5').removeClass('show')
});
});
