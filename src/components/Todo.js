import React from 'react';

export default class Todo extends React.Component {
    handleChange = evt => {
        this.props.markTodoCompleted(this.props.text);
    };
    
    render() {
        return (
            <div>
                <span>{this.props.text}</span>
                <input type="checkbox" value={this.props.completed} onChange={this.handleChange} />
            </div>
        );
    };
};
