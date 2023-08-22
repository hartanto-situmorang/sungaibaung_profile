// Slide Show script

const swiper = new Swiper(".swiper", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
});

let currentSlide = -2;

// Function to automatically switch to the next slide
function autoSlide() {
  if (currentSlide < swiper.slides.length) {
    currentSlide++;
  } else {
    currentSlide = 0; // Reset to the first slide
  }
  swiper.slideTo(currentSlide);
}
// Set interval to call autoSlide function every 5000 milliseconds (5 seconds)
setInterval(autoSlide, 5000);
autoSlide();
