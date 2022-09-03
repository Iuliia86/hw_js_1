const salaryAmount = parseFloat(
  prompt("Введіть Вашу заробітну плату, грн.", "1500")
);
const subsistenceMinimum = parseFloat(
  prompt("Введіть розмір прожиткового мінімуму, грн.", "2600")
);
const socialAssistance = subsistenceMinimum - salaryAmount;
document.write(`Розмір соціальної допомоги становить ${socialAssistance} грн.`);
