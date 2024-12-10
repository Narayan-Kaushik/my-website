// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Hover Effect (keeping your original code)
const imageButton = document.querySelector(".image");
imageButton.addEventListener("mouseover", () => {
  imageButton.src = "https://i.imgur.com/FjnIwyJ.jpg";
});
imageButton.addEventListener("mouseout", () => {
  imageButton.src = "https://i.imgur.com/r9hGMMF.jpg";
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
  // Replace with your actual GitHub profile URL
  window.open('https://github.com/your-github-username', '_blank');
});