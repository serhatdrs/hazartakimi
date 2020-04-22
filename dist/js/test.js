
$(function(){
  $("#container1").twentytwenty({
    default_offset_pct: 0.7, // How much of the before image is visible when the page loads
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: false, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });
});
// index slide
if ($(".js-owlHomeSlide").length != 0) {
  var owl = $('.js-owlHomeSlide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay:true,
    margin: 0,
    mouseDrag: false,
    autoplayTimeout:17000,

    // animateIn: 'zoomInRight',
    // animateOut: 'fadeIn'
  });
}
