// --- QUIZ DATA REPOSITORY ---
const quizData = {
    os: {
        title: "Operating Systems",
        badgeClass: "os",
        questions: [
            {
                q: "Which of the following scheduling algorithms is non-preemptive?",
                options: ["Round Robin", "Shortest Job First (Non-preemptive)", "Priority Scheduling (Preemptive)", "Multilevel Feedback Queue"],
                answer: 1
            },
            {
                q: "What is the primary purpose of virtual memory?",
                options: ["To increase CPU cache speed", "To allow execution of processes larger than physical memory", "To prevent kernel panics", "To speed up disk read/write operations"],
                answer: 1
            },
            {
                q: "Which condition is NOT required for a deadlock to occur?",
                options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
                answer: 2
            },
            {
                q: "What is a semaphore in an operating system?",
                options: ["A hardware interrupt handler", "A synchronization tool used to manage concurrent processes", "A type of secondary storage device", "An error logging protocol"],
                answer: 1
            },
            {
                q: "In UNIX/Linux, which system call is used to create a new process?",
                options: ["exec()", "fork()", "spawn()", "create()"],
                answer: 1
            }
        ]
    },
    java: {
        title: "Java Programming",
        badgeClass: "java",
        questions: [
            {
                q: "Which of the following principles is NOT a core pillar of Object-Oriented Programming in Java?",
                options: ["Encapsulation", "Compilation", "Inheritance", "Polymorphism"],
                answer: 1
            },
            {
                q: "What is the size of an `int` data type in Java?",
                options: ["16 bits", "32 bits", "64 bits", "8 bytes"],
                answer: 1
            },
            {
                q: "Which collection class allows you to store elements in key-value pairs with unique keys?",
                options: ["ArrayList", "HashSet", "HashMap", "LinkedList"],
                answer: 2
            },
            {
                q: "Which keyword is used to prevent a method from being overridden in subclass?",
                options: ["static", "abstract", "final", "private"],
                answer: 2
            },
            {
                q: "What exception is thrown when attempting to divide an integer by zero in Java?",
                options: ["NullPointerException", "ArithmeticException", "NumberFormatException", "IOException"],
                answer: 1
            }
        ]
    },
    cn: {
        title: "Computer Networks",
        badgeClass: "cn",
        questions: [
            {
                q: "How many layers are present in the OSI reference model?",
                options: ["4 layers", "5 layers", "7 layers", "9 layers"],
                answer: 2
            },
            {
                q: "Which protocol is responsible for reliable, connection-oriented data transmission over the Internet?",
                options: ["UDP", "TCP", "IP", "ICMP"],
                answer: 1
            },
            {
                q: "What is the default port number assigned to HTTPS traffic?",
                options: ["80", "443", "21", "53"],
                answer: 1
            },
            {
                q: "Which IPv4 address class is designated for multicast groups?",
                options: ["Class A", "Class B", "Class C", "Class D"],
                answer: 3
            },
            {
                q: "Which device operates primarily at the Data Link Layer (Layer 2) of the OSI model?",
                options: ["Repeater", "Hub", "Network Switch", "Router"],
                answer: 2
            }
        ]
    },
    math: {
        title: "Mathematics",
        badgeClass: "math",
        questions: [
            {
                q: "What is the derivative of $f(x) = x^3$ with respect to $x$?",
                options: ["$3x^2$", "$x^2$", "$3x$", "$6x$"],
                answer: 0
            },
            {
                q: "What is the value of $\\log_{10}(1000)$?",
                options: ["1", "2", "3", "10"],
                answer: 2
            },
            {
                q: "If a matrix has a determinant equal to zero, what is it called?",
                options: ["Identity Matrix", "Singular Matrix", "Orthogonal Matrix", "Symmetric Matrix"],
                answer: 1
            },
            {
                q: "What is the sum of angles in a triangle in radians?",
                options: ["$\\pi$", "$2\\pi$", "$\\pi/2$", "$3\\pi/2$"],
                answer: 0
            },
            {
                q: "What is the probability of rolling a sum of 7 with two standard 6-sided dice?",
                options: ["1/6", "1/12", "1/36", "5/36"],
                answer: 0
            }
        ]
    }
};

// --- APP STATE ---
let currentSubject = 'os';
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let maxStreak = 0;
let timerInterval = null;
let timeLeft = 25;
let sessionStartTime = 0;
let totalTimeTaken = 0;
let soundEnabled = true;
let userAnswers = [];

// --- WEB AUDIO API SOUND GENERATOR ---
let audioCtx = null;
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'click') {
            osc.frequency.setValueAtTime(400, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'correct') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'incorrect') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.setValueAtTime(165, now + 0.12);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
        } else if (type === 'complete') {
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, idx) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.connect(g);
                g.connect(audioCtx.destination);
                o.frequency.setValueAtTime(freq, now + idx * 0.1);
                g.gain.setValueAtTime(0.1, now + idx * 0.1);
                g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.3);
                o.start(now + idx * 0.1);
                o.stop(now + idx * 0.1 + 0.3);
            });
        }
    } catch (e) {
        console.log("Audio playback error:", e);
    }
}

function toggleAudio() {
    soundEnabled = !soundEnabled;
    const icon = document.getElementById('soundIcon');
    if (soundEnabled) {
        icon.className = "fa-solid fa-volume-high";
    } else {
        icon.className = "fa-solid fa-volume-xmark";
    }
    playSound('click');
}

// --- VIEW NAVIGATION ---
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function returnToHome() {
    clearInterval(timerInterval);
    switchView('homeView');
    loadMiniScoreboard();
}

// --- QUIZ FLOW ---
function startQuiz(subjectKey) {
    playSound('click');
    currentSubject = subjectKey;
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    userAnswers = [];
    sessionStartTime = Date.now();

    const data = quizData[currentSubject];
    document.getElementById('subjectBadge').className = `subject-badge ${data.badgeClass}`;
    document.getElementById('subjectBadge').innerText = data.title;
    document.getElementById('totalQNum').innerText = data.questions.length;

    switchView('quizView');
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 25;
    document.getElementById('timeLeft').innerText = timeLeft;

    const qData = quizData[currentSubject].questions[currentQuestionIndex];
    document.getElementById('currentQNum').innerText = currentQuestionIndex + 1;
    document.getElementById('questionText').innerHTML = qData.q;

    // Progress bar fill
    const pct = ((currentQuestionIndex) / quizData[currentSubject].questions.length) * 100;
    document.getElementById('progressBarFill').style.width = pct + '%';

    // Streak UI
    const streakPill = document.getElementById('streakPill');
    if (streak > 1) {
        streakPill.style.display = 'flex';
        document.getElementById('streakCount').innerText = streak;
    } else {
        streakPill.style.display = 'none';
    }

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt}</span><i class="fa-regular fa-circle" style="opacity: 0.4;"></i>`;
        btn.onclick = () => selectOption(idx);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('nextBtn').disabled = true;

    // Start timer
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function selectOption(selectedIndex) {
    clearInterval(timerInterval);
    playSound('click');

    const qData = quizData[currentSubject].questions[currentQuestionIndex];
    const optionBtns = document.querySelectorAll('.option-btn');
    const correctIndex = qData.answer;

    optionBtns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIndex) {
            btn.classList.add('correct');
            btn.querySelector('i').className = "fa-solid fa-circle-check";
            btn.querySelector('i').style.opacity = "1";
        } else if (idx === selectedIndex) {
            btn.classList.add('incorrect');
            btn.querySelector('i').className = "fa-solid fa-circle-xmark";
            btn.querySelector('i').style.opacity = "1";
        }
    });

    const isCorrect = (selectedIndex === correctIndex);
    userAnswers.push({ question: qData.q, selected: selectedIndex, correct: correctIndex, isCorrect });

    if (isCorrect) {
        score++;
        streak++;
        if (streak > maxStreak) maxStreak = streak;
        playSound('correct');
    } else {
        streak = 0;
        playSound('incorrect');
    }

    document.getElementById('nextBtn').disabled = false;
}

function handleTimeout() {
    const qData = quizData[currentSubject].questions[currentQuestionIndex];
    const optionBtns = document.querySelectorAll('.option-btn');
    const correctIndex = qData.answer;

    optionBtns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIndex) {
            btn.classList.add('correct');
            btn.querySelector('i').className = "fa-solid fa-circle-check";
            btn.querySelector('i').style.opacity = "1";
        }
    });

    userAnswers.push({ question: qData.q, selected: -1, correct: correctIndex, isCorrect: false });
    streak = 0;
    playSound('incorrect');
    document.getElementById('nextBtn').disabled = false;
}

function handleNextQuestion() {
    playSound('click');
    currentQuestionIndex++;
    const totalQ = quizData[currentSubject].questions.length;

    if (currentQuestionIndex < totalQ) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function confirmExit() {
    if (confirm("Are you sure you want to exit the quiz? Your progress will be lost.")) {
        returnToHome();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    totalTimeTaken = Math.round((Date.now() - sessionStartTime) / 1000);
    playSound('complete');

    const totalQ = quizData[currentSubject].questions.length;
    const accuracy = Math.round((score / totalQ) * 100);

    document.getElementById('finalScoreVal').innerText = `${score}/${totalQ}`;
    document.getElementById('finalAccuracyVal').innerText = `${accuracy}%`;
    document.getElementById('finalTimeVal').innerText = `${totalTimeTaken}s`;
    document.getElementById('finalStreakVal').innerText = maxStreak;

    // Result headline
    const titleEl = document.getElementById('resultTitle');
    const subEl = document.getElementById('resultSub');
    if (accuracy === 100) {
        titleEl.innerText = "Flawless Victory!";
        subEl.innerText = "Absolute mastery across all questions!";
        triggerConfetti();
    } else if (accuracy >= 70) {
        titleEl.innerText = "Great Job!";
        subEl.innerText = "You have a solid grasp of this subject.";
        triggerConfetti();
    } else {
        titleEl.innerText = "Quiz Completed";
        subEl.innerText = "Keep practicing to elevate your mastery score.";
    }

    switchView('resultsView');
}

function restartCurrentQuiz() {
    startQuiz(currentSubject);
}

// --- SCOREBOARD / LEADERBOARD STORAGE & CARDS ---
function getStoredScores() {
    try {
        const scores = localStorage.getItem('masterQuiz_scores');
        return scores ? JSON.parse(scores) : [];
    } catch (e) {
        return [];
    }
}

function saveUserScore() {
    const input = document.getElementById('playerNameInput');
    const name = input.value.trim() || "Anonymous Scholar";
    const totalQ = quizData[currentSubject].questions.length;
    const accuracy = Math.round((score / totalQ) * 100);

    const record = {
        name: name,
        subject: currentSubject,
        subjectTitle: quizData[currentSubject].title,
        score: score,
        total: totalQ,
        accuracy: accuracy,
        time: totalTimeTaken,
        date: new Date().toLocaleDateString()
    };

    const scores = getStoredScores();
    scores.push(record);
    // Sort by highest score, then lowest time
    scores.sort((a, b) => b.score - a.score || a.time - b.time);

    localStorage.setItem('masterQuiz_scores', JSON.stringify(scores));
    playSound('click');

    // Hide input box after saving
    document.getElementById('saveScoreBox').innerHTML = `<p style="color: var(--success); font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Score successfully recorded to scoreboard!</p>`;
    loadMiniScoreboard();
}

let activeLeaderboardFilter = 'all';

function openLeaderboard() {
    playSound('click');
    activeLeaderboardFilter = 'all';
    updateFilterTabsUI();
    renderScoreboardCards('all');
    document.getElementById('leaderboardModal').classList.add('active');
}

function closeLeaderboard() {
    playSound('click');
    document.getElementById('leaderboardModal').classList.remove('active');
}

function filterLeaderboard(subjectKey) {
    playSound('click');
    activeLeaderboardFilter = subjectKey;
    updateFilterTabsUI();
    renderScoreboardCards(subjectKey);
}

function updateFilterTabsUI() {
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('onclick').includes(`'${activeLeaderboardFilter}'`)) {
            tab.classList.add('active');
        }
    });
}

function renderScoreboardCards(filter) {
    const container = document.getElementById('scoreboardCardsContainer');
    let scores = getStoredScores();

    if (filter !== 'all') {
        scores = scores.filter(s => s.subject === filter);
    }

    if (scores.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-trophy"></i>
                <p>No scoreboard records found for this category yet. Take a quiz and save your score!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    scores.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'score-card-item';
        card.innerHTML = `
            <div class="score-card-left">
                <div class="rank-badge">${idx + 1}</div>
                <div class="player-details">
                    <h4>${escapeHtml(item.name)}</h4>
                    <div class="sub-info">
                        <span><i class="fa-solid fa-bookmark"></i> ${item.subjectTitle}</span>
                        <span>•</span>
                        <span><i class="fa-regular fa-clock"></i> ${item.time}s</span>
                        <span>•</span>
                        <span>${item.date}</span>
                    </div>
                </div>
            </div>
            <div class="score-card-right">
                <div class="score-number-badge">
                    <div class="score-val">${item.score}/${item.total}</div>
                    <div class="acc-val">${item.accuracy}% accuracy</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function clearScoreboard() {
    if (confirm("Are you sure you want to clear all scoreboard records?")) {
        localStorage.removeItem('masterQuiz_scores');
        playSound('click');
        renderScoreboardCards(activeLeaderboardFilter);
        loadMiniScoreboard();
    }
}

function loadMiniScoreboard() {
    const scores = getStoredScores();
    const miniList = document.getElementById('miniScoreboardList');
    const topScores = scores.slice(0, 3);

    if (topScores.length === 0) {
        miniList.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 10px;">No high scores recorded yet. Be the first!</p>`;
        return;
    }

    miniList.innerHTML = '';
    topScores.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'mini-score-item';
        div.innerHTML = `
            <div class="mini-user">
                <div class="mini-rank">${idx + 1}</div>
                <span>${escapeHtml(item.name)} (${item.subjectTitle})</span>
            </div>
            <div class="mini-meta">${item.score}/${item.total} (${item.accuracy}%)</div>
        `;
        miniList.appendChild(div);
    });
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// --- CONFETTI ANIMATION ---
function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#6366f1', '#3b82f6', '#10b981', '#f97316', '#a855f7', '#fbbf24'];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 14,
            vy: (Math.random() - 0.7) * 14,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 10
        });
    }

    let animationId;
    function updateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.4; // gravity
            p.rotation += p.vRot;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        particles = particles.filter(p => p.y < canvas.height + 50);
        if (particles.length > 0) {
            animationId = requestAnimationFrame(updateConfetti);
        } else {
            cancelAnimationFrame(animationId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    updateConfetti();
}

// Initialize mini scoreboard on page load
window.addEventListener('DOMContentLoaded', () => {
    loadMiniScoreboard();
});
