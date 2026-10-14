```javascript
/* =========================================
   BCA BRAIN BATTLE - SCRIPT.JS
   ========================================= */

/* ---------- QUIZ QUESTIONS AND ANSWERS ---------- */

const quizData = {
    Basic: {
        Java: [
            {
                q: "Who developed Java?",
                o: ["Dennis Ritchie", "James Gosling", "Bill Gates", "Guido van Rossum"],
                a: 1,
                e: "James Gosling and his team developed Java at Sun Microsystems."
            },
            {
                q: "Which keyword creates a class in Java?",
                o: ["function", "define", "class", "new"],
                a: 2,
                e: "The class keyword is used to declare a class."
            },
            {
                q: "Which method is the entry point of a Java program?",
                o: ["start()", "main()", "run()", "execute()"],
                a: 1,
                e: "The main() method is the standard entry point of a Java application."
            },
            {
                q: "Which data type stores true or false?",
                o: ["int", "char", "boolean", "float"],
                a: 2,
                e: "The boolean data type stores true or false."
            },
            {
                q: "Which symbol normally ends a Java statement?",
                o: [".", ":", ";", ","],
                a: 2,
                e: "A semicolon terminates most Java statements."
            }
        ],

        "Operating System": [
            {
                q: "What is an operating system?",
                o: ["Programming language", "System software", "Web browser", "Database"],
                a: 1,
                e: "An operating system manages hardware and software resources."
            },
            {
                q: "Which is an operating system?",
                o: ["Windows", "HTML", "MySQL", "Google Chrome"],
                a: 0,
                e: "Windows is an operating system."
            },
            {
                q: "What does CPU stand for?",
                o: ["Central Program Utility", "Central Processing Unit", "Computer User Program", "Control Power Unit"],
                a: 1,
                e: "CPU stands for Central Processing Unit."
            },
            {
                q: "Which memory is volatile?",
                o: ["ROM", "Hard disk", "RAM", "DVD"],
                a: 2,
                e: "RAM loses its stored data when power is removed."
            },
            {
                q: "What is multitasking?",
                o: ["Deleting files", "Handling multiple tasks", "Turning off a computer", "Formatting a disk"],
                a: 1,
                e: "Multitasking allows multiple tasks to be handled during the same period."
            }
        ],

        "Computer Network": [
            {
                q: "What is a computer network?",
                o: ["Connected computers and devices", "A keyboard", "A programming language", "A storage device"],
                a: 0,
                e: "A computer network connects devices to communicate and share resources."
            },
            {
                q: "What does LAN stand for?",
                o: ["Large Access Network", "Local Area Network", "Long Area Node", "Linked Application Network"],
                a: 1,
                e: "LAN stands for Local Area Network."
            },
            {
                q: "Which device connects different networks?",
                o: ["Mouse", "Router", "Printer", "Scanner"],
                a: 1,
                e: "A router forwards data packets between networks."
            },
            {
                q: "Which protocol is used to access websites?",
                o: ["HTTP", "SMTP", "POP3", "ARP"],
                a: 0,
                e: "HTTP transfers web resources. HTTPS is its secure version."
            },
            {
                q: "What does IP stand for?",
                o: ["Internet Process", "Internal Program", "Internet Protocol", "Input Port"],
                a: 2,
                e: "IP stands for Internet Protocol."
            }
        ],

        Mathematics: [
            {
                q: "What is 5 + 7?",
                o: ["10", "11", "12", "13"],
                a: 2,
                e: "5 + 7 = 12."
            },
            {
                q: "What is the square of 6?",
                o: ["12", "18", "30", "36"],
                a: 3,
                e: "6 × 6 = 36."
            },
            {
                q: "What is 10% of 200?",
                o: ["10", "20", "30", "40"],
                a: 1,
                e: "10% of 200 = 20."
            },
            {
                q: "What is 2³?",
                o: ["6", "8", "9", "12"],
                a: 1,
                e: "2 × 2 × 2 = 8."
            },
            {
                q: "What is the sum of angles in a triangle?",
                o: ["90°", "180°", "270°", "360°"],
                a: 1,
                e: "The interior angles of a triangle total 180°."
            }
        ]
    },

    Medium: {
        Java: [
            {
                q: "Which concept allows a class to acquire another class's properties?",
                o: ["Encapsulation", "Inheritance", "Compilation", "Iteration"],
                a: 1,
                e: "Inheritance allows a class to acquire accessible members from another class."
            },
            {
                q: "Which keyword prevents a class from being inherited?",
                o: ["static", "private", "final", "protected"],
                a: 2,
                e: "A final class cannot be extended."
            },
            {
                q: "Which construct is used to handle exceptions?",
                o: ["try-catch", "if-else", "for-while", "switch-case"],
                a: 0,
                e: "The try-catch construct handles exceptions."
            },
            {
                q: "Which collection does not allow duplicate elements?",
                o: ["List", "Set", "ArrayList", "LinkedList"],
                a: 1,
                e: "A Set does not allow duplicate elements."
            },
            {
                q: "Which keyword refers to the current object?",
                o: ["super", "this", "self", "current"],
                a: 1,
                e: "The this keyword refers to the current object."
            }
        ],

        "Operating System": [
            {
                q: "What is a process?",
                o: ["A program in execution", "A text file", "A keyboard", "A compiler error"],
                a: 0,
                e: "A process is a program currently being executed."
            },
            {
                q: "Which scheduling algorithm uses a time quantum?",
                o: ["FCFS", "SJF", "Round Robin", "Priority"],
                a: 2,
                e: "Round Robin allocates a time quantum to each process."
            },
            {
                q: "What is virtual memory?",
                o: ["A keyboard", "A memory management technique", "A CPU register", "A network cable"],
                a: 1,
                e: "Virtual memory uses secondary storage to extend the apparent available memory."
            },
            {
                q: "What is deadlock?",
                o: ["A completed process", "Processes waiting indefinitely for resources", "A deleted file", "A booting method"],
                a: 1,
                e: "Deadlock occurs when processes wait indefinitely for resources held by one another."
            },
            {
                q: "Which is volatile memory?",
                o: ["ROM", "Hard disk", "RAM", "DVD"],
                a: 2,
                e: "RAM is volatile memory."
            }
        ],

        "Computer Network": [
            {
                q: "How many layers are in the OSI model?",
                o: ["4", "5", "7", "8"],
                a: 2,
                e: "The OSI model contains seven layers."
            },
            {
                q: "Which protocol provides reliable, connection-oriented transport?",
                o: ["UDP", "TCP", "IP", "ARP"],
                a: 1,
                e: "TCP provides reliable, connection-oriented transport."
            },
            {
                q: "Which device forwards frames using MAC addresses?",
                o: ["Switch", "Hub", "Modem", "Repeater"],
                a: 0,
                e: "A network switch forwards Ethernet frames using MAC addresses."
            },
            {
                q: "What does DNS do?",
                o: ["Encrypts files", "Resolves domain names", "Creates web pages", "Assigns MAC addresses"],
                a: 1,
                e: "DNS resolves domain names to records such as IP addresses."
            },
            {
                q: "Which topology uses a central device?",
                o: ["Bus", "Ring", "Star", "Mesh"],
                a: 2,
                e: "In a star topology, devices connect to a central switch or hub."
            }
        ],

        Mathematics: [
            {
                q: "What is the derivative of x²?",
                o: ["x", "2x", "x³", "2"],
                a: 1,
                e: "Using the power rule, the derivative of x² is 2x."
            },
            {
                q: "What is the probability of heads on a fair coin?",
                o: ["0", "1/4", "1/2", "1"],
                a: 2,
                e: "There are two equally likely outcomes, so the probability is 1/2."
            },
            {
                q: "What is log₁₀(100)?",
                o: ["1", "2", "10", "100"],
                a: 1,
                e: "10² = 100, so log₁₀(100) = 2."
            },
            {
                q: "What is the determinant of [[1,2],[3,4]]?",
                o: ["-2", "2", "10", "14"],
                a: 0,
                e: "The determinant is (1 × 4) - (2 × 3) = -2."
            },
            {
                q: "What is the mean of 2, 4, 6, 8?",
                o: ["4", "5", "6", "8"],
                a: 1,
                e: "The mean is (2 + 4 + 6 + 8) / 4 = 5."
            }
        ]
    },

    Hard: {
        Java: [
            {
                q: "Which feature allows the same method name with different parameter lists?",
                o: ["Overriding", "Overloading", "Inheritance", "Casting"],
                a: 1,
                e: "Method overloading uses the same name with different parameter lists."
            },
            {
                q: "Which interface is commonly used to define a thread task?",
                o: ["Runnable", "Serializable", "Comparable", "Cloneable"],
                a: 0,
                e: "Runnable defines the run() method."
            },
            {
                q: "Which keyword invokes a superclass constructor?",
                o: ["this", "parent", "super", "base"],
                a: 2,
                e: "super() invokes a superclass constructor."
            },
            {
                q: "Which is an unchecked exception?",
                o: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"],
                a: 2,
                e: "NullPointerException is an unchecked RuntimeException."
            },
            {
                q: "Which collection stores key-value pairs?",
                o: ["ArrayList", "HashMap", "HashSet", "LinkedList"],
                a: 1,
                e: "HashMap stores key-value mappings."
            }
        ],

        "Operating System": [
            {
                q: "Which is a necessary condition for deadlock?",
                o: ["Mutual exclusion", "Compilation", "Paging only", "Compression"],
                a: 0,
                e: "Mutual exclusion is one of the four necessary deadlock conditions."
            },
            {
                q: "Which page replacement algorithm uses recent past usage?",
                o: ["FIFO", "LRU", "Round Robin", "FCFS"],
                a: 1,
                e: "LRU replaces the page that was least recently used."
            },
            {
                q: "What is thrashing?",
                o: ["Excessive paging activity", "Fast CPU execution", "File encryption", "Disk formatting"],
                a: 0,
                e: "Thrashing occurs when excessive paging reduces system performance."
            },
            {
                q: "What is a context switch?",
                o: ["Changing a file extension", "Switching CPU execution between tasks", "Replacing a keyboard", "Formatting RAM"],
                a: 1,
                e: "A context switch saves one task's execution state and restores another's."
            },
            {
                q: "Which scheduling method can cause starvation?",
                o: ["Priority scheduling", "FCFS in every case", "All methods equally", "None"],
                a: 0,
                e: "Low-priority processes can starve if higher-priority tasks continually arrive."
            }
        ],

        "Computer Network": [
            {
                q: "Which OSI layer handles routing?",
                o: ["Data Link", "Network", "Session", "Presentation"],
                a: 1,
                e: "The Network layer handles logical addressing and routing."
            },
            {
                q: "What is the default port for HTTPS?",
                o: ["21", "25", "80", "443"],
                a: 3,
                e: "HTTPS commonly uses TCP port 443."
            },
            {
                q: "Which protocol maps IPv4 addresses to MAC addresses on a local network?",
                o: ["DNS", "ARP", "FTP", "SMTP"],
                a: 1,
                e: "ARP resolves IPv4 addresses to link-layer addresses on a local network."
            },
            {
                q: "Which technique divides a channel into frequency bands?",
                o: ["TDM", "FDM", "Packet switching", "Error correction"],
                a: 1,
                e: "Frequency Division Multiplexing allocates different frequency bands to signals."
            },
            {
                q: "Which transport protocol does not guarantee delivery?",
                o: ["TCP", "UDP", "Both guarantee delivery", "Neither sends data"],
                a: 1,
                e: "UDP does not guarantee delivery, ordering, or retransmission."
            }
        ],

        Mathematics: [
            {
                q: "What is the derivative of sin(x)?",
                o: ["-sin(x)", "cos(x)", "-cos(x)", "tan(x)"],
                a: 1,
                e: "The derivative of sin(x) is cos(x)."
            },
            {
                q: "What is the integral of 2x?",
                o: ["x² + C", "2x² + C", "2 + C", "x + C"],
                a: 0,
                e: "The integral of 2x is x² + C."
            },
            {
                q: "What is the probability of an impossible event?",
                o: ["0", "0.5", "1", "Cannot be defined"],
                a: 0,
                e: "An impossible event has probability zero."
            },
            {
                q: "A matrix has 2 rows and 3 columns. What is its order?",
                o: ["3 × 2", "2 × 3", "2 × 2", "3 × 3"],
                a: 1,
                e: "Matrix order is expressed as rows × columns."
            },
            {
                q: "What is 5 factorial (5!)?",
                o: ["25", "60", "100", "120"],
                a: 3,
                e: "5! = 5 × 4 × 3 × 2 × 1 = 120."
            }
        ]
    }
};


/* ---------- QUIZ VARIABLES ---------- */

let currentLevel = "Basic";
let currentSubject = "Java";
let questions = [];
let questionIndex = 0;
let score = 0;
let attempted = 0;
let timeLeft = 30;
let timer = null;
let answered = false;
let answerHistory = [];


/* ---------- SELECT DIFFICULTY ---------- */

function selectLevel(level) {
    if (!quizData[level]) {
        alert("Please select a valid level.");
        return;
    }

    currentLevel = level;

    const selectedLevel = document.getElementById("selected-level");

    if (selectedLevel) {
        selectedLevel.textContent = "Selected Level: " + level;
    }

    const subjectTitle = document.getElementById("subject-title");

    if (subjectTitle) {
        subjectTitle.textContent = level + " Level - Choose Your Subject";
    }

    document.querySelectorAll("[data-level]").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.level === level
        );
    });

    const subjects = document.getElementById("subjects");

    if (subjects) {
        subjects.scrollIntoView({ behavior: "smooth" });
    }
}


/* ---------- SECTION NAVIGATION ---------- */

function hideSections() {
    ["home", "subjects", "quiz-section", "result-section"].forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            element.classList.add("hidden");
        }
    });
}

function goHome() {
    stopTimer();
    hideSections();

    ["home", "subjects"].forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            element.classList.remove("hidden");
        }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ---------- START QUIZ ---------- */

function startQuiz(subject) {
    if (!quizData[currentLevel] || !quizData[currentLevel][subject]) {
        alert("Questions are not available for this subject and level.");
        return;
    }

    currentSubject = subject;
    questions = [...quizData[currentLevel][subject]];

    questionIndex = 0;
    score = 0;
    attempted = 0;
    answered = false;
    answerHistory = [];

    hideSections();

    const quizSection = document.getElementById("quiz-section");

    if (quizSection) {
        quizSection.classList.remove("hidden");
    }

    const title = document.getElementById("quiz-title");

    if (title) {
        title.textContent = currentSubject + " - " + currentLevel + " Quiz";
    }

    const scoreElement = document.getElementById("score");

    if (scoreElement) {
        scoreElement.textContent = "Score: 0";
    }

    showQuestion();

    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ---------- DISPLAY QUESTION ---------- */

function showQuestion() {
    stopTimer();

    if (questionIndex >= questions.length) {
        showResult();
        return;
    }

    answered = false;

    const question = questions[questionIndex];

    const questionElement = document.getElementById("question");
    const numberElement = document.getElementById("question-number");
    const optionsElement = document.getElementById("options");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress-bar");

    if (questionElement) {
        questionElement.textContent = question.q;
    }

    if (numberElement) {
        numberElement.textContent =
            "Question " + (questionIndex + 1) + " of " + questions.length;
    }

    if (optionsElement) {
        optionsElement.innerHTML = "";

        question.o.forEach((option, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "option";
            button.textContent =
                String.fromCharCode(65 + index) + ". " + option;

            button.addEventListener("click", () => checkAnswer(index));

            optionsElement.appendChild(button);
        });
    }

    if (feedback) {
        feedback.textContent = "";
        feedback.className = "feedback";
    }

    if (nextButton) {
        nextButton.disabled = true;
        nextButton.textContent =
            questionIndex === questions.length - 1
                ? "Show Result"
                : "Next Question";
    }

    if (progressBar) {
        progressBar.style.width =
            (questionIndex / questions.length * 100) + "%";
    }

    startTimer();
}


/* ---------- CHECK ANSWER ---------- */

function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    attempted++;
    stopTimer();

    const question = questions[questionIndex];
    const correct = selectedIndex === question.a;

    if (correct) {
        score++;
    }

    answerHistory.push({
        question: question.q,
        options: [...question.o],
        selected: selectedIndex,
        correct: question.a,
        isCorrect: correct,
        explanation: question.e
    });

    const optionsElement = document.getElementById("options");

    if (optionsElement) {
        optionsElement.querySelectorAll("button").forEach((button, index) => {
            button.disabled = true;

            if (index === question.a) {
                button.classList.add("correct");
            }

            if (index === selectedIndex && !correct) {
                button.classList.add("wrong");
            }
        });
    }

    const feedback = document.getElementById("feedback");

    if (feedback) {
        feedback.className = correct
            ? "feedback correct"
            : "feedback wrong";

        feedback.textContent = correct
            ? "Correct! " + question.e
            : "Incorrect. Correct answer: " + question.o[question.a] +
              ". " + question.e;
    }

    const scoreElement = document.getElementById("score");

    if (scoreElement) {
        scoreElement.textContent = "Score: " + score;
    }

    const nextButton = document.getElementById("next-btn");

    if (nextButton) {
        nextButton.disabled = false;
    }
}


/* ---------- TIMER ---------- */

function startTimer() {
    stopTimer();

    timeLeft = 30;
    updateTimer();

    timer = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            stopTimer();
            handleTimeout();
        }
    }, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById("timer");

    if (timerElement) {
        timerElement.textContent = "Time: " + timeLeft + "s";
        timerElement.style.color = timeLeft <= 10 ? "#ef4444" : "";
    }
}

function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function handleTimeout() {
    if (answered) return;

    answered = true;
    attempted++;

    const question = questions[questionIndex];

    answerHistory.push({
        question: question.q,
        options: [...question.o],
        selected: -1,
        correct: question.a,
        isCorrect: false,
        explanation: question.e
    });

    const optionsElement = document.getElementById("options");

    if (optionsElement) {
        optionsElement.querySelectorAll("button").forEach((button, index) => {
            button.disabled = true;

            if (index === question.a) {
                button.classList.add("correct");
            }
        });
    }

    const feedback = document.getElementById("feedback");

    if (feedback) {
        feedback.className = "feedback wrong";
        feedback.textContent =
            "Time is up! Correct answer: " + question.o[question.a] +
            ". " + question.e;
    }

    const nextButton = document.getElementById("next-btn");

    if (nextButton) {
        nextButton.disabled = false;
    }
}


/* ---------- NEXT QUESTION ---------- */

function nextQuestion() {
    if (!answered) {
        alert("Please select an answer first.");
        return;
    }

    questionIndex++;
    showQuestion();
}


/* ---------- SHOW RESULT ---------- */

function showResult() {
    stopTimer();
    hideSections();

    const resultSection = document.getElementById("result-section");

    if (resultSection) {
        resultSection.classList.remove("hidden");
    }

    const total = questions.length;
    const percentage = total > 0
        ? Math.round((score / total) * 100)
        : 0;

    const accuracy = attempted > 0
        ? Math.round((score / attempted) * 100)
        : 0;

    const finalScore = document.getElementById("final-score");
    const accuracyElement = document.getElementById("accuracy");
    const message = document.getElementById("result-message");
    const progressBar = document.getElementById("progress-bar");

    if (finalScore) {
        finalScore.textContent =
            "Your Score: " + score + " / " + total + " (" + percentage + "%)";
    }

    if (accuracyElement) {
        accuracyElement.textContent = "Accuracy: " + accuracy + "%";
    }

    if (message) {
        if (percentage >= 80) {
            message.textContent = "Excellent! You are a quiz champion!";
        } else if (percentage >= 60) {
            message.textContent = "Great job! Keep practising!";
        } else if (percentage >= 40) {
            message.textContent = "Good effort! Keep learning!";
        } else {
            message.textContent = "Keep practising and try again!";
        }
    }

    if (progressBar) {
        progressBar.style.width = "100%";
    }

    displayReview();
    saveResult({
        subject: currentSubject,
        level: currentLevel,
        score: score,
        total: total,
        percentage: percentage,
        date: new Date().toLocaleString()
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ---------- ANSWER REVIEW ---------- */

function displayReview() {
    const review = document.getElementById("review-container");

    if (!review) return;

    review.innerHTML = "";

    answerHistory.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "review-item";

        const heading = document.createElement("h4");
        heading.textContent = (index + 1) + ". " + item.question;

        const yourAnswer = document.createElement("p");
        yourAnswer.textContent = item.selected === -1
            ? "Your answer: Not answered (time expired)"
            : "Your answer: " + item.options[item.selected];

        const correctAnswer = document.createElement("p");
        correctAnswer.textContent =
            "Correct answer: " + item.options[item.correct];

        const explanation = document.createElement("p");
        explanation.textContent = "Explanation: " + item.explanation;

        card.style.borderLeftColor =
            item.isCorrect ? "#22c55e" : "#ef4444";

        card.append(heading, yourAnswer, correctAnswer, explanation);
        review.appendChild(card);
    });
}


/* ---------- SAVE RESULT IN BROWSER ---------- */

function saveResult(result) {
    try {
        const previous = JSON.parse(
            localStorage.getItem("bcaBrainBattleResults") || "[]"
        );

        previous.push(result);

        localStorage.setItem(
            "bcaBrainBattleResults",
            JSON.stringify(previous)
        );
    } catch (error) {
        console.warn("Could not save quiz result.", error);
    }
}


/* ---------- RETAKE QUIZ ---------- */

function retakeQuiz() {
    startQuiz(currentSubject);
}


/* ---------- EXIT QUIZ ---------- */

function exitQuiz() {
    const confirmExit = confirm(
        "Are you sure you want to exit this quiz?"
    );

    if (confirmExit) {
        stopTimer();
        goHome();
    }
}


/* ---------- INITIAL SETUP ---------- */

document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("next-btn");

    if (nextButton) {
        nextButton.addEventListener("click", nextQuestion);
    }

    const defaultLevel = document.getElementById("selected-level");

    if (defaultLevel) {
        defaultLevel.textContent = "Selected Level: Basic";
    }
});
```
