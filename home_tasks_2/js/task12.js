const daysNumber = parseInt(prompt("Введіть кількість днів", "15"));
const weeksNumber = Math.floor(daysNumber / 7);
document.write(`У ${daysNumber} днях ${weeksNumber} повних тижнів`);
