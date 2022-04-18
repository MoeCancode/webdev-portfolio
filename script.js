$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 50,
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

ScrollReveal().reveal('#sectionOne', {
    duration: 2700,
    reset: true
});
ScrollReveal().reveal('#sectionTwo', {
    duration: 2700,
    reset: true
});
ScrollReveal().reveal('#sectionThree', {
    duration: 2700,
    reset: true
});
ScrollReveal().reveal('#sectionFour', {
    duration: 2700,
    reset: true
});