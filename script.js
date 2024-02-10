const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(index);
}

document.querySelector('.navigation').addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')) {
        const index = Array.from(event.target.parentNode.children).indexOf(event.target);
        goToSlide(index);
    }
});

document.querySelector('.prev-btn').addEventListener('click', prevSlide);
document.querySelector('.next-btn').addEventListener('click', nextSlide);

showSlide(currentSlide);