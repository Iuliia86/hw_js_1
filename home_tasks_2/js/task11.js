const coinsDenomination = parseInt(
  prompt("Введіть номінал монет (2коп, 5коп, 25коп, 50 коп)", "5")
);
const coinsNumber = parseInt(
  prompt("Введіть кількість монет вказаного номіналу", "42")
);
const sum = coinsDenomination * coinsNumber;
const hryvniasNumber = Math.floor(sum / 100);
const penniesNumber = sum % 100;
document.write(
  `${coinsNumber} монет номіналом ${coinsDenomination} коп це: ${hryvniasNumber} грн. ${penniesNumber} коп.`
);
