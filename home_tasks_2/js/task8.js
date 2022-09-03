const year = parseInt(prompt("Введіть рік", "1992"));
const century = Math.ceil(year / 100);
document.write(`${year} рік - це ${century} століття.`);
