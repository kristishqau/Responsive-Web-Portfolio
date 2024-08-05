function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let slideIndex = 0;
const slides = document.getElementsByClassName('carousel-item');
showSlides(slideIndex);

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0; 
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; 
    }
    showSlides(slideIndex);
}

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[n].classList.add('active');
}