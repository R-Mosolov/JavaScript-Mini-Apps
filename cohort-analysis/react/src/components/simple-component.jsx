import React from "react";
import { data } from "./data";

class SimpleComponent extends React.Component {
    render() {
        function markContrastMedian(item) {
            const max = Math.max(...data.median);
            const min = Math.min(...data.median);

            if (item === max) {
                return <li className="list-unstyled bg-success">{item}</li>;
            } else if (item === min) {
                return <li className="list-unstyled bg-danger">{item}</li>;
            }
            return <li className="list-unstyled bg-light">{item}</li>;
        }
        function markContrastMode(item) {
            const max = Math.max(...data.mode);
            const min = Math.min(...data.mode);

            if (item === max) {
                return <li className="list-unstyled bg-success">{item}</li>;
            } else if (item === min) {
                return <li className="list-unstyled bg-danger">{item}</li>;
            }
            return <li className="list-unstyled bg-light">{item}</li>;
        }
        function markContrastSummary(item) {
            const max = Math.max(...data.summary);
            const min = Math.min(...data.summary);

            if (item === max) {
                return <li className="list-unstyled bg-success">{item}</li>;
            } else if (item === min) {
                return <li className="list-unstyled bg-danger">{item}</li>;
            }
            return <li className="list-unstyled bg-light">{item}</li>;
        }

        const renderMedian = data.median.map(itemValue => {
            return markContrastMedian(itemValue);
        });
        const renderMode = data.mode.map(itemValue => {
            return markContrastMode(itemValue);
        });
        const renderSummary = data.summary.map(itemValue => {
            return markContrastSummary(itemValue);
        });

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
