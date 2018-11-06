jQuery(document).ready(function () {
  jQuery('.inicio-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: jQuery('.flechas-le'),
    nextArrow: jQuery('.flechas-ri'),
    fade: true,
    cssEase: 'linear'
   // arrows: true,
    // fade: true,
  });
});







