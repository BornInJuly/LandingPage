$(function(){
    var width = 1200;
    $('.slider').css('margin-left',-width*4);

    setInterval(function() {
        var margin = $('.slider').css('margin-left');
        margin = parseInt(margin);
        

        if (margin == -width) {
            console.log('Подмена!')
            $('.slider').css('margin-left',-width*4);
            margin = -width*3;
        } else {
            margin = margin + width;
        }

        $('.slider').animate({marginLeft: margin},1000);

    },3000);

    console.log(width);
});