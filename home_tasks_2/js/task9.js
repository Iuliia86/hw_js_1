const secondsNumber = parseInt(prompt("Введіть кількість секунд", "35214"));
const hoursNumber = Math.floor(secondsNumber / 3600);
const minutesNumber = Math.floor((secondsNumber % 3600) / 60);
document.write(
  `До цього моменту пройшло ${hoursNumber} повних годин і ${minutesNumber} повних хвилин.`
);
