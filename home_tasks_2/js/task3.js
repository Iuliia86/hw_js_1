const bananasWeight = parseFloat(prompt("Введіть вагу бананів", "1.5"));
const bananasPrice = parseFloat(prompt("Введіть ціну бананів", "40.6"));
const milkNumber = parseInt(prompt("Введіть кількість упаковок молока", "2"));
const milkPrice = parseFloat(prompt("Введіть ціну упаковки молока", "30.9"));
const bananasTotalPrice = bananasWeight * bananasPrice;
const milkTotalPrice = milkNumber * milkPrice;
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
          <td>Банани</td>
          <td>${bananasWeight}</td>
          <td>${bananasPrice}</td>
          <td>${bananasTotalPrice.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Молоко</td>
          <td>${milkNumber}</td>
          <td>${milkPrice}</td>
          <td>${milkTotalPrice.toFixed(2)}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Разом:</td>
          <td>${(bananasTotalPrice + milkTotalPrice).toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>`
);
