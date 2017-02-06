var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

$(document).ready(function () {
    navbarHeight = $('header').outerHeight();

    var mainHeight = (5 * $(".main").width()) / 8;
    $(".main-header").css('height', mainHeight + 'px');
});

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        if ($(window).width() > 460 || $(".nav-menu-mobile i").hasClass("fa-bars")) {
            $('header').animate({ marginTop: -500 }, 200);
        }
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').animate({ marginTop: 0 }, 200);
        }
    }

    lastScrollTop = st;
}
