$(document).ready(() => {
    $('.proj-box').on('mouseenter', () => {
        if ($('.portfolio').css("display") == "grid" ) {
            $('.portfolio-overview').fadeOut();
            $('.quiz-info').fadeIn();
        $('.proj-info').slideDown();
    } else {
        $('.proj-info').slideDown();
    }
})
      $('.proj-box').on('mouseleave', () => {
        if ($('.portfolio').css("display") == "grid" ) {
        $('.proj-info').slideUp()
        $('.portfolio-overview').fadeIn();
        $('.quiz-info').fadeOut();
    } else {
        $('.proj-info').slideUp()
    }
      })


    })