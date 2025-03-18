function navigateToSections(documentId) {
    window.location.href = `sections.html?document=${documentId}`;
}
// Function to get document ID from URL
function getDocumentId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("document");
}

// Function to display sections
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

// Function to start a section (Navigate to questions page)
function startSection(documentId, sectionId) {
    window.location.href = `questions.html?document=${documentId}&section=${sectionId}`;
}

// Function to go back to homepage
function goBackToStart() {
    window.location.href = "index.html";
}

// Load sections when the page loads
window.onload = loadSections;
// Sample Questions Data (Replace with actual questions)
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

// Get document and section ID from URL
function getQuestionParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        documentId: params.get("document"),
        sectionId: params.get("section")
    };
}

let currentQuestionIndex = 0;
let userSelections = [];
let questions = [];
const totalQuestions = 20;

// Load Questions and Randomize Order
function loadQuestions() {
    const { documentId, sectionId } = getQuestionParams();
    if (!documentId || !sectionId) {
        document.getElementById("question-title").innerText = "Error: No section selected!";
        return;
    }

    questions = questionData[documentId]?.[sectionId] || [];
    questions = shuffleArray(questions); // Randomize order
    displayQuestion();
}

// Display Current Question
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

// Validate User Answer
function validateAnswer() {
    const selectedAnswers = [...document.querySelectorAll("#answer-options input:checked")].map(input => parseInt(input.value));
    const correctAnswers = questions[currentQuestionIndex].correctAnswers;

    let isCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer));

    document.getElementById("feedback-message").innerText = isCorrect ? "✅ Correct!" : "❌ Incorrect!";

    // Highlight correct answers
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

// Navigate to Next Question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Navigate to Previous Question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Shuffle Array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Go Back to Sections
function goBackToSections() {
    const { documentId } = getQuestionParams();
    window.location.href = `sections.html?document=${documentId}`;
}

// Load questions on page load
window.onload = loadQuestions;
