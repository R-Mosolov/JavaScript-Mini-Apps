import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        setInterval(() =>
            this.tick(), 1000
        );
    }

    render() {
        return (
            <div className="mt-4 border rounded">
                <h3 className="mt-4 text-center">2. Компонент с состоянием (таймер)</h3>
                <p className="mb-4 text-center">Секундомер пребывания: {this.state.seconds}</p>
            </div>
        );
    }
}

export default Timer;
