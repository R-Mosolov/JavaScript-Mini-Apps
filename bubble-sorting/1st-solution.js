let mainArr = [9, 1, 4, 7, 5];
let additionalArr = [];

console.log(mainArr);


if (mainArr[0] > mainArr[1]) {
    additionalArr.push(mainArr[0], mainArr[1]);

    mainArr[1] = additionalArr[0];
    mainArr[0] = additionalArr[1];

    console.log(mainArr, additionalArr);
}

if (mainArr[1] > mainArr[2]) {
    additionalArr = [];
    additionalArr.push(mainArr[1], mainArr[2]);

    mainArr[2] = additionalArr[0];
    mainArr[1] = additionalArr[1];

    console.log(mainArr, additionalArr);
}

if (mainArr[1] > mainArr[2]) {
    additionalArr = [];
    additionalArr.push(mainArr[1], mainArr[2]);

    mainArr[2] = additionalArr[0];
    mainArr[1] = additionalArr[1];

    console.log(mainArr, additionalArr);
}

if (mainArr[2] > mainArr[3]) {
    additionalArr = [];
    additionalArr.push(mainArr[2], mainArr[3]);

    mainArr[3] = additionalArr[0];
    mainArr[2] = additionalArr[1];

    console.log(mainArr, additionalArr);
}

if (mainArr[3] > mainArr[4]) {
    additionalArr = [];
    additionalArr.push(mainArr[3], mainArr[4]);

    mainArr[4] = additionalArr[0];
    mainArr[3] = additionalArr[1];

    console.log(mainArr, additionalArr);
}
