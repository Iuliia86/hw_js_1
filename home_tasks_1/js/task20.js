const monthNumber = parseInt(
  prompt("Введіть кількість місяців проведення занять у гуртку", "7")
);
const hoursOnWeek = parseInt(
  prompt("Введіть кількість годин проведення занять на тиждень", "4")
);
const totalHours = monthNumber * hoursOnWeek * 4;
document.write(
  `Загальна кількість занять у гуртку складає ${totalHours} годин.`
);
