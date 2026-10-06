/* =====================================================
   BCA BRAIN BATTLE - SCRIPT.JS
   ===================================================== */


/* =====================================================
   QUIZ QUESTIONS & ANSWERS
   ===================================================== */

const quizData = {

    /* =================================================
       BASIC LEVEL
       ================================================= */

    Basic: {

        /* ---------------- JAVA ---------------- */

        Java: {

            "Java Introduction": [

                {
                    question: "Who developed Java?",
                    options: [
                        "Microsoft",
                        "Sun Microsystems",
                        "Apple",
                        "IBM"
                    ],
                    answer: "Sun Microsystems"
                },

                {
                    question: "Java is which type of language?",
                    options: [
                        "Object-Oriented",
                        "Markup",
                        "Query",
                        "Assembly"
                    ],
                    answer: "Object-Oriented"
                },

                {
                    question: "Which symbol is used to end a statement in Java?",
                    options: [
                        ".",
                        ",",
                        ";",
                        ":"
                    ],
                    answer: ";"
                },

                {
                    question: "Which keyword is used to create a class?",
                    options: [
                        "class",
                        "Class",
                        "create",
                        "new"
                    ],
                    answer: "class"
                }

            ],


            "Java Syntax": [

                {
                    question: "Which method is the starting point of a Java program?",
                    options: [
                        "start()",
                        "main()",
                        "run()",
                        "begin()"
                    ],
                    answer: "main()"
                },

                {
                    question: "Which keyword is used to create an object?",
                    options: [
                        "object",
                        "create",
                        "new",
                        "class"
                    ],
                    answer: "new"
                },

                {
                    question: "Which file extension is used for Java source files?",
                    options: [
                        ".java",
                        ".js",
                        ".class",
                        ".html"
                    ],
                    answer: ".java"
                }

            ],


            "Data Types": [

                {
                    question: "Which of the following is a primitive data type in Java?",
                    options: [
                        "String",
                        "Integer",
                        "int",
                        "Array"
                    ],
                    answer: "int"
                },

                {
                    question: "Which data type is used to store true or false?",
                    options: [
                        "int",
                        "boolean",
                        "char",
                        "float"
                    ],
                    answer: "boolean"
                },

                {
                    question: "Which data type stores a single character?",
                    options: [
                        "String",
                        "char",
                        "character",
                        "text"
                    ],
                    answer: "char"
                },

                {
                    question: "Which data type is used for decimal values?",
                    options: [
                        "int",
                        "boolean",
                        "double",
                        "char"
                    ],
                    answer: "double"
                }

            ],


            "Operators": [

                {
                    question: "Which operator is used for addition?",
                    options: [
                        "+",
                        "-",
                        "*",
                        "/"
                    ],
                    answer: "+"
                },

                {
                    question: "Which operator is used for multiplication?",
                    options: [
                        "+",
                        "*",
                        "%",
                        "="
                    ],
                    answer: "*"
                },

                {
                    question: "Which operator checks equality?",
                    options: [
                        "=",
                        "==",
                        "!=",
                        "<="
                    ],
                    answer: "=="
                }

            ]
        },


        /* =================================================
           COMPUTER NETWORK
           ================================================= */

        "Computer Network": {

            "Introduction to Network": [

                {
                    question: "What is a computer network?",
                    options: [
                        "A collection of connected computers",
                        "A single computer",
                        "A programming language",
                        "An operating system"
                    ],
                    answer: "A collection of connected computers"
                },

                {
                    question: "Which device connects different networks?",
                    options: [
                        "Router",
                        "Keyboard",
                        "Monitor",
                        "Printer"
                    ],
                    answer: "Router"
                }

            ],


            "Network Types": [

                {
                    question: "Which network covers a small geographical area?",
                    options: [
                        "WAN",
                        "LAN",
                        "MAN",
                        "PAN"
                    ],
                    answer: "LAN"
                },

                {
                    question: "Which network covers a very large geographical area?",
                    options: [
                        "LAN",
                        "PAN",
                        "WAN",
                        "CAN"
                    ],
                    answer: "WAN"
                }

            ],


            "OSI Model": [

                {
                    question: "How many layers are there in the OSI model?",
                    options: [
                        "5",
                        "6",
                        "7",
                        "8"
                    ],
                    answer: "7"
                },

                {
                    question: "Which is the first layer of the OSI model?",
                    options: [
                        "Transport",
                        "Network",
                        "Physical",
                        "Application"
                    ],
                    answer: "Physical"
                }

            ],


            "Transmission Media": [

                {
                    question: "Which is a guided transmission medium?",
                    options: [
                        "Radio wave",
                        "Microwave",
                        "Fiber optic cable",
                        "Satellite"
                    ],
                    answer: "Fiber optic cable"
                },

                {
                    question: "Which cable uses glass or plastic fibers?",
                    options: [
                        "Coaxial cable",
                        "Fiber optic cable",
                        "UTP",
                        "STP"
                    ],
                    answer: "Fiber optic cable"
                }

            ]
        },


        /* =================================================
           DBMS
           ================================================= */

        DBMS: {

            "Introduction to DBMS": [

                {
                    question: "What does DBMS stand for?",
                    options: [
                        "Database Management System",
                        "Data Basic Management System",
                        "Database Machine System",
                        "Data Management Software"
                    ],
                    answer: "Database Management System"
                },

                {
                    question: "Which of the following is a DBMS?",
                    options: [
                        "MySQL",
                        "HTML",
                        "CSS",
                        "JavaScript"
                    ],
                    answer: "MySQL"
                }

            ],


            "Keys": [

                {
                    question: "Which key uniquely identifies a record?",
                    options: [
                        "Foreign Key",
                        "Primary Key",
                        "Alternate Key",
                        "Secondary Key"
                    ],
                    answer: "Primary Key"
                },

                {
                    question: "Which key creates a relationship between tables?",
                    options: [
                        "Primary Key",
                        "Foreign Key",
                        "Super Key",
                        "Candidate Key"
                    ],
                    answer: "Foreign Key"
                }

            ],


            "Database": [

                {
                    question: "A database is used to store ______.",
                    options: [
                        "Data",
                        "Only images",
                        "Only programs",
                        "Only videos"
                    ],
                    answer: "Data"
                }

            ],


            "SQL Basics": [

                {
                    question: "Which command is used to retrieve data?",
                    options: [
                        "GET",
                        "SELECT",
                        "FETCHDATA",
                        "OPEN"
                    ],
                    answer: "SELECT"
                },

                {
                    question: "Which command is used to add a new record?",
                    options: [
                        "ADD",
                        "INSERT",
                        "NEW",
                        "PUT"
                    ],
                    answer: "INSERT"
                }

            ]
        },


        /* =================================================
           DESIGN THINKING
           ================================================= */

        "Design Thinking": {

            "Introduction": [

                {
                    question: "Design Thinking mainly focuses on ______.",
                    options: [
                        "Users and their needs",
                        "Only programming",
                        "Only mathematics",
                        "Computer hardware"
                    ],
                    answer: "Users and their needs"
                }

            ],


            "Empathy": [

                {
                    question: "What is the main purpose of empathy in Design Thinking?",
                    options: [
                        "Understand users",
                        "Write code",
                        "Create databases",
                        "Test hardware"
                    ],
                    answer: "Understand users"
                }

            ],


            "Ideation": [

                {
                    question: "What happens during ideation?",
                    options: [
                        "Generating ideas",
                        "Deleting ideas",
                        "Writing code only",
                        "Installing software"
                    ],
                    answer: "Generating ideas"
                }

            ],


            "Design Thinking Process": [

                {
                    question: "Which is a phase of Design Thinking?",
                    options: [
                        "Empathize",
                        "Compile",
                        "Execute",
                        "Debug"
                    ],
                    answer: "Empathize"
                }

            ]
        },


        /* =================================================
           PROBABILITY
           ================================================= */

        Probability: {

            "Basic Probability": [

                {
                    question: "Probability of an impossible event is:",
                    options: [
                        "0",
                        "1",
                        "2",
                        "10"
                    ],
                    answer: "0"
                },

                {
                    question: "Probability of a sure event is:",
                    options: [
                        "0",
                        "0.5",
                        "1",
                        "2"
                    ],
                    answer: "1"
                }

            ],


            "Events": [

                {
                    question: "An event is a subset of the ______.",
                    options: [
                        "Sample space",
                        "Database",
                        "Network",
                        "Population only"
                    ],
                    answer: "Sample space"
                }

            ],


            "Sample Space": [

                {
                    question: "The set of all possible outcomes is called:",
                    options: [
                        "Event",
                        "Sample space",
                        "Probability",
                        "Experiment"
                    ],
                    answer: "Sample space"
                }

            ],


            "Probability Rules": [

                {
                    question: "The probability of an event lies between:",
                    options: [
                        "-1 and 1",
                        "0 and 1",
                        "1 and 2",
                        "0 and 10"
                    ],
                    answer: "0 and 1"
                }

            ]
        }

    },


    /* =====================================================
       MEDIUM LEVEL
       ===================================================== */

    Medium: {

        Java: {

            "Classes and Objects": [

                {
                    question: "A class in Java is a ______.",
                    options: [
                        "Blueprint for objects",
                        "Database",
                        "Network",
                        "Compiler"
                    ],
                    answer: "Blueprint for objects"
                },

                {
                    question: "An object is an instance of a ______.",
                    options: [
                        "Method",
                        "Class",
                        "Package",
                        "Operator"
                    ],
                    answer: "Class"
                }

            ],

            "Inheritance": [

                {
                    question: "Which keyword is used for inheritance in Java?",
                    options: [
                        "inherits",
                        "extends",
                        "inherit",
                        "superclass"
                    ],
                    answer: "extends"
                }

            ],

            "Polymorphism": [

                {
                    question: "Polymorphism means:",
                    options: [
                        "Many forms",
                        "One form",
                        "No form",
                        "Data hiding"
                    ],
                    answer: "Many forms"
                }

            ],

            "Exception Handling": [

                {
                    question: "Which block is used to handle an exception?",
                    options: [
                        "try-catch",
                        "if-else",
                        "for-loop",
                        "switch"
                    ],
                    answer: "try-catch"
                }

            ]
        },


        "Computer Network": {

            "TCP/IP Model": [

                {
                    question: "Which protocol is used for reliable data transmission?",
                    options: [
                        "TCP",
                        "IP",
                        "ARP",
                        "ICMP"
                    ],
                    answer: "TCP"
                }

            ],

            "Switching": [

                {
                    question: "Which switching technique establishes a dedicated path?",
                    options: [
                        "Packet switching",
                        "Circuit switching",
                        "Message switching",
                        "Frame switching"
                    ],
                    answer: "Circuit switching"
                }

            ],

            "Routing": [

                {
                    question: "Which device performs routing?",
                    options: [
                        "Router",
                        "Hub",
                        "Repeater",
                        "Bridge"
                    ],
                    answer: "Router"
                }

            ],

            "Network Protocols": [

                {
                    question: "HTTP is mainly used for:",
                    options: [
                        "Web communication",
                        "File compression",
                        "Database design",
                        "Hardware control"
                    ],
                    answer: "Web communication"
                }

            ]
        },


        DBMS: {

            "Normalization": [

                {
                    question: "Normalization is mainly used to reduce:",
                    options: [
                        "Data redundancy",
                        "Security",
                        "Network speed",
                        "Hardware cost"
                    ],
                    answer: "Data redundancy"
                }

            ],

            "Transactions": [

                {
                    question: "A transaction is a logical unit of:",
                    options: [
                        "Database work",
                        "Network work",
                        "Programming syntax",
                        "Hardware operation"
                    ],
                    answer: "Database work"
                }

            ],

            "ACID Properties": [

                {
                    question: "Which is an ACID property?",
                    options: [
                        "Atomicity",
                        "Availability",
                        "Accessibility",
                        "Adaptability"
                    ],
                    answer: "Atomicity"
                }

            ],

            "Relational Model": [

                {
                    question: "In the relational model, data is represented using:",
                    options: [
                        "Tables",
                        "Graphs only",
                        "Images",
                        "Audio"
                    ],
                    answer: "Tables"
                }

            ]
        },


        "Design Thinking": {

            "User Research": [

                {
                    question: "User research helps designers understand:",
                    options: [
                        "User needs",
                        "Only code",
                        "Only hardware",
                        "Only databases"
                    ],
                    answer: "User needs"
                }

            ],

            "Problem Definition": [

                {
                    question: "Problem definition helps to identify:",
                    options: [
                        "The actual user problem",
                        "Only the solution",
                        "Programming language",
                        "Computer speed"
                    ],
                    answer: "The actual user problem"
                }

            ],

            "Prototyping": [

                {
                    question: "A prototype is an early version of a:",
                    options: [
                        "Solution",
                        "Database",
                        "Network",
                        "Compiler"
                    ],
                    answer: "Solution"
                }

            ],

            "Testing": [

                {
                    question: "Testing a prototype helps to:",
                    options: [
                        "Find problems and improve it",
                        "Delete the project",
                        "Stop research",
                        "Remove users"
                    ],
                    answer: "Find problems and improve it"
                }

            ]
        },


        Probability: {

            "Conditional Probability": [

                {
                    question: "Conditional probability considers:",
                    options: [
                        "An additional condition",
                        "No event",
                        "Only impossible events",
                        "Only certain events"
                    ],
                    answer: "An additional condition"
                }

            ],

            "Bayes Theorem": [

                {
                    question: "Bayes' theorem is used to calculate:",
                    options: [
                        "Conditional probabilities",
                        "Network speed",
                        "Database size",
                        "Program length"
                    ],
                    answer: "Conditional probabilities"
                }

            ],

            "Independent Events": [

                {
                    question: "For independent events, occurrence of one event:",
                    options: [
                        "Does not affect the other",
                        "Always causes the other",
                        "Prevents the other",
                        "Makes probability zero"
                    ],
                    answer: "Does not affect the other"
                }

            ],

            "Random Variables": [

                {
                    question: "A random variable assigns values to:",
                    options: [
                        "Outcomes of a random experiment",
                        "Only computers",
                        "Only databases",
                        "Only networks"
                    ],
                    answer: "Outcomes of a random experiment"
                }

            ]
        }

    },


    /* =====================================================
       HARD LEVEL
       ===================================================== */

    Hard: {

        Java: {

            "Advanced OOP": [

                {
                    question: "Which concept allows one interface to have multiple implementations?",
                    options: [
                        "Polymorphism",
                        "Compilation",
                        "Encapsulation",
                        "Iteration"
                    ],
                    answer: "Polymorphism"
                }

            ],

            "Multithreading": [

                {
                    question: "Which method starts a Java thread?",
                    options: [
                        "run()",
                        "start()",
                        "begin()",
                        "execute()"
                    ],
                    answer: "start()"
                }

            ],

            "Collections": [

                {
                    question: "Which interface represents an ordered collection?",
                    options: [
                        "List",
                        "Map",
                        "Set",
                        "QueueMap"
                    ],
                    answer: "List"
                }

            ],

            "Advanced Exception Handling": [

                {
                    question: "Which keyword is used to explicitly throw an exception?",
                    options: [
                        "throws",
                        "throw",
                        "exception",
                        "catch"
                    ],
                    answer: "throw"
                }

            ]
        },


        "Computer Network": {

            "Advanced Routing": [

                {
                    question: "Which protocol is a link-state routing protocol?",
                    options: [
                        "OSPF",
                        "RIP",
                        "FTP",
                        "HTTP"
                    ],
                    answer: "OSPF"
                }

            ],

            "Network Security": [

                {
                    question: "Which technology is commonly used to encrypt web traffic?",
                    options: [
                        "TLS",
                        "FTP",
                        "ARP",
                        "DHCP"
                    ],
                    answer: "TLS"
                }

            ],

            "TCP/IP Internals": [

                {
                    question: "Which protocol provides addressing at the Internet layer?",
                    options: [
                        "IP",
                        "TCP",
                        "HTTP",
                        "FTP"
                    ],
                    answer: "IP"
                }

            ],

            "Network Architecture": [

                {
                    question: "Which architecture separates clients from server-side services?",
                    options: [
                        "Client-server",
                        "Peerless",
                        "Single-layer",
                        "Offline-only"
                    ],
                    answer: "Client-server"
                }

            ]
        },


        DBMS: {

            "Advanced SQL": [

                {
                    question: "Which SQL operation combines rows from related tables?",
                    options: [
                        "JOIN",
                        "DELETE",
                        "DROP",
                        "TRUNCATE"
                    ],
                    answer: "JOIN"
                }

            ],

            "Concurrency Control": [

                {
                    question: "Concurrency control is used to manage:",
                    options: [
                        "Simultaneous transactions",
                        "Only backups",
                        "Only users",
                        "Only tables"
                    ],
                    answer: "Simultaneous transactions"
                }

            ],

            "Database Recovery": [

                {
                    question: "Database recovery is mainly used after:",
                    options: [
                        "System failure",
                        "Normal query execution",
                        "Table creation",
                        "Data viewing"
                    ],
                    answer: "System failure"
                }

            ],

            "Indexing": [

                {
                    question: "Database indexing is mainly used to improve:",
                    options: [
                        "Data retrieval speed",
                        "Screen brightness",
                        "Network bandwidth",
                        "Keyboard speed"
                    ],
                    answer: "Data retrieval speed"
                }

            ]
        },


        "Design Thinking": {

            "Advanced User Research": [

                {
                    question: "Which approach provides direct qualitative insight into users?",
                    options: [
                        "User interviews",
                        "Source code compilation",
                        "Database indexing",
                        "Network routing"
                    ],
                    answer: "User interviews"
                }

            ],

            "Complex Problem Solving": [

                {
                    question: "Design Thinking approaches complex problems by focusing on:",
                    options: [
                        "Users and iterative solutions",
                        "Only final answers",
                        "Only technology",
                        "Avoiding feedback"
                    ],
                    answer: "Users and iterative solutions"
                }

            ],

            "Advanced Prototyping": [

                {
                    question: "High-fidelity prototypes are generally:",
                    options: [
                        "More detailed and realistic",
                        "Only written notes",
                        "Always paper sketches",
                        "Without user interaction"
                    ],
                    answer: "More detailed and realistic"
                }

            ],

            "Design Evaluation": [

                {
                    question: "Design evaluation is performed to determine whether a solution:",
                    options: [
                        "Meets user needs",
                        "Has more code",
                        "Uses more hardware",
                        "Has more pages"
                    ],
                    answer: "Meets user needs"
                }

            ]
        },


        Probability: {

            "Advanced Probability": [

                {
                    question: "The total probability of all mutually exclusive outcomes in a complete sample space is:",
                    options: [
                        "0",
                        "0.5",
                        "1",
                        "2"
                    ],
                    answer: "1"
                }

            ],

            "Probability Distributions": [

                {
                    question: "A probability distribution describes probabilities associated with:",
                    options: [
                        "Possible values of a random variable",
                        "Only network packets",
                        "Only database records",
                        "Only Java objects"
                    ],
                    answer: "Possible values of a random variable"
                }

            ],

            "Expected Value": [

                {
                    question: "Expected value represents the:",
                    options: [
                        "Long-run average outcome",
                        "Maximum possible value",
                        "Minimum possible value",
                        "Impossible outcome"
                    ],
                    answer: "Long-run average outcome"
                }

            ],

            "Advanced Problems": [

                {
                    question: "If P(A) = 0.5 and P(B) = 0.5 for independent events, P(A ∩ B) is:",
                    options: [
                        "0.25",
                        "0.5",
                        "1",
                        "0"
                    ],
                    answer: "0.25"
                }

            ]
        }

    }
};


/* =====================================================
   SELECTED VALUES
   ===================================================== */

let selectedDifficulty = "";
let selectedSubject = "";
let selectedTopic = "";


/* =====================================================
   SELECT DIFFICULTY
   ===================================================== */

function selectLevel(level) {

    selectedDifficulty = level;

    // Save selected level
    localStorage.setItem(
        "selectedDifficulty",
        selectedDifficulty
    );

    alert(
        level +
        " level selected!\n\n" +
        "Now choose your BCA subject."
    );

    const subjectSection =
        document.getElementById("subjects");

    if (subjectSection) {

        subjectSection.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =====================================================
   SELECT SUBJECT
   ===================================================== */

function selectSubject(subject) {

    if (selectedDifficulty === "") {

        alert(
            "Please select Basic, Medium or Hard first."
        );

        return;
    }

    selectedSubject = subject;

    localStorage.setItem(
        "selectedSubject",
        selectedSubject
    );

    showTopics();
}


/* =====================================================
   SHOW TOPICS
   ===================================================== */

function showTopics() {

    const topics =
        quizData[selectedDifficulty][selectedSubject];

    if (!topics) {

        alert(
            "Topics are not available for this subject yet."
        );

        return;
    }


    let topicMessage =
        "Difficulty: " +
        selectedDifficulty +
        "\n\n" +

        "Subject: " +
        selectedSubject +
        "\n\n" +

        "Available Topics:\n\n";


    const topicList =
        Object.keys(topics);


    topicList.forEach(function(topic, index) {

        topicMessage +=
            (index + 1) +
            ". " +
            topic +
            "\n";

    });


    topicMessage +=
        "\nEnter the topic number to continue.";


    const choice =
        prompt(topicMessage);


    if (choice === null) {

        return;

    }


    const topicNumber =
        parseInt(choice);


    if (
        isNaN(topicNumber) ||
        topicNumber < 1 ||
        topicNumber > topicList.length
    ) {

        alert(
            "Please select a valid topic number."
        );

        return;

    }


    selectedTopic =
        topicList[topicNumber - 1];


    localStorage.setItem(
        "selectedTopic",
        selectedTopic
    );


    startQuiz();

}


/* =====================================================
   START QUIZ
   ===================================================== */

function startQuiz() {

    const questions =
        quizData[
            selectedDifficulty
        ][
            selectedSubject
        ][
            selectedTopic
        ];


    if (!questions || questions.length === 0) {

        alert(
            "Questions are not available for this topic yet."
        );

        return;

    }


    // Save quiz information
    localStorage.setItem(
        "quizQuestions",
        JSON.stringify(questions)
    );


    /*
       Open quiz.html

       Make sure quiz.html exists
       in the same folder.
    */

    window.location.href =
        "quiz.html";

}


/* =====================================================
   RESET QUIZ
   ===================================================== */

function resetQuizSelection() {

    selectedDifficulty = "";
    selectedSubject = "";
    selectedTopic = "";

    localStorage.removeItem(
        "selectedDifficulty"
    );

    localStorage.removeItem(
        "selectedSubject"
    );

    localStorage.removeItem(
        "selectedTopic"
    );

    localStorage.removeItem(
        "quizQuestions"
    );

}


/* =====================================================
   PAGE LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "BCA Brain Battle loaded successfully!"
        );

    }
);
