// Gamer Tech - Funcionalidades JavaScript

document.addEventListener('DOMContentLoaded', () => {
    console.log('Gamer Tech - Portal carregado com sucesso!');

    // Efeito de scroll no header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(14, 19, 34, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(14, 19, 34, 0.9)';
        }
    });

    // Animação suave para links internos
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Lógica do Carrossel
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let carouselInterval;

    function showSlide(index) {
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        items[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        let index = currentIndex + 1;
        if (index >= items.length) index = 0;
        showSlide(index);
    }

    function prevSlide() {
        let index = currentIndex - 1;
        if (index < 0) index = items.length - 1;
        showSlide(index);
    }

    function startAutoPlay() {
        carouselInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(carouselInterval);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                stopAutoPlay();
                startAutoPlay();
            });
        });

        startAutoPlay();
    }

    // Botão Voltar ao Topo
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Exibe o botão após rolar 300px
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animação de entrada das notícias
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        // Aplica um atraso escalonado para cada card
        setTimeout(() => {
            card.classList.add('visible');
        }, 100 + (index * 100));
    });
});
