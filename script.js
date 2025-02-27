document.addEventListener("DOMContentLoaded", function () {
    console.log("Futuristic AI CV loaded!");
});

function askAI() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let responseBox = document.getElementById("ai-response");

    let responses = {
        "hello": "Hello, human! I'm your AI assistant. 🤖",
        "skills": "Utkarsh specializes in AI, Python, TensorFlow, and more!",
        "experience": "Utkarsh has worked on AI, ML, and cybersecurity projects globally.",
        "projects": "His projects include NanoBody-Antigen AI, real-time news analytics, and cybersecurity models.",
        "default": "I'm still learning! Try asking about skills, experience, or projects."
    };

    let response = responses[userInput] || responses["default"];
    responseBox.innerHTML = `<span class="ai-text">${response}</span>`;
}
