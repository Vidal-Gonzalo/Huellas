//WOW
new WOW().init();

//Owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true, 
            navText : ["<i class='fas fa-2x fa-chevron-left'></i>","<i class='fas fa-2x fa-chevron-right'></i>"],
            loop:true,
            autoHeight: true
        }
    }
})