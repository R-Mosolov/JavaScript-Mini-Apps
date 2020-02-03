const fs = require('fs');

fs.writeFile('generated-text/text.csv', 'word,value', function(err) {
    if (err) return console.error(err);
    fs.readFile('generated-text/text.csv','utf-8', function(data, err) {
    if (err) return console.error(err);

    console.log(data); });
});
