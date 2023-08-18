$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    console.log("scrolldistance: "+scrollDistance);
    // Home
    if (scrollDistance < 120) {
        $('#sunday-tab').removeClass('inView');
        $('#saturday-tab').removeClass('inView');
        $('#friday-tab').removeClass('inView');
        $('#photos-tab').removeClass('inView');
        $('#monday-tab').removeClass('inView');
        $('#thursday-tab').removeClass('inView');

        $('#monday-tab').addClass('backToNorm');
        $('#thursday-tab').addClass('backToNorm');
        $('#sunday-tab').addClass('backToNorm');
        $('#saturday-tab').addClass('backToNorm');
        $('#friday-tab').addClass('backToNorm');
        $('#photos-tab').addClass('backToNorm');
    }

        // Thursday
        if (scrollDistance > 120 && scrollDistance < 470) {
            $('#sunday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#friday-tab').removeClass('inView');
            $('#photos-tab').removeClass('inView');
            $('#monday-tab').removeClass('inView');
            $('#thursday-tab').removeClass('backToNorm');
    
            $('#monday-tab').addClass('backToNorm');
            $('#thursday-tab').addClass('inView');
            $('#sunday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('backToNorm');
            }

            // Friday
        if (scrollDistance > 470 && scrollDistance < 1020) {
            $('#sunday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#friday-tab').removeClass('backToNorm');
            $('#photos-tab').removeClass('inView');
            $('#monday-tab').removeClass('inView');
            $('#thursday-tab').removeClass('inView');
    
            $('#monday-tab').addClass('backToNorm');
            $('#thursday-tab').addClass('backToNorm');
            $('#sunday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('inView');
            $('#photos-tab').addClass('backToNorm');

        }

        // Saturday
        if (scrollDistance > 1020 && scrollDistance < 1565) {
            $('#sunday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('backToNorm');
            $('#friday-tab').removeClass('inView');
            $('#photos-tab').removeClass('inView');
            $('#monday-tab').removeClass('inView');
            $('#thursday-tab').removeClass('inView');
    
            $('#monday-tab').addClass('backToNorm');
            $('#thursday-tab').addClass('backToNorm');
            $('#sunday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('inView');
            $('#friday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('backToNorm');
        }

        //Sunday
        if (scrollDistance > 1565 && scrollDistance < 2125) {
            $('#sunday-tab').removeClass('backToNorm');
            $('#saturday-tab').removeClass('inView');
            $('#friday-tab').removeClass('inView');
            $('#photos-tab').removeClass('inView');
            $('#monday-tab').removeClass('inView');
            $('#thursday-tab').removeClass('inView');
    
            $('#monday-tab').addClass('backToNorm');
            $('#thursday-tab').addClass('backToNorm');
            $('#sunday-tab').addClass('inView');
            $('#saturday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('backToNorm');
        }

        //Monday
        if (scrollDistance > 2125 && scrollDistance < 2560) {
            $('#sunday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#friday-tab').removeClass('inView');
            $('#photos-tab').removeClass('inView');
            $('#monday-tab').removeClass('backToNorm');
            $('#thursday-tab').removeClass('inView');
            
            $('#monday-tab').addClass('inView');
            $('#thursday-tab').addClass('backToNorm');
            $('#sunday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('backToNorm');
        }

        //Monday
        if (scrollDistance > 2560) {
            $('#sunday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#friday-tab').removeClass('inView');
            $('#photos-tab').removeClass('backToNorm');
            $('#monday-tab').removeClass('inView');
            $('#thursday-tab').removeClass('inView');
                    
            $('#monday-tab').addClass('backToNorm');
            $('#thursday-tab').addClass('backToNorm');
            $('#sunday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('inView');
        }
        
        
  }).scroll();