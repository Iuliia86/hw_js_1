const wallLength = parseFloat(prompt("Введіть довжину стіни, м", "4.7"));
const wallHeight = parseFloat(prompt("Введіть висоту стіни, м", "2.7"));
const windowLength = parseFloat(prompt("Введіть довжину вікна, м", "1.5"));
const windowHeight = parseFloat(prompt("Введіть висоту вікна, м", "1.9"));
const area = Math.ceil(
  wallLength * wallHeight - 2 * windowLength * windowHeight
);
document.write(
  `Для поклейки стіни з заданими розмірами користувачу потрібно купити ${area} м<sup>2</sup> шпалер.`
);
