// ✅ Function to navigate from index.html to sections.html
function navigateToSections(documentId) {
    window.location.href = `sections.html?document=${documentId}`;
}

// ✅ Function to get document ID from URL
function getDocumentId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("document");
}

// ✅ Function to get section ID from URL
function getSectionId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("section");
}

// ✅ Function to display sections in sections.html
function loadSections() {
    const documentId = getDocumentId();
    const sectionsList = document.getElementById("sections-list");
    const sectionTitle = document.getElementById("section-title");

    if (!documentId) {
        sectionTitle.innerText = "Error: No document selected!";
        return;
    }

    const totalSections = documentId === "1" ? 7 : 9;
    sectionTitle.innerText = `Sections for Document ${documentId}`;

    for (let i = 1; i <= totalSections; i++) {
        const sectionButton = document.createElement("button");
        sectionButton.innerText = `📖 Section ${i}`;
        sectionButton.onclick = () => startSection(documentId, i);
        sectionsList.appendChild(sectionButton);
    }
}

// ✅ Function to start a section (Navigate to questions.html)
function startSection(documentId, sectionId) {
    window.location.href = `questions.html?document=${documentId}&section=${sectionId}`;
}

// ✅ Function to go back to homepage
function goBackToStart() {
    window.location.href = "index.html";
}

// ✅ Function to go back to sections
function goBackToSections() {
    const documentId = getDocumentId();
    window.location.href = `sections.html?document=${documentId}`;
}

// ✅ Sample Questions Data (Replace with actual questions)
const questionData = {
    "1": {
        "1": [
            { 
                question: "Which are types of T cells?", 
                options: ["CD4+ Helper T cells", "CD8+ Cytotoxic T cells", "B cells", "Regulatory T cells"], 
                correctAnswers: [0, 1, 3] 
            },
            { 
                question: "What is the function of antibodies?", 
                options: ["Neutralization", "Phagocytosis", "Complement activation", "Apoptosis"], 
                correctAnswers: [0, 2] 
            }
        ],
        "2": [
            { 
                question: "What is the main role of the thymus?", 
                options: ["Mature T cells", "Store red blood cells", "Produce antibodies", "Digest pathogens"], 
                correctAnswers: [0] 
            }
        ]
    }
};

// ✅ Function to load and display questions
let currentQuestionIndex = 0;
let questions = [];
const totalQuestions = 20;

function loadQuestions() {
    // ✅ Fix: Ensure script only runs on questions.html
    if (!window.location.href.includes("questions.html")) {
        return;
    }

    const documentId = getDocumentId();
    const sectionId = getSectionId();

    if (!document.getElementById("question-title") || !document.getElementById("progress-counter")) {
        console.error("Error: Missing elements in questions.html!");
        return;
    }

    if (!documentId || !sectionId) {
        document.getElementById("question-title").innerText = "Error: No section selected!";
        return;
    }

    questions = questionData[documentId]?.[sectionId] || [];
    if (questions.length === 0) {
        document.getElementById("question-title").innerText = "No questions found for this section!";
        return;
    }

    currentQuestionIndex = 0;
    questions = shuffleArray(questions);
    displayQuestion();
}

// ✅ Function to display the current question
function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];

    document.getElementById("question-text").innerText = questionObj.question;
    document.getElementById("progress-counter").innerText = `${currentQuestionIndex + 1}/${totalQuestions}`;

    const optionsContainer = document.getElementById("answer-options");
    optionsContainer.innerHTML = "";

    questionObj.options.forEach((option, index) => {
        const optionElem = document.createElement("label");
        optionElem.innerHTML = `<input type="checkbox" value="${index}"> ${option}`;
        optionsContainer.appendChild(optionElem);
        optionsContainer.appendChild(document.createElement("br"));
    });

    document.getElementById("submit-btn").disabled = false;
    document.getElementById("next-btn").disabled = true;
    document.getElementById("feedback-message").innerText = "";
}

// ✅ Function to validate the answer
function validateAnswer() {
    const selectedAnswers = [...document.querySelectorAll("#answer-options input:checked")].map(input => parseInt(input.value));
    const correctAnswers = questions[currentQuestionIndex].correctAnswers;

    let isCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer));

    document.getElementById("feedback-message").innerText = isCorrect ? "✅ Correct!" : "❌ Incorrect!";

    document.querySelectorAll("#answer-options input").forEach(input => {
        if (correctAnswers.includes(parseInt(input.value))) {
            input.parentElement.style.color = "green";
        } else if (selectedAnswers.includes(parseInt(input.value))) {
            input.parentElement.style.color = "red";
        }
    });

    document.getElementById("submit-btn").disabled = true;
    document.getElementById("next-btn").disabled = false;
}

// ✅ Function to navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// ✅ Function to navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// ✅ Function to shuffle an array (Randomize questions)
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ✅ Load functions based on the page
window.onload = function() {
    if (window.location.href.includes("sections.html")) {
        loadSections();
    } else if (window.location.href.includes("questions.html")) {
        loadQuestions();
    }
};
