const seriesLength = parseFloat(
  prompt("Введіть тривалість однієї серії, хв", "45")
);
const seriesNumber = parseInt(prompt("Введіть кількість серій", "13"));
const totalHoursForWatching = Math.floor((seriesLength * seriesNumber) / 60);
const totalMinutesForWatching = (seriesLength * seriesNumber) % 60;
document.write(
  `Для перегляду ${seriesNumber} серій потрібно ${totalHoursForWatching}:${totalMinutesForWatching} год.`
);
