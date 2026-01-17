// Quiz State
let currentMode = null;
let selectedCategories = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];

// DOM Elements
const screens = {
  start: document.getElementById('start-screen'),
  quiz: document.getElementById('quiz-screen'),
  result: document.getElementById('result-screen'),
  review: document.getElementById('review-screen')
};

const elements = {
  practiceMode: document.getElementById('practice-mode'),
  testMode: document.getElementById('test-mode'),
  categorySelection: document.getElementById('category-selection'),
  categoryButtons: document.getElementById('category-buttons'),
  startPractice: document.getElementById('start-practice'),
  questionCounter: document.getElementById('question-counter'),
  scoreDisplay: document.getElementById('score-display'),
  progress: document.getElementById('progress'),
  questionId: document.getElementById('question-id'),
  questionCategory: document.getElementById('question-category'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  nextBtn: document.getElementById('next-btn'),
  quitBtn: document.getElementById('quit-btn'),
  finalScore: document.getElementById('final-score'),
  totalQuestions: document.getElementById('total-questions'),
  resultMessage: document.getElementById('result-message'),
  accuracy: document.getElementById('accuracy'),
  reviewBtn: document.getElementById('review-btn'),
  restartBtn: document.getElementById('restart-btn'),
  reviewContainer: document.getElementById('review-container'),
  backToResult: document.getElementById('back-to-result')
};

// Initialize
function init() {
  setupEventListeners();
  createCategoryButtons();
}

// Setup Event Listeners
function setupEventListeners() {
  elements.practiceMode.addEventListener('click', () => selectMode('practice'));
  elements.testMode.addEventListener('click', () => selectMode('test'));
  elements.startPractice.addEventListener('click', startPracticeQuiz);
  elements.nextBtn.addEventListener('click', nextQuestion);
  elements.quitBtn.addEventListener('click', quitQuiz);
  elements.reviewBtn.addEventListener('click', showReview);
  elements.restartBtn.addEventListener('click', restart);
  elements.backToResult.addEventListener('click', () => showScreen('result'));
}

// Create Category Buttons
function createCategoryButtons() {
  categories.forEach(category => {
    const count = questions.filter(q => q.category === category).length;
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.innerHTML = `${category}<span class="count">${count}문제</span>`;
    btn.addEventListener('click', () => toggleCategory(category, btn));
    elements.categoryButtons.appendChild(btn);
  });
}

// Select Mode
function selectMode(mode) {
  currentMode = mode;

  if (mode === 'test') {
    startTestQuiz();
  } else {
    elements.categorySelection.style.display = 'block';
  }
}

// Toggle Category Selection
function toggleCategory(category, btn) {
  const index = selectedCategories.indexOf(category);

  if (index > -1) {
    selectedCategories.splice(index, 1);
    btn.classList.remove('selected');
  } else {
    selectedCategories.push(category);
    btn.classList.add('selected');
  }

  elements.startPractice.disabled = selectedCategories.length === 0;
}

// Start Practice Quiz
function startPracticeQuiz() {
  currentQuestions = questions.filter(q => selectedCategories.includes(q.category));
  shuffleArray(currentQuestions);
  startQuiz();
}

// Start Test Quiz
function startTestQuiz() {
  currentQuestions = [...questions];
  shuffleArray(currentQuestions);
  currentQuestions = currentQuestions.slice(0, 45);
  startQuiz();
}

// Start Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];
  showScreen('quiz');
  displayQuestion();
}

// Display Question
function displayQuestion() {
  const question = currentQuestions[currentQuestionIndex];

  elements.questionCounter.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
  elements.scoreDisplay.textContent = `점수: ${score}`;
  elements.progress.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;

  elements.questionId.textContent = question.id;
  elements.questionCategory.textContent = question.category;
  elements.questionText.textContent = question.question;

  elements.optionsContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-label">${labels[index]}</span>
      <span class="option-text">${option}</span>
    `;
    btn.addEventListener('click', () => selectAnswer(index));
    elements.optionsContainer.appendChild(btn);
  });

  elements.nextBtn.disabled = true;
}

// Select Answer
function selectAnswer(selectedIndex) {
  const question = currentQuestions[currentQuestionIndex];
  const optionBtns = elements.optionsContainer.querySelectorAll('.option-btn');

  // Disable all options
  optionBtns.forEach(btn => btn.disabled = true);

  // Mark selected
  optionBtns[selectedIndex].classList.add('selected');

  // Show correct/incorrect
  if (selectedIndex === question.correctAnswer) {
    optionBtns[selectedIndex].classList.add('correct');
    score++;
    elements.scoreDisplay.textContent = `점수: ${score}`;
  } else {
    optionBtns[selectedIndex].classList.add('incorrect');
    optionBtns[question.correctAnswer].classList.add('correct');
    wrongAnswers.push({
      question: question,
      selectedAnswer: selectedIndex
    });
  }

  elements.nextBtn.disabled = false;
}

// Next Question
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= currentQuestions.length) {
    showResults();
  } else {
    displayQuestion();
  }
}

// Show Results
function showResults() {
  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 75;

  elements.finalScore.textContent = score;
  elements.totalQuestions.textContent = total;
  elements.accuracy.textContent = `${percentage}%`;

  elements.resultMessage.textContent = passed ? '합격입니다!' : '불합격입니다';
  elements.resultMessage.className = `result-message ${passed ? 'pass' : 'fail'}`;

  elements.reviewBtn.style.display = wrongAnswers.length > 0 ? 'block' : 'none';

  showScreen('result');
}

// Show Review
function showReview() {
  elements.reviewContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  wrongAnswers.forEach(item => {
    const div = document.createElement('div');
    div.className = 'review-item';

    const yourAnswer = item.question.options[item.selectedAnswer];
    const correctAnswer = item.question.options[item.question.correctAnswer];

    div.innerHTML = `
      <div class="review-question">${item.question.id}: ${item.question.question}</div>
      <div class="review-answer your-answer">
        <strong>내 답변 (${labels[item.selectedAnswer]}):</strong> ${yourAnswer}
      </div>
      <div class="review-answer correct-answer">
        <strong>정답 (${labels[item.question.correctAnswer]}):</strong> ${correctAnswer}
      </div>
    `;

    elements.reviewContainer.appendChild(div);
  });

  showScreen('review');
}

// Quit Quiz
function quitQuiz() {
  if (confirm('정말 나가시겠습니까? 진행 상황이 저장되지 않습니다.')) {
    restart();
  }
}

// Restart
function restart() {
  currentMode = null;
  selectedCategories = [];
  currentQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];

  // Reset category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('selected');
  });

  elements.categorySelection.style.display = 'none';
  elements.startPractice.disabled = true;

  showScreen('start');
}

// Show Screen
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

// Shuffle Array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize on load
init();
