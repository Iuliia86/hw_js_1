const fishNumber = parseInt(prompt("Введіть кількість зловлених риб", "19"));
const fishWeight = parseInt(prompt("Введіть вагу однїєї риби, г", "720"));
const totalWeightKg = (fishNumber * fishWeight) / 1000;
document.write(`Загальна вага спійманої риби ${totalWeightKg} кг.`);
