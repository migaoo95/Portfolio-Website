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
// const slider = document.getElementById("slider");
// const sliders = document.querySelectorAll("#slider");
// const images = ["img1", "img2", "img3"];
// let index = 0;
// document.querySelectorAll("#arrow_icon_left").forEach((arrow) => {
//   arrow.addEventListener("click", (e) => {
//     imageChange(e);
//   });
// });

// document.querySelectorAll("#arrow_icon_right").forEach((arrow) => {
//   arrow.addEventListener("click", (e) => {
//     imageChange(e);
//   });
// });
// function imageChange(e) {
//   if (index < 2) {
//     index++;
//   } else {
//     index = 0;
//   }
//   if (e.target.parentElement.classList.contains("arrow1")) {
//     sliders[0].src = `assets/CryptoStats/${images[index]}.png`;
//     console.log("Arrow1");
//   } else if (e.target.parentElement.classList.contains("arrow2")) {
//     sliders[1].src = `assets/WeatherApp/${images[index]}.png`;
//     console.log("Arrow2");
//   } else {
//     sliders[2].src = `assets/Portfolio/${images[index]}.png`;
//     console.log("Arrow3");
//   }
// }
// Page Scroller ------------------------ { Scroller }

let section;
document.querySelector(".scroll_box").addEventListener("click", () => {
  if (window.pageYOffset >= 0 && window.pageYOffset < 699) {
    document.getElementById("s2").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".scroll_box").style.top = "920px";
    document.querySelector(".scroll_box").style.color = "black";
  } else if (window.pageYOffset >= 700 && window.pageYOffset < 850) {
    document.getElementById("s3").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".scroll_box").style.top = "1720px";
    document.querySelector(".scroll_box").style.color = "white";
  } else if (window.pageYOffset >= 1050 && window.pageYOffset < 1700) {
    document.getElementById("s4").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".scroll_box").style.top = "1720px";
    document.querySelector(".scroll_box").style.color = "white";
  } else if (window.pageYOffset > 1700) {
    document.getElementById("s1").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".scroll_box").style.top = "0px";
    document.querySelector(".scroll_box").style.color = "white";
  }
});
document.addEventListener("scroll", () => {
  if (window.pageYOffset >= 0 && window.pageYOffset < 699) {
    document.querySelector(".scroll_box").style.top = "150px";
    document.querySelector(".scroll_box").style.color = "white";
  } else if (window.pageYOffset >= 700 && window.pageYOffset < 1000) {
    document.querySelector(".scroll_box").style.top = "920px";
    document.querySelector(".scroll_box").style.color = "black";
  } else if (window.pageYOffset >= 1050 && window.pageYOffset < 1700) {
    document.querySelector(".scroll_box").style.top = "1750px";
    document.querySelector(".scroll_box").style.color = "white";
  } else if (window.pageYOffset > 1700) {
    document.querySelector(".scroll_box").style.top = "3000px";
    document.querySelector(".scroll_box").style.color = "white";
    document.querySelector(".scroller").textContent = "Back to Top";
    document.querySelector(".arrB").style.display = "none";
  }
  if (window.pageYOffset < 1700) {
    document.querySelector(".scroller").textContent = "Scroll";
    document.querySelector(".arrB").style.display = "block";
  }
});
// Insted of having to change top pixel value have different scroller for each section
