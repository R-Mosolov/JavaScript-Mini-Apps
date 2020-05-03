var MongoClient = require('mongodb').MongoClient;

// MAIN FUNCTIONS
module.exports.testAnswersCreate = function(req, res) {
    MongoClient
        .connect("mongodb://localhost:27017", (err, client) => {
            if (err) throw err;

            const db =  client.db("no-conflict");

            db.collection("test-answers")
                .find()
                .exec((item) => {
                    item.push({
                        name: req.body.name
                    });
                    item.save(function (err, item) {
                        if (err) {
                            sendResponse(res, 400, err);
                        } else {
                            sendResponse(res, 201, item);
                        }
                    });
                });
        });
};

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

// ADDITIONAL FUNCTION
var sendResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
