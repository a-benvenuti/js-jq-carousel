$(
  function(){
//-----------------  FUNZIONI --------------------
function swipeNext(){
  var imgActive = $(".images img.active");
  var circleActive = $('.nav i.active');
  imgActive.removeClass("active");
  circleActive.removeClass('active');
  if (imgActive.hasClass("last") == true) {
    $(".images img.first").addClass("active");
    $('i.first').addClass('active');
  } else {
    imgActive.next().addClass("active");
    circleActive.next().addClass('active');
  }
}
function swipePrev() {
  var imgActive = $(".images img.active");
  var circleActive = $('.nav i.active');
  imgActive.removeClass("active");
  circleActive.removeClass('active');
  if (imgActive.hasClass("first") == true) {
    $(".images img.last").addClass("active");
    $('i.last').addClass('active');
  } else {
    imgActive.prev().addClass("active");
    circleActive.prev().addClass('active');
  }
}
//----------- fine delle FUNZIONI ----------------

    $(".prev").click(
      function() {
        swipePrev();
      }
    );

    $(".next").click(
      function() {
        swipeNext();
      }
    );


  }
);
