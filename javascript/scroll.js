$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    console.log("scrolldistance: "+scrollDistance);

    if (scrollDistance < 120) {
        $('#sunday-tab').removeClass('inView');
        $('#saturday-tab').removeClass('inView');
        $('#friday-tab').removeClass('inView');
        $('#photos-tab').removeClass('inView');
        $('#sunday-tab').addClass('backToNorm');
        $('#saturday-tab').addClass('backToNorm');
        $('#friday-tab').addClass('backToNorm');
        $('#photos-tab').addClass('backToNorm');
    }

        if (scrollDistance > 120 && scrollDistance < 580) {
            $('#sunday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#friday-tab').removeClass('backToNorm');
            $('#photos-tab').removeClass('inView');
            $('#friday-tab').addClass('inView');
            $('#sunday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('backToNorm');
        }

        if (scrollDistance > 580 && scrollDistance < 1050) {
            $('#sunday-tab').removeClass('inView');
            $('#friday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('backToNorm');
            $('#photos-tab').removeClass('inView');
            $('#saturday-tab').addClass('inView');
            $('#sunday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('backToNorm');

        }

        if (scrollDistance > 1050 && scrollDistance < 1490) {
            $('#friday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#sunday-tab').removeClass('backToNorm');
            $('#photos-tab').removeClass('inView');
            $('#sunday-tab').addClass('inView');
            $('#friday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('backToNorm');
        }

        if (scrollDistance > 1490) {
            $('#friday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#sunday-tab').removeClass('inView');
            $('#photos-tab').removeClass('backToNorm');
            $('#sunday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
            $('#photos-tab').addClass('inView');
        }
  }).scroll();