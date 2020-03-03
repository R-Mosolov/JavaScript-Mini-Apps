function calculateDosage(weight, birthDay, isNormalBirth, isBeforeTenDays, isZaytsevaFormula,
                         isGeibnerCherniFormula, isCalorage, dosage) {
    if (isNormalBirth) {
        if (isBeforeTenDays) {
            if (isZaytsevaFormula) {
                dosage = Math.round((weight * 0.02) * birthDay);
            }

            else if (!isZaytsevaFormula) {
                if (weight < 3200) {
                    dosage = Math.round(birthDay * 70);
                }

                if (weight >= 3200) {
                    dosage = Math.round(birthDay * 80);
                }
            }
        }

        else if (!isBeforeTenDays) {
            if (isGeibnerCherniFormula) {
                if (birthDay <= 60) {
                    dosage = Math.round(weight * 0.2);
                }

                else if (birthDay > 60 && birthDay <= 120) {
                    dosage = Math.round(weight * 0.165);
                }

                else if (birthDay > 120 && birthDay <= 180) {
                    dosage = Math.round(weight * 0.14);

                    if (dosage > 1000) {
                        dosage = 1000;
                    }
                }

                else {
                    dosage = 1000;
                }
            }

            else if (!isGeibnerCherniFormula) {
                if (birthDay <= 90) {
                    dosage = Math.round(weight * 0.12);
                }

                if (birthDay > 90 && birthDay <= 180) {
                    dosage = Math.round(weight * 0.115);
                }

                if (birthDay > 180 && birthDay <= 270) {
                    dosage = Math.round(weight * 0.11);
                }

                if (birthDay > 270 && birthDay <= 366) {
                    dosage = Math.round(weight * 0.1);
                }
            }
        }
    }

    else if (!isNormalBirth) {
        if (isBeforeTenDays) {
            if (isCalorage) {
                if (birthDay === 1) dosage = Math.round(Math.round(weight / 1000) * 27.5);
                if (birthDay === 2) dosage = Math.round(Math.round(weight / 1000) * 40);
                if (birthDay === 3) dosage = Math.round(Math.round(weight / 1000) * 50);
                if (birthDay === 4) dosage = Math.round(Math.round(weight / 1000) * 60);
                if (birthDay === 5) dosage = Math.round(Math.round(weight / 1000) * 70);
                if (birthDay === 6) dosage = Math.round(Math.round(weight / 1000) * 80);
                if (birthDay === 10) dosage = Math.round(Math.round(weight / 1000) * 105);
            }

            else if (!isCalorage) {
                dosage = Math.round(3 * weight * birthDay);
            }
        }

        else if (isBeforeTenDays) {
            console.log('К сожалению, мы не можем Вам ничего порекомендовать.');
        }
    }

    return dosage;
}

module.exports = calculateDosage;
