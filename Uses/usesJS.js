function openNav() {
    document.getElementsByClassName("nav-mobile").style.width = "250px";

}
function closeNav() {
    document.getElementByClassName("nav-mobile").style.width = "0";
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
];

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}


function selectAnswer(selected) {
    const feedback = document.getElementById("feedback");
    feedback.style.display = "block";
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        feedback.style.fontWeight = "bold";
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
        feedback.style.fontWeight = "bold";
    }




    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const quizContainer = document.getElementById("quiz-container");
            quizContainer.innerHTML = `<p>Quiz Completed!</h2>
            <p>You answered ${correctAnswers} out of ${questions.length} questions correctly.</p>`;
        }
        

    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    showQuestion(); 
});