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

function activateScroll() {
  var aboutGroups = document.getElementsByClassName('about__group');
  var windowHeight = window.innerHeight;
  window.onscroll = function() {
    (function() {
      for (var i = aboutGroups.length - 1; i >= 0; i--) {
        var rect = aboutGroups[i].getBoundingClientRect();
        if (rect.top < (windowHeight - rect.height) / 2 + windowHeight / 5) {
          aboutGroups[i].style.transform = 'translateX(0)';
          aboutGroups[i].style.opacity = 1;
        }
      }
    })();
    if (aboutGroups[aboutGroups.length - 1].style.opacity == 1)
      window.onscroll = undefined;
  }
}

window.onload = function main() {
  activateCarousel();
  activateScroll();
};
