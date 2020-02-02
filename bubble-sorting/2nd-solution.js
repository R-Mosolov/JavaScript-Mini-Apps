let mainArr = [9, 1, 4, 7, 5];
let additionalArr = [];

console.log(mainArr);


for (let i = 0; i < mainArr.length; i++) {
    if (mainArr[i] > mainArr[i + 1]) {
        additionalArr = [];
        additionalArr.push(mainArr[i], mainArr[i + 1]);

        mainArr[i + 1] = additionalArr[0];
        mainArr[i] = additionalArr[1];

        console.log(mainArr, additionalArr);
    }
}
