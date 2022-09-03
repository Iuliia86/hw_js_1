const monthRent = parseInt(
  prompt("Введіть арендну плату за квартиру за місяць, грн", "2000")
);
const moneyAmount = parseInt(
  prompt("Введіть загальну суму грошей, грн", "75000")
);
const countFullMonthRent = Math.floor(moneyAmount / monthRent);
const countFullYearsRent = Math.floor(countFullMonthRent / 12);
document.write(
  `Якщо арендна плата за квартиру за місяць становить ${monthRent} грн., а загальна сума грошей складає ${moneyAmount} грн, то цих грошей вистачить на оплату ${countFullMonthRent} повних місяців або ${countFullYearsRent} повних років оренди.
  `
);
