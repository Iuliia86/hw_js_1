const symbol = prompt(
  "Введіть символ для кодування (англійська мова нижній регістр)",
  "a"
);
const shift = parseInt(prompt("Введіть зміщення (кількість символів)", "5"));
const code = symbol.charCodeAt(0);
const newCode = ((code - 97 + shift) % 26) + 97;
const newSymbol = String.fromCharCode(newCode);
document.write(
  `Старий символ: ${symbol}, новий символ (закодований): ${newSymbol}`
);
