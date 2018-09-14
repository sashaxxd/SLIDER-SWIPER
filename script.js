function indicator(autoplay){
    $('.swiper-indication').stop(true);
    $('.swiper-indication').css({width:'0%',});
    $('.swiper-indication').animate({width:'100%',},
        autoplay,'linear');}
var swiper=new Swiper('.ares-slider',{
    loop:true,
    nextButton:'.swiper-button-next',
    prevButton:'.swiper-button-prev',
    paginationClickable:true,
    spaceBetween:20,
    autoplayDisableOnInteraction:false,
    autoplay: 5000,
    onTouchStart:function(){},
    onInit:function(swiper){},onAutoplay:function(swiper){

    }});
