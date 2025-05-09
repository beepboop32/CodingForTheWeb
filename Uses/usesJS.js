function openNav() {
    document.getElementsByClassName("nav-mobile").style.width = "250px";

}
function closeNav() {
    document.getElementByClassName("nav-mobile").style.width = "0";
}


function contactPage() {
    window.open("../Contact/contact.html");
}


let currentQuestion = 0; // Track the current question
let correctAnswers = 0;
const questions = [
    {
        question: "Provide the answer to 25%5 in Python.",
        choices: ["1", "0", "5"],
        correct: 1
    },
    {
        question: "How do you denote a function in Python?",
        choices: ["def functionName():", "function functionName() {", "fn functionName() {"],
        correct: 0
    },
    {
        question: "How do you define a variable in Python?",
        choices: ["let num = 1;", "num = 1", "num == 1"],
        correct: 1
    },
    {
        question: "Is python high level, Low level, or machine code?",
        choices: ["High Level", "Low Level", "Machine Code"],
        correct: 0
    },
    {
        question: "Are for loops count-controlled or condition-controlled?",
        choices: ["Count-controlled", "Condition-controlled", "Integer-controlled"],
        correct: 0
    }
];

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.style.opacity = 0;
}


function selectAnswer(selected) {
    const feedback = document.getElementById("feedback");
    feedback.style.opacity = 1;
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
        
    }




    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const quizContainer = document.getElementById("quiz-container");
            quizContainer.innerHTML = `<p>Quiz Completed!</h2>
            <p>You answered ${correctAnswers} out of ${questions.length} questions correctly.</p>
            <button id="try-again-button">Try Again</button>`;

            const tryAgainButton = document.getElementById("try-again-button");
            tryAgainButton.addEventListener("click", resetQuiz);
        }
        

    }, 2000);
}
function resetQuiz() {
    currentQuestion = 0; // Reset the current question index
    correctAnswers = 0; // Reset the score
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <p id="question-text" class="question-text"></p>
        <div class="choices">
            <button class="choice" onclick="selectAnswer(0)"></button>
            <button class="choice" onclick="selectAnswer(1)"></button>
            <button class="choice" onclick="selectAnswer(2)"></button>
        </div>
        <div id="feedback" class="feedback"></div>
    `;
    showQuestion(); // Reload the first question
}
document.addEventListener("DOMContentLoaded", () => {
    showQuestion(); 
});