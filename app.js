// Quiz State
let currentMode = null;
let selectedCategories = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];
let correctCount = 0;
let wrongCount = 0;

// Category Icons
const categoryIcons = {
  'ICAC': 'bi-shield-exclamation',
  'General Knowledge': 'bi-lightbulb',
  'Alcohol and Drugs': 'bi-cup-straw',
  'Bicycle Safety': 'bi-bicycle',
  'Fatigue and Defensive Driving': 'bi-moon-stars',
  'Intersections': 'bi-signpost-split',
  'Traffic Lights and Lanes': 'bi-stoplights',
  'Negligent Driving': 'bi-exclamation-triangle',
  'Pedestrians': 'bi-person-walking',
  'Seat Belts and Restraints': 'bi-life-preserver',
  'Speed Limits': 'bi-speedometer2',
  'Traffic Signs': 'bi-sign-stop'
};

// DOM Elements
const screens = {
  start: document.getElementById('start-screen'),
  quiz: document.getElementById('quiz-screen'),
  result: document.getElementById('result-screen'),
  review: document.getElementById('review-screen')
};

const elements = {
  totalCount: document.getElementById('total-count'),
  practiceMode: document.getElementById('practice-mode'),
  testMode: document.getElementById('test-mode'),
  categorySelection: document.getElementById('category-selection'),
  categoryButtons: document.getElementById('category-buttons'),
  selectAllBtn: document.getElementById('select-all-btn'),
  startPractice: document.getElementById('start-practice'),
  selectedCount: document.getElementById('selected-count'),
  questionCounter: document.getElementById('question-counter'),
  correctCountDisplay: document.getElementById('correct-count'),
  wrongCountDisplay: document.getElementById('wrong-count'),
  progress: document.getElementById('progress'),
  questionId: document.getElementById('question-id'),
  questionCategory: document.getElementById('question-category'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  answerFeedback: document.getElementById('answer-feedback'),
  nextBtn: document.getElementById('next-btn'),
  quitBtn: document.getElementById('quit-btn'),
  resultIcon: document.getElementById('result-icon'),
  resultTitle: document.getElementById('result-title'),
  finalScore: document.getElementById('final-score'),
  totalQuestions: document.getElementById('total-questions'),
  accuracy: document.getElementById('accuracy'),
  correctTotal: document.getElementById('correct-total'),
  wrongTotal: document.getElementById('wrong-total'),
  reviewBtn: document.getElementById('review-btn'),
  restartBtn: document.getElementById('restart-btn'),
  reviewContainer: document.getElementById('review-container'),
  wrongCountBadge: document.getElementById('wrong-count-badge'),
  backToResult: document.getElementById('back-to-result')
};

// Initialize
function init() {
  elements.totalCount.textContent = questions.length;
  setupEventListeners();
  createCategoryButtons();
}

// Setup Event Listeners
function setupEventListeners() {
  elements.practiceMode.addEventListener('click', () => selectMode('practice'));
  elements.testMode.addEventListener('click', () => selectMode('test'));
  elements.selectAllBtn.addEventListener('click', toggleSelectAll);
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
    const icon = categoryIcons[category] || 'bi-folder';

    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3';

    const btn = document.createElement('div');
    btn.className = 'category-btn h-100';
    btn.innerHTML = `
      <div class="category-icon text-primary"><i class="bi ${icon}"></i></div>
      <div class="category-name">${category}</div>
      <div class="category-count">${count}문제</div>
    `;
    btn.addEventListener('click', () => toggleCategory(category, btn));

    col.appendChild(btn);
    elements.categoryButtons.appendChild(col);
  });
}

// Select Mode
function selectMode(mode) {
  currentMode = mode;

  if (mode === 'test') {
    startTestQuiz();
  } else {
    elements.categorySelection.style.display = 'block';
    elements.categorySelection.scrollIntoView({ behavior: 'smooth' });
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

  updateSelectedCount();
}

// Toggle Select All
function toggleSelectAll() {
  const allBtns = document.querySelectorAll('.category-btn');

  if (selectedCategories.length === categories.length) {
    // Deselect all
    selectedCategories = [];
    allBtns.forEach(btn => btn.classList.remove('selected'));
    elements.selectAllBtn.innerHTML = '<i class="bi bi-check-all me-1"></i>전체 선택';
  } else {
    // Select all
    selectedCategories = [...categories];
    allBtns.forEach(btn => btn.classList.add('selected'));
    elements.selectAllBtn.innerHTML = '<i class="bi bi-x-lg me-1"></i>전체 해제';
  }

  updateSelectedCount();
}

// Update Selected Count
function updateSelectedCount() {
  const count = selectedCategories.reduce((sum, cat) => {
    return sum + questions.filter(q => q.category === cat).length;
  }, 0);

  elements.selectedCount.textContent = `${count}개 선택`;
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
  correctCount = 0;
  wrongCount = 0;
  wrongAnswers = [];
  showScreen('quiz');
  displayQuestion();
}

// Display Question
function displayQuestion() {
  const question = currentQuestions[currentQuestionIndex];

  elements.questionCounter.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
  elements.correctCountDisplay.textContent = correctCount;
  elements.wrongCountDisplay.textContent = wrongCount;
  elements.progress.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;

  elements.questionId.textContent = question.id;
  elements.questionCategory.textContent = question.category;
  elements.questionText.textContent = question.question;

  // Hide feedback
  elements.answerFeedback.classList.add('d-none');
  elements.answerFeedback.classList.remove('correct', 'incorrect');

  elements.optionsContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn w-100';
    btn.innerHTML = `
      <span class="option-label">${labels[index]}</span>
      <span class="option-text">${option}</span>
    `;
    btn.addEventListener('click', () => selectAnswer(index));
    elements.optionsContainer.appendChild(btn);
  });

  elements.nextBtn.disabled = true;

  // Update button text for last question
  if (currentQuestionIndex === currentQuestions.length - 1) {
    elements.nextBtn.innerHTML = '결과 보기 <i class="bi bi-flag-fill ms-2"></i>';
  } else {
    elements.nextBtn.innerHTML = '다음 문제 <i class="bi bi-arrow-right ms-2"></i>';
  }
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
    correctCount++;
    elements.correctCountDisplay.textContent = correctCount;

    // Show feedback
    elements.answerFeedback.classList.remove('d-none', 'incorrect');
    elements.answerFeedback.classList.add('correct');
    elements.answerFeedback.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>정답입니다!';
  } else {
    optionBtns[selectedIndex].classList.add('incorrect');
    optionBtns[question.correctAnswer].classList.add('correct');
    wrongCount++;
    elements.wrongCountDisplay.textContent = wrongCount;
    wrongAnswers.push({
      question: question,
      selectedAnswer: selectedIndex
    });

    // Show feedback
    elements.answerFeedback.classList.remove('d-none', 'correct');
    elements.answerFeedback.classList.add('incorrect');
    elements.answerFeedback.innerHTML = `<i class="bi bi-x-circle-fill me-2"></i>오답입니다. 정답: ${question.options[question.correctAnswer]}`;
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
  elements.correctTotal.textContent = correctCount;
  elements.wrongTotal.textContent = wrongCount;

  if (passed) {
    elements.resultIcon.innerHTML = '<i class="bi bi-trophy-fill text-warning"></i>';
    elements.resultTitle.textContent = '축하합니다! 합격입니다!';
    elements.resultTitle.className = 'display-6 fw-bold mb-4 result-pass';
  } else {
    elements.resultIcon.innerHTML = '<i class="bi bi-emoji-frown text-secondary"></i>';
    elements.resultTitle.textContent = '아쉽습니다. 불합격입니다.';
    elements.resultTitle.className = 'display-6 fw-bold mb-4 result-fail';
  }

  elements.reviewBtn.style.display = wrongAnswers.length > 0 ? 'inline-flex' : 'none';

  showScreen('result');
}

// Show Review
function showReview() {
  elements.reviewContainer.innerHTML = '';
  elements.wrongCountBadge.textContent = `${wrongAnswers.length}개`;
  const labels = ['A', 'B', 'C', 'D'];

  wrongAnswers.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'review-item';

    const yourAnswer = item.question.options[item.selectedAnswer];
    const correctAnswer = item.question.options[item.question.correctAnswer];

    div.innerHTML = `
      <div class="d-flex align-items-center gap-2 mb-2">
        <span class="badge bg-secondary">${index + 1}</span>
        <span class="badge bg-info">${item.question.id}</span>
      </div>
      <div class="review-question">${item.question.question}</div>
      <div class="review-answer your-answer">
        <i class="bi bi-x-circle text-danger me-2"></i>
        <strong>내 답변 (${labels[item.selectedAnswer]}):</strong> ${yourAnswer}
      </div>
      <div class="review-answer correct-answer">
        <i class="bi bi-check-circle text-success me-2"></i>
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
  correctCount = 0;
  wrongCount = 0;
  wrongAnswers = [];

  // Reset category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('selected');
  });

  elements.categorySelection.style.display = 'none';
  elements.startPractice.disabled = true;
  elements.selectedCount.textContent = '0개 선택';
  elements.selectAllBtn.innerHTML = '<i class="bi bi-check-all me-1"></i>전체 선택';

  showScreen('start');
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
