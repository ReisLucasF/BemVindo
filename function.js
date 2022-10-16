const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    hamburger.addEventListener('click', () => {

        // Gaveta Responsiva

        nav.classList.toggle('nav-active');

        // Links Animados

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
        });

        // Animação da Gaveta
        hamburger.classList.toggle('toggle');

    });
    
}   

navSlide();