const changeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

const colors = ["#F1F5F8", "red", "RGBA(133,122,200)", "#F15025", "green"];

const randomColor = () => {
  return Math.floor(Math.random() * colors.length);
};

changeColor.addEventListener("click", () => {
  const currColor = colors[randomColor()];
  document.body.style.backgroundColor = currColor;
  colorText.textContent = currColor;
});
