// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Hover Effect
const imageButton = document.querySelector(".image");
imageButton.addEventListener("mouseover", () => {
  imageButton.src = "Your sources";
});
imageButton.addEventListener("mouseout", () => {
  imageButton.src = "Your sources";
});

document.addEventListener('DOMContentLoaded', () => {
  const backgroundImage = document.querySelector('.background-image');
  const backgroundVideo = document.querySelector('.background-video');
  function switchMedia() {
    if (backgroundImage.style.display !== 'none') {
      backgroundImage.style.display = 'none';
      backgroundVideo.style.display = 'block';
      backgroundVideo.play();
    } else {
      backgroundImage.style.display = 'block';
      backgroundVideo.style.display = 'none';
      backgroundVideo.pause();
    }
  }
  // Initial image display
  backgroundImage.style.display = 'block';
  backgroundVideo.style.display = 'none';
  // Switch media every 2 seconds
  setInterval(switchMedia, 2000);
});

document.querySelector('.contact-button.github').addEventListener('click', () => {
  window.open('Your sources', '_blank');
});
