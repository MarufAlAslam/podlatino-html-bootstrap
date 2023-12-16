AOS.init({
    duration: 1200,
  });

  // make the nav sticky after scrolling 20 px
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });