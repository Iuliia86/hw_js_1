const monthNumber = parseInt(prompt("Введіть кількість місяців", "24"));
const yearsNumber = Math.floor(monthNumber / 12);
const restOfMonths = monthNumber % 12;
document.write(
  `${monthNumber} місяців це: ${yearsNumber} р. ${restOfMonths} міс.`
);
