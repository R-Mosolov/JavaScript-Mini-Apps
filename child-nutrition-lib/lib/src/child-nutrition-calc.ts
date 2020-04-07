'use strict';

module.exports = class DosageCalculator {

    // The method calculates a recommended dosage by formula Dr. Zaytseva
    useZaytseva (weight: number, birthDay: number): string {
        return 'Формула Зайцевой: ' + Math.round((weight * 0.02) * birthDay);
    }

    // The method calculates a recommended dosage by formula Dr. Finkelstein
    useFinkelstein (weight: number, birthDay: number): string {
        const formulaName = 'Формула Финкельштейна в модификации Тура: ';
        if (weight < 3200) {
            return formulaName + Math.round(birthDay * 70);
        }
        if (weight >= 3200) {
            return formulaName + Math.round(birthDay * 80);
        }
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }

    // The method calculates a recommended dosage by formula Dr. Geibner and Dr. Cherni
    useGeibnerCherni (weight: number, birthDay: number): string {
        const formulaName = 'Объёмный метод (по Гейбнер-Черни): ';
        if (birthDay <= 60) {
            return formulaName + Math.round(weight * 0.2);
        }
        else if (birthDay > 60 && birthDay <= 120) {
            return formulaName + Math.round(weight * 0.165);
        }
        else if (birthDay > 120 && birthDay <= 180) {
            return formulaName + Math.round(weight * 0.14);
        }
        else {
            return formulaName + 1000;
        }
    }

    // The method calculates a recommended dosage by formula Dr. Maslov
    useMaslov (weight: number, birthDay: number): string {
        const formulaName = 'Калорийный способ (по Маслову): ';
        if (birthDay <= 90) {
            return formulaName + Math.round(weight * 0.12);
        }
        if (birthDay > 90 && birthDay <= 180) {
            return formulaName + Math.round(weight * 0.115);
        }
        if (birthDay > 180 && birthDay <= 270) {
            return formulaName + Math.round(weight * 0.11);
        }
        if (birthDay > 270 && birthDay <= 366) {
            return formulaName + Math.round(weight * 0.1);
        }
        else if (birthDay > 366) {
            return 'К сожалению, мы не можем Вам ничего порекомендовать.';
        }
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }

    // The method calculates a recommended dosage by special, calorage formula
    useCalorage (weight: number, birthDay: number): string {
        const formulaName = 'По калоражу: ';
        if (birthDay === 1) return formulaName + Math.round(Math.round(weight / 1000) * 27.5);
        if (birthDay === 2) return formulaName + Math.round(Math.round(weight / 1000) * 40);
        if (birthDay === 3) return formulaName + Math.round(Math.round(weight / 1000) * 50);
        if (birthDay === 4) return formulaName + Math.round(Math.round(weight / 1000) * 60);
        if (birthDay === 5) return formulaName + Math.round(Math.round(weight / 1000) * 70);
        if (birthDay === 6) return formulaName + Math.round(Math.round(weight / 1000) * 80);
        if (birthDay === 10) return formulaName + Math.round(Math.round(weight / 1000) * 105);
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }

    // The method calculates a recommended, one time dosage by special formula
    useOneTime (weight: number, birthDay: number): string {
        const formulaName = 'Разовая дозировка: ';
        return formulaName + Math.round(3 * weight * birthDay);
    }

    // The method returns an error and rejection about following work
    throwRejection () {
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }
};
