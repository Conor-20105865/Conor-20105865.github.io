console.log("JavaScript is running");

const texts = ["Software Developerㅤ", "Web Designerㅤ", "Tech Enthusiastㅤ"];
let index = 0;

let typingIndex = 0;
let currentText = "";
let isDeleting = false;
let pauseBetweenTexts = false; // Flag for pause

function type() {
  const span = document.querySelector(".typing-text span");

  // Check if paused
  if (pauseBetweenTexts) {
    setTimeout(() => {
      pauseBetweenTexts = false; // Reset pause
      isDeleting = true; // Start delete after pause
      type(); //starts deleting
    }, 2000); // 2000 milliseconds
    return; // Exit func
  }

  if (isDeleting) {
    currentText = texts[index].substring(0, typingIndex--);
    span.textContent = currentText;

    // If the text has been fully deleted
    if (typingIndex < 0) {
      isDeleting = false; // Switch to typing mode
      index = (index + 1) % texts.length; // next text
      // Set pause only if it's going back to the first text
      if (index === 0) {
        pauseBetweenTexts = true; // pause for 2 seconds after full loop
      }
    }
  } else {
    currentText = texts[index].substring(0, typingIndex++);
    span.textContent = currentText;

    // If the entire text has been typed
    if (typingIndex === texts[index].length) {
      pauseBetweenTexts = true; // Pause for 2 seconds after the full text typed
    }
  }

  setTimeout(type, isDeleting ? 140 : 200); //typing speed
}

// Initial call
type();