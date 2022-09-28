// —————————Helping Functions————————————

function isInView(elem, offset) {
    if(typeof(offset) === 'undefined') offset = 0;

    let elementTop = $(elem).offset().top + offset;
    let elementBottom = elementTop + $(elem).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).outerHeight();

    return elementBottom < viewportBottom && elementTop < viewportBottom;
};

// —————————Variebles—————————————

let legoman = "#legoman";
let legohand = "#legohand";
let leftActionbar = "#left-sidebar .welcome-actionbar";
let rightActionbar = "#right-sidebar .welcome-actionbar";
let aboutmeDecal = "#aboutme-decal";

let actionbarAnimationInterval = 10000;
let actionbarAnimationInnerTimeout = 600;
let actionbarAnimationTime = 500;

// —————————Animations—————————————

// ::Actionbars Animation::
setInterval(() => {
    if(!$("#left-sidebar").is(":hover")) {
        animateActionbar(leftActionbar);
    }
}, actionbarAnimationInterval);

setTimeout(() => {
    setInterval(() => {
        if(!$("#right-sidebar").is(":hover")) {
            animateActionbar(rightActionbar)
        }
    }, actionbarAnimationInterval);
}, actionbarAnimationInterval / 2);

function animateActionbar(actionBar) {
    $(actionBar).animate({backgroundColor: "#ffffff0d"}, actionbarAnimationTime, "easeOutBounce");
    setTimeout(() => {
        $(actionBar).animate({backgroundColor: "transparent"}, actionbarAnimationTime, "easeOutBounce");
    }, actionbarAnimationInnerTimeout);
}
// ——————————————————————————————————

// ::Aboutme Decal and Legoman Animation::
$(legoman).css("top", "20vw");
$(aboutmeDecal).css("top", "20vw");

let isAboutmeHeaderSeen = false;
let isAboutmeDescriptionSeen = false;
let isPortfolioHeaderSeen = false;
$(window).scroll(() => {
    if(isInView("#aboutme-section header", 300) && !isAboutmeHeaderSeen) {
        $(aboutmeDecal).animate({top: "1.87vw"}, 500, "swing");
        $(legoman).animate({top: "-2.6vw"}, 1500, "easeOutBounce");
        isAboutmeHeaderSeen = true;
    }
    if(isInView("#aboutme-description") && !isAboutmeDescriptionSeen) {
        $(legoman).animate({top: "32.6vw"}, 1500, "swing");
        isAboutmeDescriptionSeen = true;
    }
    if(isInView("#portfolio-section header") && !isPortfolioHeaderSeen) {
        $(legoman).animate({top: "-2.6vw"}, 1500, "swing");
        isPortfolioHeaderSeen = true;
    }
});
// ——————————————————————————————————
