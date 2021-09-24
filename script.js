$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  fade: true,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});



// Google Map

function initMap() {
  // The location of Uluru
  const VIT = { lat: 12.9717, lng: 79.1594 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: VIT,
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: VIT,
    map: map,
  });
}
