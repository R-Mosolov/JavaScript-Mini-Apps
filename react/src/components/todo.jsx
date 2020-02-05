import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="mt-4 border rounded">
                <h3 className="mt-4 text-center">3. Список дел</h3>
                <TodoList items={this.state.items} />
                <form className="d-flex justify-content-center" onSubmit={this.handleSubmit}>
                    <div className="d-flex flex-column justify-content-center">
                        <label htmlFor="new-todo">Что нужно сделать?</label>
                        <input
                            className="new-todo mt-1"
                            placeholder="Введите действие"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                        <button className="mt-3 mb-4 btn btn-success">
                            Добавить действие №{this.state.items.length + 1}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState({
            items: this.state.items.concat(newItem),
            text: ""
        });
    }
}

class TodoList extends React.Component {
    render() {
        return(
            <ul className="d-flex flex-column justify-content-center">
                {this.props.items.map(item => (
                    <li className="mt-3 text-center" key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        )
    }
}

export default Todo;
