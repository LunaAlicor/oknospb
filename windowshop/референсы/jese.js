let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}


setInterval(() => {
    moveSlide(1);
}, 15000);


showSlide(currentSlide);



document.addEventListener('DOMContentLoaded', (event) => {
    // Ваш JavaScript код для дополнительных функций, если необходимо
});

