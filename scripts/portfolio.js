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