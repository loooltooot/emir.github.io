// ————————Variebles————————



// —————————————————————————————

// ::Header images resize::
$(".portfolio-item header img").each((i, val) => {
    let 
    viewWidth = $(window).width(),
    logoWidth = $(val).width();
    $(val).css("width", `${(logoWidth/viewWidth) * 100}vw`);
});

// ::F-droid buttons::
$(".footer-img").each((i, val) => {
    let links = ["https://f-droid.org/packages/com.catalin.css_px_converter/", "https://f-droid.org/packages/com.catalin.rivia/"]
    $(val).click((e) => {
        e.preventDefault();
        window.open(links[i]);
    });
});

// ::Portfolio items appearing::
$(".portfolio-item:nth-child(1)").css({"transform": "translateX(-33.33vw)", 
    "-webkit-transform": "translateX(-33.75vw)", 
    "-moz-transform": "translateX(-33.33vw)"});

$(".portfolio-item:nth-child(2)").css("transform", "translateY(-100vh)");
$(".portfolio-item:nth-child(3)").css("transform", "translateY(100vh)");
setTimeout(() => {
    $(".portfolio-item").each((i, val) => {
        $(val).removeAttr("style");
        $(val).css("transition", "transform cubic-bezier(0.3, 0, 0.26, 1) .5s")
    });
    isAppearingInProgress = false;
}, 300);

// ::Bg-image animation::
let isAppearingInProgress = true;

$(".bg-img").css("transform", "translateY(200vh)");
$(".mb-bg-img").css("transform", "translateY(100vh)");

$(".portfolio-item").each((i, val) => {
    $(val).hover(() => {
        if(!isAppearingInProgress && !$(val).hasClass("initial-animation")) {
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
    }, () => {});
});