const symbol = prompt(
  "Введіть символ для кодування (англійська мова верхній регістр)",
  "D"
);
const shift = parseInt(prompt("Введіть зміщення (кількість символів)", "7"));
const code = symbol.charCodeAt(0);
const newCode = ((code - 65 + shift) % 26) + 65;
const newSymbol = String.fromCharCode(newCode);
document.write(
  `Старий символ: ${symbol}, новий символ (закодований): ${newSymbol}`
);
