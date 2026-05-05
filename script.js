const questions = [
    {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.16", "3.12", "3.18"],
        correct: 0
    },
    {
        question: "If a triangle has angles of 60° and 70°, what is the third angle?",
        options: ["50°", "60°", "70°", "80°"],
        correct: 0
    },
    {
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        correct: 1
    },
    {
        question: "Which word is a synonym for 'ubiquitous'?",
        options: ["Rare", "Omnipresent", "Ancient", "Peculiar"],
        correct: 1
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Identify the correct sentence:",
        options: ["She don't know him.", "She doesn't knows him", "She doesn't know him.", "She not know him."],
        correct: 2
    },
    {
        question: "What is an antonym of 'benevolent'?",
        options: ["Kind", "Generous", "Malevolent", "Charitable"],
        correct: 2
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        correct: 2
    },
    {
        question: "What gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correct: 2
    },
    {
        question: "How many chromosomes are in a normal human cell?",
        options: ["23", "44", "46", "48"],
        correct: 2
    },
    {
        question: "Which organ produces insulin?",
        options: ["Spleen", "Liver", "Kidney", "Pancreas"],
        correct: 3
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Tibia", "Femur", "Fibula", "Humerus"],
        correct: 1
    },
    {
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "6", "4"],
        correct: 3
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },
    {
        question: "What is the pH of pure water?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Which gas is produced when an acid reacts with a metal?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correct: 3
    },
    {
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: 2
    },
    {
        question: "At what speed does light travel in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correct: 0
    },
    {
        question: "What is Newton's second law of motion?",
        options: ["F = ma", "E = mc²", "v = u + at", "P = mv"],
        correct: 0
    },
    {
        question: "Which country hosted the 2024 Summer Olympics?",
        options: ["Japan", "USA", "France", "UK"],
        correct: 2
    },
    {
        question: "Who is the Secretary-General of the United Nations as of 2025?",
        options: ["Ban Ki-moon", "Antonio Guterres", "Kofi Annan", "Boutros Boutros-Ghali"],
        correct: 1
    },
    {
        question: "Which country became the first African nation to land a spacecraft on the Moon?",
        options: ["Nigeria", "South Africa", "Egypt", "No African country has"],
        correct: 3
    },
    {
        question: "What is the name of the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
        correct: 3
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: 1
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let playerName = "";

// ── THIS WAS MISSING — hides all screens ──
function hideAllScreens() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("scoreScreen").style.display = "none";
}

// ── Go to Screen 1 ──
function goToScreen1() {
  hideAllScreens();
  document.getElementById("screen1").style.display = "block";
}

// ── Go to Screen 2 ──
function goToScreen2() {
  hideAllScreens();
  document.getElementById("screen2").style.display = "block";
}

// ── Start Quiz — goes to Screen 3 ──
function startQuiz() {
  const nameInput = document.getElementById("nameInput").value.trim();

  // stop here if name is empty
  if (nameInput === "") {
    document.getElementById("nameError").textContent =
      "Please enter your name to continue!";
    return;  // THIS WAS MISSING — stops the function
  }

  // clear any error message
  document.getElementById("nameError").textContent = "";

  // save the name
  playerName = nameInput;

  // show name on quiz screen
  document.getElementById("displayName").textContent = playerName;

  // switch to quiz screen
  hideAllScreens();
  document.getElementById("quizScreen").style.display = "block";

  // load first question
  loadQuestion();
}

// ── Go to Score Screen ──
function goToScreen4() {
  hideAllScreens();
  document.getElementById("scoreScreen").style.display = "block";
}

// ── Load Question ──
function loadQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("questionNumber").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";

  document.getElementById("questionText").textContent = q.question;

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(function(button, index) {
    button.textContent = q.options[index];
    button.className = "option-btn";
    button.disabled = false;
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").style.display = "none";
}

// ── Check Answer ──
function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");
  const feedback = document.getElementById("feedback");

  buttons.forEach(function(button) {
    button.disabled = true;
  });

  if (selectedIndex === q.correct) {
    buttons[selectedIndex].classList.add("correct");
    feedback.style.color = "green";
    feedback.textContent = "✅ Correct! Well done!";
    score = score + 1;
  } else {
    buttons[selectedIndex].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
    feedback.style.color = "red";
    feedback.textContent = "❌ Wrong! The correct answer is highlighted.";
  }

  document.getElementById("nextBtn").style.display = "block";
}

// ── Next Question ──
function nextQuestion() {
  currentQuestion = currentQuestion + 1;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

// ── Show Score ──
function showScore() {
  goToScreen4();

  document.getElementById("scoreName").textContent =
    `Well done, ${playerName}! 🎉`;

  document.getElementById("scoreText").textContent =
    `You scored ${score} out of ${questions.length}`;

  if (score === 26) {
    document.getElementById("scoreMessage").textContent = "🏆 Perfect score! You are a genius!";
  } else if (score >= 20) {
    document.getElementById("scoreMessage").textContent = "🎉 Great job!";
  } else if (score >= 15) {
    document.getElementById("scoreMessage").textContent = "😊 Awesome! Keep practicing!";
  } else if (score >= 10) {
    document.getElementById("scoreMessage").textContent = "🙂 Good effort! Keep it up!";
  } else if (score >= 5) {
    document.getElementById("scoreMessage").textContent = "😌 You're doing well! Keep learning!";
  } else {
    document.getElementById("scoreMessage").textContent = "😅 Don't give up! Try again!";
  }
}

// ── Restart Quiz ──
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  playerName = "";

  document.getElementById("nameInput").value = "";
  document.getElementById("nameError").textContent = "";

  goToScreen1();
}

// ── Show Screen 1 when page first loads ──
goToScreen1();