// ✅ Function to navigate from index.html to sections.html
function navigateToSections(documentId) {
    window.location.href = `./sections.html?document=${documentId}`;
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
    window.location.href = `./questions.html?document=${documentId}&section=${sectionId}`;
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
let score = 0; // Tracks the correct answers
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
        document.getElementById("question-title").innerText = "No questions found!";
        return;
    }

    currentQuestionIndex = 0;
    questions = shuffleArray(questions);
    displayQuestion();
}

// ✅ Function to display the current question
function displayQuestion() {
    if (!questions || questions.length === 0) {
        console.error("No questions found!");
        return;
    }

    if (currentQuestionIndex >= questions.length) {
        showScoreSummary();
        return;
    }

    let questionData = questions[currentQuestionIndex];

    document.getElementById("question-text").innerText = questionData.question;
    document.getElementById("answer-options").innerHTML = questionData.options.map((option, index) =>
        `<label><input type="checkbox" value="${index}"> ${option}</label><br>`
    ).join("");

    document.getElementById("feedback-message").innerText = "";

    // ✅ Ensure "Submit Answer" is visible and enabled
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.innerText = "✅ Submit Answer";
    submitBtn.disabled = true;
    submitBtn.onclick = validateAnswer;

    // ✅ Ensure "Next Question" is disabled initially
    let nextBtn = document.getElementById("next-btn");
    nextBtn.disabled = true;

    // ✅ Ensure "Previous Question" button is enabled correctly
    document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;

    // ✅ Enable Submit Button Only When an Answer is Selected
    document.querySelectorAll("#answer-options input").forEach(input => {
        input.addEventListener("change", () => {
            submitBtn.disabled = false;
        });
    });
}

// ✅ Function to validate the answer
function validateAnswer() {
    const selectedAnswers = [...document.querySelectorAll("#answer-options input:checked")].map(input => parseInt(input.value));
    const correctAnswers = questions[currentQuestionIndex].correctAnswers;

    let isCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer));

    // ✅ Highlight Correct and Incorrect Answers
    document.querySelectorAll("#answer-options input").forEach(input => {
        input.parentElement.classList.remove("correct", "incorrect");
        if (correctAnswers.includes(parseInt(input.value))) {
            input.parentElement.classList.add("correct");
        } else if (selectedAnswers.includes(parseInt(input.value))) {
            input.parentElement.classList.add("incorrect");
        }
    });

    // ✅ Disable Submit Button and Enable "Next Question"
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;

    let nextBtn = document.getElementById("next-btn");
    nextBtn.disabled = false;
}

// ✅ Function to navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showScoreSummary();
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

// ✅ Function to show score summary at the end
function showScoreSummary() {
    document.getElementById("question-title").innerText = "Section Completed!";
    document.getElementById("question-text").innerText = `Your Score: ${score} / ${questions.length}`;

    document.getElementById("answer-options").innerHTML = ""; // Clear answers
    document.getElementById("feedback-message").innerText = ""; // Clear feedback

    document.getElementById("submit-btn").style.display = "none"; // Hide Submit button
    document.getElementById("prev-btn").style.display = "none"; // Hide Previous button
    document.getElementById("next-btn").style.display = "none"; // Hide Next button

    // ✅ Create "Back to Sections" button
    const backToSectionsBtn = document.createElement("button");
    backToSectionsBtn.innerText = "🔙 Back to Sections";
    backToSectionsBtn.id = "back-to-sections-btn";
    backToSectionsBtn.onclick = goBackToSections;

    document.querySelector(".container").appendChild(backToSectionsBtn);
}

// ✅ Load functions based on the page
window.onload = function() {
    if (window.location.href.includes("sections.html")) {
        loadSections();
    } else if (window.location.href.includes("questions.html")) {
        loadQuestions();
    }
};
