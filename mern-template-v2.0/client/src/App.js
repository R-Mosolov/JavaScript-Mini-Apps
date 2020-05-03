import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      mongoItem: "",
    };
  }

  callAPI() {
    fetch("http://localhost:5000/api/test-answers")
      .then((res) => res.text())
      .then((res) =>
        this.setState({
          apiResponse: res,
        })
      )
      .catch((err) => err);
  }

  // postDataToMongoDB() {
  //     var express = require('express');
  //     var router = express.Router();
  //     var MongoClient = require('mongodb').MongoClient;
  //
  //     router.post('/test-answers/:answerID', function(req, res) {
  //         MongoClient
  //             .connect("mongodb://localhost:27017", (err, client) => {
  //                 if (err) throw err;
  //
  //                 const db =  client.db("no-conflict");
  //
  //                 db.collection("test-answers")
  //                     .create({
  //                         name: "The item from React.js"
  //                     }, function (err, item) {
  //                         if (err) {
  //                             res.send(err);
  //                         } else {
  //                             res.send(item);
  //                         }
  //                     });
  //             })});
  //
  // }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from client!</h1>
        <p>
          API Response: <b>{this.state.apiResponse}</b>
        </p>
        <p>
          Mongo Item: <b>{this.state.mongoItem}</b>
        </p>
        <form action="/api/text-answers" method="POST" role="form">
            <input
              type="text"
              name="name"
            />
            <button type="submit">
              Отправить в БД
            </button>
        </form>
      </div>
    );
  }
}

export default App;
