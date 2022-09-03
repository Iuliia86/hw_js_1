const streetLength = parseFloat(prompt("Введіть довжину вулиці, км", "2.3"));
const distanceBetweenLights = parseFloat(
  prompt("Введіть відстань між ліхтарями, м", "25")
);
const numberOfLightBulbs = Math.ceil(
  (streetLength * 1000) / distanceBetweenLights
);
document.write(
  `Для освітлення вулиці довжиною ${streetLength} км ліхтарями, розміщеними на відстані ${distanceBetweenLights} м, потрібно ${numberOfLightBulbs} лампочок.`
);
