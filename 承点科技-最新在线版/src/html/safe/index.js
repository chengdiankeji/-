require('cssDir/news/index.css')
require('cssDir/safe/index.css')
require('fontsDir/iconfont.css')

var width = document.body.clientWidth;

if(width <= 750){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        direction : 'vertical',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}else{
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerColumn: 4,
        direction : 'vertical',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}

$(function(){
    $(".banner").addClass("load")
})

$('.A-up').on('click', function() {
    $('html,body').animate({scrollTop: '0px'}, 800);});
