var MongoClient = require('mongodb').MongoClient;

// MAIN FUNCTIONS
module.exports.testAnswersRead = function(req, res) {
    MongoClient
        .connect("mongodb://localhost:27017", (err, client) => {
            if (err) throw err;

            const db =  client.db("no-conflict");

            db.collection("test-answers")
                .findOne({ "name": "Test" }, (err, result) => {
                    try {
                        res.send(result.name);
                    } catch (err) {
                        throw new Error(err);
                    }
                });
        });
};

module.exports.testAnswersReadOne = function(req, res) {
    MongoClient
        .connect("mongodb://localhost:27017", (err, client) => {
            if (err) throw err;

            const db =  client.db("no-conflict");

            db.collection("test-answers")
                .findOne({ path: req.body.path }, (err, result) => {
                    try {
                        res.send(JSON.stringify(result));
                    } catch (err) {
                        throw new Error(err);
                    }
                });
})};
