function activateCarousel(interval) {
  var carouselWrapper = document.querySelector('main .carousel');
  var images = carouselWrapper.getElementsByClassName('carousel__image');
  var currentItem = 1;
  var imagesCount = images.length;

  document.getElementById('main-tagline').style.opacity = 1;

  return setInterval(function() {
    if (currentItem === 0) {
      images[imagesCount - 1].style.opacity = 0;
    } else {
      images[currentItem - 1].style.opacity = 0;
    }
    images[currentItem++].style.opacity = 1;
    if (currentItem === images.length)
      currentItem = 0;
  }, interval || 5000);
}


window.onload = function main() {
  activateCarousel();
};
