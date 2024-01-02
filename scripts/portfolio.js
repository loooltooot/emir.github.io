// ————————Variebles————————

let
    scale = 80;

// —————————————————————————————

// ::F-droid buttons::
$(".footer-img").each((i, val) => {
    let links = ["https://f-droid.org/packages/com.catalin.css_px_converter/", "https://f-droid.org/packages/com.catalin.rivia/"]
    $(val).click((e) => {
        e.preventDefault();
        window.open(links[i]);
    });
});

// ::Portfolio items appearing::
if ($(window).width() > 450) {
    $(".portfolio-item:nth-child(1)").css({
        "transform": "translateX(-33.33vw)",
        "-webkit-transform": "translateX(-33.75vw)",
        "-moz-transform": "translateX(-33.33vw)"
    });

    $(".portfolio-item:nth-child(2)").css("transform", "translateY(-100vh)");
    $(".portfolio-item:nth-child(3)").css("transform", "translateY(100vh)");
    setTimeout(() => {
        $(".portfolio-item").each((i, val) => {
            $(val).removeAttr("style");
            $(val).css({ "transition": "transform cubic-bezier(0.3, 0, 0.26, 1) .5s", "opacity": "1" })
        });
        isAppearingInProgress = false;
    }, 300);

    scale = 100;

    let isAppearingInProgress = true;

    $(".bg-img").css("transform", "translateY(200vh)");
    $(".mb-bg-img").css("transform", "translateY(100vh)");

    $(".portfolio-item").each((i, val) => {
        $(val).hover(() => {
            if (!isAppearingInProgress && !$(val).hasClass("initial-animation")) {
                $(val).children(".bg-img").css("transform", "translateY(5vh)");
                $(val).children(".mb-bg-img").css("transform", "translateY(5.8vh)");
                $(val).children(".bg-img").css("transition", "transform cubic-bezier(0.3, 0, 0.09, 1.2) .5s");
                $(val).children(".mb-bg-img").css("transition", "transform cubic-bezier(0.3, 0, 0.09, 1.2) .7s");
                $(val).addClass("initial-animation");
            } else {
                $(val).children(".bg-img").css("transform", "translateY(6vh)");
                setTimeout(() => {
                    $(val).children(".bg-img").css("transform", "translateY(5vh)");
                }, 500);
            }
        }, () => { });
    });
}

$(".portfolio-item header img").each((i, val) => {
    let
        viewWidth = $(window).width(),
        logoWidth = $(val).width();
    $(val).css("width", `${(logoWidth / viewWidth) * scale}vw`);
});

// ::Travel to github links::
$("#px-vw").click((e) => {
    e.preventDefault();
    window.open("https://github.com/loooltooot/css-px-converter");
});

$("#rivia").click((e) => {
    e.preventDefault();
    window.open("https://github.com/loooltooot/rivia");
});

$("#eshaverma").click((e) => {
    e.preventDefault();
    window.open("https://github.com/loooltooot/e-shawerma");
});

$("#st-tech").click((e) => {
    e.preventDefault();
    window.open("https://system-tech.vercel.app");
});

$("#gribko").click((e) => {
    e.preventDefault();
    window.open("https://github.com/loooltooot/s1mple-store");
});

$("#int").click((e) => {
    e.preventDefault();
    window.open("https://integraph.vercel.app/articles/2");
});

// window scroll
var windowHeight = $(window).height();
var isAnimating = false;

$(window).on('wheel', function (event) {
    if (!isAnimating) {
        isAnimating = true;
        var delta = event.originalEvent.deltaY;
        console.log(delta)

        if (delta < 0) {
            $('html, body').animate({ scrollTop: '-=' + windowHeight + 'px' }, 'slow', function () {
                isAnimating = false;
            });
        } else {
            $('html, body').animate({ scrollTop: '+=' + windowHeight + 'px' }, 'slow', function () {
                isAnimating = false;
            });
        }
    }
});