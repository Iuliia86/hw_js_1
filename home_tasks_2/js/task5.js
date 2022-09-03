const accruedSalary = parseFloat(
  prompt("Введіть нараховану заробітну плату за сумісництвом", "6500")
);
const receivedSalary = accruedSalary * 0.8;
document.write(
  `Сумісник за виконану роботу одержить заробітну платню у сумі ${receivedSalary} грн.`
);
