$(document).ready(function() {

    $nav=$('.nav');
    $toggleCollapse= $('.toggle-collapse');

    $toggleCollapse.click(function() {

        $nav.toggleClass('collapse');
        
    })
   
    $('.owl-carousel').owlCarousel({

        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots: false,
        nav: true,
     
    });


})