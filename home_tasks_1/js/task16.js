const timeWithSpeed40km = parseInt(
  prompt("Введіть кількість годин, яку турист їхав зі швидкістю 40км/ч", "2")
);
const timeWithSpeed25km = parseInt(
  prompt("Введіть кількість годин, яку турист їхав зі швидкістю 25км/ч", "3")
);
const totalWay = timeWithSpeed40km * 40 + timeWithSpeed25km * 25;
document.write(
  `Загальний пройдений шлях туриста за ${
    timeWithSpeed40km + timeWithSpeed25km
  } годин становить ${totalWay} км.`
);
