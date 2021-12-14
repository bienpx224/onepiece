(function ($) {
    "user strict";

    $(document).ready(function () {
        // preloader
        $(".preloader").delay(500).animate({
            "opacity": "0"
        }, 500, function () {
            $(".preloader").css("display", "none");
        });
        // nice-select
        $('select').niceSelect();
        background();
    });

    new WOW().init();

//Create Background Image
    function background() {
        var img = $('.bg_img');
        img.css('background-image', function () {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
        });
    }

    /* ---------------------------------------------
                ## Sidebar Script
            --------------------------------------------- */
    var w = $(window).width();
    var MarginTop = (w > 1199) ? 80 : 0;
    if ($('.sidebar').length) {
        $('.sidebar').theiaStickySidebar({
            'containerSelector': '.blog-section',
            'additionalMarginTop': MarginTop,
            'minWidth': 992,
        });
    }

    setInterval(function () {
        $(".banner-group-shape").addClass("active")
    }, 1000);

    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
            fixed_top.addClass("animated fadeInDown header-fixed");
        } else {
            fixed_top.removeClass("animated fadeInDown header-fixed");
        }
    });

    // navbar-click
    $(".navbar li a").on("click", function () {
        var element = $(this).parent("li");
        if (element.hasClass("show")) {
            element.removeClass("show");
            element.find("li").removeClass("show");
        } else {
            element.addClass("show");
            element.siblings("li").removeClass("show");
            element.siblings("li").find("li").removeClass("show");
        }
    });

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });

    //menu bar
    $('.header-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.header-btn-group').toggleClass('active wow');
    })



// ------ cursor js ---------- //
    var $circleCursor = $('.cursor');

    function moveCursor(e) {
        var t = e.clientX + "px",
            n = e.clientY + "px";

        TweenMax.to($circleCursor, .2, {
            left: t,
            top: n,
            ease: 'Power1.easeOut'
        });
    }

    $(window).on('mousemove', moveCursor);

// simple zoom
    function zoomCursor(e) {
        TweenMax.to($circleCursor, .1, {
            scale: 3,
            ease: 'Power1.easeOut'
        });
        $($circleCursor).removeClass('cursor-close');
    }

    $('a, .zoom-cursor').on('mouseenter', zoomCursor);

// close
    function closeCursor(e) {
        TweenMax.to($circleCursor, .1, {
            scale: 3,
            ease: 'Power1.easeOut'
        });
        $($circleCursor).addClass('cursor-close');
    }

    $('.trigger-close').on('mouseenter', closeCursor);

// default
    function defaultCursor(e) {
        TweenLite.to($circleCursor, .1, {
            scale: 1,
            ease: 'Power1.easeOut'
        });
        $($circleCursor).removeClass('cursor-close');
    }

    $('a, .zoom-cursor, .trigger-close, .trigger-plus').on('mouseleave', defaultCursor);

})(jQuery);


$('#copyaddress').tooltip({
    trigger: 'click',
    placement: 'bottom'
});

function setTooltip(message) {
    $('#copyaddress').tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
}

function hideTooltip() {
    setTimeout(function() {
        $('#copyaddress').tooltip('hide');
    }, 1000);
}

// Clipboard
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    setTooltip('Copied');
    hideTooltip();

});

clipboard.on('error', function(e) {
    setTooltip('Failed');
    hideTooltip();

});
