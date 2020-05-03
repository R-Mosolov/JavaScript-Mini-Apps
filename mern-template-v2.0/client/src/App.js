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
      </div>
    );
  }
}

export default App;
