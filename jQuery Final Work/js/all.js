$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
         $('body').toggleClass('menu-show');
    })
    $('.dropdown-menu').on('click', function (e) {
        e.preventDefault();
        $('.dropdown').toggleClass('active');
    })
    
  
    //Swiper
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
         autoplay: {
             delay: 2000,
         },
    })
    //Swiper End

    //Lightbox
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'showImageNumberLabel': true,
    })
    //Lightbox End


    //Top Scroll
    $('.top-button').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},500);
    });

});