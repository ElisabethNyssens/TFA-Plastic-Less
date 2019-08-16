$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
    $('.menu').toggleClass("menu--open");
    $(".burger-menu").toggleClass("burger-menu--opened");
    $(".burger-menu").toggleClass("burger-menu--closed");
  });
});


$(".burger-menu").on("click", function() {
  $(this).toggleClass("burger-menu--opened");
  $(this).toggleClass("burger-menu--closed");
  $('.menu').toggleClass("menu--open");
});

//-------------------


//# sourceMappingURL=app.js.map
