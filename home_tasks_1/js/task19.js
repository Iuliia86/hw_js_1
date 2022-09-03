const gasСonsumption = parseInt(prompt("Введіть об'єм споживання газу", "100"));
const gasPrice = parseFloat(prompt("Введіть ціну за куб газу", "7.02"));
const electricityСonsumption = parseInt(
  prompt("Введіть об'єм споживання електроенергії", "120")
);
const electricityPrice = parseFloat(
  prompt("Введіть ціну за кіловат електроенергії", "1.05")
);
const paymentIncrease =
  0.23 * gasPrice * gasСonsumption +
  0.15 * electricityPrice * electricityСonsumption;
document.write(
  `При збільшенні тарифів на газ на 23% і на електроенергію на 15% абонентна плата при вказаних об’ємах споживання зросте на ${paymentIncrease.toFixed(
    2
  )} грн.`
);
