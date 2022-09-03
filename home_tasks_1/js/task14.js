const coordAx = parseInt(prompt("Введіть координату (х) точки А", "2"));
const coordAy = parseInt(prompt("Введіть координату (y) точки А", "7"));
const coordBx = parseInt(prompt("Введіть координату (х) точки B", "-3"));
const coordBy = parseInt(prompt("Введіть координату (y) точки B", "0"));
const coordCx = parseInt(prompt("Введіть координату (х) точки C", "3"));
const coordCy = parseInt(prompt("Введіть координату (y) точки C", "1"));
const coordDx = parseInt(prompt("Введіть координату (х) точки D", "5"));
const coordDy = parseInt(prompt("Введіть координату (y) точки D", "4"));
const totalDistance =
  Math.sqrt(Math.pow(coordBx - coordAx, 2) + Math.pow(coordBy - coordAy, 2)) +
  Math.sqrt(Math.pow(coordCx - coordBx, 2) + Math.pow(coordCy - coordBy, 2)) +
  Math.sqrt(Math.pow(coordDx - coordCx, 2) + Math.pow(coordDy - coordCy, 2));
document.write(
  `Сумарна відстань, яку пролетів дрон, складає ${totalDistance.toFixed(2)} од.`
);
