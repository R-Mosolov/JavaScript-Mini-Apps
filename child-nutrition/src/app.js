function calculateDosage() {
    const weight = document.getElementById('weight').value;
    const birthDay = document.getElementById('birth-day').value;
    const earlyBirth = document.getElementById('early-birth').cheched;
    const normalBirth = document.getElementById('normal-birth').cheched;

    let isNormalBirth, isBeforeTenDays;
    let isZaytseva, isFinkelstein, isGeibnerCherni, isMaslov, isCalorage, isOneTime;
    let dosage = [];


    // if (earlyBirth) {
    //     isNormalBirth = false;
    // }
    //
    // else if (!earlyBirth) {
    //     isNormalBirth = true;
    // }
    //
    // if (birthDay <= 10) {
    //     isBeforeTenDays = true;
    //
    //     if (isNormalBirth) {
    //         isZaytseva = true;
    //         isFinkelstein = true;
    //     }
    //
    //     else if (!isNormalBirth) {
    //         isCalorage = true;
    //         isOneTime = true;
    //     }
    // }
    //
    // if (birthDay > 10) {
    //     isBeforeTenDays = false;
    //
    //     if (!earlyBirth) {
    //         isGeibnerCherni = true;
    //         isMaslov = true;
    //     }
    // }

    earlyBirth ? isNormalBirth = false : isNormalBirth = true;
    if (birthDay <= 10) {
        isBeforeTenDays = true;
        isNormalBirth ? (isZaytseva = true) && (isFinkelstein = true) : (isCalorage = true) && (isOneTime = true);
    } else if (birthDay > 10) {
        isBeforeTenDays = false;
        if (!earlyBirth) (isGeibnerCherni = true) && (isMaslov = true);
    }


    if (isNormalBirth) {
        if (isBeforeTenDays) {
            if (isZaytseva) {
                dosage.push('Формула Зайцевой: ' + Math.round((weight * 0.02) * birthDay));
            }

            if (isFinkelstein) {
                const formulaName = 'Формула Финкельштейна в модификации Тура: ';

                if (weight < 3200) {
                    dosage.push(formulaName + Math.round(birthDay * 70));
                }

                if (weight >= 3200) {
                    dosage.push(formulaName + Math.round(birthDay * 80));
                }
            }
        }

        else if (!isBeforeTenDays) {
            if (isGeibnerCherni) {
                const formulaName = 'Объёмный метод (по Гейбнер-Черни): ';

                if (birthDay <= 60) {
                    dosage.push(formulaName + Math.round(weight * 0.2));
                }

                else if (birthDay > 60 && birthDay <= 120) {
                    dosage.push(formulaName + Math.round(weight * 0.165));
                }

                else if (birthDay > 120 && birthDay <= 180) {
                    dosage.push(formulaName + Math.round(weight * 0.14));

                    if (dosage > 1000) {
                        dosage.push(formulaName + 1000);
                    }
                }

                else {
                    dosage.push(formulaName + 1000);
                }
            }

            if (isMaslov) {
                const formulaName = 'Калорийный способ (по Маслову): ';

                if (birthDay <= 90) {
                    dosage.push(formulaName + Math.round(weight * 0.12));
                }

                if (birthDay > 90 && birthDay <= 180) {
                    dosage.push(formulaName + Math.round(weight * 0.115));
                }

                if (birthDay > 180 && birthDay <= 270) {
                    dosage.push(formulaName + Math.round(weight * 0.11));
                }

                if (birthDay > 270 && birthDay <= 366) {
                    dosage.push(formulaName + Math.round(weight * 0.1));
                }

                else if (birthDay > 366) {
                    dosage.push('К сожалению, мы не можем Вам ничего порекомендовать.');
                }
            }
        }
    }

    else if (!isNormalBirth) {
        if (isBeforeTenDays) {
            if (isCalorage) {
                const formulaName = 'По калоражу: ';

                if (birthDay === 1) dosage.push(formulaName + Math.round(Math.round(weight / 1000) * 27.5));
                if (birthDay === 2) dosage.push(formulaName + Math.round(Math.round(weight / 1000) * 40));
                if (birthDay === 3) dosage.push(formulaName + Math.round(Math.round(weight / 1000) * 50));
                if (birthDay === 4) dosage.push(formulaName + Math.round(Math.round(weight / 1000) * 60));
                if (birthDay === 5) dosage.push(formulaName + Math.round(Math.round(weight / 1000) * 70));
                if (birthDay === 6) dosage.push(formulaName + Math.round(Math.round(weight / 1000) * 80));
                if (birthDay === 10) dosage.push(formulaName + Math.round(Math.round(weight / 1000) * 105));
            }

            else if (isOneTime) {
                const formulaName = 'Разовая дозировка: ';

                dosage.push(formulaName + Math.round(3 * weight * birthDay));
            }
        }

        else if (!isBeforeTenDays) {
            dosage.push('К сожалению, мы не можем Вам ничего порекомендовать.');
        }
    }

    else dosage.push('К сожалению, мы не можем Вам ничего порекомендовать.');
    alert(dosage);
}

module.exports = calculateDosage;
