const weight = 0;
const birthDay = 0;
let dosage = 0;
let error = '';

let isNormalBirth = true;
let isBeforeTenDays = true;
let isZaytsevaFormula = true;
let isGeibnerCherniFormula = true;
let isCalorage = true;

function calculateDosage() {
    if (isNormalBirth) {
        if (isBeforeTenDays) {
            if (isZaytsevaFormula) {
                dosage = (weight * 0.02) * birthDay;
            }

            else if (!isZaytsevaFormula) {
                if (weight <= 3200) {
                    dosage = birthDay * 70;
                }

                if (weight > 3200) {
                    dosage = birthDay * 80;
                }
            }
        }

        else if (!isBeforeTenDays) {
            if (isGeibnerCherniFormula) {
                if (birthDay <= 60) {
                    dosage = weight * 0.2;
                }

                else if (birthDay > 60 && birthDay <= 120) {
                    dosage = weight * 0.165;
                }

                else if (birthDay > 120 && birthDay <= 180) {
                    dosage = weight * 0.14;

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
                    dosage = weight * 120;
                }

                if (birthDay > 90 && birthDay <= 180) {
                    dosage = weight * 115;
                }

                if (birthDay > 180 && birthDay <= 270) {
                    dosage = weight * 110;
                }

                if (birthDay > 270 && birthDay <= 365) {
                    dosage = weight * 100;
                }
            }
        }
    }

    else if (!isNormalBirth) {
        if (isBeforeTenDays) {
            if (isCalorage) {
                if (birthDay === 1) dosage = 27.5;
                if (birthDay === 2) dosage = 40;
                if (birthDay === 3) dosage = 50;
                if (birthDay === 4) dosage = 60;
                if (birthDay === 5) dosage = 70;
                if (birthDay === 6) dosage = 80;
                if (birthDay === 10) dosage = 105;
            }

            else if (!isCalorage) {
                dosage = 3 * weight * birthDay;
            }
        }

        else if (isBeforeTenDays) {
            console.log('К сожалению, мы не можем Вам ничего порекомендовать.');
        }
    }

    return [dosage, error];
}

