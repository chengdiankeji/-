require('cssDir/news/index.css')
require('cssDir/brand/index.css')
require('fontsDir/iconfont.css')

var swiper = new Swiper('.swiper-container', {
    slidesPerView: '2',
    spaceBetween: 100,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    loop: true,
    /*autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },*/
});
$(function(){
    $(".banner").addClass("load")
})

$('.A-up').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
