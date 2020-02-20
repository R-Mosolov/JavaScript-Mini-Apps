import React from "react";
import { data } from "./data";

class SimpleComponent extends React.Component {
    render() {
        function markContrastValues(item, maxValue, minValue) {
            const max = maxValue;
            const min = minValue;

            if (item === max) {
                return <tr className="d-flex justify-content-center bg-success">{item}</tr>;
            }
            else if (item === min) {
                return <tr className="d-flex justify-content-center bg-danger">{item}</tr>;
            }

            return <tr className="d-flex justify-content-center">{item}</tr>;
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
            <div className="mt-3 d-flex justify-content-center">
                <table className="table w-50 table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"><span className="d-flex justify-content-center">Медиана</span></th>
                            <th scope="col"><span className="d-flex justify-content-center">Мода</span></th>
                            <th scope="col"><span className="d-flex justify-content-center">Размер выборки</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            {renderMedian}
                        </td>
                        <td>
                            {renderMode}
                        </td>
                        <td>
                            {renderSummary}
                        </td>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SimpleComponent;
