// Initial data
const data = {
    median: [72,74,70,68,74,70,74,75,74,74,72,68,74,72.5,71,71,73,72.5,76,73,74,68,71,75,73,66,71,72],
    mode: [73,80,75,64,86,71,77,76,74,75,70,70,76,86,75,70,71,77,85,73,78,72,76,76,62,66,71,70],
    summary: [258,649,710,34,37,30,186,1247,722,473,1140,2471,587,57,461,2730,262,144,283,5331,1403,63,1588,417,67,92,19,1650]
};


// Main calculating
const firstMedianMax = Math.max(...data.median);
const firstMedianMin = Math.min(...data.median);
const firstModeMax = Math.max(...data.mode);
const firstModeMin = Math.min(...data.mode);

const secondMedianMax = Math.max(...data.median - firstMedianMax);
const secondMedianMin = Math.min(...data.median);
const secondModeMax = Math.max(...data.mode);
const secondModeMin = Math.min(...data.mode);

console.log('Первый максимум медианы: ' + firstMedianMax);
console.log('Первый минимум медианы: ' + firstMedianMin);
console.log('Первый максимум моды: ' + firstModeMax);
console.log('Первый минимум моды: ' + firstModeMin);

console.log('Второй максимум медианы: ' + secondMedianMax);




// Minimum and maximum stylization
