// JavaScript code to create a simple photo slider
const images = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;
const interval = 3000; // Change image every 3 seconds

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.opacity = '1';
        } else {
            image.style.opacity = '0';
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

// Initial setup
showImage(currentImageIndex);
setInterval(nextImage, interval);
/*End Photo slider*/

