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
