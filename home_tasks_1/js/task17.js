const applesWeight = parseFloat(prompt("Введіть вагу яблук, кг", "0"));
const applesPrice = parseFloat(prompt("Введіть вартість 1 кг яблук", "0"));
const chocolateNumber = parseInt(prompt("Введіть кількість шоколаду, шт", "0"));
const chocolatePrice = parseFloat(
  prompt("Введіть вартість шоколаду за шт", "0")
);
const totalPriceForApples = applesWeight * applesPrice;
const totalPriceForChocolate = chocolateNumber * chocolatePrice;
const totalPrice = totalPriceForApples + totalPriceForChocolate;
document.write(
  `<table>
      <thead>
        <tr>
          <td>Назва</td>
          <td>К-ть/вага</td>
          <td>Ціна</td>
          <td>Вартість</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Яблука</td>
          <td>${applesWeight}</td>
          <td>${applesPrice}</td>
          <td>${totalPriceForApples}</td>
        </tr>
        <tr>
          <td>Шоколад</td>
          <td>${chocolateNumber}</td>
          <td>${chocolatePrice}</td>
          <td>${totalPriceForChocolate}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Разом:</td>
          <td>${totalPrice}</td>
        </tr>
      </tfoot>
    </table>`
);
