function activateCarousel(interval) {
  var carouselItems = [
    {
      image: './resources/carousel_1.jpg'
    },
    {
      image: './resources/carousel_2.jpg'
    },
    {
      image: './resources/carousel_3.jpg'
    },
    {
      image: './resources/carousel_4.jpg'
    },
    {
      image: './resources/carousel_5.jpg'
    },
  ];

  var carouselWrapper = document.querySelector('main .carousel');
  var currentItem = 1;

  document.getElementById('main-tagline').style.opacity = 1;

  return setInterval(function() {
    carouselWrapper.style.backgroundImage = 'url(\'' + carouselItems[currentItem++].image + '\')';
    if (currentItem === carouselItems.length)
      currentItem = 0;
  }, interval || 5000);
}


window.onload = function main() {
  activateCarousel();
};
