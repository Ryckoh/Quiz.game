const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "William Shakespeare",
        d: "Jane Austen",
        correct: "c",
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Pb",
        correct: "a",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Great White Shark",
        correct: "b",
    },
    {
        question: "Which element has the atomic number 1?",
        a: "Oxygen",
        b: "Hydrogen",
        c: "Helium",
        d: "Carbon",
        correct: "b",
    },
    {
        question: "What is the currency of Japan?",
        a: "Yen",
        b: "Won",
        c: "Dollar",
        d: "Rupee",
        correct: "a",
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Helium",
        correct: "b",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Diamond",
        c: "Iron",
        d: "Quartz",
        correct: "b",
    },
    {
        question: "In which year did the Titanic sink?",
        a: "1912",
        b: "1905",
        c: "1918",
        d: "1920",
        correct: "a",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent Van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Claude Monet",
        correct: "c",
    },
    {
        question: "What is the smallest prime number?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "c",
    },
    {
        question: "Which continent is known as the Dark Continent?",
        a: "Asia",
        b: "Africa",
        c: "South America",
        d: "Antarctica",
        correct: "b",
    },
    {
        question: "What is the main language spoken in Brazil?",
        a: "Spanish",
        b: "Portuguese",
        c: "English",
        d: "French",
        correct: "b",
    },
    {
        question: "What is the capital of Australia?",
        a: "Sydney",
        b: "Canberra",
        c: "Melbourne",
        d: "Brisbane",
        correct: "b",
    },
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        a: "Liver",
        b: "Lungs",
        c: "Heart",
        d: "Kidneys",
        correct: "c",
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Kangchenjunga",
        c: "Mount Everest",
        d: "Lhotse",
        correct: "c",
    },
    {
        question: "Which planet is closest to the sun?",
        a: "Venus",
        b: "Earth",
        c: "Mercury",
        d: "Mars",
        correct: "c",
    },
    {
        question: "What is the boiling point of water?",
        a: "100°C",
        b: "90°C",
        c: "80°C",
        d: "110°C",
        correct: "a",
    },
    {
        question: "What is the largest country in the world?",
        a: "Canada",
        b: "China",
        c: "Russia",
        d: "United States",
        correct: "c",
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label class="answer"><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label>
        <label class="answer"><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label>
        <label class="answer"><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label>
        <label class="answer"><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label>
    `;
}

function submitQuiz() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answer = selectedAnswer.value;
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    resultContainer.style.display = "block";
    document.getElementById("submit").style.display = "none";
    document.getElementById("restart").style.display = "inline";
}

function restartQuiz() {
    currentQuestionIndex = 0; // Reset the question index to 0
    score = 0; // Reset the score
    document.getElementById("result").style.display = "none"; // Hide the result
    document.getElementById("restart").style.display = "none"; // Hide the restart button
    document.getElementById("submit").style.display = "inline"; // Show the submit button
    loadQuestion(); // Load the first question
}

document.getElementById("submit").addEventListener("click", submitQuiz);
document.getElementById("restart").addEventListener("click", restartQuiz);

window.onload = function() {
    loadQuestion(); // Load the first question on page load
    document.getElementById("submit").style.display = "inline"; // Show the submit button
};