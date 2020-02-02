const OBJECTS_ARRAY = [
    {
        name: 'Alpha',
        rating: 4
    },
    {
        name: 'Beta',
        rating: 5
    },
    {
        name: 'Gamma',
        rating: 3
    }
];


// MAIN SOLUTIONS

// Testing of working
console.log(OBJECTS_ARRAY);

// Sorting by name
console.log(sortByNameDownward(OBJECTS_ARRAY));
console.log(sortByNameUpward(OBJECTS_ARRAY));

// Sorting by rating
console.log(OBJECTS_ARRAY.sort(compareDataUpward));
console.log(OBJECTS_ARRAY.sort(compareDataDownward));


// ADDITIONAL FUNCTIONS
function sortByNameDownward(data) {
    return data.sort();
}

function sortByNameUpward(data) {
    return data.reverse();
}

function compareDataUpward(a, b) {
    const ratingA = a.rating;
    const ratingB = b.rating;
    let counter = 0;

    ratingA > ratingB ? counter = 1 : counter = -1;
    return counter;
}

function compareDataDownward(a, b) {
    const ratingA = a.rating;
    const ratingB = b.rating;
    let counter = 0;

    ratingA > ratingB ? counter = -1 : counter = 1;
    return counter;
}
