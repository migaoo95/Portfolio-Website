// SPLASH TEXT ANIMATION DISPLAY ---------------------------
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
// SLIDE SHOW ---------------------------
const slider = document.getElementById("slider");
const images = ["img1", "img2", "img3"];
let index = 0;
document.getElementById("arrow_icon_left").addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = 2;
  }
  slider.src = `assets/CryptoStats/${images[index]}.png`;
  console.log(index);
  // index--;
});
document.getElementById("arrow_icon_right").addEventListener("click", () => {
  // slider.src = `assets/CryptoStats/${images[index]}.png`;
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }
  slider.src = `assets/CryptoStats/${images[index]}.png`;
  console.log(index);
  // index--;
});
// document.getElementById("arrow_icon_right").addEventListener("click", () => {
//   slider.src = `assets/CryptoStats/${images[index]}.png`;
//   if (index === 2) {
//     index = 0;
//   }
//   index++;

//   console.log(index);
// });
