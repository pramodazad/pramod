(function($) {
    "use strict"; // Start of use strict
/* ======= Fixed header when scrolled ======= */    
    $(window).on('scroll', function() {
         
         if ($(window).scrollTop() > 0) {
             $('#mainnav').addClass('scrolled');
         }
         else {
             $('#mainnav').removeClass('scrolled');
             
         }
    });
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    //put affix on the navbar
    $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 100) {
       $('#mainNav').toggleClass('affix-top').toggleClass('affix');
    }
});


    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
