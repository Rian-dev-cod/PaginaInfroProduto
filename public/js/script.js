document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-btn");
    ctaButton.addEventListener("click", () => {
        alert("Parabéns por decidir transformar seu corpo! Vamos começar.");
    });
});


// Seleciona todos os links do menu
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});


