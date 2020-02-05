import React from "react";
import "../bootstrap/css/bootstrap.min.css";

import SimpleComponent from "./simple-component";
import Timer from "./timer";
import Todo from "./todo";

export default function App() {
    return (
        <div className="App container">
            <h1 className="mt-5 text-center">Демонстрация работы React</h1>
            <SimpleComponent name="Роман" />
            <Timer />
            <Todo />
        </div>
    );
}
