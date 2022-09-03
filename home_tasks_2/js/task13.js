const dayOfWeek = parseInt(prompt("Введіть номер дня тижня (від 1 до 7)", "4"));
const shiftDays = parseInt(prompt("Введіть кількість днів додавання", "8"));
const finishDay = ((dayOfWeek + shiftDays - 1) % 7) + 1;
document.write(`Через ${shiftDays} днів буде ${finishDay} день тижня`);
