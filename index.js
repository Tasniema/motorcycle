document.addEventListener('DOMContentLoaded', () => {
  const enButton = document.getElementById('en-btn');
  const arButton = document.getElementById('ar-btn');
  const contentElements = document.querySelectorAll('[data-en]');

  enButton.addEventListener('click', () => {
    contentElements.forEach(el => {
      el.textContent = el.getAttribute('data-en');
      el.style.direction = 'ltr';
    });
    document.body.setAttribute('lang', 'en');
  });

  arButton.addEventListener('click', () => {
    contentElements.forEach(el => {
      el.textContent = el.getAttribute('data-ar');
      el.style.direction = 'rtl';
    });
    document.body.setAttribute('lang', 'ar');
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const closeButton = document.querySelector('.close-btn');

  closeButton.addEventListener('click', function() {
    menuToggle.checked = false;
  });
});


document.getElementById('play-button').addEventListener('click', function() {
  var video = document.getElementById('video');
  video.play();
  this.style.display = 'none'; // Hide play button when video starts
});




