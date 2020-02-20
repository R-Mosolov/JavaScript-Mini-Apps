import React from "react";
import "../bootstrap/css/bootstrap.min.css";

import SimpleComponent from "./simple-component";

export default function App() {
    return (
        <div className="App container">
            <h1 className="mt-5 text-center">Таблица значений</h1>
            <SimpleComponent />
        </div>
    );
}
