'use strict';

module.exports = class DosageCalculator {
    useZaytseva (weight, birthDay) {
        return 'Формула Зайцевой: ' + Math.round((weight * 0.02) * birthDay);
    }

    useFinkelstein (weight, birthDay) {
        const formulaName = 'Формула Финкельштейна в модификации Тура: ';
        if (weight < 3200) {
            return formulaName + Math.round(birthDay * 70);
        }
        if (weight >= 3200) {
            return formulaName + Math.round(birthDay * 80);
        }
    }

    useGeibnerCherni (weight, birthDay) {
        const formulaName = 'Объёмный метод (по Гейбнер-Черни): ';
        if (birthDay <= 60) {
            return formulaName + Math.round(weight * 0.2);
        }
        else if (birthDay > 60 && birthDay <= 120) {
            return formulaName + Math.round(weight * 0.165);
        }
        else if (birthDay > 120 && birthDay <= 180) {
            if (dosage > 1000) {
                return formulaName + 1000;
            }

            return formulaName + Math.round(weight * 0.14);
        }
        else {
            return formulaName + 1000;
        }
    }

    useMaslov (weight, birthDay) {
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
    }

    useCalorage (weight, birthDay) {
        const formulaName = 'По калоражу: ';
        if (birthDay === 1) return formulaName + Math.round(Math.round(weight / 1000) * 27.5);
        if (birthDay === 2) return formulaName + Math.round(Math.round(weight / 1000) * 40);
        if (birthDay === 3) return formulaName + Math.round(Math.round(weight / 1000) * 50);
        if (birthDay === 4) return formulaName + Math.round(Math.round(weight / 1000) * 60);
        if (birthDay === 5) return formulaName + Math.round(Math.round(weight / 1000) * 70);
        if (birthDay === 6) return formulaName + Math.round(Math.round(weight / 1000) * 80);
        if (birthDay === 10) return formulaName + Math.round(Math.round(weight / 1000) * 105);
    }

    useOneTime (weight, birthDay) {
        const formulaName = 'Разовая дозировка: ';
        return formulaName + Math.round(3 * weight * birthDay);
    }

    throwRejection () {
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }
};
