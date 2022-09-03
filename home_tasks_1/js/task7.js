const onePageReadingTime = parseFloat(
  prompt("Введіть кількість хвилин, за яку прочитується одна сторінка", "2")
);
const pagesNumber = parseInt(
  prompt("Введіть кількість сторінок в книжці", "457")
);
const readingHours = Math.floor((pagesNumber * onePageReadingTime) / 60);
const readingMinutes = (pagesNumber * onePageReadingTime) % 60;
document.write(
  `Книжка буде прочитана за ${readingHours} год. ${readingMinutes} хв.`
);
