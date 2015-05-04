/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
 */


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
 */
function updateViewportDimensions() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;
        return {
            width: x,
            height: y
        };
    }
    // setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
 */
var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;

/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
 */

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
 */
function loadGravatars() {
        // set the viewport using the function above
        viewport = updateViewportDimensions();
        // if the viewport is tablet or larger, we load in the gravatars
        if (viewport.width >= 768) {
            jQuery('.comment img[data-gravatar]').each(function () {
                jQuery(this).attr('src', jQuery(this).attr('data-gravatar'));
            });
        }
    } // end function


/*
 * Put all your regular jQuery in here.
 */
jQuery(document).ready(function ($) {

    // Scroll to top
    $("html, body").animate({
        scrollTop: 0
    }, "slow");

    
            var clicked = false;
    
    $("#menu-button").click(function() {

            if (clicked == false) {
                $(".header").css("left", "0");
                clicked = true;
                console.log("click");
            } else {
                $(".header").css("left", "-100vw");
             $("#menu-button").css("top", "1em");
                clicked = false;
            console.log("click again");
            }

        });
    
    
     $("#share-button").click(function() {
         $(".md-overlay").addClass("md-show");
         $("#modal-share.modal").addClass("md-show");
     });
    
    
    $("#contact-button").click(function() {
         $(".md-overlay").addClass("md-show");
         $("#modal-contact.modal").addClass("md-show");
     });
    
    $(".md-close").click(function() {
         $(".md-overlay").removeClass("md-show");
        $("#modal-contact.modal").removeClass("md-show");
        $("#modal-share.modal").removeClass("md-show");
     });
    
    
    $(".for-residents").css({
    "margin-top" : $("#for-residents").height()
    });
    
    $(".become-ossc").css({
    "margin-top" : $("#about-ossc").height()
    });
    
    $(window).scroll(function () {

            $("#for-residents").css({
                'opacity': 1 - (($(this).scrollTop()) / 2000)
            });
        
        $("#about-ossc").css({
                'opacity': 1 - (($(this).scrollTop()) / 1000)
            });
    });
    
    

    //----------------------------------------------------//     
    ///---------taking care of the offset-----------------///
    //----------------------------------------------------//     
    var shiftedTop = $(".homepage-intro").height();
    
    $(".static").addClass("to-next");


    ///---------FINISH taking care of the offset---------/// 
    //----------------------------------------------------// 
    
    ///===== Starts static, top: 0 ---> absolute, top scrollTop()
    
    var waypointstart = new Waypoint ({
      element: document.getElementById("waypoint-start"), 
         handler: function() {
             $(".header").css({"background-color": "rgba(105, 191, 151, 0)"});
             
              $(".nav>li").css({
                        "border-bottom-style": "solid",
                        "border-bottom-width": "thin",
                        "border-bottom-color": "#FFFFFF",
                        "background-color": "rgba(105, 191, 151, 0)"
                    });

                    $(".nav>li>a").css({
                        "color": "#FFFFFF"
                    });

                    $("li.current-menu-item>a").css({
                        "background-color": "#FFFFFF",
                        "color": "#69BF97"
                    });

                    $("li.current_page_item>a").css({
                        "background-color": "#FFFFFF",
                        "color": "#69BF97"
                    });

                    $("li.current_page_ancestor>a").css({
                        "background-color": "#FFFFFF",
                        "color": "#69BF97"
                    });
         },
        offset: $(".header").height()
    })
    
      //----------------------------------------------------// 
    
   //----------------------------------------------------// 
    
    var waypoint1 = new Waypoint({
            element: document.getElementById('waypoint1'),
            handler: function (direction) {
                if (direction == "down") {
                    $(".header").css({"background-color": "rgba(51, 51, 51, .7)"});
                    $(".nav>li").css({
                        "border-bottom-style": "solid",
                        "border-bottom-width": "thin",
                        "border-bottom-color": "#69BF97"
                    });

                    $(".nav>li>a").css({
                        "color": "#69BF97"
                    });

                    $("li.current-menu-item>a").css({
                        "background-color": "#69BF97",
                        "color": "#FFFFFF"
                    });

                    $("li.current_page_item>a").css({
                        "background-color": "#69BF97",
                        "color": "#FFFFFF"
                    });

                    $("li.current_page_ancestor>a").css({
                        "background-color": "#69BF97",
                        "color": "#FFFFFF"
                    });


                } else {
                   $(".header").css({"background-color": "rgba(51, 51, 51, 0)"});
                    $(".nav>li").css({
                        "border-bottom-style": "solid",
                        "border-bottom-width": "thin",
                        "border-bottom-color": "#FFFFFF",
                        "background-color": "rgba(105, 191, 151, 0)"
                    });

                    $(".nav>li>a").css({
                        "color": "#FFFFFF"
                    });

                    $("li.current-menu-item>a").css({
                        "background-color": "#FFFFFF",
                        "color": "#69BF97"
                    });

                    $("li.current_page_item>a").css({
                        "background-color": "#FFFFFF",
                        "color": "#69BF97"
                    });

                    $("li.current_page_ancestor>a").css({
                        "background-color": "#FFFFFF",
                        "color": "#69BF97"
                    });

                }
            },
            offset: 100
        })
        ///===== Starts absolute, top scrollTop() ---> static, top: -100vh
    var waypoint2 = new Waypoint({
            element: document.getElementById('waypoint2'),
            handler: function (direction) {

                if (direction == "down") {
                    $(".static").removeClass("to-next");
                    $(".static").css({
                        top: 0 - $(".homepage-intro").height()
                    });
                } else {
                    $(".static").addClass("to-next");
                    $(".static").css({
                        top: shiftedTop
                    });
                }

            },

            offset: 0
        })
        ///===== Starts static, top: -100vh ---> absolute, top: scrollTop() - 100vh
    var waypoint3 = new Waypoint({
        element: document.getElementById('waypoint3'),
        handler: function (direction) {

            if (direction == "down") {

                $(".static").addClass("to-next");
                $(".static").css({
                    top: $(window).scrollTop() - $(".homepage-intro").height()
                });

            } else {
                $(".static").removeClass("to-next");
                $(".static").css({
                    top: 0 - $(".homepage-intro").height()
                });

            }

        },

        offset: 50
    })


    ///===== Starts absolute, top scrollTop() ---> static, top: -200vh
    var waypoint4 = new Waypoint({
        element: document.getElementById('waypoint4'),
        handler: function (direction) {

            if (direction == "down") {
                $(".static").removeClass("to-next");
                $(".static").css({
                    top: 0 - 2 * $(".homepage-intro").height()
                });
            } else {
                $(".static").addClass("to-next");
                $(".static").css({
                    top: $(window).scrollTop() - 2 * $(".homepage-intro").height()
                });
            }

        },

        offset: 50
    })

    ///===== Starts static, top: -200vh ---> absolute, top: scrollTop() - 200vh
    var waypoint5 = new Waypoint({
        element: document.getElementById('waypoint5'),
        handler: function (direction) {

            if (direction == "down") {

                $(".static").addClass("to-next");
                $(".static").css({
                    top: $(window).scrollTop() - 2 * $(".homepage-intro").height()
                });
            } else {
                $(".static").removeClass("to-next");
                $(".static").css({
                    top: 0 - 2 * $(".homepage-intro").height()
                });
            }

        },

        offset: 50
    })

    ///===== Starts absolute, top scrollTop() ---> static, top: -300vh
    var waypoint6 = new Waypoint({
        element: document.getElementById('waypoint6'),
        handler: function (direction) {

            console.log($(window).scrollTop());

            if (direction == "down") {
                $(".static").removeClass("to-next");
                $(".static").css({
                    top: 0 - 3 * $(".homepage-intro").height()
                });
            } else {
                $(".static").addClass("to-next");
                $(".static").css({
                    top: $(window).scrollTop() - 3 * $(".homepage-intro").height()
                });
            }

        },

        offset: 50
    })

    ///===== Starts static, top: -300vh ---> absolute, top: scrollTop() - 300vh
    var waypoint7 = new Waypoint({
        element: document.getElementById('waypoint7'),
        handler: function (direction) {

            if (direction == "down") {

                $(".static").addClass("to-next");
                $(".static").css({
                    top: $(window).scrollTop() - 3 * $(".homepage-intro").height()
                });
            } else {
                $(".static").removeClass("to-next");
                $(".static").css({
                    top: 0 - 3 * $(".homepage-intro").height()
                });
            }

        },

        offset: 50
    })

    ///===== 

    var waypointend = new Waypoint({
        element: document.getElementById('waypoint-end'),
        handler: function (direction) {

            if (direction == "down") {
                $(".header").css({"background-color": "rgba(51, 51, 51, 0)"});
                $(".nav>li").css({
                    "border-bottom-style": "solid",
                    "border-bottom-width": "thin",
                    "border-bottom-color": "#FFFFFF"
                });

                $(".nav>li>a").css({
                    "color": "#FFFFFF"
                });

                $("li.current-menu-item>a").css({
                    "background-color": "#FFFFFF",
                    "color": "#69BF97"
                });

                $("li.current_page_item>a").css({
                    "background-color": "#FFFFFF",
                    "color": "#69BF97"
                });

                $("li.current_page_ancestor>a").css({
                    "background-color": "#FFFFFF",
                    "color": "#69BF97"
                });
            } else {
                $(".header").css({"background-color": "rgba(51, 51, 51, .7)"});
                $(".nav>li").css({
                    "border-bottom-style": "solid",
                    "border-bottom-width": "thin",
                    "border-bottom-color": "#69BF97"
                });

                $(".nav>li>a").css({
                    "color": "#69BF97"
                });

                $("li.current-menu-item>a").css({
                    "background-color": "#69BF97",
                    "color": "#FFFFFF"
                });

                $("li.current_page_item>a").css({
                    "background-color": "#69BF97",
                    "color": "#FFFFFF"
                });

                $("li.current_page_ancestor>a").css({
                    "background-color": "#69BF97",
                    "color": "#FFFFFF"
                });

            }
        },

        offset: 60
    });


    /*     
      ///===== Starts absolute, top scrollTop() ---> static, top: -400vh
      var waypoint8 = new Waypoint({
        element: document.getElementById('waypoint8'),
        handler: function(direction) {
       
            if(direction == "down") {
           $(".static").removeClass("to-next");
             $(".static").css({
                top: 0 - 4*$("#old-history").height()
            });
            } else {
                $(".static").addClass("to-next");
            $(".static").css({
                top: $(window).scrollTop() - 4*$("#old-history").height()
            });
            }
            
        }
      })

      ///===== Starts static, top: -400vh ---> absolute, top: scrollTop() - 400vh
      var waypoint9 = new Waypoint({
        element: document.getElementById('waypoint9'),
        handler: function(direction) {

            if(direction == "down") {

            $(".static").addClass("to-next");
            $(".static").css({
                top: $(window).scrollTop() - 4*$("#old-history").height()
            });
            } else {
                $(".static").removeClass("to-next");
             $(".static").css({
                top: 0 - 4*$("#old-history").height()
            });
            }
            
        }
      })
      */

}); /* end of as page load scripts */