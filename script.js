// Background Image Slider
let currentImage = 0;
const images = ['background1.jpg', 'background2.jpg', 'background3.jpg'];
const heroSection = document.querySelector('.hero');

function changeBackground() {
    currentImage = (currentImage + 1) % images.length;
    heroSection.style.backgroundImage = `url('${images[currentImage]}')`;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);
