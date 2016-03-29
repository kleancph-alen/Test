$(document).ready(function () {
    var stamDataOpen = false;
    var focused = 1;
    init();

    $("#nav1").click(function () {
        $("#nav1 span").css('color', '#F8F9F9');
        $("#nav2 span").css('color', '#616E72');
        $("#leftNavPointerLine").css('width', '24%');
        $("#activities").css('display', 'flex');
        $("#information").css('display', 'none');
    });

    $("#nav2").click(function () {
        $("#nav1 span").css('color', '#616E72');
        $("#nav2 span").css('color', '#F8F9F9');
        $("#leftNavPointerLine").css('width', '74%');
        $("#activities").css('display', 'none');
        $("#information").css('display', '');
    });

    $("#goUp").click(function () {
        if (focused != 1) {
            focused--;

            $(".card-active").attr("class", "card-active card-unfocused");
            $(".card").attr("class", "card dark");

            $("#" + focused).attr('class', 'card-active card-focused');
            $("#" + focused).parent()[0].setAttribute("class", "card");

            $("html, body").animate({ scrollTop: $('#' + focused).offset().top - 50 }, 500);
            if (focused == 1) {
                $('#goUp').prop('disabled', true);
                $('#goUp')[0].classList.add('disabled-button')
                $('#goDown').prop('disabled', false);
                $('#goDown')[0].classList.remove('disabled-button')
            }
            else {
                $('#goUp')[0].classList.remove('disabled-button')
                $('#goUp').prop('disabled', false);
                $('#goDown')[0].classList.remove('disabled-button')
                $('#goDown').prop('disabled', false);
            }

            $("#" + (focused + 1)).attr('class', 'card-active card-sub-focused');
            $("#" + (focused - 1)).attr('class', 'card-active card-sub-focused');
        }
    });

    $("#goDown").click(function () {
        focused++;
        $(".card-active").attr("class", "card-active card-unfocused");
        $(".card").attr("class", "card dark");

        $("#" + focused).attr('class', 'card-active card-focused');
        $("#" + focused).parent()[0].setAttribute("class", "card");

        $("html, body").animate({ scrollTop: $('#' + focused).offset().top - 50 }, 500);
        if (focused == $(".card-active").length) {
            $('#goDown')[0].classList.add('disabled-button')
            $('#goDown').prop('disabled', true);
            $('#goUp').prop('disabled', false);
            $('#goUp')[0].classList.remove('disabled-button')
        }
        else {
            $('#goDown').prop('disabled', false);
            $('#goDown')[0].classList.remove('disabled-button')
            $('#goUp').prop('disabled', false);
            $('#goUp')[0].classList.remove('disabled-button')
        }

        $("#" + (focused + 1)).attr('class', 'card-active card-sub-focused');
        $("#" + (focused - 1)).attr('class', 'card-active card-sub-focused');
    });

    $(window).resize(function () {
        var mainHeight = $('#activities').css('height');
        mainHeight = mainHeight.substring(0, mainHeight.length - 2);
        var stickyTop = document.querySelector('.sticky-top');
        var scrollTop = $(window).scrollTop(),
            elementOffsetTop = $('.sticky-top').offset().top,
            distance = (elementOffsetTop);
        var origOffsetY = distance;
        window.origOffsetY = origOffsetY;
        var origOffsetTEST = (elementOffsetTop + Number(mainHeight) - 60);
        window.origOffsetTEST = origOffsetTEST;

        var stickyBottom = document.querySelector('.sticky-bottom');
        var elementOffsetBottom = $('.sticky-bottom').offset().top;

        var distanceBottom = (elementOffsetTop + Number(mainHeight) + 60 - (window.screen.height / window.devicePixelRatio));

        var origOffsetY1 = distanceBottom;
        window.origOffsetY1 = origOffsetY1;

        window.origOffset2 = elementOffsetTop - (window.screen.height / window.devicePixelRatio);
        window.scrollY >= window.origOffsetY && window.scrollY <= window.origOffsetTEST ? stickyTop.classList.add('fixed-top') :
                                            stickyTop.classList.remove('fixed-top');

        window.scrollY <= window.origOffsetY1 && window.scrollY >= window.origOffset2 ? stickyBottom.classList.add('fixed-bottom') :
                                        stickyBottom.classList.remove('fixed-bottom');
    });

    $("#stamDataButton").click(function () {
        if (stamDataOpen) {
            $("#stamDataButton .caret").attr('class', 'caret');
            $("#stamData").css('display', 'none');
            setScrolling();
            stamDataOpen = false;
        }
        else {
            $("#stamDataButton .caret").attr('class', 'caret dropUp');
            $("#stamData").css('display', '');
            setScrolling();
            stamDataOpen = true;
        }
    });
});

var addEnabled = false;

function focusInput(input) {
    var span = input.parentElement.children[0];
    span.setAttribute("class", "visible-span");
    input.setAttribute("class", "form-control full-input");
}

function disfocusInput(input) {
    if (input.value == '') {
        var span = input.parentElement.children[0];
        span.setAttribute("class", "invisible-span");
        input.setAttribute("class", "form-control empty-input");
    }
}

function enableAddForm() {
    if (addEnabled) {
        $("#enabledAddButton")[0].setAttribute("class", "enabled-button-invisible");
        $("#disabledAddButton")[0].setAttribute("class", "disabled-button-visible");
        $("#addForm :input").prop('disabled', true);
        addEnabled = false;
    }
    else {
        $("#enabledAddButton")[0].setAttribute("class", "enabled-button-visible");
        $("#disabledAddButton")[0].setAttribute("class", "disabled-button-invisible");
        $("#addForm :input").prop('disabled', false);
        addEnabled = true;
    }
}

function init() {
    $('#stamData').load('stamData.html');
    $("#leftNavPointerLine").css('width', '24%');
    $("#nav1 span").css('color', '#F8F9F9');
    $("#stamData").css('display', 'none');
    setScrolling();
}

function setScrolling() {
    var mainHeight = $('#activities').css('height');
    mainHeight = mainHeight.substring(0, mainHeight.length - 2);
    var stickyTop = document.querySelector('.sticky-top');
    var scrollTop = $(window).scrollTop(),
        elementOffsetTop = $('.sticky-top').offset().top,
        distance = (elementOffsetTop);
    var origOffsetY = distance;
    window.origOffsetY = origOffsetY;
    var origOffsetTEST = (elementOffsetTop + Number(mainHeight) - 60);
    window.origOffsetTEST = origOffsetTEST;

    var stickyBottom = document.querySelector('.sticky-bottom');
    var elementOffsetBottom = $('.sticky-bottom').offset().top;

    var distanceBottom = (elementOffsetTop + Number(mainHeight) + 60 - (window.screen.height / window.devicePixelRatio));

    var origOffsetY1 = distanceBottom;
    window.origOffsetY1 = origOffsetY1;

    window.origOffset2 = elementOffsetTop + 60 - (window.screen.height / window.devicePixelRatio);
    window.scrollY >= window.origOffsetY && window.scrollY <= window.origOffsetTEST ? stickyTop.classList.add('fixed-top') :
                                        stickyTop.classList.remove('fixed-top');

    window.scrollY <= window.origOffsetY1 && window.scrollY >= window.origOffset2 ? stickyBottom.classList.add('fixed-bottom') :
                                    stickyBottom.classList.remove('fixed-bottom');

    document.addEventListener('scroll', onScroll);

    function onScroll(e) {

        window.scrollY >= window.origOffsetY && window.scrollY <= window.origOffsetTEST ? stickyTop.classList.add('fixed-top') :
                                        stickyTop.classList.remove('fixed-top');

        window.scrollY <= window.origOffsetY1 && window.scrollY >= window.origOffset2 ? stickyBottom.classList.add('fixed-bottom') :
                                        stickyBottom.classList.remove('fixed-bottom');
    }
}
