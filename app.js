AOS.init({
  duration: 1200,
})

$("#tile-1 .nav-tabs a").click(function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
      $("#tile-1 .slider").css({"left":+ position.left,"width":width});
  });
  var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
  var actPosition = $("#tile-1 .nav-tabs .active").position();
  $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});
  