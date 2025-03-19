const questions = document.querySelectorAll('.question');
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const profileText = document.getElementById('profile');
const restartButton = document.getElementById('restart');

let currentQuestion = 0;
let score = 0;

// Mostra a primeira pergunta
questions[currentQuestion].classList.add('active');

// Adiciona evento aos botões de resposta
quizForm.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const value = parseInt(e.target.getAttribute('data-value'));
        score += value;

        // Esconde a pergunta atual
        questions[currentQuestion].classList.remove('active');

        // Avança para a próxima pergunta
        currentQuestion++;

        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.add('active');
        } else {
            // Calcula o perfil
            let profile;
            if (score <= 5) {
                profile = "Conservador";
            } else if (score <= 8) {
                profile = "Moderado";
            } else {
                profile = "Arrojado";
            }

            // Exibe o resultado
            profileText.textContent = profile;
            resultDiv.style.display = 'block';
            quizForm.style.display = 'none';
        }
    }
});

// Reinicia o teste
restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    questions.forEach((question, index) => {
        question.classList.remove('active');
        if (index === 0) {
            question.classList.add('active');
        }
    });
    resultDiv.style.display = 'none';
    quizForm.style.display = 'block';
});