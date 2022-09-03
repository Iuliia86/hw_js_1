const coinsNumber = parseInt(
  prompt("Введіть кількість монет номіналом 1 коп", "245")
);
const hryvniasNumber = Math.floor(coinsNumber / 100);
const penniesNumber = coinsNumber % 100;
document.write(
  `${coinsNumber} монет номіналом 1 коп це: ${hryvniasNumber} грн. ${penniesNumber} коп.`
);
