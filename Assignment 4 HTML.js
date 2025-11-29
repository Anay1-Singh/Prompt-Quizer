// Simple JavaScript Quiz Game (Console-Based)

// 1. Predefined questions and answers stored in an array of objects
const quizQuestions = [
  {
    question: "1) What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "2) What does CSS stand for?",
    answer: "cascading style sheets"
  },
  {
    question: "3) Which language is used to add interactivity to web pages (HTML, CSS, or JavaScript)?",
    answer: "javascript"
  },
  {
    question: "4) What is the keyword used to declare a variable in JavaScript (var, let, or const)?",
    answer: "let"
  },
  {
    question: "5) What is 2 + 2?",
    answer: "4"
  }
];

// 2. Function to start the quiz
function startQuiz() {
  let score = 0; // keeps track of correct answers

  alert("Welcome to Anay's JavaScript Quiz! Click OK to start.");

  // 3. Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];

    // Ask the question using prompt()
    let userAnswer = prompt(currentQuestion.question);

    // If user pressed Cancel, stop the quiz early
    if (userAnswer === null) {
      alert("Quiz cancelled. Thanks for playing!");
      return; // exit the function
    }

    // 4. Clean up user input: trim spaces and make it lowercase
    userAnswer = userAnswer.trim().toLowerCase();

    // 5. Compare with correct answer
    if (userAnswer === currentQuestion.answer) {
      alert("Correct! ✅");
      score++; // increase score
    } else {
      alert("Wrong ❌\nCorrect answer was: " + currentQuestion.answer);
    }
  }

  // 6. Show final score at the end
  alert(
    "Quiz finished!\nYour final score is: " +
      score +
      " out of " +
      quizQuestions.length
  );
}

// 7. Run the quiz
startQuiz();
