document.addEventListener("DOMContentLoaded", function () {
    const quizData = [
        {
            question: "Hvad er hovedstaden i Frankrig?",
            options: ["Madrid", "London", "Berlin", "Paris"],
            correctAnswer: "Paris"
        },
        {
            question: "Hvad er verdens største kontinent?",
            options: ["Afrika", "Asien", "Australien", "Europa"],
            correctAnswer: "Asien"
        },
        {
            question: "Hvad er Jordens nærmeste nabo i rummet?",
            options: ["Venus", "Mars", "Månen", "Saturn"],
            correctAnswer: "Månen"
        },
        {
            question: "Hvad er det kemiske symbol for vand?",
            options: ["H2O", "CO2", "O2", "N2"],
            correctAnswer: "H2O"
        },
        {
            question: "Hvad er hovedstaden i Japan?",
            options: ["Shanghai", "Beijing", "Seoul", "Tokyo"],
            correctAnswer: "Tokyo"
        },
        {
            question: "Hvad er verdens længste flod?",
            options: ["Nilen", "Amazonas", "Mississippi", "Yangtze"],
            correctAnswer: "Nilen"
        },
        {
            question: "Hvad er grundstoffet med kemisk symbol 'Fe'?",
            options: ["Fosfor", "Jern", "Kobber", "Guld"],
            correctAnswer: "Jern"
        },
        {
            question: "Hvad er Jordens største hav?",
            options: ["Atlanterhavet", "Det Indiske Ocean", "Stillehavet", "Det Sydlige Ocean"],
            correctAnswer: "Stillehavet"
        }
        // Du kan fortsætte med at tilføje flere spørgsmål her
    ];

    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", checkAnswer);
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(event) {
        const selectedOption = event.target.textContent;
        const currentQuestion = quizData[currentQuestionIndex];

        if (selectedOption === currentQuestion.correctAnswer) {
            score++;
            feedbackElement.textContent = "Korrekt!";
        } else {
            feedbackElement.textContent = "Forkert. Det korrekte svar er: " + currentQuestion.correctAnswer;
        }

        nextButton.style.display = "block";
        optionsContainer.removeEventListener("click", checkAnswer);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
            feedbackElement.textContent = "";
            nextButton.style.display = "none";
            optionsContainer.addEventListener("click", checkAnswer);
        } else {
            // Quiz'en er afsluttet
            displayResult();
        }
    }

    function displayResult() {
        questionElement.textContent = "Quiz'en er afsluttet!";
        optionsContainer.innerHTML = "Dit resultat: " + score + " ud af " + quizData.length;
        feedbackElement.textContent = "";
        nextButton.style.display = "none";
    }

    nextButton.addEventListener("click", nextQuestion);

    loadQuestion(); // Start quizzen
});
