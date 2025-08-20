const changeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const random = () => {
  return Math.floor(Math.random() * characters.length);
};

changeColor.addEventListener("click", () => {
  const hex = `#${characters[random()]}${characters[random()]}${characters[random()]}${characters[random()]
    }${characters[random()]}${characters[random()]}`;
  document.body.style.backgroundColor = hex;
  colorText.textContent = hex;
});
