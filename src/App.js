import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {todos: []}
  };
  
  addTodo = todoText => {
    if (!this.state.todos.find(todo => todo.text === todoText))
      this.setState({todos: [...this.state.todos, {text: todoText, completed: false}]});
  };

  markTodoCompleted = todoText => {
    let todosCopy = [...this.state.todos];
    let i = todosCopy.findIndex(todo => todo.text === todoText);

    todosCopy[i].completed = !todosCopy[i].completed;
    this.setState({todos: [...todosCopy]});
  };

  removeCompleted = () => {
    this.setState({todos: [...this.state.todos].filter(todo => !todo.completed)});
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} markTodoCompleted={this.markTodoCompleted} />
        <TodoForm addTodo={this.addTodo} />
        <button type="button" onClick={this.removeCompleted}>Remove Completed</button>
      </div>
    );
  }
}

export default App;
