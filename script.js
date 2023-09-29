const rulesBtn = document.querySelector("#rulesBtn");
const textHideRules = document.querySelector("#textHide")

//показываем/скрываем правила при нажатии на кнопку
rulesBtn.addEventListener('click', () => {
    textHideRules.classList.toggle("textHide");
})