import React from 'react';

import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo =>
                    <Todo text={todo.text} completed={todo.completed} markTodoCompleted={this.props.markTodoCompleted} />
                )}
            </div>
        );
    };
};
