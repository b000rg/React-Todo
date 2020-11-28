import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {todoText: ''};
    };

    handleChange = evt => {
        this.setState({...this.state, [evt.target.name]: evt.target.value});
    };

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.todoText) this.props.addTodo(this.state.todoText);
        this.setState({todoText: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>New Todo</h3>
                <input type="text" name="todoText" value={this.state.todoText} placeholder="create todo app" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    };
};
