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
    "1": {  // Document 1
        "1": [  // Section 1
            {
                question: "Which of the following would not be considered to be a secondary lymphoid organ?",
                options: ["Lymph nodes", "Spleen", "Thymus", "Tonsils"],
                correctAnswers: [2]
            },
            {
                question: "Antigen presenting cells (APCs) include macrophages and dendritic cells, which are found in lymphoid tissues and the __________.",
                options: ["Heart", "Kidney", "Skin"],
                correctAnswers: [2]
            },
            {
                question: "Which types of immunoglobulins do not exist?",
                options: ["IgA", "IgB", "IgC", "IgD"],
                correctAnswers: [1, 2]
            },
            {
                question: "Decreased serum levels of the C3 and C4 fractions of the complement pathway may be due to:",
                options: [
                    "Activation of the classical complement pathway", 
                    "Activation of the alternative complement pathway", 
                    "Activation of the mannose complement pathway", 
                    "Decreased synthesis"
                ],
                correctAnswers: [0, 2, 3]
            },
            {
                question: "Which statements are CORRECT?",
                options: [
                    "IL-2 is synthesized by T lymphocytes", 
                    "IL-2 is synthesized by B lymphocytes", 
                    "IL-2 stimulates T and B cell proliferation and differentiation, and NK cell activity", 
                    "IL-2 has antiviral activity"
                ],
                correctAnswers: [0]
            },
            {
                question: "The expression of HLA molecules is induced by:",
                options: ["IL-5", "IL-2", "IFN-γ"],
                correctAnswers: [2]
            },
            {
                question: "T lymphocytes undergo the process of negative selection in which of the following lymphoid organs?",
                options: ["Bone marrow", "Thymus", "Lymph nodes", "Spleen"],
                correctAnswers: [1]
            },
            {
                question: "Which of the following types of antigen presenting cells (APCs) is specialized for degradation and presentation of particular antigens to T cells?",
                options: ["Mast cells", "Dendritic cells", "NK cells", "Neutrophils"],
                correctAnswers: [1]
            },
            {
                question: "Match the immunoglobulin with the functional description: Can transfer across the placental (maternal protection).",
                options: ["IgE", "IgM", "IgG & IgM", "IgG & IgA", "IgG"],
                correctAnswers: [4]
            },
            {
                question: "In the case of a complete genetic deficiency of C2:",
                options: [
                    "The haemolytic activity of total complement is reduced",
                    "The fixation of C1q to the antigen-antibody complexes is significantly impaired",
                    "The classical C3-convertase is normal",
                    "The main clinical manifestation is angioneurotic oedema",
                    "There may be a lupus syndrome"
                ],
                correctAnswers: [0, 4]
            },
            {
                question: "Which statements are CORRECT?",
                options: [
                    "TNF-a is synthesized by macrophages",
                    "TNF-a stimulates the myelopoiesis",
                    "TNF-a induces cytotoxicity, tumour necrosis, vascular thrombosis"
                ],
                correctAnswers: [0, 2]
            },
            {
                question: "The T cell antigen recognition receptor makes contact with:",
                options: [
                    "The peptide bound by the HLA molecule",
                    "Areas from the antigen-binding pocket of the HLA molecule",
                    "b2 microglobulin"
                ],
                correctAnswers: [0]
            },
            {
                question: "Major innate mechanism that mediates destruction by lysis of foreign substances in the body:",
                options: [
                    "Regulatory T cells",
                    "Helper T cells",
                    "Complement",
                    "Interferon",
                    "Macrophage and other APCs"
                ],
                correctAnswers: [2, 4]
            },
            {
                question: "Which cell is able to provide two signals for activation of T cells?",
                options: [
                    "Regulatory T cells",
                    "Helper T cells",
                    "Complement",
                    "Interferon",
                    "Dendritic cells"
                ],
                correctAnswers: [4]
            },
            {
                question: "The Heidelberger curve represents:",
                options: [
                    "The amount of antibodies",
                    "The quality of antigens",
                    "Basic patterns of binding of antigens and antibodies"
                ],
                correctAnswers: [2]
            },
            {
                question: "The diagnostic criteria for primary antiphospholipid syndrome include:",
                options: [
                    "Vascular thrombosis, complicated pregnancy, presence of LA (lupus anticoagulant), moderate or high titre of aCL and ab2GPI in plasma",
                    "One or more miscarriages of a morphologically normal embryo before g.w. 10",
                    "Three or more unexplained consecutive spontaneous abortions before g.w. 10",
                    "Unexplained transient loss of vision – unilateral or bilateral",
                    "Presence of moderate or high titre of aCL from IgG or IgM type",
                    "Presence of moderate or high titre of ab2GPI from IgG or IgM type"
                ],
                correctAnswers: [0, 2, 4, 5]
            },
            {
                question: "The HLA compatibility between donor and recipient is determined prospectively and is selection criteria in:",
                options: [
                    "Transplantation or haematopoietic stem cells (HSCs)",
                    "Liver transplantation",
                    "Heart transplantation",
                    "Kidney transplantation"
                ],
                correctAnswers: [0, 1, 2, 3]
            },
            {
                question: "Which of the following signs indicate hereditary deficiency of antibodies?",
                options: [
                    "Without infections until 7-9 months",
                    "Severe bacterial infections (e.g. Streptococcus pneumoniae)",
                    "Recurrent infections with opportunistic microorganisms (e.g. Pneumocystis jiroveci)",
                    "Poor wound healing"
                ],
                correctAnswers: [1, 2]
            },
            {
                question: "T-B+NK+ phenotype in combined immunodeficiency is observed when there is/are:",
                options: [
                    "Defect in IL-7R (IL-7 receptor)",
                    "Defects in RAG1 and RAG2 genes",
                    "Defects in ZAP70",
                    "Omenn syndrome"
                ],
                correctAnswers: [0]
            },
            {
                question: "Which statement(s) about primary immunodeficiencies is/are true?",
                options: [
                    "Mutations that cause them arise \"de novo\" at fertilisation",
                    "They are inherited predominantly through the X-chromosome",
                    "They have autosomal dominant, autosomal recessive inheritance or through X-chromosome",
                    "These are polygenic diseases influenced by environmental factors"
                ],
                correctAnswers: [2]
            }
        ], // Close Section "1"
        
        "2": [ // Open Section "2"
            {
                question: "First question in Section 2?",
                options: ["Answer 1", "Answer 2", "Answer 3"],
                correctAnswers: [1]
            }
        ] // Close Section "2"
    } // Close Document "1"
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

// ✅ Function to validate the answer and update the score
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

    // ✅ Update the Score if the Answer is Correct
    if (isCorrect) {
        score++; // ✅ This line was missing!
    }

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
