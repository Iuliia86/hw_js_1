const tomatoWeight = parseFloat(prompt("Введіть вагу помідорів, кг", "0"));
const tomatoPrice = parseFloat(prompt("Введіть вартість 1 кг помідорів", "0"));
const totalPrice = tomatoWeight * tomatoPrice;
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
          <td>Помідори</td>
          <td>${tomatoWeight}</td>
          <td>${tomatoPrice}</td>
          <td>${totalPrice.toFixed(2)}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Разом:</td>
          <td>${totalPrice.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>`
);
