const monthRent = parseInt(
  prompt("Введіть арендну плату за квартиру за місяць, грн", "2000")
);
const yearRent = monthRent * 12;
const twoYearsRent = yearRent * 2;
const tenYearsRent = yearRent * 10;
document.write(
  `Якщо арендна плата за квартиру за місяць становить ${monthRent} грн., то:
    <ul>
      <li>вартість арендної плати за рік становить ${yearRent} грн,</li>
      <li>вартість арендної плати за 2 роки становить ${twoYearsRent} грн,</li>
      <li>вартість арендної плати за 10 років становить ${tenYearsRent} грн.</li>
    </ul>
  `
);
