if($(window).width() > 800) {

  $(document).on('mousemove', function (event) {

    $('.container').css('top', $(window).height() - event.pageY)

  })


  $(document).on("mouseenter", "a", function(){
    $("body").css("background-color", "#e6aefd");
    });
    
    $(document).on("mouseleave", "a", function(){
      $("body").css("background-color", "white");
    });

}

