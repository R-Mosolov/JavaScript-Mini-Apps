import React from "react";
import { data } from "./data";

class SimpleComponent extends React.Component {
    render() {
        function markContrastValues(item, array) {
            if (item === Math.max(array)) {
                return <li className="list-unstyled bg-success">{item}</li>;
            } else if (item === Math.min(array)) {
                return <li className="list-unstyled bg-danger">{item}</li>;
            } else {
                return <li className="list-unstyled bg-light">{item}</li>;
            }
        }

        const medianItems = data.median.map(function(itemValue) {
            return markContrastValues(itemValue, ...data.median);
        });
        const modeItems = data.mode.map((itemValue) => {
            return markContrastValues(itemValue, ...data.mode);
        });
        const summaryItems = data.summary.map((itemValue) => {
            return markContrastValues(itemValue, ...data.summary);
        });

        return (
            <div className="mt-5 border rounded">
                <h1 className="mt-4 text-center">1. Простой компонент</h1>
                <ul className="d-flex justify-content-around">
                    <div>{medianItems}</div>
                    <div>{modeItems}</div>
                    <div>{summaryItems}</div>
                </ul>
            </div>
        );
    }
}

export default SimpleComponent;
