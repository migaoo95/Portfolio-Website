// Array with text to display
const text = [".js", ".php", ".css", ".scss", ".jsx", " .html", ".sql"];
// Varaibles
let counter = 0;
let i = 0;
let currentText = "";
let letter = "";
// Iffie
(function type() {
  if (counter === text.length) {
    counter = 0;
  }
  currentText = text[counter];
  letter = currentText.slice(0, ++i);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    counter++;
    i = 0;
  }
  setTimeout(type, 600);
})();
