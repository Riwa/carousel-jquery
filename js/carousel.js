$(document).ready(function(){
let imageIndex = 0;
let item = $('.item');
let lastImage = item.length - 1;

  $('#next').click(function(){
    $('.item').removeClass('active');
    imageIndex += 1;

    if (imageIndex <= lastImage) {
      $('.item').eq(imageIndex).addClass('active');
    } else {
      imageIndex = 0;
      $('.item').eq(imageIndex).addClass('active');
    }

  });

  $('#prev').click(function(){
    console.log('prev');

    $('.item').removeClass('active');

    imageIndex -= 1;

    if (imageIndex >= 0) {

      $('.item').eq(imageIndex).addClass('active');

    } else {

      imageIndex = lastImage ;
      $('.item').eq(imageIndex).addClass('active');

    }


  });

  

});