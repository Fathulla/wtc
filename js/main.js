document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type: "slide",
    perPage: 5,
    drag: "free",
  } );
  splide.mount();

} );

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide1', {
    type: "slide",
    perPage: 5,
    drag: "free",
  } );
  splide.mount();
  
} );

const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});