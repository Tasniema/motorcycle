
let currentIndex = 1;
const images = document.querySelectorAll('.motocycle');
const totalImages = images.length;
const imagesToShow = 4; // Number of images to show at a time
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalImages - imagesToShow) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex * 115;
  images.forEach(image => {
    image.style.transform = `translateX(${offset}%)`;
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalImages - imagesToShow;
}

updateCarousel(); // Initialize carousel state

