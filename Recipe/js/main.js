
<script>
$(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
    $("div.parallax").children("layer-top").css({'top': .7*scrollVar });
    $("div.parallax").children("layer-top").css({'opacity':( 100-scrollVar )/100});
})

</script>