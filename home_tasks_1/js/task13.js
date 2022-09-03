const cakesForMaria = parseInt(
  prompt("Введіть кількість тістечок, які з'їдає Марічка, шт", "2")
);
const cakesNumberForAll =
  cakesForMaria + cakesForMaria * 2 + cakesForMaria * 2 - 1;
document.write(`Марічка має замовити ${cakesNumberForAll} тістечок.`);
