const nailLength = parseFloat(prompt("Введіть довжину цвяха (L), см", "7"));
const nailDeeping = parseFloat(
  prompt("Введіть заглиблення цвяху за один удар (K), мм", "3")
);
const strokesNumber = Math.ceil((nailLength * 10) / nailDeeping);
document.write(`Цвях повністю заб'ють в дошку за ${strokesNumber} ударів.`);
