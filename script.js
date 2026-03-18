document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Menu Mobile (Hamburger) ---
    const mobileMenu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // Alterna a classe 'active' para mostrar/esconder o menu
            navMenu.classList.toggle('active');
            // Animação do botão hamburger (opcional, precisa de CSS)
            mobileMenu.classList.toggle('is-active');
        });
    }

    // Fecha
