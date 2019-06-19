$(document).ready(function() {
    var background = document.getElementById("carousel__canvas");
    var colorImg = $(background).children('picture');
    var playButton = document.querySelectorAll(".button-play-wrapper");
    var pauseButton = document.querySelectorAll(".button-pause-wrapper");
    var audioPlayer = document.querySelectorAll(".sample");
    var ghostWrapper = $('.forest-ghost-wrapper');
    var sampleButtonOne = $("#carousel__button-1 .forest-ghost-wrapper");
    var sampleButtonTwo = $("#carousel__button-2 .forest-ghost-wrapper");
    var sampleButtonThree = $("#carousel__button-3 .forest-ghost-wrapper");
    var sampleButtonFour = $("#carousel__button-4 .forest-ghost-wrapper");
    var sampleButtonFive = $("#carousel__button-5 .forest-ghost-wrapper");
    var sampleButtonSix = $("#carousel__button-6 .forest-ghost-wrapper");
    var ghosts = $(ghostWrapper).children('.forest-ghost');
    var sampleTitle = $('#carousel').children('.carousel__title');
    var copyrightDate = document.getElementById("copyright__date");

    $(colorImg).css("opacity", "0");
    sampleButtonOne.click(function() {
        $(colorImg).eq(0).fadeTo(2000, 1);
        $(colorImg).not(':eq(0)').fadeTo(3000, 0);
        $(sampleTitle).eq(0).css("visibility","visible").fadeTo(2000, 1);
        $(sampleTitle).not(':eq(0)').fadeTo(3000, 0).css("visibility","hidden");
    });
    sampleButtonTwo.click(function() {
        $(colorImg).eq(1).fadeTo(2000, 1);
        $(colorImg).not(':eq(1)').fadeTo(3000, 0);
        $(sampleTitle).eq(1).css("visibility","visible").fadeTo(2000, 1);
        $(sampleTitle).not(':eq(1)').fadeTo(3000, 0).css("visibility","hidden");
    });
    sampleButtonThree.click(function() {
        $(colorImg).eq(2).fadeTo(2000, 1);
        $(colorImg).not(':eq(2)').fadeTo(3000, 0);
        $(sampleTitle).eq(2).css("visibility","visible").fadeTo(2000, 1);
        $(sampleTitle).not(':eq(2)').fadeTo(3000, 0).css("visibility","hidden");
    });
    sampleButtonFour.click(function() {
        $(colorImg).eq(3).fadeTo(2000, 1);
        $(colorImg).not(':eq(3)').fadeTo(3000, 0);
        $(sampleTitle).eq(3).css("visibility","visible").fadeTo(2000, 1);
        $(sampleTitle).not(':eq(3)').fadeTo(3000, 0).css("visibility","hidden");
    });
    sampleButtonFive.click(function() {
        $(colorImg).eq(4).fadeTo(2000, 1);
        $(colorImg).not(':eq(4)').fadeTo(3000, 0);
        $(sampleTitle).eq(4).css("visibility","visible").fadeTo(2000, 1);
        $(sampleTitle).not(':eq(4)').fadeTo(3000, 0).css("visibility","hidden");
    });
    sampleButtonSix.click(function() {
        $(colorImg).eq(5).fadeTo(2000, 1);
        $(colorImg).not(':eq(5)').fadeTo(3000, 0);
        $(sampleTitle).eq(5).css("visibility","visible").fadeTo(2000, 1);
        $(sampleTitle).not(':eq(5)').fadeTo(3000, 0).css("visibility","hidden");
    });

    function audioStart() {
        $(background).removeClass("grayscale");
        $(colorImg).removeClass("grayscale");      
    }
    
    function audioEnded() {
        $(background).addClass("grayscale");
        $(ghosts).css({
            "animation": "pulseSize 1.5s ease-in-out 1",
        });
    }
    /*playButton.forEach(function() {

        $(playButton).click(audioStart);
        $(playButton).on("click", function() {
            var thisButton = $(this).closest('.sample-button');
            var thisTrack = $(thisButton).children('.sample');
            $(thisTrack).on('timeupdate', function() {
                var thisPanel = $(this).closest(".sample-button");
                var thisProgressBar = $(thisPanel).find(".progress-bar");
                $(thisProgressBar).attr("value", this.currentTime / this.duration);
                console.log("hello2");
            });
            console.log("dziala1");

        });

    });
    pauseButton.forEach(function() {
        $(pauseButton).click(audioEnded);
    });
*/

    //$(audioPlayer).on("ended", audioEnded);
    $(audioPlayer).on("ended", function(){
        $(colorImg).addClass("grayscale");
        $(ghosts).css({
            "animation": "pulseSize 1.5s ease-in-out 1",
        });
        $(colorImg).delay(5000).fadeTo(2000, 0);
        $(sampleTitle).delay(5000).fadeTo(2000, 0);
    });
    //Click forest ghost
    //click toggle function

    (function($) {
        $.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));
    /* Animation of three forest ghost */
    $(function() {
        //preload css styles
        window.onload = pre_loader;

        function forestGhost() {
            $('.forest-ghost').css({
                "animation": "pulseSize 1.5s ease-in-out 3",
            });
        }

        function pre_loader() {
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var celticSign = document.getElementById("carousel__sign");
            var heightCelticSign = celticSign.clientHeight;
            var widthCelticSign = celticSign.clientWidth;
            $('.audio-panel').css('visibility', 'hidden');

            $('#carousel__button-1').stop(true, true).delay(600).animate({
                top: (windowHeight / 2) - (heightCelticSign / 1.3) + "px",
                left: (windowWidth / 2) + "px",
            }, 2500, "swing", function() {
                new forestGhost();
                $('#carousel__button-2').stop(true, true).delay(100).animate({
                    top: (windowHeight / 2) + 30 - (heightCelticSign / 2) + "px",
                    left: (windowWidth / 2) - (30 * 1.538461538461538) + (widthCelticSign / 1.3) + "px",
                }, 2500, "swing", function() {
                    new forestGhost();
                    $('#carousel__button-3').stop(true, true).delay(100).animate({
                        top: (windowHeight / 2) - 30 + (heightCelticSign / 2) + "px",
                        left: (windowWidth / 2) - (30 * 1.538461538461538) + (widthCelticSign / 1.3) + "px",
                    }, 2500, "swing", function() {
                        new forestGhost();
                        $('#carousel__button-4').stop(true, true).delay(100).animate({
                            top: (windowHeight / 2) + (heightCelticSign / 1.3) + "px",
                            left: (windowWidth / 2) + "px",
                        }, 2500, "swing", function() {
                            new forestGhost();
                            $('#carousel__button-5').stop(true, true).delay(100).animate({
                                top: (windowHeight / 2) - 30 + (heightCelticSign / 2) + "px",
                                left: (windowWidth / 2) + (30 * 1.538461538461538) - (widthCelticSign / 1.3) + "px",
                            }, 2500, "swing", function() {
                                new forestGhost();
                                $('#carousel__button-6').stop(true, true).delay(100).animate({
                                    top: (windowHeight / 2) + 30 - (heightCelticSign / 2) + "px",
                                    left: (windowWidth / 2) + (30 * 1.538461538461538) - (widthCelticSign / 1.3) + "px",
                                }, 2500, "swing");
                            });
                        });
                    });
                });
            });

            if (window.innerHeight > window.innerWidth){
                $('#carousel__button-1').stop(true, true).delay(600).animate({
                    top: (windowHeight / 2) - 30 - (heightCelticSign / 1.3) + "px",
                    left: (windowWidth / 2) + "px",
                }, 2500, "swing", function() {
                    new forestGhost();
                    $('#carousel__button-2').stop(true, true).delay(100).animate({
                        top: (windowHeight / 2) - (heightCelticSign / 2) + "px",
                        left: (windowWidth / 2) + (widthCelticSign / 1.3) + "px",
                    }, 2500, "swing", function() {
                        new forestGhost();
                        $('#carousel__button-3').stop(true, true).delay(100).animate({
                            top: (windowHeight / 2) + (heightCelticSign / 2) + "px",
                            left: (windowWidth / 2) + (widthCelticSign / 1.3) + "px",
                        }, 2500, "swing", function() {
                            new forestGhost();
                            $('#carousel__button-4').stop(true, true).delay(100).animate({
                                top: (windowHeight / 2) + 30 + (heightCelticSign / 1.3) + "px",
                                left: (windowWidth / 2) + "px",
                            }, 2500, "swing", function() {
                                new forestGhost();
                                $('#carousel__button-5').stop(true, true).delay(100).animate({
                                    top: (windowHeight / 2) + (heightCelticSign / 2) + "px",
                                    left: (windowWidth / 2) - (widthCelticSign / 1.3) + "px",
                                }, 2500, "swing", function() {
                                    new forestGhost();
                                    $('#carousel__button-6').stop(true, true).delay(100).animate({
                                        top: (windowHeight / 2) - (heightCelticSign / 2) + "px",
                                        left: (windowWidth / 2) - (widthCelticSign / 1.3) + "px",
                                    }, 2500, "swing");
                                });
                            });
                        });
                    });
                });

            }
        }
    });
    /* End animation of three forest ghost */


    /* Toggle audio panel
    $('.forest-ghost-wrapper').clickToggle(function() {
        var siblings = $(this).siblings(".audio-panel");
        $(siblings).css('visibility', 'visible');
        $(siblings).animate({
            width: "280px",
            opacity: "1"
        }, 1500);
    }, function() {
        var siblings = $(this).siblings(".audio-panel");
        $(siblings).animate({
            width: "0px",
            opacity: "0"
        }, 1500);
    });
    */


    ghostWrapper.click(function() {
        event.stopPropagation();
        var ghost = $(this).children('.forest-ghost');
        var audioSiblings = $(this).siblings('audio.sample');
        var sample = $(audioSiblings).get(0);
        var ghostWrapperNot = ghostWrapper.not(this);
        var ghostNot = $(ghostWrapperNot).children('.forest-ghost');
        var audioSiblingsNot = $(ghostWrapperNot).siblings('audio.sample');
        $(ghost).css({
            "animation": "pulseSize 1.5s ease-in-out infinite",
        });
        $(ghostNot).css({
            "animation": "pulseSize 1.5s ease-in-out 1",
        });

        $(audioSiblingsNot).each(function() {
            $(this).get(0).pause();
            $(this).get(0).currentTime = 0;
        });
        $(sample).prop("volume", 0.0);
        var fadePoint = sample.duration - 2;      
        function togglePlay() {           
            if (sample.paused) {
                sample.play();
                new audioStart();
                $(sample).animate({volume: 1.0}, 2000);
                function fadeOut (){
                    $(sample).animate({volume: 0.0}, 2000);
                }
                setTimeout(fadeOut, (fadePoint * 1000));
            } else {
                sample.pause();
                new audioEnded();
                $(ghost).css({
                    "animation": "pulseSize 1.5s ease-in-out 1",
                });
            }            
        }
        
        new togglePlay();
    });
    /*Is in viewport - by Christophe Deliens
    https://codepen.io/chdeliens/pen/BJxeQG
    */

    $.fn.isFullyInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementTop >= viewportTop && elementBottom <= viewportBottom;
    };
    $(window).on('resize scroll', function() {
        $('.in-viewport').each(function() {
            if ($(this).isFullyInViewport()) {
                $(this).css({
                    "-webkit-filter": "grayscale(0)",
                    "-moz-filter": "grayscale(0)",
                    "-o-filter": "grayscale(0)",
                    "filter": "grayscale(0)",
                });
            } else {
                $(this).css({
                    "-webkit-filter": "grayscale(100%)",
                    "-moz-filter": "grayscale(100%)",
                    "-o-filter": "grayscale(100%)",
                    "filter": "grayscale(100%)",
                });
            }
        });
    });

    /*Smooth scrolling function*/
    $(document).ready(function() {
        // Add smooth scrolling to all links
        $("a.nav-link").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    // Menu animations
    var menuIcon = document.getElementById("menu-icon");
    var menuLinks = document.getElementById("nav__links");
    var links = document.querySelectorAll(".nav-link");
    function menuIconFunc() {   
        links.forEach(function(link) {
            link.classList.toggle('fade');
        });
        if ($(window).width() > 767.98) {
            menuLinks.classList.toggle('close');
            var menuDisplay = $(menuLinks).css("display");
            if (menuDisplay == "none"){
                $(menuIcon).removeClass("is-active");
             } else {
                $(menuIcon).addClass("is-active");
             }
        } else {
            menuIcon.classList.toggle("is-active");
            menuLinks.classList.toggle('open');
        }
    }
    menuIcon.addEventListener("click", menuIconFunc);
    $(window).scroll(function () {
        var $this = $(this);
        var offsetTop = $("#about-me, .policy__content").offset().top;
        var hamburger = $(".hamburger");
        var ppHamburger = $(".privacy-polacy__hamburger");
        var ppLinks = $(".privacy-policy__header .nav__links");
        var ppLink = $(".privacy-policy__header .nav-link");
        var brand = $(".brand");
        if ($(window).width() > 767.98) {
            if ($this.scrollTop() > 120) {
                $(menuIcon).css("display", "flex");
                $(menuLinks).addClass("close");
                $(menuIcon).removeClass("is-active");
            } else {
                if ($(menuLinks).hasClass("close")) {
                    $(menuIcon).css("display", "flex");
                    $(menuLinks).removeClass("close");
                } else {
                    $(menuIcon).css("display", "none");
                }
            }
            if ($this.scrollTop() < offsetTop) {
                $(menuLinks).css({
                    "background-color": "transparent",
                    "border-color": "var(--color-primary-color)"
                });
                $(hamburger).css("background-color", "transparent");
                $(ppHamburger).css("background-color", "var(--color-tertiary-color)");
                $(ppLinks).css({
                    "background-color": "transparent",
                    "border-color": "var(--color-tertiary-color)"
                });
                $(ppLink).css("color", "var(--color-secondary-color)");
                $(brand).css("display", "flex");
            } else {
                $(menuLinks).css({
                    "background-color": "var(--color-tertiary-color)",
                    "border-color": "var(--color-tertiary-color)"
                });
                $(hamburger).css("background-color", "var(--color-tertiary-color)");
                $(ppHamburger).css("background-color", "var(--color-tertiary-color)");
                $(ppLinks).css({
                    "background-color": "var(--color-tertiary-color)",
                    "border-color": "var(--color-tertiary-color)"
                });
                $(ppLink).css("color", "var(--color-primary-color)");
                $(brand).css("display", "none");
            }
        }
        if ($(window).width() <= 767.98) {
            if ($this.scrollTop() < offsetTop) {
                $(hamburger).css("background-color", "transparent");
                $(brand).css("display", "flex");
            } else {
                $(hamburger).css("background-color", "var(--color-tertiary-color)");
                $(brand).css("display", "none");
            }
        }
    });

    // email
    /*Change at*/
    $(".changeat").on('mouseenter', function () {
        $(".changeat").empty()
    }, function () {
        var u = "adrianvonziegler";
        var arr = "@";
        var d = "gmx";
        var dot = ".";
        var t = "ch";
        $(".changeat").html("<a class='link-poczta' href=" + "mail" + "to:" + u + arr + d + dot + t +
            ">" + "adrianvonziegler<i class='fa fa-at' aria-hidden='true'></i>gmx.ch" + "</a>");
    });
    $(".changeat").on('mouseleave', function () {
        $(".changeat").html("adrianvonziegler<i class='fa fa-at' aria-hidden='true'></i>gmx.ch");
    });

    //date in copyright
    function displayDate() {
        var now, year;
        now = new Date();
        year = now.getFullYear();
        $(copyrightDate).text(year);
    }
    new displayDate();

});