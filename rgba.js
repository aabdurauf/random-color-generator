const changeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

const random = () => {
    return Math.floor(Math.random() * 255);
};

const randomAlpha = () => {
    const numInString = Math.random().toString().slice(0, 3)
    return Number(numInString)
}

changeColor.addEventListener("click", () => {
    const rgb = `RGBA(${random()}, ${random()}, ${random()}, ${randomAlpha()})`
    document.body.style.backgroundColor = rgb;
    colorText.textContent = rgb;
});
