

$(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
    $("div.first").children("layer-top").css({'top': .7*scrollVar });
    $("div.first").children("layer-top").css({'opacity':( 100-scrollVar )/100});
    
})
