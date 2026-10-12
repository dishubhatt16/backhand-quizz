
const quizData = {
    Basic: [
        {
            question: "Which language is used to develop Android applications?",
            options: ["HTML", "Java", "CSS", "SQL"],
            answer: 1
        },
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Control Processing User"
            ],
            answer: 0
        },
        {
            question: "Which tag creates a hyperlink in HTML?",
            options: ["<p>", "<img>", "<a>", "<h1>"],
            answer: 2
        }
    ],

    Medium: [
        {
            question: "Which layer of the OSI model handles routing?",
            options: [
                "Application",
                "Transport",
                "Network",
                "Physical"
            ],
            answer: 2
        },
        {
            question: "Which Java keyword creates an object?",
            options: ["class", "new", "static", "return"],
            answer: 1
        },
        {
            question: "Which SQL command retrieves data?",
            options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
            answer: 3
        }
    ],

    Hard: [
        {
            question: "Which data structure follows LIFO?",
            options: ["Queue", "Stack", "Tree", "Graph"],
            answer: 1
        },
        {
            question: "Which protocol provides reliable, ordered data delivery?",
            options: ["IP", "UDP", "TCP", "ARP"],
            answer: 2
        },
        {
            question: "Which normal form removes transitive dependencies?",
            options: ["1NF", "2NF", "3NF", "Unnormalized"],
            answer: 2
        }
    ]
};

let questions = [];
let currentIndex = 0;
let userAnswers = [];
let timeLeft = 60;
let timerId = null;

const $ = id => document.getElementById(id);

function startQuiz(level) {
    clearInterval(timerId);

    questions = quizData[level];
    currentIndex = 0;
    userAnswers = Array(questions.length).fill(null);
    timeLeft = 60;

    $("quiz-section").hidden = false;
    $("result-section").hidden = true;
    $("quiz-title").textContent = level + " Quiz";

    document.querySelector(".levels").hidden = true;

    showQuestion();

    timerId = setInterval(() => {
        timeLeft--;
        $("timer").textContent = `Time: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const q = questions[currentIndex];

    $("question-number").textContent =
        `Question ${currentIndex + 1} of ${questions.length}`;

    $("question").textContent = q.question;
    $("feedback").textContent = "";
    $("options").innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.onclick = () => selectAnswer(index);

        if (userAnswers[currentIndex] !== null) {
            button.disabled = true;

            if (index === q.answer) {
                button.classList.add("correct");
            }

            if (index === userAnswers[currentIndex] &&
                index !== q.answer) {
                button.classList.add("wrong");
            }
        }

        $("options").appendChild(button);
    });

    if (userAnswers[currentIndex] !== null) {
        showFeedback();
    }

    $("back-btn").disabled = currentIndex === 0;
    $("next-btn").textContent =
        currentIndex === questions.length - 1 ? "Finish Quiz" : "Next";
}

function selectAnswer(index) {
    if (userAnswers[currentIndex] !== null) return;

    userAnswers[currentIndex] = index;
    showQuestion();
}

function showFeedback() {
    const q = questions[currentIndex];
    const selected = userAnswers[currentIndex];

    $("feedback").textContent =
        selected === q.answer
            ? "Correct answer! ✓"
            : `Incorrect. Correct answer: ${q.options[q.answer]}`;
}

function previousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerId);

    const correct = questions.reduce((total, q, i) =>
        total + (userAnswers[i] === q.answer ? 1 : 0), 0);

    const percentage = Math.round(
        (correct / questions.length) * 100
    );

    $("quiz-section").hidden = true;
    $("result-section").hidden = false;

    $("score").textContent =
        `Correct answers: ${correct} / ${questions.length}`;

    $("percentage").textContent =
        `Your percentage: ${percentage}%`;
}
