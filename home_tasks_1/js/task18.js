const tramTicketPrice = parseFloat(
  prompt("Введіть вартість квитка на трамвай, грн", "5")
);
const trainTicketPrice = parseFloat(
  prompt("Введіть вартість квитка на потяг, грн", "8")
);
const taxiTicketPrice = parseFloat(
  prompt("Введіть вартість квитка на маршрутне таксі, грн", "10")
);
const busTicketPrice = parseFloat(
  prompt("Введіть вартість квитка на автобус, грн", "7")
);
const wayOnTrams = tramTicketPrice * 3;
const wayOnTrainAndTaxi = trainTicketPrice + taxiTicketPrice;
const wayOnBuses = busTicketPrice * 2;
document.write(
  `Можливі витрати студента: 
    <ul>
      <li>трамвай з 2 пересадками - ${wayOnTrams} грн,</li>
      <li>потяг і маршрутне таксі - ${wayOnTrainAndTaxi} грн,</li>
      <li>автобус з 1 пересадкою - ${wayOnBuses} грн.</li>
    </ul>
    `
);
