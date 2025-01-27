const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correct: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correct: 'Mars',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
    correct: 'Blue Whale',
  },
  {
    question: 'What is the square root of 64?',
    options: ['6', '8', '10', '12'],
    correct: '8',
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ['Leo Tolstoy', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correct: 'William Shakespeare',
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Display the first question
function loadQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next');

  // Reset the UI
  questionElement.textContent = quizQuestions[currentQuestionIndex].question;
  optionsElement.innerHTML = ''; // Clear previous options
  nextButton.disabled = true; // Disable Next button

  // Add options as buttons
  quizQuestions[currentQuestionIndex].options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option, button);
    optionsElement.appendChild(button);
  });
}

// Check the selected answer
function checkAnswer(selected, button) {
  const correctAnswer = quizQuestions[currentQuestionIndex].correct;

  // Disable all buttons
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach((btn) => (btn.disabled = true));

  // Highlight the selected answer
  if (selected === correctAnswer) {
    button.style.backgroundColor = 'green';
    score++;
  } else {
    button.style.backgroundColor = 'red';

    // Highlight the correct answer
    buttons.forEach((btn) => {
      if (btn.textContent === correctAnswer) {
        btn.style.backgroundColor = 'green';
      }
    });
  }

  // Enable the Next button
  document.getElementById('next').disabled = false;
}

// Move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

// Display the final score
function endQuiz() {
  const quizElement = document.getElementById('quiz');
  quizElement.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: ${score} / ${quizQuestions.length}</p>
    `;
}

// Initialize the quiz
loadQuestion();
