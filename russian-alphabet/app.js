const one = ['а', 'й', 'у', 'э'];
const two = ['б', 'к', 'ф', 'ю'];
const three = ['в', 'л', 'х', 'я'];
const four = ['г', 'м', 'ц'];
const five = ['д', 'н', 'ч'];
const six = ['е', 'о', 'ш'];
const seven = ['ё', 'п', 'щ'];
const eight = ['ж', 'р', 'ъ'];
const nine = ['з', 'с', 'ы'];
const zero = ['и', 'т', 'ь'];

function transformWordToSum(word) {
    word = word.toLowerCase();
    let numbersSum = 0;

    for (let letter of word) {
        if (letter === ' ') numbersSum += 0;

        if ((letter === one[0]) || (letter === one[1]) || (letter === one[2]) || (letter === one[3])) numbersSum += 1;
        if ((letter === two[0]) || (letter === two[1]) || (letter === two[2]) || (letter === two[3])) numbersSum += 2;
        if ((letter === three[0]) || (letter === three[1]) || (letter === three[2]) || (letter === three[3])) numbersSum += 3;
        if ((letter === four[0]) || (letter === four[1]) || (letter === four[2])) numbersSum += 4;
        if ((letter === five[0]) || (letter === five[1]) || (letter === five[2])) numbersSum += 5;
        if ((letter === six[0]) || (letter === six[1]) || (letter === six[2])) numbersSum += 6;
        if ((letter === seven[0]) || (letter === seven[1]) || (letter === seven[2])) numbersSum += 7;
        if ((letter === eight[0]) || (letter === eight[1]) || (letter === eight[2])) numbersSum += 8;
        if ((letter === nine[0]) || (letter === nine[1]) || (letter === nine[2])) numbersSum += 9;
        if ((letter === zero[0]) || (letter === zero[1]) || (letter === zero[2])) numbersSum += 0;
    }

    return numbersSum;
}
