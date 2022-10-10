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
    let isAlreadyTraveling = false;
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

    $(menuExitButton).click((e) => {
        e.preventDefault();
        hideFullscreenMenu();
    });

    $(menuNavButtons).each((i, val) => {
        $(val).hover(() => {
            $("#menu nav ul li a.active").css({"color": "#A5A5A5"});
        }, () => {
            $("#menu nav ul li a.active").css({"color": colorBg});
        });
    });

    // ::Menu links::
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
    }

    // ::Action Buttons handler::
    bindActionButtons(actionAboutmeButtons, "#aboutme-section header");
    bindActionButtons(actionPortfolioButtons, "#portfolio-section header");
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
    // ————————————————————————————————

    // —————————————Portfolio travel————————————————

    $("#svg-apps").click((e) => {
        e.preventDefault();
        window.open("pages/portfolio_app.html");
    })

    $("#svg-web").click((e) => {
        e.preventDefault();
        window.open("pages/portfolio_web.html");
    })
} else {
    
}