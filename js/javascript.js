console.log("JavaScript is running");

     const texts = ["Software Developerㅤ", "Web Designerㅤ", "Tech Enthusiastㅤ"];
     let index = 0;
     let typingIndex = 0;
     let currentText = "";
     let isDeleting = false;

     function type() {
         const span = document.querySelector(".typing-text span");
         if (!span) return;

         if (isDeleting) {
             currentText = currentText.slice(0, -1);
         } else {
             currentText = texts[index].slice(0, typingIndex + 1);
         }

         span.textContent = currentText;

         // Move to next word
         if (!isDeleting && currentText === texts[index]) {
             isDeleting = true;
             setTimeout(type, 2000); // Delay before deleting
             return;
         }

         // Finish deleting
         if (isDeleting && currentText === "") {
             isDeleting = false;
             typingIndex = 0;
             index = (index + 1) % texts.length;
         }

         typingIndex = isDeleting ? typingIndex - 1 : typingIndex + 1;
         setTimeout(type, isDeleting ? 100 : 150);
     }

     document.addEventListener("DOMContentLoaded", type);