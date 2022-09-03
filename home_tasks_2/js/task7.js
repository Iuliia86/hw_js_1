const number = parseFloat(
  prompt("Введіть дійсне число (принаймні 3 знаки після .)", "12.35784")
);
const integerPartOfNumber = Math.trunc(number);
const fractionalPartOfNumber = number - integerPartOfNumber;
document.write(
  `Надане число: ${number}. Відповідно ціла частина даного числа становить ${integerPartOfNumber}, а дробова ${fractionalPartOfNumber.toFixed(
    5
  )}.`
);
