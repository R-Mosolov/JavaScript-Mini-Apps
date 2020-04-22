'use strict';

// Initializing the library class
const DosageCalculator = require('./lib/src/child-nutrition-calc');
const dosageCalculator = new DosageCalculator();

// Testing class workability
console.log(
    'Формула Зайцевой: ' +
    dosageCalculator.useZaytseva(3000, 1)
);
console.log(
    'Формула Финкельштейна в модификации Тура: '+
    dosageCalculator.useFinkelstein(3000, 1)
);
console.log(
    'Объёмный метод (по Гейбнер-Черни): ' +
    dosageCalculator.useGeibnerCherni(3000, 55)
);
console.log(
    'Калорийный способ (по Маслову): ' +
    dosageCalculator.useMaslov(3000, 55)
);
console.log(
    'Разовая дозировка: '+
    dosageCalculator.useCalorage(3000, 1)
);
console.log(
    dosageCalculator.useOneTime(3000, 1)
);
console.log(
    dosageCalculator.throwRejection()
);
