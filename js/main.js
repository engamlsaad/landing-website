$('.review-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed: 700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
 

$('.blog-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed: 700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})