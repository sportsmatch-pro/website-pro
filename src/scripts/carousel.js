// Funció per inicialitzar un carrusel específic
function initCarousel (carouselId) {
    const carousel = document.getElementById(carouselId);

    if (!carousel) return;

    const images = carousel.querySelectorAll('img');
    const parentElement = carousel.parentElement;

    if (!parentElement) return;

    const indicators = parentElement.querySelectorAll('[data-index]');
    const prevBtn = parentElement.querySelector('.carousel-prev');
    const nextBtn = parentElement.querySelector('.carousel-next');

    let currentIndex = 0;

    // Funció per mostrar una imatge específica
    function showImage (index) {
        // Amagar totes les imatges
        images.forEach(img => img.classList.remove('opacity-100'));
        images.forEach(img => img.classList.add('opacity-0'));

        // Mostrar la imatge actual
        images[index].classList.remove('opacity-0');
        images[index].classList.add('opacity-100');

        // Actualitzar indicadors
        indicators.forEach(indicator => {
            indicator.classList.remove('bg-white');
            indicator.classList.add('bg-white/50');
        });
        indicators[index].classList.remove('bg-white/50');
        indicators[index].classList.add('bg-white');

        currentIndex = index;
    }

    // Event listeners per als botons de navegació
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(newIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % images.length;
            showImage(newIndex);
        });
    }

    // Event listeners pels indicadors
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showImage(index);
        });
    });

    // Auto-play opcional (cada 5 segons)
    setInterval(() => {
        const newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
    }, 5000);
}

// Inicialitzar tots els carrusels quan la pàgina es carregui
document.addEventListener('DOMContentLoaded', function () {
    // Trobar tots els carrusels per la classe
    const carousels = document.querySelectorAll('[id^="carousel-"]');

    carousels.forEach(carousel => {
        initCarousel(carousel.id);
    });
});

// Exportar la funció per usar-la des d'altres fitxers
window.initCarousel = initCarousel;















