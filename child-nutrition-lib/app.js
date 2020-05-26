'use strict';

// Initializing the library class
const DosageCalculator = require('./lib/src/child-nutrition-calc');

// Testing class workability
console.log(
    'Формула Зайцевой: ' +
     DosageCalculator.useZaytseva(3000, 1)
);
console.log(
    'Формула Финкельштейна в модификации Тура: '+
     DosageCalculator.useFinkelstein(3000, 1)
);
console.log(
    'Объёмный метод (по Гейбнер-Черни): ' +
     DosageCalculator.useGeibnerCherni(3000, 55)
);
console.log(
    'Калорийный способ (по Маслову): ' +
     DosageCalculator.useMaslov(3000, 55)
);
console.log(
    'Разовая дозировка: '+
     DosageCalculator.useCalorage(3000, 1)
);
console.log(
     DosageCalculator.useOneTime(3000, 1)
);

