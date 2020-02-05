import React from "react";

class SimpleComponent extends React.Component {
    render() {
        return (
            <div className="mt-5 border rounded">
                <h3 className="mt-4 text-center">1. Простой компонент</h3>
                <p className="mb-4 text-center">Привет, {this.props.name}</p>
            </div>
        );
    }
}

export default SimpleComponent;
