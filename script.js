const answerInputs = document.querySelectorAll("#answer-options input");

// ✅ Function to navigate from index.html to sections.html
function navigateToSections(documentId) {
    window.location.href = `./sections.html?document=${documentId}`;
}

// ✅ Function to get document & section ID from URL
function getDocumentId() {
    return new URLSearchParams(window.location.search).get("document");
}
function getSectionId() {
    return new URLSearchParams(window.location.search).get("section");
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
    window.location.href = `./questions.html?document=${documentId}&section=${sectionId}`;
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

// ✅ Load and display questions
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

function loadQuestions() {
    if (!window.location.href.includes("questions.html")) return;

    const documentId = getDocumentId();
    const sectionId = getSectionId();

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

// ✅ Display the current question
function displayQuestion() {
    let questionData = questions[currentQuestionIndex];

    document.getElementById("question-text").innerText = questionData.question;
    document.getElementById("answer-options").innerHTML = questionData.options.map((option, index) =>
        `<label><input type="checkbox" value="${index}"> ${option}</label><br>`
    ).join("");

    let submitBtn = document.getElementById("submit-btn");
    submitBtn.innerText = "✅ Submit Answer";
    submitBtn.disabled = true;
    submitBtn.onclick = validateAnswer;

    document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;

    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.remove();

    document.querySelectorAll("#answer-options input").forEach(input => {
        input.addEventListener("change", () => submitBtn.disabled = false);
    });
}

// ✅ Validate the answer
function validateAnswer() {
    const selectedAnswers = [...document.querySelectorAll("#answer-options input:checked")].map(input => parseInt(input.value));
    const correctAnswers = questions[currentQuestionIndex].correctAnswers;

    let isCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer));

    document.querySelectorAll("#answer-options input").forEach(input => {
        input.parentElement.classList.remove("correct", "incorrect");
        if (correctAnswers.includes(parseInt(input.value))) {
            input.parentElement.classList.add("correct");
        } else if (selectedAnswers.includes(parseInt(input.value))) {
            input.parentElement.classList.add("incorrect");
        }
    });

    let submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerText = "⏭️ Next Question";
    submitBtn.onclick = nextQuestion;

    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.remove();
}

// ✅ Navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showScoreSummary();
    }
}

// ✅ Navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// ✅ Shuffle an array (Randomize questions)
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

// ✅ Show score summary
function showScoreSummary() {
    document.getElementById("question-title").innerText = "Section Completed!";
    document.getElementById("question-text").innerText = `Your Score: ${score} / ${questions.length}`;

    document.getElementById("answer-options").innerHTML = "";
    document.getElementById("feedback-message").innerText = "";

    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("prev-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "none";

    document.querySelectorAll(".back-to-sections-btn").forEach(btn => btn.remove());

    const backToSectionsBtn = document.createElement("button");
    backToSectionsBtn.innerText = "🔙 Back to Sections";
    backToSectionsBtn.id = "back-to-sections-btn"; 
    backToSectionsBtn.classList.add("back-to-sections-btn");
    backToSectionsBtn.onclick = goBackToSections;

    document.querySelector(".container").appendChild(backToSectionsBtn);
}
