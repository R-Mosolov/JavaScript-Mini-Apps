var mongoose = require('mongoose');

var testAnswersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    path: {
        type: String,
        required: false
    },
});

mongoose.model('TestAnswersSchema', testAnswersSchema);
