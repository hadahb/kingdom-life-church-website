const text = "A place of faith, growth, and purpose";
const typingElement = document.getElementById("typing-text");
let index = 0;
let forward = true;
const typingSpeed = 100; // ms per character
const pauseTime = 1000;  // 1 second pause

function typeErase() {
    if (forward) {
        typingElement.textContent = text.slice(0, index + 1);
        index++;
        if (index === text.length) {
            forward = false;
            setTimeout(typeErase, pauseTime); // pause 1s at full text
            return;
        }
    } else {
        typingElement.textContent = text.slice(0, index - 1);
        index--;
        if (index === 0) {
            forward = true;
        }
    }
    setTimeout(typeErase, typingSpeed);
}

// Start typing loop
typeErase();
