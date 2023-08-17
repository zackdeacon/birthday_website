$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    console.log("scrolldistance: "+scrollDistance);

    if (scrollDistance < 140) {
        $('#sunday-tab').removeClass('inView');
        $('#saturday-tab').removeClass('inView');
        $('#friday-tab').removeClass('inView');
        $('#sunday-tab').addClass('backToNorm');
        $('#saturday-tab').addClass('backToNorm');
        $('#friday-tab').addClass('backToNorm');
    }

        if (scrollDistance > 140 && scrollDistance < 580) {
            $('#sunday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#friday-tab').removeClass('backToNorm');
            $('#friday-tab').addClass('inView');
            $('#sunday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
        }

        if (scrollDistance > 580 && scrollDistance < 1050) {
            $('#sunday-tab').removeClass('inView');
            $('#friday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('backToNorm');
            $('#saturday-tab').addClass('inView');
            $('#sunday-tab').addClass('backToNorm');
            $('#friday-tab').addClass('backToNorm');
        }

        if (scrollDistance > 1050) {
            console.log("sunday!");
            $('#friday-tab').removeClass('inView');
            $('#saturday-tab').removeClass('inView');
            $('#sunday-tab').removeClass('backToNorm');
            $('#sunday-tab').addClass('inView');
            $('#friday-tab').addClass('backToNorm');
            $('#saturday-tab').addClass('backToNorm');
        }
  }).scroll();