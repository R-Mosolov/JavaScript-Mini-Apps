import React from "react";
import { data } from "./data";

class SimpleComponent extends React.Component {
    render() {
        function markContrastValues(item, maxValue, minValue) {
            const max = maxValue;
            const min = minValue;

            if (item === max) {
                return <li className="list-unstyled bg-success">{item}</li>;
            } else if (item === min) {
                return <li className="list-unstyled bg-danger">{item}</li>;
            }

            return <li className="list-unstyled bg-light">{item}</li>;
        }

        const renderMedian = data.median.map(itemValue => markContrastValues(
                `${itemValue}`, `${Math.max(...data.median)}`, `${Math.min(...data.median)}`)
        );
        const renderMode = data.mode.map(itemValue => markContrastValues(
            `${itemValue}`, `${Math.max(...data.mode)}`, `${Math.min(...data.mode)}`)
        );
        const renderSummary = data.summary.map(itemValue => markContrastValues(
            `${itemValue}`, `${Math.max(...data.summary)}`, `${Math.min(...data.summary)}`)
        );

        return (
            <div className="mt-5 border rounded">
                <h1 className="mt-4 text-center">Таблица значений</h1>
                <ul className="d-flex justify-content-around">
                    <div>{renderMedian}</div>
                    <div>{renderMode}</div>
                    <div>{renderSummary}</div>
                </ul>
            </div>
        );
    }
}

export default SimpleComponent;
