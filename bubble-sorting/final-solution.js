// define original data
let mainArr = [102, 100, 16, 23, 35, 9, 1, 4, 7, 5];
let additionalArr = [];

// show start values of the array
console.log(mainArr);

// run the function
bubbleSorting();

// generate a recursion
function bubbleSorting() {
    for (let n = 0; n < mainArr.length; n++) {
        for (let i = 0; i < mainArr.length; i++) {
            if (mainArr[i] > mainArr[i + 1]) {
                additionalArr = [];
                additionalArr.push(mainArr[i], mainArr[i + 1]);

                mainArr[i + 1] = additionalArr[0];
                mainArr[i] = additionalArr[1];
            }
        }
    }
    console.log(mainArr);
}
