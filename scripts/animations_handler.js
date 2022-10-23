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

let 
legoman = "#legoman",
legohand = "#legohand",
leftActionbar = "#left-sidebar .welcome-actionbar",
rightActionbar = "#right-sidebar .welcome-actionbar",
aboutmeDecal = "#aboutme-decal",
welcomeActionbars = ".welcome-actionbar",
menu = "#menu",
menuExitButton = "#circle",
menuNavButtons = "#menu nav ul li a",
actionAboutmeButtons = ".aboutme-action",
actionPortfolioButtons = ".portfolio-action",
actionContactsButtons = ".contacts-action",
actionPricesButtons = ".prices-action",
topMenu = "#top-menu",
activeSlider = "#active-bg-slider";

let 
actionbarAnimationInterval = 10000,
actionbarAnimationInnerTimeout = 600,
actionbarAnimationTime = 500,
topMenuOffset = $(window).outerHeight() + $(topMenu).outerHeight();

let
colorBg = "#101010",
colorPr = "#ff3f3f",
colorSc = "#b2ee3b";

// —————————Animations—————————————
let scrollBarWidth = $(window).outerWidth() - $(window).width();
let off = $(window).outerWidth() * 0.0521 + scrollBarWidth; // side padding is 5.21vw
$("#aboutme-description").css("transform", `translateX(-${off}px)`);

$(menuExitButton).click((e) => {
    e.preventDefault();
    hideFullscreenMenu();
});

$("#menu-gh").click((e) => {
    e.preventDefault();
    window.open("https://github.com/loooltooot");
});

$("#menu-vk").click((e) => {
    e.preventDefault();
    window.open("https://vk.com/catalin_software");
});

$("#menu-tg").click((e) => {
    e.preventDefault();
    window.open("https://t.me/loooltooot");
});

function hideFullscreenMenu() {
    $(menu).animate({ opacity: 0 }, 300);
    setTimeout(() => {
        $(menu).css("z-index", "-1");
    }, 1500);
    if($(window).width() <= 450) {
        $("#menu-bt").css("opacity", "1");
        $("#menu-bt").css("z-index", "9");
        $("body").removeAttr("style");
    }
}

let isAlreadyTraveling = false;

bindActionButtons(actionAboutmeButtons, "#aboutme-section header");
bindActionButtons(actionPortfolioButtons, "#portfolio-section #buttons");
bindActionButtons(actionContactsButtons, "#contacts-section");
function bindActionButtons(buttons, target) {
    $(buttons).each((i, val) => {
        $(val).click((e) => {
            e.preventDefault();
            hideFullscreenMenu();
            $(target)[0].scrollIntoView({ behavior: "smooth", block: "center" });

            if($(val).parents("#top-menu").length) {
                isAlreadyTraveling = true;
                if($(val).hasClass("aboutme-action")) {
                    changeActiveTopMenuButton("#top-menu a.aboutme-action", "8.81vw", "0");
                }
        
                if($(val).hasClass("portfolio-action")) {
                    changeActiveTopMenuButton("#top-menu a.portfolio-action", "8.6vw", "9.22vw");
                }
        
                if($(val).hasClass("contacts-action")) {
                    changeActiveTopMenuButton("#top-menu a.contacts-action", "8.29vw", "18.15vw");
                }
                setTimeout(
                    () => isAlreadyTraveling = false,
                    500
                )
            }
        });
    });
}

$("#svg-apps").click((e) => {
    e.preventDefault();
    window.open("pages/portfolio_app.html");
})

$("#svg-web").click((e) => {
    e.preventDefault();
    window.open("pages/portfolio_web.html");
})

// ::aboutme text::
let letters = ["H", "i", ", ", "f", "o", "l", "k", "s", "! ", "I", "t", "'", "s ", "m", "e", " ‒ ", "E", "m", "i", "r <br>",
    "I", "'", "m ", "f", "o", "u", "n", "d", "e", "r ", "o", "f ", "<span class=\"highlight\">C", "a", "t", "a", "l", "i", "n ",
    "S", "o", "f", "t", "w", "a", "r", "e", " a", "n", "d ", "a", "l", "s", "o ", "F", "r", "o", "n", "t", "-", "e", "n", "d ",
    "d", "e", "v", "e", "l", "o", "p", "e", "r ", "w", "o", "r", "k", "i", "n", "g ", "w", "i", "t", "h ", "<span class=\"highlight\">F",
    "l", "u", "t", "t", "e", "r", ", ", "R", "u", "s", "t", ", ", "J", "a", "v", "a", ", ", "E", "c", "m", "a", "S", "c", "r", "i", "p", "t",
    ", ", "P", "y", "t", "h", "o", "n"
]

function animateAboutmeText() {
    for(let i = 0; i < letters.length; i++) {
        setTimeout(() => {
            if((i >= 33 && i <= 46) || (i >= 84)) {
                $("#aboutme-text span:last-child").html($("#aboutme-text span:last-child").html() + letters[i])
            } else {
                $("#aboutme-text").html($("#aboutme-text").html() + letters[i])
            }
        }, 50 * i)
    }
}

if($(window).width() > 450) {
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
        $(actionBar).animate({backgroundColor: "#ffffff1d"}, actionbarAnimationTime, "easeOutBounce");
        setTimeout(() => {
            $(actionBar).animate({backgroundColor: "transparent"}, actionbarAnimationTime, "easeOutBounce");
        }, actionbarAnimationInnerTimeout);
    }

    // ::Aboutme Decal, Legoman and LegoHand Animation::
    $(legoman).css("top", "20vw");
    $(aboutmeDecal).css("top", "20vw");
    // $(legohand).css({"left": "100vw", "transform": "rotate(90deg)"});

    let 
    isAboutmeHeaderSeen = false,
    isAboutmeDescriptionSeen = false,
    isPortfolioHeaderSeen = false,
    isContactsButtonsSeen = false,
    isTopMenuSeen = false;
    $(window).scroll(() => {
        if(isInView("#aboutme-section header", 300) && !isAboutmeHeaderSeen) {
            $(aboutmeDecal).animate({top: "1.87vw"}, 500);
            $(legoman).animate({top: "-2.6vw"}, 1500, "easeOutBounce");
            isAboutmeHeaderSeen = true;
        }

        // if(isInView("#aboutme-section header", 300)) {
        //     changeActiveTopMenuButton("#top-menu a.aboutme-action", "8.81vw", "0");
        // }

        if(isInView("#aboutme-description") && !isAboutmeDescriptionSeen) {
            $(legoman).animate({top: "32.6vw"}, 1500);
            animateAboutmeText();
            isAboutmeDescriptionSeen = true;
        }

        if(isInView("#portfolio-section header") && !isPortfolioHeaderSeen) {
            $(legoman).animate({top: "-2.6vw"}, 1500);
            isPortfolioHeaderSeen = true;
        }

        // if(isInView("#portfolio-section header")) {
        //     changeActiveTopMenuButton("#top-menu a.portfolio-action", "8.6vw", "9.22vw");
        // }

        if(isInView("#contacts-buttons", 100) && !isContactsButtonsSeen) {
            $(legohand).addClass("animated-hand");
            setTimeout(() => {
                $(legohand).addClass("animation-hand");
            }, 1600);
            isContactsButtonsSeen = true;
        }

        // if(isInView("#contacts-section p")) {
        //     changeActiveTopMenuButton("#top-menu a.contacts-action", "8.29vw", "18.15vw");
        // }

        // ::Top Menu::
        if($(window).scrollTop() >= topMenuOffset && !isTopMenuSeen) {
            $(topMenu).animate({top: 0}, 300);
            isTopMenuSeen = true;
        }

        if($(window).scrollTop() <= topMenuOffset && isTopMenuSeen) {
            $(topMenu).animate({top: "-2.61vw"}, 300);
            isTopMenuSeen = false;
        }
    });

    // ::Top menu buttons::
    setInterval(
        () => {
            if(!isAlreadyTraveling) {
                if(isInView("#aboutme-section header", 300)) {
                    changeActiveTopMenuButton("#top-menu a.aboutme-action", "8.81vw", "0");
                }
        
                if(isInView("#portfolio-section header")) {
                    changeActiveTopMenuButton("#top-menu a.portfolio-action", "8.6vw", "9.22vw");
                }
        
                if(isInView("#contacts-section p")) {
                    changeActiveTopMenuButton("#top-menu a.contacts-action", "8.29vw", "18.15vw");
                }
            }
        }, 1000    
    );

    $("#top-menu nav ul li a").each((i, val) => {
        $(val).hover(() => {
            if(!$(val).hasClass("active")) {
                $("#top-menu nav ul li a.active").css("color", colorBg)
            }
        }, 
        () => {
            $("#top-menu nav ul li a").removeAttr("style")
        })
    })

    function changeActiveTopMenuButton(target, sliderWidth, sliderMarginLeft) {
        if(!$(target).hasClass("active")) {
            $("#top-menu a.active").removeClass("active");
            $(target).addClass("active");
            $(activeSlider).css({"width": sliderWidth, "margin-left": sliderMarginLeft})
        }
    }
    // ——————————————————————————————————

    // ——————Fullscreen Menu handler————————

    $(welcomeActionbars).each((i, val) => {
        $(val).hover(() => {
            $(menu).css("z-index", "10");
            $(menu).animate({opacity: 1}, 300);
        });
    });

    $("#footer-logo").hover(() => {
        $(menu).css("z-index", "10");
        $(menu).animate({opacity: 1}, 300);
    });

    $(menuNavButtons).each((i, val) => {
        $(val).hover(() => {
            $("#menu nav ul li a.active").css({"color": "#A5A5A5"});
        }, () => {
            $("#menu nav ul li a.active").css({"color": colorBg});
        });
    });

    // ————————————————————————————————
} else {
    let isTopMenuSeen = false;

    $("#menu-bt").click((e) => {
        e.preventDefault();
        $(menu).css("z-index", "10");
        $(menu).animate({opacity: 1}, 300);
        $("#menu-bt").css("opacity", "0");
        $("#menu-bt").css("z-index", "-1");
        $("body").css("overflow-y", "hidden");
    });

    let offset = $(window).width() * 1.5;

    $("#menu nav ul li a.active").removeClass("active");
    $("#menu nav ul div").css("display", "none");

    let isAboutmeDescriptionSeen = false;
    $(window).scroll(() => {
        if($(window).scrollTop() >= offset && !isTopMenuSeen) {
            $(topMenu).css("opacity", 1);
            isTopMenuSeen = true;
            $("#menu-bt rect").css("fill", colorBg);
        }

        if($(window).scrollTop() < offset && isTopMenuSeen) {
            $(topMenu).css("opacity", 0);
            isTopMenuSeen = false;
            $("#menu-bt rect").css("fill", colorSc);
        }

        if(isInView("#aboutme-description") && !isAboutmeDescriptionSeen) {
            animateAboutmeText();
            isAboutmeDescriptionSeen = true;
        }
    });

    $(menu).css("height", `${$(window).height()}px`);
}