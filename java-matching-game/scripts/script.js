const questions = [
  { question: "What keyword is used to declare a variable in JavaScript?", answer: "let" },
  { question: "How do you write a comment in JavaScript?", answer: "//" },
  { question: "Which method is used to add an element to the end of an array?", answer: "push" },
  { question: "What does 'DOM' stand for?", answer: "Document Object Model" },
  { question: "Which operator is used for strict equality comparison?", answer: "===" },
  { question: "How do you declare a function in JavaScript?", answer: "function myFunction() {}" },
  { question: "Which built-in method converts a string to lowercase?", answer: "toLowerCase" },
  { question: "How do you write an arrow function?", answer: "() => {}" },
  { question: "What keyword is used to declare a constant variable?", answer: "const" },
  { question: "Which method removes the last element of an array?", answer: "pop" },
  { question: "What does 'NaN' stand for in JavaScript?", answer: "Not a Number" },
  { question: "How do you check the data type of a variable?", answer: "typeof" },
  { question: "Which loop runs at least once regardless of condition?", answer: "do while" },
  { question: "Which event occurs when a user clicks an HTML element?", answer: "click" },
  { question: "How do you declare an array in JavaScript?", answer: "[]" },
  { question: "Which statement stops the execution of a loop?", answer: "break" },
  { question: "How do you access an element with the ID 'demo'?", answer: "document.getElementById('demo')" },
  { question: "What will '5' + 3 return in JavaScript?", answer: "53" },
  { question: "What does 'JSON' stand for?", answer: "JavaScript Object Notation" },
  { question: "Which operator is used to concatenate strings?", answer: "+" }
];

let score = 0;
let currentQuestionIndex = 0;

function shuffleQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("question").textContent = questions[currentQuestionIndex].question;
    document.getElementById("answer").value = "";
  } else {
    document.getElementById("game").innerHTML = `<h2>Game Over! Your final score is: ${score}/${questions.length}</h2>`;
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  if (userAnswer === questions[currentQuestionIndex].answer.toLowerCase()) {
    alert("Correct!");
    score++;
  } else {
    alert(`Incorrect. The correct answer is: ${questions[currentQuestionIndex].answer}`);
  }
  document.getElementById("score").textContent = `Score: ${score}`;
  currentQuestionIndex++;
  displayQuestion();
}

function startGame() {
  score = 0;
  currentQuestionIndex = 0;
  shuffleQuestions();
  displayQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", checkAnswer);
  startGame();
});
