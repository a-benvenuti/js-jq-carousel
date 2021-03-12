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
// --------------eventi al click----------------
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

    $('.nav i.fa-circle').click(function () {
      var imageActive = $('img.active');
      var circleActive = $('.nav i');
      imageActive.removeClass('active');
      circleActive.removeClass('active');
      $(this).addClass('active');
      var selectedImg = $(".images img:eq(" + $(this).index() + ")");
      selectedImg.addClass('active');
    });

// ---------fine degli eventi al click-----------
// --------------eventi da tastiera--------------
    $(document).keydown(
      function() {
        var eventoKeyPress = event.keyCode;
        if (eventoKeyPress == 37) {
          swipePrev();
        } else if (eventoKeyPress == 39) {
          swipeNext();
        }
      }
    );
// ---------fine degli eventi da tastiera---------
  }
);
