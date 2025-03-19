// Função de fade-in para conteúdo
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Se o elemento estiver visível na tela, adicione a classe 'visible'
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Mostrar e esconder curiosidades sobre inflação (Exemplo de interação)
const curiosityBtn = document.querySelectorAll('[data-toggle="curiosity"]');
curiosityBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        const curiosityText = this.nextElementSibling; // Encontra o parágrafo logo após o botão
        // Alterna entre mostrar e esconder o texto
        if (curiosityText.style.display === "none" || curiosityText.style.display === "") {
            curiosityText.style.display = "block";
        } else {
            curiosityText.style.display = "none";
        }
    });
});

// Adicionando animações nos cards ao passar o mouse
const cards = document.querySelectorAll('.card article');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Função de animação de fade-in nos elementos com a classe 'fade-in'
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s ease-out';
    window.addEventListener('scroll', function() {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.style.opacity = 1;
        }
    });
});