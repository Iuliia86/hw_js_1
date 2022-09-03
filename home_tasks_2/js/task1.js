const screenWidth = parseInt(prompt("Введіть ширину екрану", "980px"));
const elementsNumber = parseInt(prompt("Введіть кількість елементів", "3"));
const elementsWidth = Math.floor(screenWidth / elementsNumber);
document.write(
  `Ширина елементів, які повинні бути відображені у рядку, становить ${elementsWidth} px`
);
