const candiesWeight = parseFloat(prompt("Введіть вагу цукерок, кг", "4.5"));
const childrenNumber = parseInt(prompt("Введіть кількість дітей", "11"));
const candiesWeightForChild = (candiesWeight * 1000) / childrenNumber;
document.write(
  `Кожній дитині дістанеться по ${candiesWeightForChild.toFixed(1)} г цукерок.`
);
