document.addEventListener("DOMContentLoaded", function () {
    console.log("Futuristic AI CV loaded!");
});

function askAI() {
    let userInput = document.getElementById("user-input").value;
    let responseBox = document.getElementById("ai-response");

    let responses = {
        "hello": "Hello, human! 🤖",
        "skills": "I specialize in AI, Python, TensorFlow, and more!",
        "experience": "Utkarsh has worked on AI, ML, and cybersecurity projects globally.",
        "default": "I'm still learning! Try asking about AI, experience, or skills."
    };

    let response = responses[userInput.toLowerCase()] || responses["default"];
    responseBox.innerHTML = response;
}
