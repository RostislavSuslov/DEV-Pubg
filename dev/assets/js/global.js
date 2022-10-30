jQuery(document).ready(function($) {
    $(".fancybox").fancybox();
    $('.nice_Select').niceSelect();
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })
 

       
    var nav = $('.language-title');
    var selection = $('.language-list');
    var select = selection.find('li');

    nav.click(function(event) {
        if (nav.hasClass('active')) {
            nav.removeClass('active');
            selection.stop().slideUp(200);
        } else {
            nav.addClass('active');
            selection.stop().slideDown(200);
        }
        event.preventDefault();
    });

    select.click(function(event) {
        select.removeClass('active');
        $(this).addClass('active');
        var $langAbr = $(this).text();
        // var dataLang = $(this).attr('data-lang')
        nav.text($langAbr);
        // nav.prop('data-lang', $langAbr);

        
        nav.trigger('click');
        //alert($lang);
        // alert ("location.href = 'index.php?lang=" + $(this).attr('data-value'));
    });

    $('.slider-testimonials').slick({
        infinite: true,
        slidesToShow: 1,
        // centerMode: true,
        slidesToScroll: 1
    });
    

})