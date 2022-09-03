const monthOfYear = parseInt(prompt("Введіть номер місяця (від 1 до 12)", "7"));
const shiftMonths = parseInt(
  prompt("Введіть кількість місяців додавання", "18")
);
const finishMonth = ((monthOfYear + shiftMonths - 1) % 12) + 1;
document.write(`Через ${shiftMonths} місяців буде ${finishMonth} місяць року`);
