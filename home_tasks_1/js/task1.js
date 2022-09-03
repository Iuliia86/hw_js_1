const sideA = parseFloat(prompt("Введіть першу сторону прямокутника, см", "0"));
const sideB = parseFloat(prompt("Введіть другу сторону прямокутника, см", "0"));
const rectangleArea = sideA * sideB;
const rectanglePerimeter = (sideA + sideB) * 2;
document.write(
  `Площа прямокутника = ${rectangleArea} см<sup>2</sup>. <br/> Периметер прямокутника = ${rectanglePerimeter} см.`
);
