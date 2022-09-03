const startWeight = parseFloat(
  prompt("Введіть початкову вагу порося, кг", "7")
);
const weightForDay = parseFloat(
  prompt("Введіть вагу,яку набирає порося за день, г", "545")
);
const totalWeightOfPig = parseInt(
  prompt("Введіть кінцеву вагу порося, кг", "115")
);
const daysNumber = Math.ceil(
  ((totalWeightOfPig - startWeight) * 1000) / weightForDay
);
document.write(
  `Порося виросте до ваги ${totalWeightOfPig} кг за ${daysNumber} днів.`
);
